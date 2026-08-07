export const SITE = {
  advocate: "Sumit Tyagi",
  firm: "Tyagi Raj Law Firm",
  tagline: "Advocate & Legal Consultant",
  years: "12+",
  address:
    "Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad",
  email: "sumittyagi09@gmail.com",
  phonePrimary: "+91 8060603368",
  phoneSecondary: "+91 9217620368",
  whatsapp: "918060603368",
  areasServed: ["Ghaziabad", "Noida", "Delhi"],
  mapEmbed:
    "https://www.google.com/maps?q=District%20%26%20Session%20Court%20Ghaziabad&output=embed",
} as const;

export const LOCALES = ["en", "hi"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}