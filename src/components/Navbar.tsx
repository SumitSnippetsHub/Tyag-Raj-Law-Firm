import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { AppLink } from "@/components/AppLink";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
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
    { to: `/${locale}/team`, label: t.nav.team },
    { to: `/${locale}/testimonials`, label: t.nav.testimonials },
    { to: `/${locale}/contact`, label: t.nav.contact },
  ];

  const greeting =
    locale === "hi"
      ? "नमस्ते, मुझे अधिवक्ता सुमित त्यागी से विधिक परामर्श चाहिए।"
      : "Hello, I would like a legal consultation with Advocate Sumit Tyagi.";

  /* Solid when scrolled or menu open; dark translucent panel over the hero. */
  const dark = !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Slim contact strip — hidden on the smallest screens */}
      <div className="hidden bg-dark-bg text-dark-text sm:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2 md:px-10">
          <p className="truncate text-[0.7rem] tracking-wide text-dark-text/70">
            {SITE.address}
          </p>
          <div className="flex shrink-0 items-center gap-4 text-[0.7rem] font-semibold">
            <a
              href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 text-dark-text/85 transition-colors hover:text-dark-text"
            >
              <Phone className="size-3.5" aria-hidden />
              {SITE.phonePrimary}
            </a>
            <a
              href={waLink(greeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-dark-text/85 transition-colors hover:text-dark-text"
            >
              <WhatsAppIcon className="size-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-300 ${
          dark
            ? "border-dark-text/15 bg-dark-bg/80 backdrop-blur-md"
            : "border-border bg-surface shadow-[0_1px_20px_-12px_oklch(0.2_0_0/0.5)]"
        }`}
      >
        <nav className="mx-auto grid h-24 w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-20 sm:gap-4 sm:px-5 md:px-10 lg:flex lg:flex-nowrap lg:justify-between lg:gap-4 xl:gap-6">
          <AppLink
            to={`/${locale}`}
            className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:max-w-[15.5rem] lg:flex-none xl:max-w-none"
            aria-label={`${SITE.firm} — home`}
          >
            <img
              src={dark ? IMAGES.logoLight : IMAGES.logoFirm}
              alt=""
              className="h-14 w-auto shrink-0 object-contain sm:h-12"
            />
            <span className="flex min-w-0 flex-col justify-center leading-none">
              <span className="whitespace-nowrap font-brand text-[1.15rem] sm:text-lg xl:text-xl">
                <span
                  className={`font-bold ${
                    dark ? "text-dark-text" : "text-ink"
                  }`}
                >
                  Tyag
                </span>{" "}
                <span className="font-semibold italic text-primary">
                  Raj Law Firm
                </span>
              </span>
              <span
                className={`mt-1.5 truncate text-[0.55rem] font-medium tracking-[0.14em] uppercase sm:mt-1 sm:text-[0.58rem] ${
                  dark ? "text-dark-text/55" : "text-ink-soft"
                }`}
              >
                {SITE.tagline}
              </span>
            </span>
          </AppLink>

          <ul className="hidden shrink-0 items-center gap-5 xl:gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.to} className="shrink-0">
                <AppLink
                  to={l.to}
                  activeOptions={{ exact: l.to === `/${locale}` }}
                  className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                    dark
                      ? "text-dark-text/85 hover:text-dark-text"
                      : "text-ink-soft hover:text-primary"
                  }`}
                  activeProps={{
                    className: dark
                      ? "whitespace-nowrap text-dark-text underline decoration-2 underline-offset-8"
                      : "whitespace-nowrap text-primary underline decoration-2 underline-offset-8",
                  }}
                >
                  {l.label}
                </AppLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LanguageToggle tone={dark ? "dark" : "light"} />
            </div>
            <a
              href={waLink(greeting)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2 sm:inline-flex"
            >
              <WhatsAppIcon className="size-4" />
              {t.cta.whatsapp}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex size-12 items-center justify-center border sm:size-11 lg:hidden ${
                dark
                  ? "border-dark-text/30 text-dark-text"
                  : "border-border bg-secondary text-ink"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-0 bottom-0 top-24 sm:top-[6.3rem] z-40 overflow-y-auto bg-surface lg:hidden"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              aria-hidden
              alt=""
              src={IMAGES.watermarkFirm}
              className="pointer-events-none absolute inset-x-4 bottom-8 mx-auto h-auto w-auto max-h-[55svh] max-w-[min(85vw,22rem)] object-contain opacity-[0.09]"
            />
            <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-8 md:px-10">
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
                <li>
                  <AppLink
                    to={`/${locale}/book-consultation`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-4 font-display text-2xl font-semibold text-primary"
                  >
                    {t.nav.book}
                  </AppLink>
                </li>
              </ul>
              <div className="flex flex-col gap-4 pb-6">
                <a
                  href={waLink(greeting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  <WhatsAppIcon className="size-4" />
                  {t.cta.whatsapp}
                </a>
                <a
                  href={`tel:${SITE.phonePrimary.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-sm font-semibold text-ink"
                >
                  <Phone className="size-4" aria-hidden />
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
