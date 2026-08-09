export const SITE = {
  advocate: "Sumit Tyagi",
  firm: "Tyag Raj Law Firm",
  tagline: "Advocate & Legal Consultant",
  // Confirmed hero tagline. Alternates are listed in README.md.
  taglineMain: "Strategic Legal Counsel. Trusted Representation, Proven Commitment.",
  credentials: "BBA, MBA, LLB",
  years: "12+",
  address:
    "Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad",
  email: "sumittyagi09@gmail.com",
  phonePrimary: "+91 8060603368",
  phoneSecondary: "+91 9217620368",
  whatsapp: "918060603368",
  areasServed: ["Ghaziabad", "Noida", "Delhi"],
  workingDays: "Monday to Saturday",
  workingHours: "10:00 AM – 5:00 PM",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=District%20%26%20Session%20Court%2C%20Ghaziabad",
  mapEmbed:
    "https://www.google.com/maps?q=District%20%26%20Session%20Court%20Ghaziabad&output=embed",
} as const;

export const TEAM = [
  {
    name: "Sumit Tyagi",
    role: { en: "Founder & Advocate", hi: "संस्थापक एवं अधिवक्ता" },
    detail: {
      en: "BBA, MBA, LLB · 12+ years of litigation across Ghaziabad, Noida and Delhi NCR.",
      hi: "बीबीए, एमबीए, एलएलबी · गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में 12+ वर्षों की पैरवी।",
    },
    image: "teamSumit" as const,
  },
  {
    name: "Vishu Raj Pratap",
    role: { en: "Associate Advocate", hi: "सहयोगी अधिवक्ता" },
    /* TODO: client to provide role title, bio, and photo for this team member */
    detail: null,
    image: null,
  },
  {
    name: "Kanak Tyagi",
    role: { en: "Associate Advocate", hi: "सहयोगी अधिवक्ता" },
    /* TODO: client to provide role title, bio, and photo for this team member */
    detail: null,
    image: null,
  },
];

export const LOCALES = ["en", "hi"] as const;
export type Locale = (typeof LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function waLink(text: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}