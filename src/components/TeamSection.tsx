import { User } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { TEAM } from "@/lib/site";
import type { Locale } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function TeamGrid({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TEAM.map((member, i) => (
        <Reveal as="li" key={member.name} delay={(i % 3) * 0.08}>
          <article className="h-full border border-border bg-surface">
            {member.image ? (
              <img
                src={IMAGES[member.image]}
                alt={`${member.name} — ${member.role[locale]}`}
                loading="lazy"
                className="aspect-4/5 w-full object-cover object-[center_12%]"
              />
            ) : (
              /* TODO: client to provide role title, bio, and photo for this team member */
              <div className="flex aspect-4/5 w-full items-center justify-center bg-secondary">
                <User className="size-14 text-ink-soft/40" aria-hidden />
              </div>
            )}
            <div className="border-t border-border p-5">
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