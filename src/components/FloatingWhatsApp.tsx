import { motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";
import { useLocale } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const locale = useLocale();
  const reduced = useReducedMotion();
  const label = locale === "hi" ? "व्हाट्सएप पर चैट करें" : "Chat on WhatsApp";
  const greeting =
    locale === "hi"
      ? "नमस्ते, मुझे अपने मामले पर विधिक सलाह चाहिए।"
      : "Hello, I need legal advice regarding my matter.";

  return (
    <motion.a
      href={waLink(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed right-5 bottom-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-accent-2"
      {...(reduced
        ? {}
        : {
            initial: { opacity: 0, scale: 0.6, y: 16 },
            animate: { opacity: 1, scale: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      <MessageCircle className="size-6" aria-hidden />
    </motion.a>
  );
}