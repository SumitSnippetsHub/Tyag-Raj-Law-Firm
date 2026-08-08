import { createFileRoute } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TrustBar } from "@/components/TrustBar";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import {
  TestimonialCarousel,
  TestimonialMarquee,
} from "@/components/TestimonialMarquee";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { JsonLd } from "@/components/JsonLd";
import { IMAGES } from "@/lib/images";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { SITE, waLink } from "@/lib/site";
import { DICT, useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "अधिवक्ता सुमित त्यागी — गाज़ियाबाद, नोएडा, दिल्ली एनसीआर वकील"
      : "Advocate in Ghaziabad | Sumit Tyagi, Advocate & Legal Consultant";
    const description = hi
      ? "गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में 12+ वर्ष अनुभवी अधिवक्ता सुमित त्यागी — आपराधिक, सिविल, वैवाहिक, रेरा व चेक बाउंस मामले।"
      : "Advocate Sumit Tyagi — 12+ years handling criminal, civil, matrimonial, NDPS, cheque bounce, RERA and consumer matters in Ghaziabad, Noida and Delhi NCR.";
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
          "@type": "Attorney",
          name: `${SITE.firm} — Advocate ${SITE.advocate}`,
          description:
            "Advocate & Legal Consultant handling criminal, civil, matrimonial, NDPS, cheque bounce, cyber, RERA, consumer and IPR matters in Delhi NCR.",
          image: IMAGES.advocateStanding,
          telephone: SITE.phonePrimary,
          email: SITE.email,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Ch. No. 33A, New Building, Second Floor, District & Session Court",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          areaServed: SITE.areasServed,
          openingHours: "Mo-Sa 10:00-18:00",
          knowsLanguage: ["en", "hi"],
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
        image={IMAGES.justiceStatue}
        mobileImage={IMAGES.advocateStanding}
        alt="Bronze scales of justice statue representing legal practice in Delhi NCR"
        eyebrow={home.eyebrow}
        title={
          <>
            {highlightName(home.h1, "dark")}
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
            href="tel:+918060603368"
            className="inline-flex items-center gap-2 border border-dark-text/30 px-6 py-3.5 text-sm font-semibold text-dark-text transition-colors hover:bg-dark-text/10"
          >
            <Phone className="size-4" aria-hidden />
            {t.cta.callNow}
          </a>
        </div>
      </PageHero>

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
      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal>
          {/* Client-supplied photograph of Advocate Sumit Tyagi in chamber. */}
          <img
            src={IMAGES.advocateStanding}
            alt="Advocate Sumit Tyagi in his chamber at the District & Session Court, Ghaziabad"
            loading="lazy"
            className="aspect-4/5 w-full border border-border object-cover"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow={home.aboutEyebrow}
            title={home.aboutTitle}
            lead={home.aboutBody}
          />
          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">
                  {locale === "hi" ? "अनुभव" : "Experience"}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold text-ink">
                  {SITE.years}
                </dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">
                  {locale === "hi" ? "कार्यक्षेत्र" : "Practice areas"}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold text-ink">09</dd>
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
          <SectionHeading
            eyebrow={home.practiceEyebrow}
            title={home.practiceTitle}
          />
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
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={home.testimonialsEyebrow}
            title={home.testimonialsTitle}
            lead={home.sampleNote}
          />
        </div>
        <div className="mt-14">
          <TestimonialMarquee locale={locale} />
        </div>
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 mt-12 max-w-3xl">
          <TestimonialCarousel locale={locale} />
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
          src={IMAGES.lawBooks}
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

      {/* Assurances */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 lg:py-20">
        <ul className="grid gap-8 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, text: home.why[0]!.title },
            { icon: Scale, text: home.why[1]!.title },
            { icon: Clock, text: home.why[2]!.title },
          ].map((item, i) => (
            <Reveal as="li" key={item.text} delay={i * 0.07}>
              <div className="flex items-start gap-4 border border-border bg-surface p-5">
                <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <p className="font-display text-sm font-semibold text-ink">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-secondary py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10">
          <SectionHeading
            eyebrow={EXTRA_UI.faqEyebrow[locale]}
            title={EXTRA_UI.faqTitle[locale]}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {FAQ.map((item, i) => (
              <Reveal key={item.q.en} delay={(i % 2) * 0.07}>
                <details className="group border border-border bg-surface p-5 open:border-primary/40">
                  <summary className="cursor-pointer list-none font-display text-base font-semibold text-ink marker:hidden">
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

      {/* Local SEO / service area */}
      <section className="border-t border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-10 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={home.areaEyebrow}
              title={home.areaTitle}
              lead={home.areaBody}
            />
            <Reveal delay={0.1}>
              <address className="mt-8 not-italic text-sm leading-relaxed text-ink">
                {SITE.address}
                <br />
                <a href="tel:+918060603368" className="text-primary">
                  {SITE.phonePrimary}
                </a>
              </address>
              <a
                href={waLink(
                  locale === "hi"
                    ? "नमस्ते, मुझे परामर्श का समय चाहिए।"
                    : "Hello, I would like to book a consultation slot.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent-2"
              >
                <WhatsAppIcon className="size-4" />
                {t.cta.whatsapp}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <iframe
              title={t.contact.mapTitle}
              src={SITE.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border border-border lg:h-full"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}