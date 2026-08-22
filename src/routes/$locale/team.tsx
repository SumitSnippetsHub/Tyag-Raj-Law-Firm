import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamSection";
import { highlightName } from "@/components/NameMark";
import { IMAGES } from "@/lib/images";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildSeo, toLocale } from "@/lib/seo";
import { formatServiceAreasAnd } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/team")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const title = hi
      ? "हमारी टीम — अधिवक्ता सुमित त्यागी | त्याग राज लॉ फर्म"
      : "Our Team | Tyag Raj Law Firm, Ghaziabad";
    const description = hi
      ? `त्याग राज लॉ फर्म की टीम — अधिवक्ता सुमित त्यागी, संस्थापक विशव प्रताप एवं सहयोगी; ${formatServiceAreasAnd("hi")} में पैरवी।`
      : `Meet the team at Tyag Raj Law Firm — Founder Sumit Tyagi, Founder Vishaw Pratap, and associates practising across ${formatServiceAreasAnd("en")}.`;
    return buildSeo({ locale, path: "team", title, description });
  },
  component: TeamPage,
});

function TeamPage() {
  const { locale, t } = useT();
  const home = t.home;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [{ name: t.nav.team, path: "team" }])}
      />

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