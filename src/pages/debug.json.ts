import { getEmDashCollection } from "emdash";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const result = await getEmDashCollection("posts", {
      status: "published",
      limit: 3,
    });
    return new Response(
      JSON.stringify({
        count: result.entries.length,
        error: result.error?.message || null,
        firstEntry: result.entries[0]
          ? { id: result.entries[0].id, title: result.entries[0].data?.title }
          : null,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e: any) {
    return new Response(
      JSON.stringify({ error: e.message, stack: e.stack }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
