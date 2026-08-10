/**
 * Generates public/sitemap.xml from the app's real routes.
 *
 * Static routes are listed below; practice-area detail pages are read straight
 * out of src/lib/practice-areas.ts so a new area shows up in the sitemap on the
 * next deploy without anyone editing XML.
 *
 * Runs automatically via the `prebuild` npm script.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = process.env.SITE_URL ?? "https://tyagrajlawfirm.com";
const LOCALES = ["en", "hi"];

/** Public, indexable routes. Paths are relative to the /:locale prefix. */
const STATIC_ROUTES = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "practice-areas", changefreq: "monthly", priority: "0.9" },
  { path: "about", changefreq: "monthly", priority: "0.8" },
  { path: "contact", changefreq: "monthly", priority: "0.8" },
  { path: "book-consultation", changefreq: "monthly", priority: "0.8" },
  { path: "team", changefreq: "monthly", priority: "0.7" },
  { path: "testimonials", changefreq: "monthly", priority: "0.6" },
];

function readPracticeAreaSlugs() {
  const source = readFileSync(
    resolve(ROOT, "src/lib/practice-areas.ts"),
    "utf8",
  );
  const slugs = [...source.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map(
    (match) => match[1],
  );

  // A silent empty result would quietly drop 26 URLs from the sitemap.
  if (slugs.length === 0) {
    throw new Error(
      "generate-sitemap: no practice-area slugs found in src/lib/practice-areas.ts — did the file shape change?",
    );
  }

  return slugs;
}

function url(locale, path) {
  return path ? `${SITE_URL}/${locale}/${path}` : `${SITE_URL}/${locale}`;
}

function urlEntry({ locale, path, changefreq, priority, lastmod }) {
  // Every page exists in both locales, so declare them as hreflang alternates.
  const alternates = LOCALES.map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${alt}" href="${url(alt, path)}" />`,
  )
    .concat(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${url("en", path)}" />`,
    )
    .join("\n");

  return [
    "  <url>",
    `    <loc>${url(locale, path)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    alternates,
    "  </url>",
  ].join("\n");
}

const lastmod = new Date().toISOString().slice(0, 10);
const slugs = readPracticeAreaSlugs();

const routes = [
  ...STATIC_ROUTES,
  ...slugs.map((slug) => ({
    path: `practice-areas/${slug}`,
    changefreq: "monthly",
    priority: "0.7",
  })),
];

const entries = LOCALES.flatMap((locale) =>
  routes.map((route) => urlEntry({ ...route, locale, lastmod })),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`;

const out = resolve(ROOT, "public/sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml, "utf8");

console.log(
  `generate-sitemap: wrote ${entries.length} URLs (${slugs.length} practice areas x ${LOCALES.length} locales) to public/sitemap.xml`,
);
