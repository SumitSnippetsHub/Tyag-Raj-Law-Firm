import { AppLink } from "@/components/AppLink";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { IMAGES } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";
import { useT } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const { locale, t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: `/${locale}`, label: t.nav.home },
    { to: `/${locale}/about`, label: t.nav.about },
    { to: `/${locale}/practice-areas`, label: t.nav.practice },
    { to: `/${locale}/testimonials`, label: t.nav.testimonials },
    { to: `/${locale}/contact`, label: t.nav.contact },
  ];

  const greeting =
    locale === "hi"
      ? "नमस्ते, मुझे अधिवक्ता सुमित त्यागी से विधिक परामर्श चाहिए।"
      : "Hello, I would like a legal consultation with Advocate Sumit Tyagi.";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-surface"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto w-full max-w-6xl px-5 md:px-10 flex h-20 items-center justify-between gap-6">
        <AppLink
          to={`/${locale}`}
          className="flex shrink-0 items-center gap-3"
          aria-label={`${SITE.firm} — home`}
        >
          <img
            src={IMAGES.logo}
            alt="Advocate Sumit Tyagi — Tyagi Raj Law Firm logo with scales of justice"
            className={`h-9 w-auto rounded-sm ${scrolled || open ? "" : "bg-surface/95 px-1.5 py-1"}`}
          />
        </AppLink>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <AppLink
                to={l.to}
                activeOptions={{ exact: l.to === `/${locale}` }}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-ink-soft hover:text-primary"
                    : "text-dark-text/80 hover:text-dark-text"
                }`}
                activeProps={{
                  className: scrolled ? "text-primary" : "text-dark-text",
                }}
              >
                {l.label}
              </AppLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageToggle tone={scrolled || open ? "light" : "dark"} />
          </div>
          <a
            href={waLink(greeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden />
            {t.cta.whatsapp}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex size-10 items-center justify-center border lg:hidden ${
              scrolled || open
                ? "border-border text-ink"
                : "border-dark-text/30 text-dark-text"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-0 top-20 bottom-0 z-40 bg-surface lg:hidden"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto w-full max-w-6xl px-5 md:px-10 flex h-full flex-col gap-8 py-10">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <AppLink
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block border-b border-border py-4 font-display text-2xl font-semibold text-ink"
                    >
                      {l.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4">
                <LanguageToggle />
                <a
                  href={waLink(greeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  {t.cta.whatsapp}
                </a>
                <a
                  href={`tel:${SITE.whatsapp}`}
                  className="text-sm text-ink-soft"
                >
                  {SITE.phonePrimary}
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}