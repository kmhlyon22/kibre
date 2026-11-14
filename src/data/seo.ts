export const SITE_URL = "https://kibre.lovable.app";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const seoPages = {
  "/": {
    title: "Software Company in Ethiopia & Addis Ababa | United Tech",
    description: "United Tech Ethiopia is a software company in Addis Ababa building custom ERP systems, business websites and Android apps for businesses across Ethiopia.",
  },
  "/services": {
    title: "Software Development Services in Ethiopia | United Tech",
    description: "Explore website development, custom ERP systems and mobile app development in Addis Ababa, Ethiopia. Discuss your business needs with United Tech.",
  },
  "/projects": {
    title: "Website & ERP Development Projects in Ethiopia | United Tech",
    description: "See United Tech's website and ERP projects for Ethiopian businesses, including HoneyBadger, MTM Gym, KMG Engineering and Afro Tattoo Studio.",
  },
  "/about": {
    title: "About United Tech | Software Company in Addis Ababa",
    description: "Meet United Tech Ethiopia, a technology company in Addis Ababa focused on custom software, clear communication and long-term business support.",
  },
  "/contact": {
    title: "Contact United Tech Ethiopia | Addis Ababa Software Team",
    description: "Discuss your website, ERP or mobile app project with United Tech in Addis Ababa, Ethiopia. Contact our team by email, WhatsApp or Telegram.",
  },
  "/website-development-ethiopia": {
    title: "Website Development in Ethiopia & Addis Ababa | United Tech",
    description: "Professional website development in Addis Ababa, Ethiopia. Explore business, restaurant and engineering websites, mobile-first design and ongoing support.",
  },
  "/erp-development-ethiopia": {
    title: "Custom ERP System Development in Ethiopia | United Tech",
    description: "Custom ERP development in Addis Ababa, Ethiopia for inventory, sales, schools, gyms and construction. See United Tech's business management projects.",
  },
  "/mobile-app-development-ethiopia": {
    title: "Mobile App Development in Ethiopia & Addis Ababa | United Tech",
    description: "Android and web application development in Addis Ababa, Ethiopia. Build secure, usable applications tailored to your customers and business workflows.",
  },
} as const;

export type SeoPath = keyof typeof seoPages;
export const publicPaths = Object.keys(seoPages) as SeoPath[];

export function getPageSeo(pathname: string) {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  if (Object.prototype.hasOwnProperty.call(seoPages, path)) {
    return { ...seoPages[path as SeoPath], path, canonical: `${SITE_URL}${path}`, indexable: true };
  }
  return {
    title: "Page Not Found | United Tech Ethiopia",
    description: "This page is unavailable. Explore United Tech Ethiopia's services, projects or contact our team.",
    path,
    canonical: undefined,
    indexable: false,
  };
}