import { defineMiddleware } from "astro:middleware";

/**
 * Redirect old blog URL patterns and wirelust.com requests.
 *
 * wirelust.com requests are redirected to terrencecurran.com with
 * URL pattern rewriting applied in the same hop:
 *   wirelust.com/2010/05/07/slug/ -> terrencecurran.com/blog/slug
 *   wirelust.com/anything         -> terrencecurran.com/anything
 *
 * WordPress pattern: /YYYY/MM/DD/slug/
 * Jekyll pattern:    /YYYY-MM-DD-slug/
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const host = context.url.hostname;
  const path = context.url.pathname;

  // Redirect wirelust.com -> terrencecurran.com with URL rewriting
  if (host === "wirelust.com" || host === "www.wirelust.com") {
    const rewrittenPath = rewriteBlogPath(path) ?? path;
    return context.redirect(`https://terrencecurran.com${rewrittenPath}`, 301);
  }

  // Handle old URL patterns on terrencecurran.com itself
  const rewritten = rewriteBlogPath(path);
  if (rewritten) {
    return context.redirect(rewritten, 301);
  }

  return next();
});

/**
 * Rewrite old WordPress/Jekyll blog URL patterns to /blog/slug.
 * Returns the new path, or null if no match.
 */
function rewriteBlogPath(path: string): string | null {
  // WordPress pattern: /2010/05/07/using-osx-shell-to-filter-and-organize-files/
  const wpMatch = path.match(/^\/\d{4}\/\d{2}\/\d{2}\/([^/]+)\/?$/);
  if (wpMatch) {
    return `/blog/${wpMatch[1]}`;
  }

  // Jekyll pattern: /2010-05-07-using-osx-shell-to-filter-and-organize-files/
  const jekyllMatch = path.match(/^\/\d{4}-\d{2}-\d{2}-([^/]+)\/?$/);
  if (jekyllMatch) {
    return `/blog/${jekyllMatch[1]}`;
  }

  return null;
}
