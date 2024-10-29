import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const blogPosts = await getCollection("blog");

  return rss({
    // `<title>` field in output xml
    title: "Leos’s Blog",
    // `<description>` field in output xml
    description: "A humble blog about me and my adventures with Astro.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: site ?? "",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      // Optional fields in output xml
      // See "Generating items" section for examples using content collections and glob imports
      link: `/blogs/${slug}/`,
      guid: slug,
    })),
    // (optional) inject custom xml
    customData: `<language>es-mx</language>`,
  });
};
