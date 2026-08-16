import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  TestimonialCarousel,
  TestimonialMarquee,
} from "@/components/TestimonialMarquee";
import { TextMarquee } from "@/components/TextMarquee";
import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { COURTS } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { TESTIMONIALS } from "@/lib/testimonials";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildSeo, toLocale } from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/testimonials")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const title = hi
      ? "मुवक्किलों के प्रशंसापत्र | अधिवक्ता सुमित त्यागी"
      : "Client Testimonials | Advocate Sumit Tyagi, Ghaziabad";
    const description = hi
      ? "आपराधिक, वैवाहिक, चेक बाउंस एवं रेरा मामलों में अधिवक्ता सुमित त्यागी के मुवक्किलों के अनुभव।"
      : "Read client experiences across criminal, matrimonial, cheque bounce, RERA and cyber matters handled by Advocate Sumit Tyagi.";
    return buildSeo({ locale, path: "testimonials", title, description });
  },
  component: Testimonials,
});

function Testimonials() {
  const { locale, t } = useT();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.nav.testimonials, path: "testimonials" },
        ])}
      />

      <PageHero
        priority
        image={IMAGES.gavel}
        mobileImage={IMAGES.advocateStanding}
        alt="Wooden gavel lit against a dark background, symbolising judicial outcomes"
        eyebrow={t.nav.testimonials}
        title={t.testimonialsPage.h1}
        lead={t.testimonialsPage.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <div className="border-b border-border bg-secondary py-12">
        <TestimonialMarquee locale={locale} />
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <Reveal>
          <p className="max-w-2xl text-sm text-ink-soft">{t.home.sampleNote}</p>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal as="li" key={item.name} delay={(i % 3) * 0.08}>
              <figure className="surface-card surface-card--interactive flex h-full flex-col p-7">
                <Quote className="size-5 text-primary" aria-hidden />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink">
                  {item.quote[locale]}
                </blockquote>
                <figcaption className="mt-6 text-xs text-ink-soft">
                  <span className="font-semibold text-ink">{item.name}</span> ·{" "}
                  {item.city}
                  <span className="mt-1 block text-primary">{item.tag[locale]}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 max-w-3xl">
          <TestimonialCarousel locale={locale} />
        </div>

        <Reveal delay={0.1}>
          <AppLink
            to={`/${locale}/book-consultation`}
            className="mt-14 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
          >
            {t.cta.bookFree}
            <ArrowRight className="size-4" aria-hidden />
          </AppLink>
        </Reveal>
      </section>
    </>
  );
}