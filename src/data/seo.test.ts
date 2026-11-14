import { describe, expect, it } from "vitest";
import { getPageSeo, publicPaths, SITE_URL } from "./seo";
import { serviceDetails } from "./service-details";

describe("public search discovery", () => {
  it.each(publicPaths)("uses a self-referencing canonical for %s", path => {
    const page = getPageSeo(path);
    expect(page.canonical).toBe(`${SITE_URL}${path}`);
    expect(page.indexable).toBe(true);
  });
  it("does not index unknown URLs", () => {
    expect(getPageSeo("/missing-page").indexable).toBe(false);
    expect(getPageSeo("/missing-page").canonical).toBeUndefined();
  });
  it("normalizes trailing slashes without changing the page identity", () => {
    expect(getPageSeo("/services/").canonical).toBe(`${SITE_URL}/services`);
  });
  it("includes every service detail page in the sitemap source", () => {
    for (const slug of Object.keys(serviceDetails)) {
      expect(publicPaths).toContain(`/${slug}`);
    }
  });
});