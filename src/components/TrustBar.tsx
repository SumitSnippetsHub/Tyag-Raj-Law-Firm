import { ShieldCheck } from "lucide-react";

export function TrustBar({ items }: { items: readonly string[] }) {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-4">
      <div className="marquee-track marquee-track--fast flex w-max items-center gap-10">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-xs font-semibold tracking-wide text-ink-soft uppercase"
          >
            <ShieldCheck className="size-4 text-primary" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}