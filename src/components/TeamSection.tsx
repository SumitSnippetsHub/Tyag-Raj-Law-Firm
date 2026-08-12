import { Mail, Phone, User } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { FOUNDERS, TEAM, telHref, type Locale } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const FOUNDER_NAMES = new Set<string>(FOUNDERS.map((f) => f.name));

export function TeamGrid({
  locale,
  mode = "all",
}: {
  locale: Locale;
  /** `associates` omits founders when they already appear in FoundersGrid. */
  mode?: "all" | "associates";
}) {
  const members =
    mode === "associates"
      ? TEAM.filter((m) => !FOUNDER_NAMES.has(m.name))
      : TEAM;

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, i) => (
        <Reveal as="li" key={member.name} delay={(i % 3) * 0.08}>
          <article className="flex h-full flex-col border border-border bg-surface">
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
            <div className="flex flex-1 flex-col border-t border-border p-4 sm:p-5">
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
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}

/** Founder + Founder profile cards — mobile-first, full photos. */
export function FoundersGrid({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {FOUNDERS.map((person, i) => (
        <Reveal as="li" key={person.name} delay={i * 0.08}>
          <article className="h-full border border-border bg-surface">
            <div className="bg-secondary">
              <img
                src={IMAGES[person.image]}
                alt={`${person.name} — ${person.title[locale]}`}
                loading={i === 0 ? "eager" : "lazy"}
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
            <div className="border-t border-border p-5">
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
            </div>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
