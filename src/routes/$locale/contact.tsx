import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { IMAGES } from "@/lib/images";
import { SITE, waLink } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/contact")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "संपर्क | अधिवक्ता सुमित त्यागी, ज़िला न्यायालय गाज़ियाबाद"
      : "Contact | Advocate Sumit Tyagi, District Court Ghaziabad";
    const description = hi
      ? "चैम्बर पता, फोन एवं व्हाट्सएप — ज़िला एवं सेशन न्यायालय, गाज़ियाबाद में अधिवक्ता सुमित त्यागी से संपर्क करें।"
      : "Chamber address, phone and WhatsApp for Advocate Sumit Tyagi at the District & Session Court, Ghaziabad — serving Noida and Delhi NCR.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: Contact,
});

function Contact() {
  const { locale, t } = useT();
  const c = t.contact;

  return (
    <>
      <PageHero
        priority
        image={IMAGES.courtBuilding}
        alt="District court building entrance in Uttar Pradesh with advocates on the steps"
        eyebrow={t.nav.contact}
        title={c.h1}
        lead={c.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow={t.nav.contact} title={c.officeTitle} />
            <Reveal delay={0.08}>
              <ul className="mt-10 divide-y divide-border border-y border-border">
                <li className="flex gap-4 py-5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">{c.officeTitle}</p>
                    <address className="mt-1.5 text-sm leading-relaxed text-ink not-italic">
                      {SITE.address}
                    </address>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">{c.phoneLabel}</p>
                    <p className="mt-1.5 flex flex-col text-sm text-ink">
                      <a href="tel:+918060603368" className="hover:text-primary">
                        {SITE.phonePrimary}
                      </a>
                      <a href="tel:+919217620368" className="hover:text-primary">
                        {SITE.phoneSecondary}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">{c.emailLabel}</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1.5 block text-sm text-ink hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-ink-soft">{c.hoursLabel}</p>
                    <p className="mt-1.5 text-sm text-ink">{c.hours}</p>
                  </div>
                </li>
              </ul>
              <a
                href={waLink(
                  locale === "hi"
                    ? "नमस्ते, मुझे अपने मामले पर बात करनी है।"
                    : "Hello, I would like to discuss my matter.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
              >
                <WhatsAppIcon className="size-4" />
                {t.cta.whatsapp}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <WhatsAppBookingForm locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <iframe
          title={c.mapTitle}
          src={SITE.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[26rem] w-full"
        />
      </section>
    </>
  );
}