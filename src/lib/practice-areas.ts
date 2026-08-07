import { IMAGES, type ImageKey } from "./images";
import type { Locale } from "./site";

type Copy = { en: string; hi: string };
type CopyList = { en: string[]; hi: string[] };

export type PracticeArea = {
  slug: string;
  image: ImageKey;
  title: Copy;
  short: Copy;
  intro: CopyList;
  situations: CopyList;
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "criminal-law",
    image: "gavel",
    title: { en: "Criminal Law", hi: "आपराधिक कानून" },
    short: {
      en: "Bail, FIR quashing, trial defence and appeals across Delhi NCR courts.",
      hi: "जमानत, एफआईआर रद्दीकरण, ट्रायल पैरवी और अपील — दिल्ली एनसीआर की अदालतों में।",
    },
    intro: {
      en: [
        "A criminal case affects far more than a court file — it affects your job, your family and your reputation. The first 48 hours after an FIR usually decide how difficult the rest of the case becomes.",
        "Advocate Sumit Tyagi appears in bail applications, anticipatory bail, discharge, quashing petitions and full trial defence before Magistrate and Sessions Courts in Ghaziabad, Noida and Delhi.",
        "You get a clear reading of your position, the realistic outcomes and the cost involved before any step is taken — no false promises.",
      ],
      hi: [
        "आपराधिक मामला केवल एक अदालती फाइल नहीं होता — यह आपकी नौकरी, परिवार और प्रतिष्ठा को प्रभावित करता है। एफआईआर के बाद के पहले 48 घंटे अक्सर पूरे मुकदमे की दिशा तय कर देते हैं।",
        "अधिवक्ता सुमित त्यागी जमानत, अग्रिम जमानत, डिस्चार्ज, एफआईआर रद्द करने की याचिका और पूर्ण ट्रायल पैरवी में गाज़ियाबाद, नोएडा और दिल्ली की मजिस्ट्रेट व सेशन अदालतों में पेश होते हैं।",
        "किसी भी कदम से पहले आपको आपकी स्थिति, संभावित परिणाम और खर्च स्पष्ट रूप से बताया जाता है — कोई झूठा आश्वासन नहीं।",
      ],
    },
    situations: {
      en: [
        "Anticipatory and regular bail applications",
        "Quashing of FIR under Section 482 CrPC / BNSS",
        "Trial defence in IPC / BNS offences",
        "Criminal appeals and revisions",
        "Complaints and counter-complaints",
      ],
      hi: [
        "अग्रिम एवं नियमित जमानत आवेदन",
        "धारा 482 CrPC / BNSS के तहत एफआईआर रद्दीकरण",
        "IPC / BNS अपराधों में ट्रायल पैरवी",
        "आपराधिक अपील एवं पुनरीक्षण",
        "शिकायत एवं प्रति-शिकायत",
      ],
    },
  },
  {
    slug: "civil-law",
    image: "paDocuments",
    title: { en: "Civil Law", hi: "सिविल कानून" },
    short: {
      en: "Property disputes, injunctions, recovery suits and contract litigation.",
      hi: "संपत्ति विवाद, निषेधाज्ञा, वसूली वाद और अनुबंध मुकदमे।",
    },
    intro: {
      en: [
        "Civil disputes are won on documents and on procedure. A well-drafted plaint, the right interim application and disciplined follow-up decide most outcomes long before final arguments.",
        "The practice covers title and partition suits, injunctions, specific performance, recovery of money, landlord–tenant matters and execution proceedings.",
        "Wherever a settlement is genuinely better than years of litigation, that option is put on the table honestly.",
      ],
      hi: [
        "सिविल विवाद दस्तावेज़ और प्रक्रिया पर जीते जाते हैं। सही वाद-पत्र, उचित अंतरिम आवेदन और अनुशासित पैरवी अंतिम बहस से बहुत पहले परिणाम तय कर देते हैं।",
        "इस प्रैक्टिस में स्वामित्व एवं बंटवारा वाद, निषेधाज्ञा, विशिष्ट अनुपालन, धन वसूली, मकान मालिक–किरायेदार मामले और निष्पादन कार्यवाही शामिल हैं।",
        "जहाँ समझौता वर्षों के मुकदमे से बेहतर हो, वह विकल्प ईमानदारी से सामने रखा जाता है।",
      ],
    },
    situations: {
      en: [
        "Title, partition and possession suits",
        "Permanent and temporary injunctions",
        "Specific performance of agreements",
        "Money recovery and contract breach",
        "Landlord–tenant and eviction matters",
      ],
      hi: [
        "स्वामित्व, बंटवारा एवं कब्ज़ा वाद",
        "स्थायी एवं अस्थायी निषेधाज्ञा",
        "अनुबंध का विशिष्ट अनुपालन",
        "धन वसूली एवं अनुबंध भंग",
        "मकान मालिक–किरायेदार एवं बेदखली मामले",
      ],
    },
  },
  {
    slug: "matrimonial-law",
    image: "paFamily",
    title: { en: "Matrimonial Law", hi: "वैवाहिक कानून" },
    short: {
      en: "Divorce, maintenance, custody, 498A and domestic violence matters.",
      hi: "तलाक, भरण-पोषण, अभिरक्षा, 498A एवं घरेलू हिंसा मामले।",
    },
    intro: {
      en: [
        "Matrimonial matters need a lawyer who protects your interests without escalating the conflict unnecessarily. Children, finances and dignity are all at stake at the same time.",
        "Representation is available for both petitioners and respondents in divorce, restitution, maintenance, custody, dowry-related complaints and Domestic Violence Act proceedings.",
        "Mutual-consent settlements are handled quickly and confidentially where both sides are willing.",
      ],
      hi: [
        "वैवाहिक मामलों में ऐसा वकील चाहिए जो आपके हितों की रक्षा करे पर विवाद को अनावश्यक रूप से न बढ़ाए। बच्चे, आर्थिक स्थिति और सम्मान — तीनों एक साथ दांव पर होते हैं।",
        "तलाक, दाम्पत्य अधिकार, भरण-पोषण, अभिरक्षा, दहेज संबंधी शिकायत एवं घरेलू हिंसा अधिनियम की कार्यवाही में दोनों पक्षों के लिए पैरवी उपलब्ध है।",
        "जहाँ दोनों पक्ष तैयार हों, आपसी सहमति से तलाक शीघ्र और गोपनीय रूप से कराया जाता है।",
      ],
    },
    situations: {
      en: [
        "Contested and mutual-consent divorce",
        "Maintenance under Section 125 CrPC / BNSS",
        "Child custody and visitation",
        "Section 498A and dowry complaints",
        "Protection orders under the DV Act",
      ],
      hi: [
        "विवादित एवं आपसी सहमति से तलाक",
        "धारा 125 CrPC / BNSS के तहत भरण-पोषण",
        "बच्चों की अभिरक्षा एवं मुलाक़ात अधिकार",
        "धारा 498A एवं दहेज शिकायत",
        "घरेलू हिंसा अधिनियम के तहत संरक्षण आदेश",
      ],
    },
  },
  {
    slug: "ndps",
    image: "lawBooks",
    title: {
      en: "NDPS Act",
      hi: "एनडीपीएस अधिनियम",
    },
    short: {
      en: "Narcotic Drugs and Psychotropic Substances Act defence and bail.",
      hi: "स्वापक औषधि एवं मन:प्रभावी पदार्थ अधिनियम में बचाव एवं जमानत।",
    },
    intro: {
      en: [
        "NDPS cases carry strict bail conditions and heavy sentences, which makes technical compliance by the investigating agency the single most important battleground.",
        "Defence work focuses on quantity classification, search and seizure procedure under Sections 42, 50 and 52A, sampling irregularities and chain-of-custody gaps.",
        "Every NDPS brief is examined line by line before advice is given — these matters do not allow shortcuts.",
      ],
      hi: [
        "एनडीपीएस मामलों में जमानत की शर्तें कठोर और सज़ा भारी होती है, इसलिए जाँच एजेंसी द्वारा तकनीकी प्रक्रिया का पालन ही सबसे बड़ा आधार बनता है।",
        "बचाव में मात्रा का वर्गीकरण, धारा 42, 50 एवं 52A के तहत तलाशी व जब्ती प्रक्रिया, नमूना लेने में अनियमितता और कस्टडी शृंखला की खामियों पर ध्यान दिया जाता है।",
        "हर एनडीपीएस फाइल को सलाह देने से पहले पंक्ति-दर-पंक्ति पढ़ा जाता है — इन मामलों में शॉर्टकट नहीं चलते।",
      ],
    },
    situations: {
      en: [
        "Bail in commercial and intermediate quantity cases",
        "Challenge to search and seizure procedure",
        "Sampling and FSL report objections",
        "Trial defence before Special NDPS Courts",
        "Appeals against conviction",
      ],
      hi: [
        "व्यावसायिक एवं मध्यम मात्रा मामलों में जमानत",
        "तलाशी एवं जब्ती प्रक्रिया को चुनौती",
        "नमूना एवं एफएसएल रिपोर्ट पर आपत्ति",
        "विशेष एनडीपीएस न्यायालय में ट्रायल पैरवी",
        "दोषसिद्धि के विरुद्ध अपील",
      ],
    },
  },
  {
    slug: "cheque-bounce-138-ni-act",
    image: "paCheque",
    title: {
      en: "Section 138 NI Act (Cheque Bounce)",
      hi: "धारा 138 एनआई एक्ट (चेक बाउंस)",
    },
    short: {
      en: "Fast, deadline-driven cheque dishonour complaints and defence.",
      hi: "समय-सीमा आधारित चेक अनादर शिकायत एवं बचाव।",
    },
    intro: {
      en: [
        "Cheque bounce matters run on strict deadlines: 30 days for the demand notice from the bank memo, 15 days for the drawer to pay, and one month after that to file the complaint. Missing a date can end an otherwise strong case.",
        "Complaints are drafted and filed for payees, and defence is conducted for drawers where the cheque was security, misused, or the legally enforceable debt is disputed.",
        "Recovery is also pursued through interim compensation under Section 143A wherever available.",
      ],
      hi: [
        "चेक बाउंस मामले सख्त समय-सीमा पर चलते हैं: बैंक मेमो से 30 दिन में डिमांड नोटिस, भुगतान के लिए 15 दिन, और उसके एक माह में शिकायत दाखिल। एक तारीख चूकने से मजबूत मामला भी समाप्त हो सकता है।",
        "प्राप्तकर्ता की ओर से शिकायत तैयार कर दाखिल की जाती है, और जहाँ चेक सुरक्षा के रूप में दिया गया, दुरुपयोग हुआ या ऋण विवादित है, वहाँ बचाव किया जाता है।",
        "जहाँ संभव हो, धारा 143A के तहत अंतरिम मुआवज़े से वसूली भी कराई जाती है।",
      ],
    },
    situations: {
      en: [
        "Legal demand notice within limitation",
        "Filing Section 138 complaints",
        "Defence against misused security cheques",
        "Interim compensation under Section 143A",
        "Settlement and compounding",
      ],
      hi: [
        "समय-सीमा के भीतर विधिक डिमांड नोटिस",
        "धारा 138 शिकायत दाखिल करना",
        "दुरुपयोग किए गए सुरक्षा चेक पर बचाव",
        "धारा 143A के तहत अंतरिम मुआवज़ा",
        "समझौता एवं कंपाउंडिंग",
      ],
    },
  },
  {
    slug: "cyber-law",
    image: "paCyber",
    title: { en: "Cyber Law", hi: "साइबर कानून" },
    short: {
      en: "Online fraud, data misuse, defamation and IT Act complaints.",
      hi: "ऑनलाइन धोखाधड़ी, डेटा दुरुपयोग, मानहानि एवं आईटी एक्ट शिकायतें।",
    },
    intro: {
      en: [
        "Digital evidence disappears fast. In cyber matters the first job is preservation — screenshots, transaction trails, device logs and a properly worded complaint to the cyber cell.",
        "Assistance is provided for UPI and investment fraud, account takeover, online harassment and impersonation, obscene content takedown and defamation on social media.",
        "Defence is also handled for people wrongly named in IT Act complaints.",
      ],
      hi: [
        "डिजिटल साक्ष्य जल्दी नष्ट हो जाते हैं। साइबर मामलों में पहला काम है संरक्षण — स्क्रीनशॉट, लेन-देन विवरण, डिवाइस लॉग और साइबर सेल को सही ढंग से लिखी शिकायत।",
        "यूपीआई एवं निवेश धोखाधड़ी, खाता हैकिंग, ऑनलाइन उत्पीड़न व फर्जी पहचान, आपत्तिजनक सामग्री हटवाने और सोशल मीडिया मानहानि में सहायता दी जाती है।",
        "आईटी एक्ट की शिकायतों में गलत तरीके से नामित व्यक्तियों का बचाव भी किया जाता है।",
      ],
    },
    situations: {
      en: [
        "UPI, OTP and investment fraud complaints",
        "Online harassment and impersonation",
        "Content takedown and defamation notices",
        "Data privacy and IT Act compliance advice",
        "Defence in IT Act prosecutions",
      ],
      hi: [
        "यूपीआई, ओटीपी एवं निवेश धोखाधड़ी शिकायत",
        "ऑनलाइन उत्पीड़न एवं फर्जी पहचान",
        "सामग्री हटवाना एवं मानहानि नोटिस",
        "डेटा गोपनीयता एवं आईटी एक्ट अनुपालन सलाह",
        "आईटी एक्ट अभियोजन में बचाव",
      ],
    },
  },
  {
    slug: "rera",
    image: "paProperty",
    title: { en: "RERA (Real Estate)", hi: "रेरा (रियल एस्टेट)" },
    short: {
      en: "Possession delay, refund and builder-buyer disputes before RERA.",
      hi: "कब्ज़े में देरी, रिफंड एवं बिल्डर-खरीदार विवाद — रेरा के समक्ष।",
    },
    intro: {
      en: [
        "Home buyers in Ghaziabad, Noida and Greater Noida most often face the same three problems: possession delayed for years, promised amenities never delivered, and refund requests ignored.",
        "Complaints are filed before UP RERA and the Adjudicating Officer for delay interest, refund with interest and compensation, and appeals before the Appellate Tribunal where required.",
        "Builder-buyer agreements are also reviewed before you sign — far cheaper than litigating later.",
      ],
      hi: [
        "गाज़ियाबाद, नोएडा और ग्रेटर नोएडा के खरीदारों के सामने प्रायः तीन ही समस्याएँ होती हैं: वर्षों तक कब्ज़ा न मिलना, वादा की गई सुविधाएँ न देना, और रिफंड अनुरोध की अनदेखी।",
        "देरी पर ब्याज, ब्याज सहित रिफंड और मुआवज़े हेतु यूपी रेरा एवं न्यायनिर्णायक अधिकारी के समक्ष शिकायत दाखिल की जाती है, तथा आवश्यकता पर अपीलीय अधिकरण में अपील की जाती है।",
        "हस्ताक्षर से पहले बिल्डर-बायर एग्रीमेंट की जाँच भी की जाती है — बाद के मुकदमे से कहीं सस्ता।",
      ],
    },
    situations: {
      en: [
        "Delay interest for late possession",
        "Refund with interest and compensation",
        "Unfair builder-buyer agreement clauses",
        "Appeals before the RERA Appellate Tribunal",
        "Execution of RERA orders",
      ],
      hi: [
        "कब्ज़े में देरी पर ब्याज",
        "ब्याज सहित रिफंड एवं मुआवज़ा",
        "बिल्डर-बायर एग्रीमेंट की अनुचित शर्तें",
        "रेरा अपीलीय अधिकरण में अपील",
        "रेरा आदेशों का निष्पादन",
      ],
    },
  },
  {
    slug: "consumer-matters",
    image: "paDocuments",
    title: { en: "Consumer Matters", hi: "उपभोक्ता मामले" },
    short: {
      en: "Deficiency in service, insurance rejection and unfair trade practice.",
      hi: "सेवा में कमी, बीमा दावा अस्वीकृति एवं अनुचित व्यापार व्यवहार।",
    },
    intro: {
      en: [
        "Consumer forums are the fastest and most affordable route for individuals against companies — provided the complaint is drafted correctly and filed in the right pecuniary jurisdiction.",
        "Matters handled include rejected insurance claims, medical and banking service deficiency, e-commerce and delivery disputes, and misleading advertisements.",
        "Complaints are pursued before District, State and National Commissions.",
      ],
      hi: [
        "व्यक्तियों के लिए कंपनियों के विरुद्ध उपभोक्ता फोरम सबसे तेज़ और किफायती रास्ता है — बशर्ते शिकायत सही ढंग से तैयार हो और उचित अधिकारिता में दाखिल हो।",
        "अस्वीकृत बीमा दावे, चिकित्सा एवं बैंकिंग सेवा में कमी, ई-कॉमर्स व डिलीवरी विवाद और भ्रामक विज्ञापन जैसे मामले देखे जाते हैं।",
        "शिकायतें ज़िला, राज्य एवं राष्ट्रीय आयोग के समक्ष लड़ी जाती हैं।",
      ],
    },
    situations: {
      en: [
        "Rejected or delayed insurance claims",
        "Deficiency in banking and medical services",
        "E-commerce and delivery disputes",
        "Misleading advertisement and unfair trade practice",
        "Appeals before State and National Commissions",
      ],
      hi: [
        "अस्वीकृत या विलंबित बीमा दावे",
        "बैंकिंग एवं चिकित्सा सेवा में कमी",
        "ई-कॉमर्स एवं डिलीवरी विवाद",
        "भ्रामक विज्ञापन एवं अनुचित व्यापार व्यवहार",
        "राज्य एवं राष्ट्रीय आयोग में अपील",
      ],
    },
  },
  {
    slug: "ipr-trademark-copyright",
    image: "lawBooks",
    title: {
      en: "IPR — Trademark & Copyright",
      hi: "आईपीआर — ट्रेडमार्क एवं कॉपीराइट",
    },
    short: {
      en: "Brand registration, objections, oppositions and infringement action.",
      hi: "ब्रांड पंजीकरण, आपत्ति, विरोध एवं उल्लंघन कार्रवाई।",
    },
    intro: {
      en: [
        "A brand is only as safe as its registration. Most small businesses discover this only after someone else files the same mark, or after an examination report arrives and is ignored.",
        "Support covers trademark search and filing, replies to examination reports, opposition and rectification, copyright registration for creative and software work, and infringement or passing-off action.",
        "Cease-and-desist notices are drafted to resolve matters before litigation wherever possible.",
      ],
      hi: [
        "ब्रांड उतना ही सुरक्षित है जितना उसका पंजीकरण। अधिकांश छोटे व्यवसायों को यह तब पता चलता है जब कोई और वही मार्क दाखिल कर देता है या परीक्षा रिपोर्ट की अनदेखी हो जाती है।",
        "ट्रेडमार्क सर्च एवं फाइलिंग, परीक्षा रिपोर्ट का उत्तर, विरोध एवं सुधार, रचनात्मक व सॉफ़्टवेयर कार्य का कॉपीराइट पंजीकरण, तथा उल्लंघन व पासिंग-ऑफ कार्रवाई में सहायता।",
        "जहाँ संभव हो, मुकदमे से पहले मामला निपटाने हेतु सीज़-एंड-डिसिस्ट नोटिस तैयार किया जाता है।",
      ],
    },
    situations: {
      en: [
        "Trademark search, filing and renewal",
        "Reply to examination report and objections",
        "Opposition and rectification proceedings",
        "Copyright registration and assignment",
        "Infringement and passing-off suits",
      ],
      hi: [
        "ट्रेडमार्क सर्च, फाइलिंग एवं नवीनीकरण",
        "परीक्षा रिपोर्ट एवं आपत्तियों का उत्तर",
        "विरोध एवं सुधार कार्यवाही",
        "कॉपीराइट पंजीकरण एवं समनुदेशन",
        "उल्लंघन एवं पासिंग-ऑफ वाद",
      ],
    },
  },
];

export function getPracticeArea(slug: string) {
  return PRACTICE_AREAS.find((a) => a.slug === slug);
}

export function areaImage(area: PracticeArea) {
  return IMAGES[area.image];
}

export function pick<T>(value: { en: T; hi: T }, locale: Locale): T {
  return value[locale];
}