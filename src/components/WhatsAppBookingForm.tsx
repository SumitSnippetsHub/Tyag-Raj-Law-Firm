import { useState } from "react";
import { z } from "zod";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { PRACTICE_AREAS } from "@/lib/practice-areas";
import { SITE, waLink, type Locale } from "@/lib/site";
import { DICT } from "@/lib/i18n";

type FieldKey = "name" | "phone" | "date" | "details";

export function WhatsAppBookingForm({
  locale,
  defaultArea,
}: {
  locale: Locale;
  defaultArea?: string;
}) {
  const t = DICT[locale].book;
  const hi = locale === "hi";
  const [values, setValues] = useState({
    name: "",
    phone: "",
    area: defaultArea ?? PRACTICE_AREAS[0]!.slug,
    date: "",
    details: "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const schema = z.object({
    name: z
      .string()
      .trim()
      .min(2, hi ? "कृपया पूरा नाम लिखें (कम से कम 2 अक्षर)।" : "Please enter your full name (min 2 characters).")
      .max(80, hi ? "नाम 80 अक्षरों से कम होना चाहिए।" : "Name must be under 80 characters.")
      .regex(
        /^[\p{L}\p{M}\s.'-]+$/u,
        hi ? "नाम में केवल अक्षर ही मान्य हैं।" : "Name may contain letters only.",
      ),
    phone: z
      .string()
      .trim()
      .transform((v) => v.replace(/\D/g, "").slice(-10))
      .refine((v) => /^[6-9]\d{9}$/.test(v), t.invalidPhone),
    area: z.string().min(1),
    date: z
      .string()
      .refine(
        (v) => !v || new Date(`${v}T23:59:59`) >= new Date(new Date().toDateString()),
        hi ? "कृपया आज या आगे की तिथि चुनें।" : "Please choose today or a future date.",
      ),
    details: z
      .string()
      .trim()
      .max(1000, hi ? "विवरण 1000 अक्षरों तक सीमित रखें।" : "Keep the description under 1000 characters.")
      .optional(),
  });

  function set(key: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<FieldKey, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as FieldKey;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});

    const data = parsed.data;
    const areaTitle =
      PRACTICE_AREAS.find((a) => a.slug === data.area)?.title[locale] ?? data.area;
    const lines = [
      `*${t.msgTitle}*`,
      "",
      `${t.name}: ${data.name}`,
      `${t.phone}: +91 ${data.phone}`,
      `${t.area}: ${areaTitle}`,
      data.date ? `${t.date}: ${data.date}` : null,
      data.details ? `${t.details}: ${data.details}` : null,
    ].filter(Boolean);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const field =
    "mt-2 w-full border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-primary";
  const fieldError = "border-destructive focus:border-destructive";
  const label = "block text-xs font-semibold tracking-wide text-ink-soft uppercase";

  return (
    <form
      onSubmit={onSubmit}
      className="relative border border-border bg-surface p-5 sm:p-6 md:p-10"
      noValidate
    >
      <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
        {t.formTitle}
      </h2>
      <p className="mt-2 text-sm text-ink-soft">{t.note}</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="bf-name">
            {t.name} *
          </label>
          <input
            id="bf-name"
            className={`${field} ${errors.name ? fieldError : ""}`}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={t.namePh}
            autoComplete="name"
            maxLength={80}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "bf-name-err" : undefined}
            required
          />
          {errors.name ? (
            <p id="bf-name-err" className="mt-2 text-xs text-destructive">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label className={label} htmlFor="bf-phone">
            {t.phone} *
          </label>
          <input
            id="bf-phone"
            className={`${field} ${errors.phone ? fieldError : ""}`}
            value={values.phone}
            onChange={(e) => set("phone", e.target.value.replace(/[^\d+\s-]/g, ""))}
            placeholder={t.phonePh}
            inputMode="tel"
            autoComplete="tel"
            maxLength={16}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "bf-phone-err" : undefined}
            required
          />
          {errors.phone ? (
            <p id="bf-phone-err" className="mt-2 text-xs text-destructive">
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label className={label} htmlFor="bf-area">
            {t.area}
          </label>
          <select
            id="bf-area"
            className={field}
            value={values.area}
            onChange={(e) => set("area", e.target.value)}
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
            className={`${field} ${errors.date ? fieldError : ""}`}
            value={values.date}
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => set("date", e.target.value)}
            aria-invalid={!!errors.date}
          />
          {errors.date ? (
            <p className="mt-2 text-xs text-destructive">{errors.date}</p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="bf-details">
            {t.details}
          </label>
          <textarea
            id="bf-details"
            rows={4}
            className={`${field} ${errors.details ? fieldError : ""}`}
            value={values.details}
            onChange={(e) => set("details", e.target.value)}
            placeholder={t.detailsPh}
            maxLength={1000}
            aria-invalid={!!errors.details}
          />
          <div className="mt-2 flex items-center justify-between gap-3">
            {errors.details ? (
              <p className="text-xs text-destructive">{errors.details}</p>
            ) : (
              <span />
            )}
            <span className="text-xs text-ink-soft/70">{values.details.length}/1000</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-2"
        >
          <WhatsAppIcon className="size-4" />
          {DICT[locale].cta.submit}
        </button>
        <a
          href={`tel:${SITE.phonePrimaryTel}`}
          className="text-sm font-semibold text-ink underline decoration-border underline-offset-4 hover:text-primary"
        >
          {DICT[locale].cta.callNow} — {SITE.phonePrimary}
        </a>
      </div>
    </form>
  );
}
