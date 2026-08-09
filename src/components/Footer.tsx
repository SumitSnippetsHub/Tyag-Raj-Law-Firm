import { AppLink } from "@/components/AppLink";
import { Mail, MapPin, Phone } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
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
        TYAGI RAJ
      </span>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-10 grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={IMAGES.logoFirm}
            alt="Tyagi Raj Law Firm logo"
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-dark-text/70">
            {t.footer.about}
          </p>
          <div className="mt-6">
            <LanguageToggle tone="dark" />
          </div>
        </div>

        <div>
          <h2 className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-dark-text/50">{t.footer.quick}</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: `/${locale}`, label: t.nav.home },
              { to: `/${locale}/about`, label: t.nav.about },
              { to: `/${locale}/practice-areas`, label: t.nav.practice },
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
          <h2 className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-dark-text/50">{t.footer.areas}</h2>
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
          <h2 className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-dark-text/50">{t.footer.reach}</h2>
          <ul className="mt-5 space-y-4 text-sm text-dark-text/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <address className="not-italic">{SITE.address}</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span className="flex flex-col">
                <a href="tel:+918060603368" className="hover:text-dark-text">
                  {SITE.phonePrimary}
                </a>
                <a href="tel:+919217620368" className="hover:text-dark-text">
                  {SITE.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="hover:text-dark-text">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 md:px-10 border-t border-dark-text/10 py-8">
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