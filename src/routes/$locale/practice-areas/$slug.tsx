import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { JsonLd } from "@/components/JsonLd";
import { areaImage, getPracticeArea, PRACTICE_AREAS } from "@/lib/practice-areas";
import { CHAMBERS, SITE } from "@/lib/site";
import {
  assetUrl,
  breadcrumbSchema,
  buildSeo,
  pageUrl,
  toLocale,
} from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/practice-areas/$slug")({
  beforeLoad: ({ params }) => {
    if (!getPracticeArea(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const area = getPracticeArea(params.slug);
    const locale = toLocale(params.locale);
    if (!area) return {};
    const name = area.title[locale];
    const title =
      locale === "hi"
        ? `${name} वकील गाज़ियाबाद | अधिवक्ता सुमित त्यागी`
        : `${name} Lawyer in Ghaziabad, Noida | Advocate Sumit Tyagi`;
    return buildSeo({
      locale,
      path: `practice-areas/${area.slug}`,
      title,
      description: area.short[locale],
      image: assetUrl(areaImage(area)),
      imageAlt: `${area.title.en} — ${SITE.firm}`,
      type: "article",
    });
  },
  component: PracticeAreaPage,
});

function PracticeAreaPage() {
  const { slug } = Route.useParams();
  const { locale, t } = useT();
  const area = getPracticeArea(slug)!;
  const others = PRACTICE_AREAS.filter((a) => a.slug !== slug).slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.nav.practice, path: "practice-areas" },
          { name: area.title[locale], path: `practice-areas/${area.slug}` },
        ])}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: area.title.en,
          name: area.title[locale],
          description: area.short[locale],
          url: pageUrl(locale, `practice-areas/${area.slug}`),
          image: assetUrl(areaImage(area)),
          provider: {
            "@type": "Attorney",
            name: `${SITE.firm} — Advocate ${SITE.advocate}`,
            telephone: SITE.phonePrimaryTel,
            address: {
              "@type": "PostalAddress",
              streetAddress: CHAMBERS[0].address,
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          },
          areaServed: SITE.areasServed,
        }}
      />

      <PageHero
        priority
        image={areaImage(area)}
        fit={
          [
            "cheque-bounce-138-ni-act",
            "mact-accidental-cases",
            "bail-matters",
            "consumer-matters",
            "court-marriage-registration",
          ].includes(area.slug)
            ? "contain"
            : "cover"
        }
        scrim={
          [
            "cheque-bounce-138-ni-act",
            "mact-accidental-cases",
            "bail-matters",
            "consumer-matters",
            "court-marriage-registration",
          ].includes(area.slug)
            ? "soft"
            : "default"
        }
        alt={`${area.title.en} legal practice — Advocate Sumit Tyagi, Ghaziabad`}
        eyebrow={t.nav.practice}
        title={area.title[locale]}
        lead={area.short[locale]}
      />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <AppLink
          to={`/${locale}/practice-areas`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t.practice.back}
        </AppLink>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {t.practice.covers}
              </h2>
            </Reveal>
            {area.intro[locale].map((para, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <h2 className="mt-14 font-display text-2xl font-semibold text-ink">
                {t.practice.handled}
              </h2>
              <ul className="mt-6 space-y-3">
                {area.situations[locale].map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside>
            <Reveal>
              <div className="border border-border bg-surface p-7">
                <h2 className="font-display text-lg font-semibold text-ink">
                  {t.practice.whyTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {t.practice.whyBody}
                </p>
                <AppLink
                  to={`/${locale}/book-consultation`}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
                >
                  {t.cta.bookFree}
                  <ArrowRight className="size-4" aria-hidden />
                </AppLink>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase mt-10 text-ink-soft">{t.practice.other}</h2>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {others.map((o) => (
                  <li key={o.slug}>
                    <AppLink
                      to={`/${locale}/practice-areas/${o.slug}`}
                      className="flex items-center justify-between gap-3 py-4 text-sm text-ink hover:text-primary"
                    >
                      {o.title[locale]}
                      <ArrowRight className="size-4 shrink-0" aria-hidden />
                    </AppLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow={area.title[locale]}
            title={t.book.h1}
            lead={t.book.lead}
          />
          <Reveal delay={0.08}>
            <WhatsAppBookingForm locale={locale} defaultArea={area.slug} />
          </Reveal>
        </div>
      </section>
    </>
  );
}