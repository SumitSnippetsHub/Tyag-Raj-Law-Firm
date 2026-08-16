import { AppLink } from "@/components/AppLink";
import { ArrowUpRight } from "lucide-react";
import { areaImage, type PracticeArea } from "@/lib/practice-areas";
import type { Locale } from "@/lib/site";

const CONTAIN_SLUGS = new Set([
  "cheque-bounce-138-ni-act",
  "mact-accidental-cases",
  "bail-matters",
  "consumer-matters",
  "court-marriage-registration",
]);

export function PracticeAreaCard({
  area,
  locale,
  index,
}: {
  area: PracticeArea;
  locale: Locale;
  index: number;
}) {
  const contain = CONTAIN_SLUGS.has(area.slug);

  return (
    <AppLink
      to={`/${locale}/practice-areas/${area.slug}`}
      className="surface-card surface-card--interactive group relative flex h-full flex-col"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100"
      />
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        <img
          src={areaImage(area)}
          alt={`${area.title.en} — Advocate Sumit Tyagi, Ghaziabad`}
          loading="lazy"
          className={`size-full transition-transform duration-700 group-hover:scale-[1.03] ${
            contain ? "object-contain bg-secondary" : "object-cover"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-border/70 p-6">
        <span className="font-brand text-[0.7rem] font-semibold tracking-[0.2em] text-primary uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
          {area.title[locale]}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {area.short[locale]}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {locale === "hi" ? "अधिक जानें" : "Learn more"}
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </AppLink>
  );
}
