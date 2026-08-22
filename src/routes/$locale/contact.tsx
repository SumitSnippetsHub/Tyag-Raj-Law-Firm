import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { IMAGES } from "@/lib/images";
import { CHAMBERS, SITE, formatServiceAreasAnd, telHref, waLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, buildSeo, toLocale } from "@/lib/seo";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/contact")({
  head: ({ params }) => {
    const locale = toLocale(params.locale);
    const hi = locale === "hi";
    const title = hi
      ? "संपर्क | अधिवक्ता सुमित त्यागी, ज़िला न्यायालय गाज़ियाबाद"
      : "Contact | Advocate Sumit Tyagi, District Court Ghaziabad";
    const description = hi
      ? `दो चैम्बर पते, फोन एवं व्हाट्सएप — गाज़ियाबाद में अधिवक्ता सुमित त्यागी व अधिवक्ता विशव प्रताप; सेवा क्षेत्र: ${formatServiceAreasAnd("hi")}।`
      : `Two chamber addresses, phone and WhatsApp for Advocate Sumit Tyagi and Founder Vishaw Pratap in Ghaziabad — serving ${formatServiceAreasAnd("en")}.`;
    return buildSeo({ locale, path: "contact", title, description });
  },
  component: Contact,
});

function Contact() {
  const { locale, t } = useT();
  const c = t.contact;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: t.nav.contact, path: "contact" },
        ])}
      />

      <PageHero
        priority
        image={IMAGES.courtBuilding}
        alt="District court building entrance in Uttar Pradesh with advocates on the steps"
        eyebrow={t.nav.contact}
        title={c.h1}
        lead={c.lead}
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow={t.nav.contact} title={c.officeTitle} />
            <Reveal delay={0.08}>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {CHAMBERS.map((chamber) => (
                  <li key={chamber.id} className="flex gap-4 py-5">
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                        {chamber.label[locale]}
                      </p>
                      <address className="mt-1.5 text-sm leading-relaxed text-ink not-italic">
                        {chamber.address}
                      </address>
                      <a
                        href={chamber.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                      >
                        <Navigation className="size-3.5" aria-hidden />
                        {t.home.chambersDirections}
                      </a>
                    </div>
                  </li>
                ))}
                <li className="flex gap-4 py-5">
                  <Phone
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                      {c.phoneLabel}
                    </p>
                    <p className="mt-1.5 flex flex-col text-sm text-ink">
                      <a
                        href={telHref(SITE.phonePrimaryTel)}
                        className="hover:text-primary"
                      >
                        {SITE.phonePrimary} (WhatsApp)
                      </a>
                      <a
                        href={telHref(SITE.phoneCofounderTel)}
                        className="hover:text-primary"
                      >
                        {SITE.phoneCofounder}
                      </a>
                      <a
                        href={telHref(SITE.phoneSecondaryTel)}
                        className="hover:text-primary"
                      >
                        {SITE.phoneSecondary}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Mail
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                      {c.emailLabel}
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="mt-1.5 block text-sm text-ink hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                    <a
                      href={`mailto:${SITE.cofounderEmail}`}
                      className="mt-1 block break-all text-sm text-ink hover:text-primary"
                    >
                      {SITE.cofounderEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 py-5">
                  <Clock
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <div>
                    <p className="font-display text-[0.6875rem] font-semibold tracking-[0.18em] text-ink-soft uppercase">
                      {c.hoursLabel}
                    </p>
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

      <section className="grid gap-4 border-t border-border sm:grid-cols-2">
        {CHAMBERS.map((chamber) => (
          <iframe
            key={chamber.id}
            title={`${chamber.label.en} map`}
            src={chamber.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[18rem] w-full sm:h-[22rem]"
          />
        ))}
      </section>
    </>
  );
}
