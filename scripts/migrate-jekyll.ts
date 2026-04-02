/**
 * Migration script: Convert Jekyll blog posts to EmDash seed format.
 *
 * Reads all published posts from jekyll/_posts/, parses front matter
 * and markdown content, then outputs EmDash-compatible seed JSON.
 *
 * Usage: npm run migrate
 */

import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

interface JekyllPost {
  title: string;
  date: string;
  author: string;
  categories: string[];
  tags: string[];
  slug: string;
  permalink: string;
  excerpt: string;
  content: string;
}

interface EmDashEntry {
  title: string;
  slug: string;
  date: string;
  status: "published" | "draft";
  excerpt?: string;
  content: PortableTextBlock[];
  categories?: string[];
  tags?: string[];
}

interface PortableTextBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: PortableTextSpan[];
  markDefs?: MarkDef[];
  code?: string;
  language?: string;
  url?: string;
  alt?: string;
  level?: number;
  listItem?: string;
}

interface PortableTextSpan {
  _type: string;
  _key: string;
  text: string;
  marks?: string[];
}

interface MarkDef {
  _type: string;
  _key: string;
  href?: string;
}

let keyCounter = 0;
function generateKey(): string {
  return `k${(keyCounter++).toString(36)}`;
}

/**
 * Convert markdown content to a simplified Portable Text representation.
 * This handles the most common patterns found in the Jekyll posts:
 * paragraphs, headings, code blocks, links, bold, italic, lists, and images.
 */
function markdownToPortableText(markdown: string): PortableTextBlock[] {
  const blocks: PortableTextBlock[] = [];
  const lines = markdown.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Code blocks (fenced)
    if (line.trim().startsWith("```")) {
      const language = line.trim().slice(3).trim() || "text";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({
        _type: "code",
        _key: generateKey(),
        code: codeLines.join("\n"),
        language,
      });
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: `h${level}`,
        children: parseInlineContent(headingMatch[2]),
        markDefs: extractMarkDefs(headingMatch[2]),
      });
      i++;
      continue;
    }

    // Unordered list items
    if (line.match(/^[-*]\s+/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        listItems.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      for (const item of listItems) {
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "normal",
          listItem: "bullet",
          children: parseInlineContent(item),
          markDefs: extractMarkDefs(item),
        });
      }
      continue;
    }

    // Ordered list items
    if (line.match(/^\d+\.\s+/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        listItems.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      for (const item of listItems) {
        blocks.push({
          _type: "block",
          _key: generateKey(),
          style: "normal",
          listItem: "number",
          children: parseInlineContent(item),
          markDefs: extractMarkDefs(item),
        });
      }
      continue;
    }

    // HTML blocks (images, divs, iframes) - preserve as HTML block
    if (line.trim().startsWith("<") && !line.trim().startsWith("<a ")) {
      const htmlLines: string[] = [line];
      // Collect multi-line HTML blocks
      if (
        line.includes("<div") ||
        line.includes("<iframe") ||
        line.includes("<table")
      ) {
        i++;
        while (i < lines.length && lines[i].trim() !== "") {
          htmlLines.push(lines[i]);
          i++;
          // Check if we closed the tag
          const joined = htmlLines.join("\n");
          if (
            (joined.includes("</div>") && line.includes("<div")) ||
            (joined.includes("</iframe>") && line.includes("<iframe")) ||
            (joined.includes("</table>") && line.includes("<table"))
          ) {
            break;
          }
        }
      } else {
        i++;
      }

      const htmlContent = htmlLines.join("\n").trim();

      // Try to extract image from HTML
      const imgMatch = htmlContent.match(
        /<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?/
      );
      if (imgMatch) {
        blocks.push({
          _type: "image",
          _key: generateKey(),
          url: imgMatch[1],
          alt: imgMatch[2] || "",
        });
        continue;
      }

      // For other HTML, wrap as a paragraph with raw text
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: "normal",
        children: [
          {
            _type: "span",
            _key: generateKey(),
            text: htmlContent.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
            marks: [],
          },
        ],
        markDefs: [],
      });
      continue;
    }

    // Regular paragraph - collect consecutive non-empty lines
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !lines[i].match(/^\d+\.\s+/) &&
      !(lines[i].trim().startsWith("<") && !lines[i].trim().startsWith("<a "))
    ) {
      paraLines.push(lines[i]);
      i++;
    }

    const paraText = paraLines.join(" ").trim();
    if (paraText) {
      blocks.push({
        _type: "block",
        _key: generateKey(),
        style: "normal",
        children: parseInlineContent(paraText),
        markDefs: extractMarkDefs(paraText),
      });
    }
  }

  return blocks;
}

/**
 * Parse inline markdown (bold, italic, code, links) into Portable Text spans.
 */
function parseInlineContent(text: string): PortableTextSpan[] {
  const spans: PortableTextSpan[] = [];

  // Simple regex-based inline parsing
  // This handles: **bold**, *italic*, `code`, [text](url), ![alt](url)
  const parts = text.split(
    /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|!\[[^\]]*\]\([^)]+\))/
  );

  for (const part of parts) {
    if (!part) continue;

    // Bold
    const boldMatch = part.match(/^\*\*(.+)\*\*$/);
    if (boldMatch) {
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: boldMatch[1],
        marks: ["strong"],
      });
      continue;
    }

    // Italic
    const italicMatch = part.match(/^\*(.+)\*$/);
    if (italicMatch) {
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: italicMatch[1],
        marks: ["em"],
      });
      continue;
    }

    // Inline code
    const codeMatch = part.match(/^`(.+)`$/);
    if (codeMatch) {
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: codeMatch[1],
        marks: ["code"],
      });
      continue;
    }

    // Image reference (skip, handled at block level)
    if (part.match(/^!\[/)) {
      continue;
    }

    // Link
    const linkMatch = part.match(/^\[(.+)\]\((.+)\)$/);
    if (linkMatch) {
      const linkKey = generateKey();
      spans.push({
        _type: "span",
        _key: generateKey(),
        text: linkMatch[1],
        marks: [linkKey],
      });
      continue;
    }

    // Plain text
    spans.push({
      _type: "span",
      _key: generateKey(),
      text: part,
      marks: [],
    });
  }

  return spans.length > 0
    ? spans
    : [{ _type: "span", _key: generateKey(), text: "", marks: [] }];
}

/**
 * Extract link mark definitions from inline markdown.
 */
function extractMarkDefs(text: string): MarkDef[] {
  const markDefs: MarkDef[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    markDefs.push({
      _type: "link",
      _key: generateKey(),
      href: match[2],
    });
  }

  return markDefs;
}

function parseJekyllPost(filePath: string): JekyllPost | null {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!data.title || !data.date) {
    console.warn(`Skipping ${filePath}: missing title or date`);
    return null;
  }

  // Extract slug from filename
  const filename = path.basename(filePath, ".md");
  const slugMatch = filename.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
  const slug = slugMatch ? slugMatch[1] : filename;

  // Normalize categories
  let categories: string[] = [];
  if (Array.isArray(data.categories)) {
    categories = data.categories;
  } else if (typeof data.categories === "string") {
    categories = [data.categories];
  }

  // Normalize tags
  let tags: string[] = [];
  if (Array.isArray(data.tags)) {
    tags = data.tags;
  } else if (typeof data.tags === "string") {
    tags = [data.tags];
  }

  return {
    title: data.title,
    date: new Date(data.date).toISOString(),
    author: data.author || "Terrence Curran",
    categories,
    tags,
    slug,
    permalink: data.permalink || `/${slug}/`,
    excerpt: data.excerpt || "",
    content: content.trim(),
  };
}

function main() {
  const postsDir = path.resolve(
    __dirname,
    "../jekyll/_posts"
  );
  const outputPath = path.resolve(
    __dirname,
    "../seed/blog-posts.json"
  );

  if (!fs.existsSync(postsDir)) {
    console.error(`Posts directory not found: ${postsDir}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  console.log(`Found ${files.length} Jekyll posts to migrate`);

  const entries: EmDashEntry[] = [];
  const allCategories = new Set<string>();
  const allTags = new Set<string>();

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const post = parseJekyllPost(filePath);

    if (!post) continue;

    // Reset key counter per post for cleaner output
    keyCounter = 0;

    const portableText = markdownToPortableText(post.content);

    const entry: EmDashEntry = {
      title: post.title,
      slug: post.slug,
      date: post.date,
      status: "published",
      content: portableText,
    };

    if (post.excerpt) {
      entry.excerpt = post.excerpt;
    }
    if (post.categories.length > 0) {
      entry.categories = post.categories;
      post.categories.forEach((c) => allCategories.add(c));
    }
    if (post.tags.length > 0) {
      entry.tags = post.tags;
      post.tags.forEach((t) => allTags.add(t));
    }

    entries.push(entry);
    console.log(`  Migrated: ${post.title} (${post.date.split("T")[0]})`);
  }

  const output = {
    collection: "posts",
    entries,
    taxonomies: {
      categories: Array.from(allCategories).sort(),
      tags: Array.from(allTags).sort(),
    },
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log(`\nMigration complete!`);
  console.log(`  Posts: ${entries.length}`);
  console.log(`  Categories: ${allCategories.size} (${Array.from(allCategories).join(", ")})`);
  console.log(`  Tags: ${allTags.size}`);
  console.log(`  Output: ${outputPath}`);
}

main();
