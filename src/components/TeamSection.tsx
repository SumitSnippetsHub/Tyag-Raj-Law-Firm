import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, Phone, User } from "lucide-react";
import { AppLink } from "@/components/AppLink";
import { IMAGES } from "@/lib/images";
import { FOUNDERS, TEAM, telHref, type Locale } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const FOUNDER_NAMES = new Set<string>(FOUNDERS.map((f) => f.name));
const FOUNDERS_BY_NAME = new Map(FOUNDERS.map((f) => [f.name, f]));

type TeamMember = (typeof TEAM)[number];
type FounderContact = (typeof FOUNDERS)[number];

function teamMembers(mode: "all" | "associates"): TeamMember[] {
  return mode === "associates"
    ? TEAM.filter((m) => !FOUNDER_NAMES.has(m.name))
    : [...TEAM];
}

function FounderContactLinks({ person }: { person: FounderContact }) {
  return (
    <div className="mt-5 flex flex-col gap-2 text-sm font-semibold">
      <a
        href={telHref(person.phoneTel)}
        className="inline-flex items-center gap-2 text-primary"
      >
        <Phone className="size-4 shrink-0" aria-hidden />
        {person.phone}
      </a>
      <a
        href={`mailto:${person.email}`}
        className="inline-flex items-center gap-2 text-primary break-all"
      >
        <Mail className="size-4 shrink-0" aria-hidden />
        {person.email}
      </a>
    </div>
  );
}

export function TeamGrid({
  locale,
  mode = "all",
}: {
  locale: Locale;
  /** `associates` omits founders when they already appear in FoundersGrid. */
  mode?: "all" | "associates";
}) {
  const members = teamMembers(mode);

  return (
    <ul className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => {
        const founder = FOUNDERS_BY_NAME.get(member.name);

        return (
          <Reveal as="li" key={member.name} delay={(i % 3) * 0.08}>
            <article className="surface-card surface-card--accent surface-card--interactive flex flex-col">
              {member.image ? (
                <div className="bg-secondary">
                  <img
                    src={IMAGES[member.image]}
                    alt={`${member.name} — ${member.role[locale]}`}
                    loading="lazy"
                    className="mx-auto h-auto w-full object-contain object-top"
                  />
                </div>
              ) : (
                /* TODO: client to provide photo for this team member */
                <div className="flex aspect-4/5 w-full items-center justify-center bg-secondary">
                  <User className="size-14 text-ink-soft/40" aria-hidden />
                </div>
              )}
              <div className="border-t border-border/70 p-4 sm:p-5">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary">
                  {member.role[locale]}
                </p>
                {member.detail ? (
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {member.detail[locale]}
                  </p>
                ) : null}
                {founder ? <FounderContactLinks person={founder} /> : null}
              </div>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}

const cardWidth =
  "w-[min(72vw,16.5rem)] shrink-0 snap-start sm:w-[17.5rem] lg:w-[18.5rem]";

/** Homepage Expert Team — auto-slides 3 members, then “View our team”. */
export function TeamSlider({
  locale,
  mode = "associates",
}: {
  locale: Locale;
  mode?: "all" | "associates";
}) {
  const members = teamMembers(mode);
  const total = members.length + 1; // members + CTA
  const scrollerRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const inViewRef = useRef(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      if (pausedRef.current || !inViewRef.current) return;
      setIndex((i) => (i + 1) % total);
    }, 3800);

    return () => window.clearInterval(id);
  }, [total]);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const card = root.children[index] as HTMLElement | undefined;
    if (!card) return;
    // Horizontal-only scroll — never use scrollIntoView (it jumps the page).
    const left =
      card.offsetLeft - (root.clientWidth - card.clientWidth) / 2;
    root.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [index]);

  const viewLabel = locale === "hi" ? "हमारी टीम देखें" : "View our team";
  const firmLine =
    locale === "hi"
      ? "त्याग राज लॉ फर्म · गाज़ियाबाद"
      : "Tyag Raj Law Firm · Ghaziabad";

  return (
    <div
      ref={rootRef}
      className="relative -mx-5 sm:mx-0"
      aria-label={locale === "hi" ? "विशेषज्ञ टीम" : "Expert team"}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        pausedRef.current = false;
      }}
    >
      <ul
        ref={scrollerRef}
        className="relative flex items-stretch gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-5 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {members.map((member) => (
          <li key={member.name} className={cardWidth}>
            <article className="surface-card surface-card--accent group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                {member.image ? (
                  <img
                    src={IMAGES[member.image]}
                    alt={`${member.name} — ${member.role[locale]}`}
                    loading="lazy"
                    className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <User className="size-14 text-ink-soft/40" aria-hidden />
                  </div>
                )}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent"
                />
                <p className="absolute bottom-3 left-3 right-3 font-display text-[0.65rem] font-semibold tracking-[0.18em] text-primary-on-dark uppercase drop-shadow">
                  {member.role[locale]}
                </p>
              </div>
              <div className="border-t border-border/70 bg-surface px-4 py-3.5 sm:px-5 sm:py-4">
                <h3 className="font-display text-base font-semibold text-ink sm:text-lg">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-ink-soft sm:text-sm">{firmLine}</p>
              </div>
            </article>
          </li>
        ))}

        <li className={cardWidth}>
          <AppLink
            to={`/${locale}/team`}
            className="surface-card surface-card--accent group flex h-full flex-col items-center justify-center bg-dark-bg px-6 py-10 text-center transition-colors hover:border-primary"
          >
            <span className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-primary-on-dark uppercase">
              {locale === "hi" ? "पूरी टीम" : "Full roster"}
            </span>
            <span className="mt-4 font-display text-xl font-semibold text-dark-text sm:text-2xl">
              {viewLabel}
            </span>
            <span className="mt-3 max-w-[14rem] text-sm leading-relaxed text-dark-text/75">
              {locale === "hi"
                ? "संस्थापक एवं सहयोगी अधिवक्ता — पूरी प्रोफ़ाइल देखें।"
                : "Founders and associate advocates — see every profile."}
            </span>
            <span className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors group-hover:bg-accent-2">
              {viewLabel}
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </AppLink>
        </li>
      </ul>

      <div className="mt-5 flex justify-center gap-2 px-5 sm:px-0">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={i < members.length ? members[i]!.name : viewLabel}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** Founder + Founder profile cards — mobile-first, full photos. */
export function FoundersGrid({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {FOUNDERS.map((person, i) => (
        <Reveal as="li" key={person.name} delay={i * 0.08}>
          <article className="surface-card surface-card--accent surface-card--interactive h-full">
            <div className="bg-secondary">
              <img
                src={IMAGES[person.image]}
                alt={`${person.name} — ${person.title[locale]}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
            <div className="border-t border-border/70 p-5">
              <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] uppercase text-primary">
                {person.title[locale]}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Advocate {person.name}
              </h3>
              <dl className="mt-4 space-y-2 text-sm text-ink-soft">
                <div>
                  <dt className="sr-only">
                    {locale === "hi" ? "योग्यता" : "Education"}
                  </dt>
                  <dd>{person.education}</dd>
                </div>
                <div>
                  <dt className="sr-only">
                    {locale === "hi" ? "अनुभव" : "Experience"}
                  </dt>
                  <dd>
                    {locale === "hi" ? "अनुभव" : "Experience"}:{" "}
                    {person.experience[locale]}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">
                    {locale === "hi" ? "न्यायालय" : "Court"}
                  </dt>
                  <dd>{person.court[locale]}</dd>
                </div>
                <div>
                  <dt className="sr-only">
                    {locale === "hi" ? "कार्यक्षेत्र" : "Focus"}
                  </dt>
                  <dd>{person.focus[locale]}</dd>
                </div>
              </dl>
              <FounderContactLinks person={person} />
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
