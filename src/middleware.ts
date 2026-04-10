import { defineMiddleware } from "astro:middleware";

/**
 * Redirect old blog URL patterns to the current /blog/slug format.
 *
 * WordPress pattern: /YYYY/MM/DD/slug/
 * Jekyll pattern:    /YYYY-MM-DD-slug/
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;

  // WordPress pattern: /2010/05/07/using-osx-shell-to-filter-and-organize-files/
  const wpMatch = path.match(/^\/\d{4}\/\d{2}\/\d{2}\/([^/]+)\/?$/);
  if (wpMatch) {
    return context.redirect(`/blog/${wpMatch[1]}`, 301);
  }

  // Jekyll pattern: /2010-05-07-using-osx-shell-to-filter-and-organize-files/
  const jekyllMatch = path.match(/^\/\d{4}-\d{2}-\d{2}-([^/]+)\/?$/);
  if (jekyllMatch) {
    return context.redirect(`/blog/${jekyllMatch[1]}`, 301);
  }

  // Non-dated pages that were at root on wirelust (e.g., /mbta-bus-tracker-widget-for-osx/)
  // These would be caught by the [slug].astro catch-all, which is fine.

  return next();
});
