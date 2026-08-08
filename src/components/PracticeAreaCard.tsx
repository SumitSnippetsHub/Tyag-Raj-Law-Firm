import { } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { ArrowUpRight } from "lucide-react";
import { areaImage, type PracticeArea } from "@/lib/practice-areas";
import type { Locale } from "@/lib/site";

export function PracticeAreaCard({
  area,
  locale,
  index,
}: {
  area: PracticeArea;
  locale: Locale;
  index: number;
}) {
  return (
    <AppLink
      to={`/${locale}/practice-areas/${area.slug}`}
      className="group flex h-full flex-col border border-border bg-surface transition-colors hover:border-primary"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-muted">
        <img
          src={areaImage(area)}
          alt={`${area.title.en} — Advocate Sumit Tyagi, Ghaziabad`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink">
          {area.title[locale]}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {area.short[locale]}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {locale === "hi" ? "अधिक जानें" : "Learn more"}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </AppLink>
  );
}