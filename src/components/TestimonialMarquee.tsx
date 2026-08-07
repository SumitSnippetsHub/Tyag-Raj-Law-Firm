import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";
import type { Locale } from "@/lib/site";

function Card({ item, locale }: { item: (typeof TESTIMONIALS)[number]; locale: Locale }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col border border-border bg-surface p-6 sm:w-[23rem]">
      <Quote className="size-5 text-primary" aria-hidden />
      <blockquote className="mt-4 text-sm leading-relaxed text-ink">
        {item.quote[locale]}
      </blockquote>
      <figcaption className="mt-5 text-xs text-ink-soft">
        <span className="font-semibold text-ink">{item.name}</span> · {item.city}
        <span className="mt-1 block text-primary">{item.tag[locale]}</span>
      </figcaption>
    </figure>
  );
}

export function TestimonialMarquee({ locale }: { locale: Locale }) {
  const track = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <div className="relative overflow-hidden py-2" aria-label="Client testimonials">
      <div className="marquee-track flex w-max gap-5">
        {track.map((item, i) => (
          <Card key={`${item.name}-${i}`} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialCarousel({ locale }: { locale: Locale }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000,
    );
    return () => window.clearInterval(id);
  }, []);

  const item = TESTIMONIALS[index]!;

  return (
    <div className="border border-border bg-surface p-8 md:p-12">
      <Quote className="size-7 text-primary" aria-hidden />
      <blockquote className="mt-6 font-display text-xl leading-snug text-ink md:text-2xl">
        {item.quote[locale]}
      </blockquote>
      <p className="mt-6 text-sm text-ink-soft">
        <span className="font-semibold text-ink">{item.name}</span> · {item.city} ·{" "}
        <span className="text-primary">{item.tag[locale]}</span>
      </p>
      <div className="mt-8 flex gap-2">
        {TESTIMONIALS.map((tItem, i) => (
          <button
            key={tItem.name}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-1 w-8 transition-colors ${i === index ? "bg-primary" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
}