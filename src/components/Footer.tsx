import { AppLink } from "@/components/AppLink";
import { Mail, MapPin, Phone } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { CHAMBERS, SITE, telHref } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const { locale, t } = useT();

  return (
    <footer className="relative isolate overflow-hidden bg-dark-bg text-dark-text">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2 whitespace-nowrap font-display text-[7rem] leading-none font-bold tracking-tighter text-dark-text opacity-[0.055] sm:text-[12rem] lg:text-[16rem]"
      >
        TYAG RAJ
      </span>

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={IMAGES.logoFirm}
            alt="Tyag Raj Law Firm logo"
            loading="lazy"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-text/70">
            {t.footer.about}
          </p>
          <div className="mt-6">
            <LanguageToggle tone="dark" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-dark-text/50 uppercase">
            {t.footer.quick}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: `/${locale}`, label: t.nav.home },
              { to: `/${locale}/about`, label: t.nav.about },
              { to: `/${locale}/practice-areas`, label: t.nav.practice },
              { to: `/${locale}/team`, label: t.nav.team },
              { to: `/${locale}/testimonials`, label: t.nav.testimonials },
              { to: `/${locale}/contact`, label: t.nav.contact },
              { to: `/${locale}/book-consultation`, label: t.nav.book },
            ].map((l) => (
              <li key={l.to}>
                <AppLink
                  to={l.to}
                  className="text-dark-text/70 transition-colors hover:text-dark-text"
                >
                  {l.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-dark-text/50 uppercase">
            {t.footer.areas}
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {PRACTICE_AREAS.map((a) => (
              <li key={a.slug}>
                <AppLink
                  to={`/${locale}/practice-areas/${a.slug}`}
                  className="text-dark-text/70 transition-colors hover:text-dark-text"
                >
                  {a.title[locale]}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-dark-text/50 uppercase">
            {t.footer.reach}
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-dark-text/70">
            {CHAMBERS.map((chamber) => (
              <li key={chamber.id} className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold text-dark-text/85">
                    {chamber.label[locale]}
                  </p>
                  <address className="not-italic">{chamber.address}</address>
                </div>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span className="flex flex-col">
                <a
                  href={telHref(SITE.phonePrimaryTel)}
                  className="hover:text-dark-text"
                >
                  {SITE.phonePrimary}
                </a>
                <a
                  href={telHref(SITE.phoneCofounderTel)}
                  className="hover:text-dark-text"
                >
                  {SITE.phoneCofounder}
                </a>
                <a
                  href={telHref(SITE.phoneSecondaryTel)}
                  className="hover:text-dark-text"
                >
                  {SITE.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span className="flex flex-col">
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-dark-text"
                >
                  {SITE.email}
                </a>
                <a
                  href={`mailto:${SITE.cofounderEmail}`}
                  className="break-all hover:text-dark-text"
                >
                  {SITE.cofounderEmail}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl border-t border-dark-text/10 px-5 py-8 md:px-10">
        <p className="text-xs leading-relaxed text-dark-text/45">
          {t.footer.disclaimer}
        </p>
        <p className="mt-4 text-xs text-dark-text/45">
          © {new Date().getFullYear()} {SITE.firm}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
