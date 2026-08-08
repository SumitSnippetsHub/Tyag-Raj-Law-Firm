import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TextMarquee } from "@/components/TextMarquee";
import { highlightName } from "@/components/NameMark";
import { COURTS, EXTRA_UI, PROCESS } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/about")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "अधिवक्ता सुमित त्यागी का परिचय | गाज़ियाबाद"
      : "About Advocate Sumit Tyagi | 12+ Years, Ghaziabad Courts";
    const description = hi
      ? "गाज़ियाबाद ज़िला एवं सेशन न्यायालय में 12+ वर्ष की वकालत — अधिवक्ता सुमित त्यागी का परिचय, कार्यशैली और मूल्य।"
      : "Meet Advocate Sumit Tyagi — 12+ years of litigation at the District & Session Court, Ghaziabad, with matters across Noida and Delhi NCR.";
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
  component: About,
});

function About() {
  const { locale, t } = useT();
  const a = t.about;

  return (
    <>
      <PageHero
        priority
        image={IMAGES.advocateDesk}
        mobileImage={IMAGES.advocatePortrait}
        alt="Advocate Sumit Tyagi at his desk in the chamber at Civil Court, Ghaziabad"
        eyebrow={SITE.tagline}
        title={highlightName(a.h1, "dark")}
        lead={a.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 grid gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div>
          {a.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="mb-6 text-base leading-relaxed text-ink-soft">{para}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-6 border-l-2 border-primary pl-6">
              <h2 className="font-display text-xl font-semibold text-ink">
                {a.valuesTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {a.valuesBody}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.26}>
            <AppLink
              to={`/${locale}/book-consultation`}
              className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
            >
              {t.cta.bookFree}
              <ArrowRight className="size-4" aria-hidden />
            </AppLink>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <img
              src={IMAGES.advocatePortrait}
              alt="Portrait of Advocate Sumit Tyagi in advocate robes, Ghaziabad"
              loading="lazy"
              className="aspect-3/4 w-full border border-border object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {a.creds.map((c) => (
                <div key={c.k} className="py-4">
                  <dt className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">{c.k}</dt>
                  <dd className="mt-1.5 text-sm text-ink">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 lg:py-20">
        <SectionHeading
          eyebrow={EXTRA_UI.processEyebrow[locale]}
          title={EXTRA_UI.processTitle[locale]}
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.title.en} delay={(i % 4) * 0.08}>
              <div className="h-full border-t border-border pt-5">
                <span className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
                  {step.step[locale]}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {step.title[locale]}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.body[locale]}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-secondary py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t.home.areaEyebrow}
            title={t.home.areaTitle}
            lead={t.home.areaBody}
          />
          <Reveal delay={0.08}>
            <img
              src={IMAGES.advocateOffice}
              alt="Chamber of Advocate Sumit Tyagi inside the court complex in Ghaziabad"
              loading="lazy"
              className="aspect-4/3 w-full border border-border object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}