import { motion, useReducedMotion } from "motion/react";
import { Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { LanguageToggle } from "@/components/LanguageToggle";
import { SITE, telHref, waLink } from "@/lib/site";
import { useLocale } from "@/lib/i18n";

/**
 * Persistent quick actions: Call, WhatsApp, Email.
 * Fixed bottom bar on mobile, floating cluster on desktop.
 * Language toggle floats above the bar on mobile only.
 */
export function QuickActions() {
  const locale = useLocale();
  const reduced = useReducedMotion();
  const hi = locale === "hi";
  const greeting = hi
    ? "नमस्ते, मुझे अपने मामले पर विधिक सलाह चाहिए।"
    : "Hello, I need legal advice regarding my matter.";

  const tel = telHref(SITE.phonePrimaryTel);
  const labels = {
    call: hi ? "कॉल करें" : "Call",
    whatsapp: hi ? "व्हाट्सएप" : "WhatsApp",
    email: hi ? "ईमेल" : "Email",
  };

  const actions = [
    { href: tel, label: labels.call, Icon: Phone, external: false },
    { href: waLink(greeting), label: labels.whatsapp, Icon: WhatsAppIcon, external: true },
    { href: `mailto:${SITE.email}`, label: labels.email, Icon: Mail, external: false },
  ];

  return (
    <>
      {/* Mobile: EN / हिं floating above the contact bar */}
      <div className="fixed right-4 bottom-[5.25rem] z-50 sm:hidden">
        <div className="rounded-full shadow-[0_8px_24px_-8px_oklch(0.2_0_0/0.55)]">
          <LanguageToggle />
        </div>
      </div>

      {/* Mobile: fixed bottom bar */}
      <nav
        aria-label={hi ? "त्वरित संपर्क" : "Quick contact"}
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-dark-text/15 bg-dark-bg sm:hidden"
      >
        {actions.map(({ href, label, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex flex-col items-center gap-1 py-3 text-[0.6875rem] font-semibold text-dark-text/85 active:bg-dark-text/10"
          >
            <Icon className="size-5" aria-hidden />
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop / tablet: floating cluster */}
      <motion.div
        className="fixed right-5 bottom-5 z-40 hidden flex-col gap-3 sm:flex"
        {...(reduced
          ? {}
          : {
              initial: { opacity: 0, scale: 0.6, y: 16 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] },
            })}
      >
        <a
          href={waLink(greeting)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.whatsapp}
          title={labels.whatsapp}
          className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-accent-2"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href={tel}
          aria-label={labels.call}
          title={labels.call}
          className="inline-flex size-12 items-center justify-center rounded-full bg-dark-bg text-dark-text shadow-lg transition-colors hover:bg-ink"
        >
          <Phone className="size-5" aria-hidden />
        </a>
        <a
          href={`mailto:${SITE.email}`}
          aria-label={labels.email}
          title={labels.email}
          className="inline-flex size-12 items-center justify-center rounded-full bg-dark-bg text-dark-text shadow-lg transition-colors hover:bg-ink"
        >
          <Mail className="size-5" aria-hidden />
        </a>
      </motion.div>
    </>
  );
}