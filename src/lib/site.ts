export const SITE = {
  advocate: "Sumit Tyagi",
  cofounder: "Vishaw Pratap",
  firm: "Tyag Raj Law Firm",
  tagline: "Advocate & Legal Consultant",
  // Confirmed hero tagline. Alternates are listed in README.md.
  taglineMain:
    "Strategic Legal Counsel. Trusted Representation, Proven Commitment.",
  credentials: "BBA, MBA, LLB",
  years: "12+",
  /** @deprecated use CHAMBERS[0].address — kept for any leftover single-address reads */
  address:
    "Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad",
  email: "sumittyagi09@gmail.com",
  cofounderEmail: "vishupratap786@yahoo.co.in",
  /** Display form preferred by client */
  phonePrimary: "+91 88606 00368",
  phonePrimaryTel: "+918860600368",
  phoneSecondary: "+91 9217620368",
  phoneSecondaryTel: "+919217620368",
  phoneCofounder: "+91 9910039006",
  phoneCofounderTel: "+919910039006",
  /** wa.me digits only — primary WhatsApp */
  whatsapp: "918860600368",
  areasServed: ["Ghaziabad", "Noida", "Delhi"],
  workingDays: "Monday to Saturday",
  workingHours: "10:00 AM – 5:00 PM",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=District%20%26%20Session%20Court%2C%20Ghaziabad",
  mapEmbed:
    "https://www.google.com/maps?q=District%20%26%20Session%20Court%20Ghaziabad&output=embed",
} as const;

export const CHAMBERS = [
  {
    id: "main",
    label: { en: "Main Chamber", hi: "मुख्य चैम्बर" },
    address:
      "Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=District%20%26%20Session%20Court%2C%20Ghaziabad",
    mapEmbed:
      "https://www.google.com/maps?q=District%20%26%20Session%20Court%20Ghaziabad&output=embed",
  },
  {
    id: "second",
    label: { en: "Second Office", hi: "द्वितीय कार्यालय" },
    address: "Office No. 435, 4th Floor, Aditya Height Street, Lal Kuan, Ghaziabad",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Aditya%20Height%20Street%2C%20Lal%20Kuan%2C%20Ghaziabad",
    mapEmbed:
      "https://www.google.com/maps?q=Aditya%20Height%20Street%20Lal%20Kuan%20Ghaziabad&output=embed",
  },
] as const;

export const FOUNDERS = [
  {
    name: "Sumit Tyagi",
    title: { en: "Founder", hi: "संस्थापक" },
    experience: { en: "12 years", hi: "12 वर्ष" },
    education: "BBA, MBA, LLB",
    phone: SITE.phonePrimary,
    phoneTel: SITE.phonePrimaryTel,
    email: SITE.email,
    image: "advocatePortrait" as const,
  },
  {
    name: "Vishaw Pratap",
    title: { en: "Co-Founder", hi: "सह-संस्थापक" },
    experience: { en: "12 years", hi: "12 वर्ष" },
    education: "BA, LLB, LLM",
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
      en: "BBA, MBA, LLB · 12 years of litigation across Ghaziabad, Noida and Delhi NCR.",
      hi: "बीबीए, एमबीए, एलएलबी · गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में 12 वर्षों की पैरवी।",
    },
    image: "advocatePortrait" as const,
  },
  {
    name: "Vishaw Pratap",
    role: { en: "Co-Founder", hi: "सह-संस्थापक" },
    detail: {
      en: "BA, LLB, LLM · 12 years of litigation practice · 9910039006",
      hi: "बीए, एलएलबी, एलएलएम · 12 वर्षों की पैरवी · 9910039006",
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
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telHref(tel: string) {
  return `tel:${tel.replace(/\s/g, "")}`;
}
