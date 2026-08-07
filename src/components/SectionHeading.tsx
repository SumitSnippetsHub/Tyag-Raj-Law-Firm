import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow ? (
        <p className={`text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase ${tone === "dark" ? "text-dark-text/50" : "text-primary"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-3xl leading-tight md:text-4xl ${
          tone === "dark" ? "text-dark-text" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-base leading-relaxed ${
            tone === "dark" ? "text-dark-text/70" : "text-ink-soft"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}