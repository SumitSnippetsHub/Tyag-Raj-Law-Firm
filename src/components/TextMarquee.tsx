import { Scale } from "lucide-react";

/** Continuous scrolling strip of short phrases (courts, forums, keywords). */
export function TextMarquee({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "light";
}) {
  const track = [...items, ...items];
  return (
    <div
      className={`marquee-mask relative overflow-hidden border-y py-4 ${
        tone === "dark"
          ? "border-dark-text/15 bg-dark-bg text-dark-text"
          : "border-border bg-secondary text-ink"
      }`}
      aria-label="Courts and forums"
    >
      <div className="marquee-track marquee-track--fast flex w-max items-center gap-8">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 font-display text-sm font-semibold tracking-wide whitespace-nowrap sm:text-base"
          >
            <Scale
              className={`size-4 ${tone === "dark" ? "text-dark-text/45" : "text-primary"}`}
              aria-hidden
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
