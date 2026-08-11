import type { Locale } from "./site";

type Bi = Record<Locale, string>;

export const PROCESS: { step: Bi; title: Bi; body: Bi }[] = [
  {
    step: { en: "Step 01", hi: "चरण 01" },
    title: { en: "Share the facts", hi: "तथ्य साझा करें" },
    body: {
      en: "Send your notice, FIR copy or case papers on WhatsApp. A first read happens the same day.",
      hi: "अपना नोटिस, एफआईआर प्रति या केस पेपर व्हाट्सएप पर भेजें। पहली समीक्षा उसी दिन होती है।",
    },
  },
  {
    step: { en: "Step 02", hi: "चरण 02" },
    title: { en: "Honest assessment", hi: "ईमानदार आकलन" },
    body: {
      en: "You hear the strong points and the weak points of your own case, with the likely timeline.",
      hi: "आपको अपने मामले की मजबूती और कमज़ोरी, संभावित समय-सीमा के साथ बताई जाती है।",
    },
  },
  {
    step: { en: "Step 03", hi: "चरण 03" },
    title: { en: "Written scope & fee", hi: "लिखित कार्य एवं शुल्क" },
    body: {
      en: "Scope of work, court fees and professional fees are confirmed in writing before filing.",
      hi: "दाखिल करने से पहले कार्य का दायरा, न्यायालय शुल्क एवं पारिश्रमिक लिखित में तय होता है।",
    },
  },
  {
    step: { en: "Step 04", hi: "चरण 04" },
    title: { en: "Court representation", hi: "न्यायालय में पैरवी" },
    body: {
      en: "Drafting, filing and arguments handled personally — you always know the next date.",
      hi: "प्रारूपण, दाखिल करना और बहस स्वयं की जाती है — अगली तारीख आपको सदैव ज्ञात रहती है।",
    },
  },
];

export const STATS: { value: string; label: Bi }[] = [
  { value: "13+", label: { en: "Years in practice", hi: "वर्षों का अनुभव" } },
  { value: "09", label: { en: "Practice areas", hi: "कार्यक्षेत्र" } },
  { value: "3", label: { en: "Districts covered", hi: "ज़िलों में पैरवी" } },
  { value: "24×7", label: { en: "WhatsApp response", hi: "व्हाट्सएप उत्तर" } },
];

export const COURTS: Bi[] = [
  { en: "District & Session Court, Ghaziabad", hi: "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद" },
  { en: "District Court, Gautam Buddh Nagar", hi: "ज़िला न्यायालय, गौतम बुद्ध नगर" },
  { en: "Delhi District Courts", hi: "दिल्ली ज़िला न्यायालय" },
  { en: "UP RERA", hi: "यूपी रेरा" },
  { en: "Consumer Commissions", hi: "उपभोक्ता आयोग" },
  { en: "Family Courts", hi: "पारिवारिक न्यायालय" },
  { en: "Cyber Crime Cell", hi: "साइबर क्राइम सेल" },
  { en: "Labour & Revenue Tribunals", hi: "श्रम एवं राजस्व अधिकरण" },
];

export const FAQ: { q: Bi; a: Bi }[] = [
  {
    q: {
      en: "How quickly can I get a consultation?",
      hi: "परामर्श कितनी जल्दी मिल सकता है?",
    },
    a: {
      en: "WhatsApp messages are usually answered the same day. Urgent bail and cheque bounce deadlines are prioritised.",
      hi: "व्हाट्सएप संदेशों का उत्तर सामान्यतः उसी दिन मिलता है। ज़मानत एवं चेक बाउंस की अंतिम तिथियों को प्राथमिकता दी जाती है।",
    },
  },
  {
    q: { en: "Is the first consultation free?", hi: "पहला परामर्श नि:शुल्क है?" },
    a: {
      en: "Yes. The first discussion to understand your matter and tell you where you stand carries no fee.",
      hi: "हाँ। आपके मामले को समझने और स्थिति बताने वाली पहली चर्चा नि:शुल्क है।",
    },
  },
  {
    q: {
      en: "Which courts do you appear in?",
      hi: "आप किन न्यायालयों में पेश होते हैं?",
    },
    a: {
      en: "Ghaziabad District & Session Court as base, along with Gautam Buddh Nagar and Delhi district courts, UP RERA, consumer commissions and tribunals.",
      hi: "मुख्य रूप से गाज़ियाबाद ज़िला एवं सेशन न्यायालय, साथ ही गौतम बुद्ध नगर व दिल्ली ज़िला न्यायालय, यूपी रेरा, उपभोक्ता आयोग एवं अधिकरण।",
    },
  },
  {
    q: {
      en: "Can documents be shared online?",
      hi: "दस्तावेज़ ऑनलाइन भेजे जा सकते हैं?",
    },
    a: {
      en: "Yes. Photographs or PDFs of notices, FIRs, agreements and orders can be sent on WhatsApp before you visit the chamber.",
      hi: "हाँ। नोटिस, एफआईआर, अनुबंध व आदेशों की तस्वीरें या पीडीएफ चैंबर आने से पहले व्हाट्सएप पर भेजी जा सकती हैं।",
    },
  },
  {
    q: { en: "Are fees fixed in advance?", hi: "शुल्क पहले तय होता है?" },
    a: {
      en: "Professional fees and expected court expenses are confirmed in writing before any filing, with no hidden additions.",
      hi: "कोई भी दाखिल करने से पूर्व पारिश्रमिक एवं अनुमानित न्यायालय व्यय लिखित में तय किए जाते हैं, कोई छिपा शुल्क नहीं।",
    },
  },
];

export const EXTRA_UI = {
  processEyebrow: { en: "How It Works", hi: "प्रक्रिया" },
  processTitle: {
    en: "Four steps from first message to court",
    hi: "पहले संदेश से न्यायालय तक चार चरण",
  },
  courtsEyebrow: { en: "Courts & Forums", hi: "न्यायालय एवं फोरम" },
  courtsTitle: {
    en: "Where Advocate Sumit Tyagi appears",
    hi: "अधिवक्ता सुमित त्यागी कहाँ पेश होते हैं",
  },
  faqEyebrow: { en: "Questions", hi: "प्रश्न" },
  faqTitle: { en: "Frequently asked questions", hi: "अक्सर पूछे जाने वाले प्रश्न" },
  statsEyebrow: { en: "At a Glance", hi: "एक नज़र में" },
} as const;
