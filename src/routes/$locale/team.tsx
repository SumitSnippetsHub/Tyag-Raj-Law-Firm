import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamSection";
import { highlightName } from "@/components/NameMark";
import { IMAGES } from "@/lib/images";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/team")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "हमारी टीम — अधिवक्ता सुमित त्यागी | त्याग राज लॉ फर्म"
      : "Our Team | Tyag Raj Law Firm, Ghaziabad";
    const description = hi
      ? "त्याग राज लॉ फर्म की टीम — अधिवक्ता सुमित त्यागी (बीबीए, एमबीए, एलएलबी) एवं सहयोगी अधिवक्ता, गाज़ियाबाद।"
      : "Meet the team at Tyag Raj Law Firm — Founder Sumit Tyagi, Co-Founder Vishaw Pratap, and associates practising across Ghaziabad, Noida and Delhi NCR.";
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
  component: TeamPage,
});

function TeamPage() {
  const { locale, t } = useT();
  const home = t.home;

  return (
    <>
      <PageHero
        fit="contain"
        image={IMAGES.fullTeam}
        alt="Tyag Raj Law Firm team at the chamber in Ghaziabad"
        eyebrow={home.teamEyebrow}
        title={highlightName(home.teamTitle, "dark")}
        lead={home.teamLead}
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 lg:py-28">
        <SectionHeading eyebrow={home.teamEyebrow} title={t.nav.team} />
        <div className="mt-14">
          <TeamGrid locale={locale} />
        </div>
      </section>
    </>
  );
}