import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TextMarquee } from "@/components/TextMarquee";
import { FoundersGrid } from "@/components/TeamSection";
import { COURTS } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, buildSeo, toLocale } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/about")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const title = hi
      ? "अधिवक्ता सुमित त्यागी एवं विशव प्रताप | त्याग राज लॉ फर्म, गाज़ियाबाद"
      : "About Advocate Sumit Tyagi & Vishaw Pratap | Tyag Raj Law Firm";
    const description = hi
      ? "गाज़ियाबाद ज़िला एवं सेशन न्यायालय में 13+ वर्ष की वकालत — अधिवक्ता सुमित त्यागी, संस्थापक विशव प्रताप एवं टीम का परिचय।"
      : "Meet Advocate Sumit Tyagi and Founder Vishaw Pratap — 13+ years of litigation at Tyag Raj Law Firm, Ghaziabad, Noida and Delhi NCR.";
    return buildSeo({ locale, path: "about", title, description });
  },
  component: About,
});

function FullPhoto({
  src,
  alt,
  priority = false,
  caption,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
}) {
  return (
    <figure className="surface-card surface-card--muted">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="mx-auto h-auto w-full max-w-full object-contain"
      />
      {caption ? (
        <figcaption className="border-t border-border px-4 py-3 text-center text-xs leading-relaxed text-ink-soft sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function About() {
  const { locale, t } = useT();
  const a = t.about;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.nav.about, path: "about" },
        ])}
      />

      <PageHero
        priority
        fit="cover"
        scrim="soft"
        imagePosition="top"
        image={IMAGES.aboutHero}
        alt={
          locale === "hi"
            ? "अधिवक्ता सुमित त्यागी एवं अधिवक्ता विशव प्रताप — त्याग राज लॉ फर्म चैम्बर"
            : "Advocate Sumit Tyagi and Advocate Vishaw Pratap at Tyag Raj Law Firm chamber"
        }
        eyebrow={SITE.tagline}
        title={
          <>
            {locale === "hi" ? (
              <>
                अधिवक्ता{" "}
                <span className="name-mark name-mark--on-dark">सुमित त्यागी</span>
                {" एवं "}
                <br className="hidden sm:block" />
                <span className="name-mark name-mark--on-dark">विशव प्रताप</span>
              </>
            ) : (
              <>
                About Advocate
                <br />
                <span className="name-mark name-mark--on-dark">Sumit Tyagi</span>
                {" &"}
                <br />
                <span className="name-mark name-mark--on-dark">Vishaw Pratap</span>
              </>
            )}
          </>
        }
        lead={a.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <section className="border-b border-border bg-surface py-14 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={t.home.foundersEyebrow}
            title={t.home.foundersTitle}
            lead={t.home.foundersLead}
          />
          <div className="mt-10">
            <FoundersGrid locale={locale} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={a.partnershipEyebrow}
            title={a.partnershipTitle}
            lead={a.partnershipBody}
          />
        </div>
      </section>

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
      </section>

      {/* With clients — group photo */}
      <section className="border-t border-border bg-surface py-14 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:px-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <FullPhoto
              src={IMAGES.foundersWithClients}
              alt={
                  locale === "hi"
                    ? "संस्थापक एवं संस्थापक मुवक्किलों के साथ चैम्बर में"
                    : "Founder and Founder with clients at the chamber"
              }
              caption={
                locale === "hi"
                  ? "चैम्बर परामर्श — स्पष्ट सलाह, स्पष्ट अगला कदम"
                  : "Chamber consultation — clear advice, clear next steps"
              }
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={a.clientsEyebrow}
              title={a.clientsTitle}
              lead={a.clientsBody}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-14 lg:py-20">
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

      {/* Full team group photos */}
      <section className="border-t border-border bg-surface py-14 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={a.teamPhotoEyebrow}
            title={a.teamPhotoTitle}
            lead={a.teamPhotoBody}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            <Reveal as="li">
              <FullPhoto
                src={IMAGES.fullTeam}
                alt={
                  locale === "hi"
                    ? "त्याग राज लॉ फर्म की पूरी टीम"
                    : "Full team of Tyag Raj Law Firm"
                }
                caption={
                locale === "hi"
                  ? "टीम रोस्टर — संस्थापक, संस्थापक एवं सहयोगी अधिवक्ता"
                  : "Team roster — founders and associate advocates"
                }
              />
            </Reveal>
            <Reveal as="li" delay={0.08}>
              <FullPhoto
                src={IMAGES.fullTeamAlt}
                alt={
                  locale === "hi"
                    ? "त्याग राज लॉ फर्म टीम — समूह चित्र"
                    : "Tyag Raj Law Firm team group photograph"
                }
                caption={
                  locale === "hi"
                    ? "एक छोटी टीम — आपकी तारीख की स्पष्ट ज़िम्मेदारी"
                    : "A small team — clear ownership of your hearing date"
                }
              />
            </Reveal>
          </ul>
          <AppLink
            to={`/${locale}/team`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
          >
            {t.nav.team}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
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
              src={IMAGES.coFounderChamber}
              alt={
                locale === "hi"
                  ? "चैम्बर में टीम सदस्य"
                  : "Team member at the chamber desk"
              }
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
