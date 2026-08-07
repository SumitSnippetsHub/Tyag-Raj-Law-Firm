import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { SectionHeading } from "@/components/SectionHeading";
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
        alt="Antique law reports and legal statute books in a chamber bookcase"
        eyebrow={t.nav.practice}
        title={t.practice.h1}
        lead={t.practice.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_AREAS.map((area, i) => (
            <Reveal as="li" key={area.slug} delay={(i % 3) * 0.08}>
              <PracticeAreaCard area={area} locale={locale} index={i} />
            </Reveal>
          ))}
        </ul>
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