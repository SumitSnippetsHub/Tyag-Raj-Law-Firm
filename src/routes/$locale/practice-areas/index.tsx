import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TextMarquee } from "@/components/TextMarquee";
import { COURTS } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildSeo, pageUrl, toLocale } from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/practice-areas/")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const count = PRACTICE_AREAS.length;
    const title = hi
      ? "कार्यक्षेत्र | अधिवक्ता सुमित त्यागी, गाज़ियाबाद"
      : "Practice Areas | Advocate Sumit Tyagi, Ghaziabad & Noida";
    const description = hi
      ? `आपराधिक, सिविल, वैवाहिक, एनडीपीएस, चेक बाउंस, साइबर, रेरा, उपभोक्ता एवं आईपीआर — ${count} कार्यक्षेत्रों में पैरवी।`
      : `Criminal, civil, matrimonial, NDPS, cheque bounce, cyber, RERA, consumer and IPR — ${count} focused litigation practice areas across Delhi NCR.`;
    return buildSeo({ locale, path: "practice-areas", title, description });
  },
  component: PracticeAreasIndex,
});

function PracticeAreasIndex() {
  const { locale, t } = useT();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.nav.practice, path: "practice-areas" },
        ])}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: t.nav.practice,
          itemListElement: PRACTICE_AREAS.map((area, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: area.title[locale],
            url: pageUrl(locale, `practice-areas/${area.slug}`),
          })),
        }}
      />

      <PageHero
        priority
        image={IMAGES.lawBooks}
        mobileImage={IMAGES.gavel}
        alt="Antique law reports and legal statute books in a chamber bookcase"
        eyebrow={t.nav.practice}
        title={t.practice.h1}
        lead={t.practice.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area, i) => (
            <Reveal as="li" key={area.slug} delay={(i % 3) * 0.08}>
              <PracticeAreaCard area={area} locale={locale} index={i} />
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-secondary py-16 lg:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 md:px-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.nav.book}
            title={t.book.h1}
            lead={t.book.lead}
          />
          <AppLink
            to={`/${locale}/book-consultation`}
            className="inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
          >
            {t.cta.bookFree}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
        </div>
      </section>
    </>
  );
}
