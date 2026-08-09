import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhatsAppBookingForm } from "@/components/WhatsAppBookingForm";
import { TextMarquee } from "@/components/TextMarquee";
import { COURTS } from "@/lib/content-extra";
import { IMAGES } from "@/lib/images";
import { SITE } from "@/lib/site";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/$locale/book-consultation")({
  head: ({ params }) => {
    const hi = params.locale === "hi";
    const title = hi
      ? "परामर्श बुक करें | अधिवक्ता सुमित त्यागी, गाज़ियाबाद"
      : "Book a Consultation | Advocate Sumit Tyagi, Ghaziabad";
    const description = hi
      ? "व्हाट्सएप पर अधिवक्ता सुमित त्यागी से परामर्श बुक करें — जमानत, चेक बाउंस, रेरा एवं वैवाहिक मामलों में शीघ्र सहायता।"
      : "Book a WhatsApp consultation with Advocate Sumit Tyagi — fast help with bail, cheque bounce notices, RERA and matrimonial matters in Delhi NCR.";
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
  component: BookConsultation,
});

function BookConsultation() {
  const { locale, t } = useT();

  return (
    <>
      <PageHero
        priority
        image={IMAGES.paDocuments}
        mobileImage={IMAGES.advocateOffice}
        alt="Advocate reviewing a contract with a fountain pen beside a gavel and law books"
        eyebrow={t.nav.book}
        title={t.book.h1}
        lead={t.book.lead}
      />

      <TextMarquee items={COURTS.map((c) => c[locale])} />

      <section className="mx-auto w-full max-w-6xl px-5 md:px-10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="border-t border-border pt-8">
              <p className="text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary">{t.contact.phoneLabel}</p>
              <p className="mt-3 font-display text-2xl font-semibold text-ink">
                {SITE.phonePrimary}
              </p>
              <p className="mt-1 text-sm text-ink-soft">{SITE.phoneSecondary}</p>
              <p className="mt-8 text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary">{t.contact.hoursLabel}</p>
              <p className="mt-3 text-sm text-ink">{t.contact.hours}</p>
              <p className="mt-8 text-[0.6875rem] font-display font-semibold tracking-[0.18em] uppercase text-primary">{t.contact.officeTitle}</p>
              <address className="mt-3 text-sm leading-relaxed text-ink not-italic">
                {SITE.address}
              </address>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <WhatsAppBookingForm locale={locale} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
