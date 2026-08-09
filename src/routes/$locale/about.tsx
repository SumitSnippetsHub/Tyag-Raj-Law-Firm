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

function FullPhoto({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden border border-border bg-secondary">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="mx-auto h-auto w-full max-w-full object-contain"
      />
    </figure>
  );
}

function About() {
  const { locale, t } = useT();
  const a = t.about;

  return (
    <>
      <PageHero
        priority
        fit="contain"
        image={IMAGES.advocateStanding}
        alt="Advocate Sumit Tyagi at his chamber in Civil Court, Ghaziabad"
        eyebrow={SITE.tagline}
        title={highlightName(a.h1, "dark")}
        lead={a.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <SectionHeading eyebrow={a.introEyebrow} title={a.introTitle} />
          <div className="mt-8">
            {a.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="mb-5 text-base leading-relaxed text-ink-soft">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 border-l-2 border-primary pl-6">
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

        <div className="space-y-8">
          <Reveal>
            <FullPhoto
              src={IMAGES.advocatePortrait}
              alt={
                locale === "hi"
                  ? "अधिवक्ता सुमित त्यागी का औपचारिक चित्र"
                  : "Formal portrait of Advocate Sumit Tyagi"
              }
              priority
            />
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="divide-y divide-border border-y border-border">
              {a.creds.map((c) => (
                <div key={c.k} className="py-3.5">
                  <dt className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                    {c.k}
                  </dt>
                  <dd className="mt-1.5 text-sm text-ink">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={a.chamberEyebrow}
            title={a.chamberTitle}
            lead={a.chamberBody}
          />
          <Reveal delay={0.08}>
            <div className="mt-10">
              <FullPhoto
                src={IMAGES.advocateChamber}
                alt={
                  locale === "hi"
                    ? "ज़िला न्यायालय गाज़ियाबाद में अधिवक्ता सुमित त्यागी का चैम्बर"
                    : "Chamber of Advocate Sumit Tyagi at District Court, Ghaziabad"
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={a.approachEyebrow}
            title={a.approachTitle}
            lead={a.approachLead}
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {a.approach.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full border-t-2 border-primary/70 pt-5">
                  <span className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
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

      <section className="border-t border-border bg-secondary py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={t.home.areaEyebrow}
              title={t.home.areaTitle}
              lead={t.home.areaBody}
            />
            <AppLink
              to={`/${locale}/practice-areas`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
            >
              {t.nav.practice}
              <ArrowRight className="size-4" aria-hidden />
            </AppLink>
          </div>
          <Reveal delay={0.08}>
            <FullPhoto
              src={IMAGES.advocateOffice}
              alt={
                locale === "hi"
                  ? "अधिवक्ता सुमित त्यागी का चैम्बर दृश्य"
                  : "Advocate Sumit Tyagi in his chamber"
              }
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
