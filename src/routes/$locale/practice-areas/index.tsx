import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { TextMarquee } from "@/components/TextMarquee";
import { COURTS, EXTRA_UI, FAQ } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/practice-areas/")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "कार्यक्षेत्र | अधिवक्ता सुमित त्यागी, गाज़ियाबाद"
      : "Practice Areas | Advocate Sumit Tyagi, Ghaziabad & Noida";
    const description = hi
      ? "आपराधिक, सिविल, वैवाहिक, एनडीपीएस, चेक बाउंस, साइबर, रेरा, उपभोक्ता एवं आईपीआर — नौ कार्यक्षेत्रों में पैरवी।"
      : "Criminal, civil, matrimonial, NDPS, cheque bounce, cyber, RERA, consumer and IPR — nine focused litigation practice areas across Delhi NCR.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: PracticeAreasIndex,
});

function PracticeAreasIndex() {
  const { locale, t } = useT();

  return (
    <>
      <PageHero
        priority
        image={IMAGES.lawBooks}
        mobileImage={IMAGES.advocateDesk}
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

      <section className="border-t border-border bg-surface py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={EXTRA_UI.faqEyebrow[locale]}
            title={EXTRA_UI.faqTitle[locale]}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {FAQ.map((item, i) => (
              <Reveal key={item.q.en} delay={(i % 2) * 0.07}>
                <details className="border border-border bg-secondary p-5 open:border-primary/40">
                  <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink">
                    {item.q[locale]}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.a[locale]}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow={t.nav.book}
            title={t.book.h1}
            lead={t.book.lead}
          />
          <Reveal delay={0.08}>
            <WhatsAppBookingForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </>
  );
}