import { useParams } from "@tanstack/react-router";
import { isLocale, type Locale } from "./site";

export const DICT = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      practice: "Practice Areas",
      team: "Our Team",
      testimonials: "Testimonials",
      contact: "Contact",
      book: "Book Consultation",
    },
    cta: {
      whatsapp: "WhatsApp Us",
      bookFree: "Book Free Consultation",
      callNow: "Call Now",
      readMore: "Read more",
      viewAll: "View all practice areas",
      learnMore: "Learn more",
      submit: "Send on WhatsApp",
    },
    home: {
      eyebrow: "Advocate & Legal Consultant · Ghaziabad",
      h1: "Advocate Sumit Tyagi",
      lead: "Strategic Legal Counsel. Trusted Representation, Proven Commitment. 12+ years of litigation in Delhi NCR — criminal, civil, family and commercial matters handled personally, from first hearing to final order.",
      trust: [
        "Ghaziabad · Noida · Delhi NCR",
        "12+ Years Experience",
        "Dedication · Integrity · Justice",
        "District & Session Court, Ghaziabad",
      ],
      aboutEyebrow: "About the Advocate",
      aboutTitle: "Straight advice, disciplined litigation",
      aboutBody:
        "Sumit Tyagi (BBA, MBA, LLB) practises from the District & Session Court, Ghaziabad, appearing regularly before courts, tribunals and consumer forums across Ghaziabad, Noida and Delhi. Clients come for one reason: they are told exactly where they stand before any money is spent.",
      practiceEyebrow: "Practice Areas",
      practiceTitle: "Thirteen areas of focused litigation practice",
      missionEyebrow: "Our Mission",
      missionTitle: "Accessible, ethical and effective representation",
      missionBody:
        "Our mission is to make competent legal representation genuinely accessible across Ghaziabad, Noida and Delhi NCR — with honest advice given before fees are discussed, plain-language explanations at every stage, and disciplined, ethical advocacy in court. Every client should leave the chamber knowing exactly what their position is and what happens next.",
      visionEyebrow: "Our Vision",
      visionTitle: "A trusted legal partner for NCR families and businesses",
      visionBody:
        "Our vision is to grow into the most trusted and reachable legal partner for individuals, families and small businesses across the National Capital Region — a chamber known less for advertising and more for outcomes, integrity and clients who return with their next matter and send their families along.",
      teamEyebrow: "Expert Team",
      teamTitle: "The people who will handle your matter",
      teamLead:
        "A small, accountable team — you always know who is appearing on your date of hearing.",
      foundersEyebrow: "Leadership",
      foundersTitle: "Founder & Co-Founder",
      foundersLead:
        "Meet the advocates who lead Tyag Raj Law Firm — available on call and WhatsApp for urgent matters.",
      chambersEyebrow: "Our Chambers",
      chambersTitle: "Two offices in Ghaziabad",
      chambersBody:
        "Visit the Main Chamber inside the District & Session Court complex, or the Second Office at Aditya Height Street, Lal Kuan. Walk in during working hours, or WhatsApp first for urgent bail and cheque bounce deadlines.",
      chambersDirections: "Get Directions",
      chambersDays: "Working days",
      chambersHours: "Working hours",
      whyEyebrow: "Why Clients Stay",
      whyTitle: "What working with this office looks like",
      why: [
        {
          title: "12+ years at the bar",
          body: "Over a decade of hearings in the same courts, before the same benches — experience that shows in preparation and timing.",
        },
        {
          title: "Multi-forum litigation",
          body: "Magistrate and Sessions Courts, RERA, consumer commissions, cyber cell and IP registries — one office for all of it.",
        },
        {
          title: "Transparent process",
          body: "Written scope, realistic timelines and clear fees before work starts. You always know the next date and the next step.",
        },
        {
          title: "Personal attention",
          body: "Your matter is argued by the advocate you met — not passed down to a junior on the day of hearing.",
        },
      ],
      testimonialsEyebrow: "Client Voices",
      testimonialsTitle: "What clients say",
      sampleNote:
        "Sample content — to be replaced with verified client reviews before launch.",
      areaEyebrow: "Service Area",
      areaTitle: "Serving Ghaziabad, Noida and Delhi NCR",
      areaBody:
        "The office is inside the District & Session Court complex in Ghaziabad, with regular appearances in Noida, Gautam Buddh Nagar and Delhi district courts, UP RERA, and consumer commissions. Same-day WhatsApp consultation is available for urgent bail and cheque bounce deadlines.",
    },
    about: {
      h1: "About Advocate Sumit Tyagi",
      lead: "An independent litigation practice built on preparation, plain speaking and steady presence in the courts of Delhi NCR.",
      introEyebrow: "The Advocate",
      introTitle: "A courtroom practice you can actually reach",
      body: [
        "Sumit Tyagi (BBA, MBA, LLB) is an advocate and legal consultant with more than twelve years of active courtroom practice. The chamber is based at Ch. No. 33A, New Building, Second Floor, District & Session Court, Ghaziabad — with regular appearances across Ghaziabad, Noida, Gautam Buddh Nagar and Delhi.",
        "The practice began with criminal and civil trial work. It has since grown into a focused litigation office handling matrimonial and family disputes, child custody, court marriage and registration, property and RERA matters, NDPS defence, bail, cheque bounce (Sec. 138 NI Act), cyber complaints, consumer commissions, and trademark & copyright work.",
        "The approach is deliberately careful: every file is read personally before advice is given, and the client hears the weak points of their own case first. That habit prevents most unpleasant surprises later — and keeps fees tied to clear, written scope.",
        "Clients are individuals, families and small businesses who want a lawyer they can actually reach — on the phone, on WhatsApp, and in court on the date of hearing. Matters are not handed off to an unknown junior at the last minute.",
      ],
      approachEyebrow: "How We Work",
      approachTitle: "Clear steps before money is spent",
      approachLead:
        "From the first WhatsApp message to the final order, the office follows a simple, transparent process.",
      approach: [
        {
          title: "Honest first reading",
          body: "Notices, FIRs, agreements and orders are reviewed the same day wherever possible. You are told what is strong, what is weak, and what the likely timeline looks like.",
        },
        {
          title: "Written scope & fees",
          body: "Professional fees and expected court expenses are confirmed in writing before filing. No hidden additions mid-matter.",
        },
        {
          title: "Personal court presence",
          body: "Drafting, filing and arguments are handled by the advocate you met — with updates after each date of hearing.",
        },
      ],
      valuesTitle: "Dedication · Integrity · Justice",
      valuesBody:
        "The three words on the firm's seal are also the working rules of the office: prepare completely, advise honestly, and pursue the matter to its end.",
      chamberEyebrow: "Our Chamber",
      chamberTitle: "Inside the District & Session Court, Ghaziabad",
      chamberBody:
        "Walk-in visits are welcome during working hours. For urgent bail, cheque bounce deadlines or same-day notices, WhatsApp is the fastest way to send papers and get a first response.",
      partnershipEyebrow: "Founders Together",
      partnershipTitle: "Built on shared courtroom discipline",
      partnershipBody:
        "Advocate Sumit Tyagi and Advocate Vishaw Pratap lead Tyag Raj Law Firm side by side — twelve years each at the bar, one standard of preparation, and one point of accountability for every file that leaves the chamber.",
      clientsEyebrow: "With Clients",
      clientsTitle: "Advice given face to face",
      clientsBody:
        "Consultations happen in the chamber, not behind a call-centre script. Papers are read, next dates are explained, and you leave knowing who will appear for you and what to expect.",
      teamPhotoEyebrow: "Our People",
      teamPhotoTitle: "The team behind your hearing dates",
      teamPhotoBody:
        "From founding partners to associate advocates, the roster is small on purpose — so your matter is never lost in a crowd of files, and you always know who is responsible for the next step.",
      galleryEyebrow: "In Chambers",
      galleryTitle: "Advocate Sumit Tyagi at work",
      creds: [
        { k: "Credentials", v: "BBA, MBA, LLB" },
        { k: "Experience", v: "12+ years in active litigation" },
        { k: "Base court", v: "District & Session Court, Ghaziabad" },
        { k: "Appears before", v: "District courts, RERA, consumer commissions, tribunals" },
        { k: "Areas served", v: "Ghaziabad, Noida, Delhi NCR" },
        { k: "Languages", v: "Hindi, English" },
        { k: "Working days", v: "Monday to Saturday" },
        { k: "Working hours", v: "10:00 AM – 5:00 PM" },
      ],
    },
    practice: {
      h1: "Practice Areas",
      lead: "Thirteen defined areas of practice across criminal, civil, family, property and commercial law — each handled personally in the courts of Delhi NCR.",
      covers: "What this covers",
      handled: "Matters commonly handled",
      whyTitle: "Why work with Advocate Sumit Tyagi on this",
      whyBody:
        "Twelve-plus years of hearings in Ghaziabad, Noida and Delhi, direct familiarity with the local benches and registry practice, and one advocate responsible for your file from the first consultation to the final order.",
      back: "All practice areas",
      other: "Other practice areas",
    },
    testimonialsPage: {
      h1: "Client Testimonials",
      lead: "Experiences shared by clients across criminal, matrimonial, cheque bounce and RERA matters.",
    },
    contact: {
      h1: "Contact the Office",
      lead: "Chamber visits, phone calls and WhatsApp consultations — for urgent bail or notice deadlines, WhatsApp is fastest.",
      officeTitle: "Chamber address",
      hours: "Monday – Saturday, 10:00 AM – 5:00 PM",
      hoursLabel: "Office hours",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      mapTitle: "District & Session Court, Ghaziabad — office location map",
    },
    book: {
      h1: "Book a Consultation",
      lead: "Fill in the details below. It opens WhatsApp with your case summary ready to send — no account, no payment, no waiting.",
      formTitle: "Consultation request",
      name: "Full name",
      phone: "Phone number",
      area: "Practice area",
      date: "Preferred date",
      details: "Brief case description",
      namePh: "e.g. Rajesh Kumar",
      phonePh: "10-digit mobile number",
      detailsPh: "Tell us briefly what happened, and any dates or notices involved.",
      required: "Required",
      invalidPhone: "Enter a valid 10-digit Indian mobile number.",
      note: "Your details are only used to compose the WhatsApp message — nothing is stored on this website.",
      msgTitle: "New Consultation Request",
    },
    footer: {
      about:
        "Advocate & Legal Consultant practising at the District & Session Court, Ghaziabad, with matters across Noida and Delhi NCR.",
      quick: "Quick links",
      areas: "Practice areas",
      reach: "Reach us",
      rights: "All rights reserved.",
      disclaimer:
        "Disclaimer: This website is for information only and does not constitute solicitation or advertisement under the Bar Council of India Rules. Nothing here is legal advice.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "परिचय",
      practice: "कार्यक्षेत्र",
      team: "हमारी टीम",
      testimonials: "प्रशंसापत्र",
      contact: "संपर्क",
      book: "परामर्श बुक करें",
    },
    cta: {
      whatsapp: "व्हाट्सएप करें",
      bookFree: "नि:शुल्क परामर्श बुक करें",
      callNow: "अभी कॉल करें",
      readMore: "और पढ़ें",
      viewAll: "सभी कार्यक्षेत्र देखें",
      learnMore: "अधिक जानें",
      submit: "व्हाट्सएप पर भेजें",
    },
    home: {
      eyebrow: "अधिवक्ता एवं विधिक सलाहकार · गाज़ियाबाद",
      h1: "अधिवक्ता सुमित त्यागी",
      lead: "सुदृढ़ विधिक परामर्श, विश्वसनीय पैरवी, सिद्ध प्रतिबद्धता। दिल्ली एनसीआर में 12+ वर्षों का अनुभव — आपराधिक, सिविल, पारिवारिक एवं व्यावसायिक मुकदमे पहली सुनवाई से अंतिम आदेश तक स्वयं देखे जाते हैं।",
      trust: [
        "गाज़ियाबाद · नोएडा · दिल्ली एनसीआर",
        "12+ वर्षों का अनुभव",
        "समर्पण · ईमानदारी · न्याय",
        "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद",
      ],
      aboutEyebrow: "अधिवक्ता का परिचय",
      aboutTitle: "स्पष्ट सलाह, अनुशासित पैरवी",
      aboutBody:
        "सुमित त्यागी (बीबीए, एमबीए, एलएलबी) ज़िला एवं सेशन न्यायालय, गाज़ियाबाद से प्रैक्टिस करते हैं और गाज़ियाबाद, नोएडा व दिल्ली की अदालतों, अधिकरणों तथा उपभोक्ता फोरम में नियमित रूप से पेश होते हैं। मुवक्किल एक कारण से आते हैं: खर्च से पहले उन्हें उनकी वास्तविक स्थिति बता दी जाती है।",
      practiceEyebrow: "कार्यक्षेत्र",
      practiceTitle: "तेरह केंद्रित विधिक कार्यक्षेत्र",
      missionEyebrow: "हमारा उद्देश्य",
      missionTitle: "सुलभ, नैतिक एवं प्रभावी पैरवी",
      missionBody:
        "हमारा उद्देश्य है गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में सक्षम विधिक सहायता को वास्तव में सुलभ बनाना — फीस की बात से पहले ईमानदार सलाह, हर चरण पर सरल भाषा में जानकारी, और अदालत में अनुशासित व नैतिक पैरवी। प्रत्येक मुवक्किल को अपनी स्थिति और अगला कदम स्पष्ट रूप से पता होना चाहिए।",
      visionEyebrow: "हमारा दृष्टिकोण",
      visionTitle: "एनसीआर के परिवारों एवं व्यवसायों का विश्वसनीय विधिक साथी",
      visionBody:
        "हमारा दृष्टिकोण है राष्ट्रीय राजधानी क्षेत्र के व्यक्तियों, परिवारों और छोटे व्यवसायों के लिए सबसे विश्वसनीय एवं सुलभ विधिक साथी बनना — ऐसा कार्यालय जो विज्ञापन से नहीं, परिणाम, ईमानदारी और लौटकर आने वाले मुवक्किलों से पहचाना जाए।",
      teamEyebrow: "विशेषज्ञ टीम",
      teamTitle: "आपका मामला देखने वाले लोग",
      teamLead:
        "एक छोटी, जवाबदेह टीम — आपको सदैव पता रहता है कि आपकी तारीख पर कौन पेश हो रहा है।",
      foundersEyebrow: "नेतृत्व",
      foundersTitle: "संस्थापक एवं सह-संस्थापक",
      foundersLead:
        "त्याग राज लॉ फर्म का नेतृत्व करने वाले अधिवक्ता — तात्कालिक मामलों हेतु कॉल और व्हाट्सएप पर उपलब्ध।",
      chambersEyebrow: "हमारे चैम्बर",
      chambersTitle: "गाज़ियाबाद में दो कार्यालय",
      chambersBody:
        "मुख्य चैम्बर ज़िला एवं सेशन न्यायालय परिसर में है, तथा द्वितीय कार्यालय आदित्य हाइट स्ट्रीट, लाल कुआँ में है। कार्य समय में आइए, या तात्कालिक जमानत व चेक बाउंस समय-सीमा हेतु पहले व्हाट्सएप करें।",
      chambersDirections: "रास्ता देखें",
      chambersDays: "कार्य दिवस",
      chambersHours: "कार्य समय",
      whyEyebrow: "क्यों चुनें",
      whyTitle: "इस कार्यालय के साथ काम करना कैसा है",
      why: [
        {
          title: "12+ वर्षों की वकालत",
          body: "एक दशक से अधिक समय तक उन्हीं अदालतों में सुनवाई — जिसका असर तैयारी और समय-प्रबंधन में दिखता है।",
        },
        {
          title: "बहु-मंच पैरवी",
          body: "मजिस्ट्रेट व सेशन न्यायालय, रेरा, उपभोक्ता आयोग, साइबर सेल और आईपी रजिस्ट्री — सबके लिए एक ही कार्यालय।",
        },
        {
          title: "पारदर्शी प्रक्रिया",
          body: "काम शुरू होने से पहले स्पष्ट दायरा, वास्तविक समय-सीमा और तय फीस। अगली तारीख और अगला कदम सदैव पता रहता है।",
        },
        {
          title: "व्यक्तिगत ध्यान",
          body: "आपका मुकदमा वही अधिवक्ता लड़ते हैं जिनसे आप मिले — सुनवाई के दिन किसी जूनियर को नहीं सौंपा जाता।",
        },
      ],
      testimonialsEyebrow: "मुवक्किलों की राय",
      testimonialsTitle: "मुवक्किल क्या कहते हैं",
      sampleNote:
        "नमूना सामग्री — लॉन्च से पहले सत्यापित मुवक्किल समीक्षाओं से बदली जाएगी।",
      areaEyebrow: "सेवा क्षेत्र",
      areaTitle: "गाज़ियाबाद, नोएडा एवं दिल्ली एनसीआर में सेवा",
      areaBody:
        "कार्यालय गाज़ियाबाद के ज़िला एवं सेशन न्यायालय परिसर में है, तथा नोएडा, गौतमबुद्ध नगर व दिल्ली की ज़िला अदालतों, यूपी रेरा और उपभोक्ता आयोगों में नियमित उपस्थिति रहती है। जमानत और चेक बाउंस की तात्कालिक समय-सीमा के लिए उसी दिन व्हाट्सएप परामर्श उपलब्ध है।",
    },
    about: {
      h1: "अधिवक्ता सुमित त्यागी के बारे में",
      lead: "तैयारी, स्पष्टवादिता और दिल्ली एनसीआर की अदालतों में लगातार उपस्थिति पर आधारित एक स्वतंत्र वकालत।",
      introEyebrow: "अधिवक्ता",
      introTitle: "एक ऐसी अदालती प्रैक्टिस जो वास्तव में उपलब्ध हो",
      body: [
        "सुमित त्यागी (बीबीए, एमबीए, एलएलबी) बारह वर्षों से अधिक सक्रिय अदालती अनुभव वाले अधिवक्ता एवं विधिक सलाहकार हैं। चैम्बर का पता — चैम्बर नं. 33A, न्यू बिल्डिंग, द्वितीय तल, ज़िला एवं सेशन न्यायालय, गाज़ियाबाद — है, तथा गाज़ियाबाद, नोएडा, गौतम बुद्ध नगर व दिल्ली में नियमित उपस्थिति रहती है।",
        "प्रैक्टिस की शुरुआत आपराधिक व सिविल ट्रायल कार्य से हुई। अब इसमें वैवाहिक एवं पारिवारिक विवाद, बाल अभिरक्षा, कोर्ट मैरिज एवं पंजीकरण, संपत्ति व रेरा, एनडीपीएस बचाव, जमानत, चेक बाउंस (धारा 138 एनआई अधिनियम), साइबर शिकायतें, उपभोक्ता आयोग तथा ट्रेडमार्क व कॉपीराइट कार्य शामिल हैं।",
        "दृष्टिकोण सावधानीपूर्ण है: सलाह देने से पहले हर फाइल स्वयं पढ़ी जाती है, और मुवक्किल को सबसे पहले उनके ही मुकदमे की कमजोरियाँ बताई जाती हैं। यही आदत बाद के अप्रिय आश्चर्यों को रोकती है — और फीस स्पष्ट, लिखित कार्य-क्षेत्र से जुड़ी रहती है।",
        "मुवक्किल वे व्यक्ति, परिवार और छोटे व्यवसाय हैं जिन्हें ऐसा वकील चाहिए जो वास्तव में उपलब्ध हो — फोन पर, व्हाट्सएप पर, और सुनवाई की तारीख पर अदालत में। मामले अंतिम क्षण पर अज्ञात जूनियर को नहीं सौंपे जाते।",
      ],
      approachEyebrow: "कार्यशैली",
      approachTitle: "पैसे खर्च होने से पहले स्पष्ट कदम",
      approachLead:
        "पहले व्हाट्सएप संदेश से अंतिम आदेश तक कार्यालय एक सरल, पारदर्शी प्रक्रिया अपनाता है।",
      approach: [
        {
          title: "ईमानदार पहली समीक्षा",
          body: "नोटिस, एफआईआर, करार और आदेश यथासंभव उसी दिन देखे जाते हैं। आपको बताया जाता है क्या मजबूत है, क्या कमजोर है, और संभावित समय-सीमा क्या है।",
        },
        {
          title: "लिखित कार्य-क्षेत्र व फीस",
          body: "पेशेवर फीस और अपेक्षित अदालती खर्च फाइलिंग से पहले लिखित रूप में तय होते हैं। मामले के बीच छिपी वृद्धि नहीं।",
        },
        {
          title: "व्यक्तिगत अदालती उपस्थिति",
          body: "ड्राफ्टिंग, फाइलिंग और बहस उसी अधिवक्ता द्वारा होती है जिससे आप मिले — प्रत्येक तारीख के बाद अपडेट के साथ।",
        },
      ],
      valuesTitle: "समर्पण · ईमानदारी · न्याय",
      valuesBody:
        "फर्म की मुहर पर अंकित ये तीन शब्द कार्यालय के कार्य-नियम भी हैं: पूरी तैयारी, ईमानदार सलाह, और मुकदमे को अंत तक ले जाना।",
      chamberEyebrow: "हमारा चैम्बर",
      chamberTitle: "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद के अंदर",
      chamberBody:
        "कार्य समय में वॉक-इन मुलाक़ात का स्वागत है। तात्कालिक जमानत, चेक बाउंस की समय-सीमा या उसी दिन के नोटिस के लिए कागजात भेजने और पहली प्रतिक्रिया पाने का सबसे तेज़ तरीका व्हाट्सएप है।",
      partnershipEyebrow: "संस्थापक साथ में",
      partnershipTitle: "साझा अदालती अनुशासन पर बनी फर्म",
      partnershipBody:
        "अधिवक्ता सुमित त्यागी और अधिवक्ता विशव प्रताप त्याग राज लॉ फर्म का नेतृत्व साथ करते हैं — प्रत्येक के बारह वर्ष का अनुभव, एक जैसी तैयारी का मानक, और चैम्बर से निकलने वाली हर फाइल की एक स्पष्ट ज़िम्मेदारी।",
      clientsEyebrow: "मुवक्किलों के साथ",
      clientsTitle: "सलाह आमने-सामने",
      clientsBody:
        "परामर्श चैम्बर में होता है, कॉल-सेंटर स्क्रिप्ट पर नहीं। कागजात पढ़े जाते हैं, अगली तारीखें समझाई जाती हैं, और आप यह जानकर जाते हैं कि आपकी पेशी कौन करेगा और आगे क्या अपेक्षित है।",
      teamPhotoEyebrow: "हमारे लोग",
      teamPhotoTitle: "आपकी सुनवाई के पीछे की टीम",
      teamPhotoBody:
        "संस्थापक साझेदारों से सहयोगी अधिवक्ताओं तक — टीम जानबूझकर छोटी रखी गई है, ताकि आपका मामला फाइलों की भीड़ में न खोए और अगले कदम की ज़िम्मेदारी सदैव स्पष्ट रहे।",
      galleryEyebrow: "चैम्बर में",
      galleryTitle: "अधिवक्ता सुमित त्यागी कार्य करते हुए",
      creds: [
        { k: "योग्यताएँ", v: "बीबीए, एमबीए, एलएलबी" },
        { k: "अनुभव", v: "12+ वर्ष सक्रिय पैरवी" },
        { k: "मुख्य न्यायालय", v: "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद" },
        { k: "उपस्थिति", v: "ज़िला अदालतें, रेरा, उपभोक्ता आयोग, अधिकरण" },
        { k: "सेवा क्षेत्र", v: "गाज़ियाबाद, नोएडा, दिल्ली एनसीआर" },
        { k: "भाषाएँ", v: "हिन्दी, अंग्रेज़ी" },
        { k: "कार्य दिवस", v: "सोमवार से शनिवार" },
        { k: "कार्य समय", v: "सुबह 10:00 – शाम 5:00" },
      ],
    },
    practice: {
      h1: "कार्यक्षेत्र",
      lead: "आपराधिक, सिविल, पारिवारिक, संपत्ति एवं व्यावसायिक विधि में तेरह निर्धारित कार्यक्षेत्र — प्रत्येक दिल्ली एनसीआर की अदालतों में स्वयं देखा जाता है।",
      covers: "इसमें क्या शामिल है",
      handled: "सामान्यतः देखे जाने वाले मामले",
      whyTitle: "इस मामले में अधिवक्ता सुमित त्यागी क्यों",
      whyBody:
        "गाज़ियाबाद, नोएडा और दिल्ली में बारह वर्षों से अधिक की सुनवाई, स्थानीय अदालतों व रजिस्ट्री प्रक्रिया की सीधी जानकारी, और पहली सलाह से अंतिम आदेश तक आपकी फाइल के लिए एक ही ज़िम्मेदार अधिवक्ता।",
      back: "सभी कार्यक्षेत्र",
      other: "अन्य कार्यक्षेत्र",
    },
    testimonialsPage: {
      h1: "मुवक्किलों के प्रशंसापत्र",
      lead: "आपराधिक, वैवाहिक, चेक बाउंस एवं रेरा मामलों के मुवक्किलों के अनुभव।",
    },
    contact: {
      h1: "कार्यालय से संपर्क",
      lead: "चैम्बर में मुलाक़ात, फोन कॉल एवं व्हाट्सएप परामर्श — जमानत या नोटिस की तात्कालिक समय-सीमा हेतु व्हाट्सएप सबसे तेज़ है।",
      officeTitle: "चैम्बर का पता",
      hours: "सोमवार – शनिवार, सुबह 10:00 – शाम 5:00",
      hoursLabel: "कार्यालय समय",
      phoneLabel: "फोन / व्हाट्सएप",
      emailLabel: "ईमेल",
      mapTitle: "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद — कार्यालय स्थान नक्शा",
    },
    book: {
      h1: "परामर्श बुक करें",
      lead: "नीचे विवरण भरें। व्हाट्सएप आपके मामले के सारांश के साथ खुल जाएगा — कोई खाता, भुगतान या प्रतीक्षा नहीं।",
      formTitle: "परामर्श अनुरोध",
      name: "पूरा नाम",
      phone: "मोबाइल नंबर",
      area: "कार्यक्षेत्र",
      date: "पसंदीदा तारीख",
      details: "मामले का संक्षिप्त विवरण",
      namePh: "जैसे राजेश कुमार",
      phonePh: "10 अंकों का मोबाइल नंबर",
      detailsPh: "संक्षेप में बताएं क्या हुआ, तथा संबंधित तारीखें या नोटिस।",
      required: "आवश्यक",
      invalidPhone: "मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
      note: "आपका विवरण केवल व्हाट्सएप संदेश बनाने के लिए उपयोग होता है — इस वेबसाइट पर कुछ भी संग्रहित नहीं होता।",
      msgTitle: "नया परामर्श अनुरोध",
    },
    footer: {
      about:
        "ज़िला एवं सेशन न्यायालय, गाज़ियाबाद में कार्यरत अधिवक्ता एवं विधिक सलाहकार — नोएडा तथा दिल्ली एनसीआर के मामलों सहित।",
      quick: "त्वरित लिंक",
      areas: "कार्यक्षेत्र",
      reach: "संपर्क करें",
      rights: "सर्वाधिकार सुरक्षित।",
      disclaimer:
        "अस्वीकरण: यह वेबसाइट केवल जानकारी के लिए है और बार काउंसिल ऑफ इंडिया नियमों के अंतर्गत विज्ञापन या याचना नहीं है। यहाँ कुछ भी विधिक सलाह नहीं है।",
    },
  },
} as const;

export function useLocale(): Locale {
  const params = useParams({ strict: false }) as { locale?: string };
  const value = params.locale ?? "en";
  return isLocale(value) ? value : "en";
}

export function useT() {
  const locale = useLocale();
  return { locale, t: DICT[locale] };
}