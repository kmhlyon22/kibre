import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getPageSeo, ORGANIZATION_ID, SITE_URL } from "@/data/seo";
import { serviceDetails, ServiceSlug } from "@/data/service-details";

export function PageSeo() {
  const { pathname } = useLocation();
  const page = getPageSeo(pathname);
  const slug = page.path.slice(1);
  const service = Object.prototype.hasOwnProperty.call(serviceDetails, slug)
    ? serviceDetails[slug as ServiceSlug] : undefined;
  const schema = page.indexable ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.path === "/contact" ? "ContactPage" : page.path === "/about" ? "AboutPage" : "WebPage",
        "@id": `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": ORGANIZATION_ID },
      },
      ...(page.path === "/" ? [] : [{
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: service?.title ?? page.title.split(" | ")[0], item: page.canonical },
        ],
      }]),
      ...(service ? [{
        "@type": "Service",
        "@id": `${page.canonical}#service`,
        name: service.title,
        serviceType: service.serviceType,
        description: service.intro,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          { "@type": "Country", name: "Ethiopia" },
          { "@type": "City", name: "Addis Ababa" },
        ],
        url: page.canonical,
      }] : []),
    ],
  } : undefined;

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="robots" content={page.indexable ? "index, follow, max-image-preview:large" : "noindex, follow"} />
      {page.canonical && <link rel="canonical" href={page.canonical} />}
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:type" content="website" />
      {page.canonical && <meta property="og:url" content={page.canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}