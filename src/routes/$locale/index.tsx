import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { TextMarquee } from "@/components/TextMarquee";
import { highlightName } from "@/components/NameMark";
import { COURTS, EXTRA_UI, FAQ, PROCESS, STATS } from "@/lib/content-extra";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { TestimonialCarousel } from "@/components/TestimonialMarquee";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { FoundersGrid, TeamGrid } from "@/components/TeamSection";
import { JsonLd } from "@/components/JsonLd";
import { IMAGES } from "@/lib/images";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { CHAMBERS, FOUNDERS, SITE, telHref, waLink } from "@/lib/site";
import { buildSeo, OG_IMAGE, pageUrl, SITE_URL, toLocale } from "@/lib/seo";
import { DICT, useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const title = hi
      ? "अधिवक्ता सुमित त्यागी — गाज़ियाबाद, नोएडा, दिल्ली एनसीआर वकील"
      : "Advocate in Ghaziabad | Sumit Tyagi, Advocate & Legal Consultant";
    const description = hi
      ? "गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में 13+ वर्ष अनुभवी अधिवक्ता सुमित त्यागी — आपराधिक, सिविल, वैवाहिक, रेरा व चेक बाउंस मामले।"
      : "Advocate Sumit Tyagi — 13+ years handling criminal, civil, matrimonial, NDPS, cheque bounce, RERA and consumer matters in Ghaziabad, Noida and Delhi NCR.";
    return buildSeo({ locale, path: "", title, description });
  },
  component: Home,
});

function Home() {
  const { locale, t } = useT();
  const home = t.home;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": `${SITE_URL}/#organization`,
          name: SITE.firm,
          url: pageUrl(locale),
          description:
            "Advocate & Legal Consultant handling criminal, civil, matrimonial, NDPS, cheque bounce, cyber, RERA, consumer and IPR matters in Delhi NCR.",
          image: OG_IMAGE,
          logo: `${SITE_URL}/favicon.png`,
          telephone: [SITE.phonePrimaryTel, SITE.phoneCofounderTel, SITE.phoneSecondaryTel],
          email: [SITE.email, SITE.cofounderEmail],
          priceRange: "₹₹",
          areaServed: SITE.areasServed,
          knowsLanguage: ["en", "hi"],
          address: {
            "@type": "PostalAddress",
            streetAddress: CHAMBERS[0].address,
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "17:00",
          },
          founder: FOUNDERS.map((person) => ({
            "@type": "Person",
            name: `Advocate ${person.name}`,
            jobTitle: person.title.en,
            telephone: person.phoneTel,
            email: person.email,
          })),
          location: CHAMBERS.map((c) => ({
            "@type": "Place",
            name: c.label.en,
            address: {
              "@type": "PostalAddress",
              streetAddress: c.address,
              addressLocality: "Ghaziabad",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          })),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: locale === "hi" ? "कार्यक्षेत्र" : "Practice Areas",
            itemListElement: PRACTICE_AREAS.map((area) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: area.title[locale],
                description: area.short[locale],
                url: pageUrl(locale, `practice-areas/${area.slug}`),
              },
            })),
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q[locale],
            acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
          })),
        }}
      />

      <PageHero
        priority
        tall
        image={IMAGES.aboutHero}
        mobileImage={IMAGES.aboutHero}
        alt="Advocates Sumit Tyagi and Vishaw Pratap at Tyag Raj Law Firm"
        eyebrow={home.eyebrow}
        title={
          <>
            {locale === "hi" ? (
              <>
                <span className="name-mark name-mark--on-dark">सुमित त्यागी</span>
                {" & "}
                <span className="name-mark name-mark--on-dark">विशव प्रताप</span>
              </>
            ) : (
              <>
                <span className="name-mark name-mark--on-dark">Sumit Tyagi</span>
                {" & "}
                <span className="name-mark name-mark--on-dark">Vishaw Pratap</span>
              </>
            )}
            <span className="mt-4 block font-display text-lg font-semibold text-dark-text/60 md:text-xl">
              {SITE.tagline} · {home.trust[1]}
            </span>
          </>
        }
        lead={home.lead}
      >
        <div className="flex flex-wrap gap-4">
          <AppLink
            to={`/${locale}/book-consultation`}
            className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
          >
            {t.cta.bookFree}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
          <a
            href={telHref(SITE.phonePrimaryTel)}
            className="inline-flex items-center gap-2 border border-dark-text/30 px-6 py-3.5 text-sm font-semibold text-dark-text transition-colors hover:bg-dark-text/10"
          >
            <Phone className="size-4" aria-hidden />
            {t.cta.callNow}
          </a>
        </div>
      </PageHero>

      {/* Founders → Chambers (required homepage order) */}
      <section className="border-b border-border bg-surface py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={home.foundersEyebrow}
            title={home.foundersTitle}
            lead={home.foundersLead}
          />
          <div className="mt-10">
            <FoundersGrid locale={locale} />
          </div>
          <Reveal delay={0.1}>
            <figure className="mt-10 border border-border bg-secondary">
              <img
                src={IMAGES.foundersTogether}
                alt={
                  locale === "hi"
                    ? "अधिवक्ता सुमित त्यागी एवं अधिवक्ता विशव प्रताप चैम्बर में"
                    : "Advocate Sumit Tyagi and Advocate Vishaw Pratap together at the chamber"
                }
                loading="lazy"
                className="mx-auto h-auto w-full object-contain"
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-sm text-ink-soft">
                {locale === "hi"
                  ? "संस्थापक एवं संस्थापक — ज़िला न्यायालय गाज़ियाबाद चैम्बर"
                  : "Founder & Founder — District Court chamber, Ghaziabad"}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Chambers — maps once on the homepage */}
      <section
        id="chambers"
        className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={home.chambersEyebrow}
            title={home.chambersTitle}
            lead={home.chambersBody}
          />
          <Reveal delay={0.08}>
            <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex gap-3 border border-border bg-surface p-4">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                    {home.chambersDays}
                  </dt>
                  <dd className="mt-1 text-ink">{SITE.workingDays}</dd>
                </div>
              </div>
              <div className="flex gap-3 border border-border bg-surface p-4">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                    {home.chambersHours}
                  </dt>
                  <dd className="mt-1 text-ink">{SITE.workingHours}</dd>
                </div>
              </div>
              <div className="flex gap-3 border border-border bg-surface p-4">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="sr-only">{t.contact.phoneLabel}</dt>
                  <dd className="flex flex-col gap-1">
                    <a href={telHref(SITE.phonePrimaryTel)} className="text-primary">
                      {SITE.phonePrimary}
                    </a>
                    <a href={telHref(SITE.phoneCofounderTel)} className="text-primary">
                      {SITE.phoneCofounder}
                    </a>
                    <a href={telHref(SITE.phoneSecondaryTel)} className="text-primary">
                      {SITE.phoneSecondary}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3 border border-border bg-surface p-4">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <div>
                  <dt className="sr-only">{t.contact.emailLabel}</dt>
                  <dd className="flex flex-col gap-1 break-all">
                    <a href={`mailto:${SITE.email}`} className="text-primary">
                      {SITE.email}
                    </a>
                    <a href={`mailto:${SITE.cofounderEmail}`} className="text-primary">
                      {SITE.cofounderEmail}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>
          <ul className="mt-8 grid gap-6 lg:grid-cols-2">
            {CHAMBERS.map((chamber, i) => (
              <Reveal as="li" key={chamber.id} delay={i * 0.08}>
                <article className="border border-border bg-surface p-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
                        {chamber.label[locale]}
                      </p>
                      <address className="mt-2 text-sm leading-relaxed text-ink not-italic">
                        {chamber.address}
                      </address>
                    </div>
                  </div>
                  <iframe
                    title={`${chamber.label.en} map`}
                    src={chamber.mapEmbed}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mt-4 h-52 w-full border border-border"
                  />
                  <a
                    href={chamber.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    <Navigation className="size-4" aria-hidden />
                    {home.chambersDirections}
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={waLink(
                locale === "hi"
                  ? "नमस्ते, मुझे परामर्श का समय चाहिए।"
                  : "Hello, I would like to book a consultation slot.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
            >
              <WhatsAppIcon className="size-4" />
              {t.cta.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <TrustBar items={home.trust} />

      {/* Courts marquee */}
      <TextMarquee items={COURTS.map((c) => c[locale])} />

      {/* Stats */}
      <section className="border-b border-border bg-surface py-14">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
            {EXTRA_UI.statsEyebrow[locale]}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={(i % 4) * 0.06}>
                <div className="border-t-2 border-primary/70 pt-4">
                  <dd className="font-display text-3xl font-bold text-ink sm:text-4xl">
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                    {s.label[locale]}
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <figure className="border border-border bg-secondary">
              <img
                src={IMAGES.advocatePortrait}
                alt="Advocate Sumit Tyagi"
                loading="lazy"
                className="mx-auto h-auto w-full object-contain"
              />
            </figure>
            <figure className="border border-border bg-secondary">
              <img
                src={IMAGES.teamVishaw}
                alt="Advocate Vishaw Pratap"
                loading="lazy"
                className="mx-auto h-auto w-full object-contain"
              />
            </figure>
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow={home.aboutEyebrow} title={t.about.h1} lead={t.about.lead} />
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">
                  {locale === "hi" ? "अनुभव" : "Experience"}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold text-ink">{SITE.years}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">
                  {locale === "hi" ? "कार्यक्षेत्र" : "Practice areas"}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold text-ink">
                  {String(PRACTICE_AREAS.length).padStart(2, "0")}
                </dd>
              </div>
            </dl>
            <AppLink
              to={`/${locale}/about`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
            >
              {t.cta.readMore}
              <ArrowRight className="size-4" aria-hidden />
            </AppLink>
          </Reveal>
        </div>
      </section>

      {/* Practice areas */}
      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading eyebrow={home.practiceEyebrow} title={home.practiceTitle} />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal as="li" key={area.slug} delay={(i % 3) * 0.08}>
                <PracticeAreaCard area={area} locale={locale} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <SectionHeading eyebrow={home.whyEyebrow} title={home.whyTitle} />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {home.why.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 0.08}>
              <div className="border-t border-border pt-6">
                <span className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Our Mission */}
      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={home.missionEyebrow}
              title={home.missionTitle}
              lead={home.missionBody}
            />
          </div>
          <Reveal delay={0.08}>
            <img
              src={IMAGES.advocateDesk}
              alt="Advocate Sumit Tyagi preparing case files at his desk in Ghaziabad"
              loading="lazy"
              className="aspect-4/3 w-full border border-border object-cover object-[center_20%]"
            />
          </Reveal>
        </div>
      </section>

      {/* Our Vision */}
      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMAGES.namePlate}
              alt="Tyag Raj Law Firm name plate — Advocate Sumit Tyagi, Legal Excellence, Trusted Advocacy"
              loading="lazy"
              className="aspect-[16/10] w-full border border-border bg-ink object-contain"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow={home.visionEyebrow}
              title={home.visionTitle}
              lead={home.visionBody}
            />
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading eyebrow={home.teamEyebrow} title={home.teamTitle} lead={home.teamLead} />
          <div className="mt-14">
            <TeamGrid locale={locale} mode="associates" />
          </div>
          <AppLink
            to={`/${locale}/team`}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
          >
            {t.nav.team}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={home.testimonialsEyebrow}
            title={home.testimonialsTitle}
            lead={home.sampleNote}
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <TestimonialCarousel locale={locale} />
          </div>
          <AppLink
            to={`/${locale}/testimonials`}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
          >
            {t.nav.testimonials}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow={DICT[locale].nav.book}
            title={DICT[locale].book.h1}
            lead={DICT[locale].book.lead}
          />
          <Reveal delay={0.08}>
            <WhatsAppBookingForm locale={locale} />
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-photo relative isolate overflow-hidden bg-dark-bg py-20 lg:py-28">
        <img
          aria-hidden
          alt=""
          src={IMAGES.courtBuilding}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-10">
          <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-dark-text/70 uppercase">
            {EXTRA_UI.processEyebrow[locale]}
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl text-dark-text md:text-4xl">
            {EXTRA_UI.processTitle[locale]}
          </h2>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal as="li" key={step.title.en} delay={(i % 4) * 0.08}>
                <div className="h-full border-t border-dark-text/25 pt-5">
                  <span className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-dark-text/60 uppercase">
                    {step.step[locale]}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-dark-text">
                    {step.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-dark-text/75">
                    {step.body[locale]}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading eyebrow={EXTRA_UI.faqEyebrow[locale]} title={EXTRA_UI.faqTitle[locale]} />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {FAQ.map((item, i) => (
              <Reveal key={item.q.en} delay={(i % 2) * 0.07}>
                <details className="group border border-border bg-surface p-5 open:border-primary/40">
                  <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:hidden">
                    {item.q[locale]}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a[locale]}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
