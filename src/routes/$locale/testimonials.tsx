import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TestimonialCarousel } from "@/components/TestimonialMarquee";
import { IMAGES } from "@/lib/images";
import { TESTIMONIALS } from "@/lib/testimonials";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/testimonials")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "मुवक्किलों के प्रशंसापत्र | अधिवक्ता सुमित त्यागी"
      : "Client Testimonials | Advocate Sumit Tyagi, Ghaziabad";
    const description = hi
      ? "आपराधिक, वैवाहिक, चेक बाउंस एवं रेरा मामलों में अधिवक्ता सुमित त्यागी के मुवक्किलों के अनुभव।"
      : "Read client experiences across criminal, matrimonial, cheque bounce, RERA and cyber matters handled by Advocate Sumit Tyagi.";
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
  component: Testimonials,
});

function Testimonials() {
  const { locale, t } = useT();

  return (
    <>
      <PageHero
        priority
        image={IMAGES.gavel}
        alt="Wooden gavel lit against a dark background, symbolising judicial outcomes"
        text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase={t.nav.testimonials}
        title={t.testimonialsPage.h1}
        lead={t.testimonialsPage.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <Reveal>
          <p className="max-w-2xl text-sm text-ink-soft">{t.home.sampleNote}</p>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal as="li" key={item.name} delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col border border-border bg-surface p-7">
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
      </section>
    </>
  );
}