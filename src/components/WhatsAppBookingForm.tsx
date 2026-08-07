import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { SITE, waLink, type Locale } from "@/lib/site";
import { DICT } from "@/lib/i18n";

export function WhatsAppBookingForm({
  locale,
  defaultArea,
}: {
  locale: Locale;
  defaultArea?: string;
}) {
  const t = DICT[locale].book;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(defaultArea ?? PRACTICE_AREAS[0]!.slug);
  const [date, setDate] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (!name.trim()) next.name = t.required;
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, "").slice(-10)))
      next.phone = t.invalidPhone;
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const areaTitle =
      PRACTICE_AREAS.find((a) => a.slug === area)?.title[locale] ?? area;
    const lines = [
      `*${t.msgTitle}*`,
      "",
      `${t.name}: ${name.trim()}`,
      `${t.phone}: ${phone.trim()}`,
      `${t.area}: ${areaTitle}`,
      date ? `${t.date}: ${date}` : null,
      details.trim() ? `${t.details}: ${details.trim()}` : null,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-primary";
  const label = "block text-xs font-semibold tracking-wide text-ink-soft uppercase";

  return (
    <form
      onSubmit={onSubmit}
      className="border border-border bg-surface p-6 md:p-10"
      noValidate
    >
      <h2 className="font-display text-2xl font-semibold text-ink">{t.formTitle}</h2>
      <p className="mt-2 text-sm text-ink-soft">{t.note}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="bf-name">
            {t.name} *
          </label>
          <input
            id="bf-name"
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePh}
            autoComplete="name"
            required
          />
          {errors.name ? (
            <p className="mt-2 text-xs text-destructive">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className={label} htmlFor="bf-phone">
            {t.phone} *
          </label>
          <input
            id="bf-phone"
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.phonePh}
            inputMode="tel"
            autoComplete="tel"
            required
          />
          {errors.phone ? (
            <p className="mt-2 text-xs text-destructive">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label className={label} htmlFor="bf-area">
            {t.area}
          </label>
          <select
            id="bf-area"
            className={field}
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            {PRACTICE_AREAS.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.title[locale]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="bf-date">
            {t.date}
          </label>
          <input
            id="bf-date"
            type="date"
            className={field}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="bf-details">
            {t.details}
          </label>
          <textarea
            id="bf-details"
            rows={4}
            className={field}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={t.detailsPh}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
        >
          <MessageCircle className="size-4" aria-hidden />
          {DICT[locale].cta.submit}
        </button>
        <a
          href="tel:+918060603368"
          className="text-sm font-semibold text-ink underline decoration-border underline-offset-4 hover:text-primary"
        >
          {DICT[locale].cta.callNow} — {SITE.phonePrimary}
        </a>
      </div>
    </form>
  );
}