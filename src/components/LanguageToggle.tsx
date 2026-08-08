import { useLocation } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { LOCALES, type Locale } from "@/lib/site";
import { useLocale } from "@/lib/i18n";

const LABEL: Record<Locale, string> = { en: "EN", hi: "हिं" };

export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const current = useLocale();
  const { pathname } = useLocation();

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 ${
        tone === "dark"
          ? "border-dark-text/25"
          : "border-border bg-surface"
      }`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((loc) => {
        const target = pathname.replace(/^\/(en|hi)/, `/${loc}`) || `/${loc}`;
        const active = loc === current;
        return (
          <AppLink
            key={loc}
            to={target.startsWith(`/${loc}`) ? target : `/${loc}`}
            hrefLang={loc}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : tone === "dark"
                  ? "text-dark-text/70 hover:text-dark-text"
                  : "text-ink-soft hover:text-primary"
            }`}
          >
            {LABEL[loc]}
          </AppLink>
        );
      })}
    </div>
  );
}