import { LOCALES, SITE, isLocale, type Locale } from "@/lib/site";

/** Canonical origin. Non-www + https; every other host should 301 here. */
export const SITE_URL = "https://tyagrajlawfirm.com";

/** Default social share image (absolute URL — required by Facebook/X). */
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const OG_LOCALE: Record<Locale, string> = {
  en: "en_IN",
  hi: "hi_IN",
};

/** Strips leading/trailing slashes so callers can pass "about" or "/about". */
function clean(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

/**
 * Absolute URL for a locale-prefixed page.
 * `pageUrl("hi", "practice-areas/rera")` -> https://tyagrajlawfirm.com/hi/practice-areas/rera
 */
export function pageUrl(locale: Locale, path = "") {
  const rest = clean(path);
  return rest ? `${SITE_URL}/${locale}/${rest}` : `${SITE_URL}/${locale}`;
}

/** Absolute URL for anything served out of /public. */
export function assetUrl(path: string) {
  return `${SITE_URL}/${clean(path)}`;
}

export function toLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : "en";
}

type SeoInput = {
  locale: Locale;
  /** Path after the locale segment: "" for the home page, "about", "team", … */
  path?: string;
  title: string;
  description: string;
  /** Absolute image URL. Falls back to the site-wide OG image. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
};

/**
 * Builds the full per-page head payload: unique title/description, canonical,
 * Open Graph, Twitter card and en/hi hreflang alternates.
 *
 * Spread into a route's `head` return value so TanStack renders it server-side.
 */
export function buildSeo({
  locale,
  path = "",
  title,
  description,
  image = OG_IMAGE,
  imageAlt,
  type = "website",
}: SeoInput) {
  const url = pageUrl(locale, path);
  const alt = imageAlt ?? `${SITE.firm} — ${SITE.tagline}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },

      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE.firm },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: alt },
      { property: "og:locale", content: OG_LOCALE[locale] },
      ...LOCALES.filter((l) => l !== locale).map((l) => ({
        property: "og:locale:alternate",
        content: OG_LOCALE[l],
      })),

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: alt },
    ],
    links: [
      { rel: "canonical", href: url },
      ...LOCALES.map((l) => ({
        rel: "alternate",
        hrefLang: l,
        href: pageUrl(l, path),
      })),
      { rel: "alternate", hrefLang: "x-default", href: pageUrl("en", path) },
    ],
  };
}

/**
 * BreadcrumbList JSON-LD. Pass the trail without the home crumb — it is added
 * automatically as position 1.
 */
export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[],
) {
  const home = locale === "hi" ? "होम" : "Home";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: home, path: "" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: pageUrl(locale, crumb.path),
      }),
    ),
  };
}
