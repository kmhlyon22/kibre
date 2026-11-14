import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { publicPaths, SITE_URL } from "../src/data/seo";

const urls = publicPaths.map(path => `  <url><loc>${SITE_URL}${path}</loc></url>`);
writeFileSync(resolve("public/sitemap.xml"), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join("\n"));
console.log(`Generated sitemap for ${publicPaths.length} public pages.`);