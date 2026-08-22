/**
 * Service / practice geography — cities and courts where the firm appears.
 * Single bilingual source of truth for trust strips, about, SEO and schema.
 * Do not invent chamber addresses for coverage-only locations.
 */
export const SERVICE_LOCATIONS = [
  { en: "Ghaziabad", hi: "गाज़ियाबाद" },
  { en: "Noida", hi: "नोएडा" },
  { en: "Delhi NCR", hi: "दिल्ली एनसीआर" },
  { en: "Hapur", hi: "हापुड़" },
  { en: "Meerut", hi: "मेरठ" },
  { en: "Prayagraj High Court", hi: "प्रयागराज उच्च न्यायालय" },
  { en: "Dehradun", hi: "देहरादून" },
] as const;

export type Locale = "en" | "hi";

export function serviceAreaNames(locale: Locale): string[] {
  return SERVICE_LOCATIONS.map((loc) => loc[locale]);
}

/** Comma list: Ghaziabad, Noida, … */
export function formatServiceAreasComma(locale: Locale): string {
  return serviceAreaNames(locale).join(", ");
}

/** Trust / marquee style: Ghaziabad · Noida · … */
export function formatServiceAreasMiddot(locale: Locale): string {
  return serviceAreaNames(locale).join(" · ");
}

/** Prose list with and / एवं before the last item */
export function formatServiceAreasAnd(locale: Locale): string {
  const names = serviceAreaNames(locale);
  if (names.length === 0) return "";
  if (names.length === 1) return names[0]!;
  const head = names.slice(0, -1).join(", ");
  const last = names[names.length - 1]!;
  return locale === "hi" ? `${head} एवं ${last}` : `${head} and ${last}`;
}

/** English names for schema.org `areaServed` */
export const AREAS_SERVED_EN = SERVICE_LOCATIONS.map((loc) => loc.en);

export const SITE = {
  advocate: "Sumit Tyagi",
  cofounder: "Vishaw Pratap",
  firm: "Tyag Raj Law Firm",
  tagline: "Advocate & Legal Consultant",
  /** Primary hero subheadline */
  taglineMain:
    "Strategic Legal Counsel. Trusted Representation, Proven Commitment.",
  /** Secondary — trust / values strip (echoes logo: Dedication · Integrity · Justice) */
  taglineSecondary: "Justice, Integrity, Excellence.",
  /** Alternates (not live) — see README */
  taglineAlternates: [
    "Strategic Counsel. Trusted Advocacy.",
    "Where Your Rights Find Their Strongest Voice.",
    "Your Rights, Our Commitment, Justice Our Pursuit.",
  ] as const,
  credentials: "BBA, MBA, LLB",
  years: "13+",
  /** @deprecated use CHAMBERS[0].address — kept for any leftover single-address reads */
  address:
    "Office No. 435, 4th Floor, Aditya Height Street, Lal Kuan, Ghaziabad",
  email: "sumittyagi09@gmail.com",
  cofounderEmail: "vishupratap786@yahoo.co.in",
  /** Display form preferred by client — mobile number series */
  phonePrimary: "8860600368",
  phonePrimaryTel: "+918860600368",
  phoneCofounder: "9910039006",
  phoneCofounderTel: "+919910039006",
  phoneSecondary: "9217620368",
  phoneSecondaryTel: "+919217620368",
  /** wa.me digits only — primary WhatsApp */
  whatsapp: "918860600368",
  /** @see SERVICE_LOCATIONS — English names for JSON-LD */
  areasServed: AREAS_SERVED_EN,
  workingDays: "Monday to Saturday",
  workingHours: "10:00 AM – 5:00 PM",
  directions:
    "https://www.google.com/maps/place/Tyag+Raj+Law+Firm/@28.6349006,77.4572718,17z/data=!4m6!3m5!1s0x390cef000fa4d87d:0x2fe910d5bf8f8362!8m2!3d28.6349006!4d77.4572718!16s%2Fg%2F11nvdwns0k",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8!2d77.4572718!3d28.6349006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef000fa4d87d%3A0x2fe910d5bf8f8362!2sTyag%20Raj%20Law%20Firm!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
} as const;

export const CHAMBERS = [
  {
    id: "main",
    label: { en: "Main Chamber", hi: "मुख्य चैम्बर" },
    address:
      "Office No. 435, 4th Floor, Aditya Height Street, Lal Kuan, Ghaziabad",
    directions:
      "https://www.google.com/maps/place/Tyag+Raj+Law+Firm/@28.6349006,77.4572718,17z/data=!4m6!3m5!1s0x390cef000fa4d87d:0x2fe910d5bf8f8362!8m2!3d28.6349006!4d77.4572718!16s%2Fg%2F11nvdwns0k",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8!2d77.4572718!3d28.6349006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef000fa4d87d%3A0x2fe910d5bf8f8362!2sTyag%20Raj%20Law%20Firm!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin",
  },
  {
    id: "second",
    label: { en: "Second Office", hi: "द्वितीय कार्यालय" },
    address:
      "Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=District%20%26%20Session%20Court%2C%20Ghaziabad",
    mapEmbed:
      "https://www.google.com/maps?q=District%20%26%20Session%20Court%20Ghaziabad&output=embed",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Sumit Tyagi",
    title: { en: "Founder", hi: "संस्थापक" },
    experience: { en: "13 years", hi: "13 वर्ष" },
    education: "BBA, MBA, LLB",
    court: {
      en: "Civil Court, Ghaziabad",
      hi: "सिविल न्यायालय, गाज़ियाबाद",
    },
    focus: {
      en: "Criminal, civil, matrimonial, RERA and commercial litigation across Delhi NCR, Western UP and Dehradun.",
      hi: "दिल्ली एनसीआर, पश्चिमी उत्तर प्रदेश एवं देहरादून में आपराधिक, सिविल, वैवाहिक, रेरा एवं व्यावसायिक पैरवी।",
    },
    phone: SITE.phonePrimary,
    phoneTel: SITE.phonePrimaryTel,
    email: SITE.email,
    image: "advocatePortrait" as const,
  },
  {
    name: "Vishaw Pratap",
    title: { en: "Founder", hi: "संस्थापक" },
    experience: { en: "13 years", hi: "13 वर्ष" },
    education: "BA, LLB, LLM",
    court: {
      en: "District & Session Court, Ghaziabad",
      hi: "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद",
    },
    focus: {
      en: "Civil, family and trial advocacy — LLM-qualified counsel with 13 years at the Ghaziabad bar.",
      hi: "सिविल, पारिवारिक एवं ट्रायल पैरवी — एलएलएम योग्यता वाले अधिवक्ता, गाज़ियाबाद बार में 13 वर्ष।",
    },
    phone: SITE.phoneCofounder,
    phoneTel: SITE.phoneCofounderTel,
    email: SITE.cofounderEmail,
    image: "teamVishaw" as const,
  },
] as const;

export const TEAM = [
  {
    name: "Sumit Tyagi",
    role: { en: "Founder", hi: "संस्थापक" },
    detail: {
      en: `BBA, MBA, LLB · 13 years of litigation across ${formatServiceAreasAnd("en")} · Civil Court, Ghaziabad.`,
      hi: `बीबीए, एमबीए, एलएलबी · ${formatServiceAreasAnd("hi")} में 13 वर्षों की पैरवी · सिविल न्यायालय, गाज़ियाबाद।`,
    },
    image: "advocatePortrait" as const,
  },
  {
    name: "Vishaw Pratap",
    role: { en: "Founder", hi: "संस्थापक" },
    detail: {
      en: "BA, LLB, LLM · 13 years of litigation practice at District & Session Court, Ghaziabad.",
      hi: "बीए, एलएलबी, एलएलएम · ज़िला एवं सेशन न्यायालय, गाज़ियाबाद में 13 वर्षों की पैरवी।",
    },
    image: "teamVishaw" as const,
  },
  {
    name: "Nitin Chandela",
    /* TODO: client to confirm specific role title */
    role: { en: "Advocate", hi: "अधिवक्ता" },
    detail: null,
    image: "teamNitin" as const,
  },
  {
    name: "Vikrant Tyagi",
    /* TODO: client to confirm specific role title */
    role: { en: "Advocate", hi: "अधिवक्ता" },
    detail: null,
    image: "teamVikrant" as const,
  },
  {
    name: "Pooja Saxena",
    /* TODO: client to confirm specific role title */
    role: { en: "Advocate", hi: "अधिवक्ता" },
    detail: null,
    image: "teamPooja" as const,
  },
] as const;

export const LOCALES = ["en", "hi"] as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telHref(tel: string) {
  return `tel:${tel.replace(/\s/g, "")}`;
}
