# Architecture rules
- Use one shared project-card component on Home and Projects so presentation and project actions remain consistent.
- Keep page-specific banner styling separate from shared hero styling to avoid changing other pages unintentionally.
- Keep public search metadata and sitemap paths in one shared registry; route-level Helmet tags use self-referencing canonicals so pages retain their own search identity.
- Generate the sitemap before dev and production builds from the public path registry; omit lastmod unless a trustworthy page-specific modification date exists.
- Use a shared service-detail page with service-specific content and portfolio examples so search landing pages remain useful and visually consistent.
- Keep verified sitewide business schema in the static head and page/service schema in the shared head component; omit unverified business facts and self-serving review ratings.