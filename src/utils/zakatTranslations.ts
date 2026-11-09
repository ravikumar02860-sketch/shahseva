/**
 * Multilingual Translations for Zakat Calculator: English, Hindi, and Urdu
 * Complete coverage for UI labels, tooltips, breakdown, guides, and FAQs.
 */

export type ZakatLanguage = 'en' | 'hi' | 'ur';

export interface ZakatTranslation {
  badge: string;
  heroTitle: string;
  heroArabic: string;
  heroSubtitle: string;
  langName: string;

  // Nisab configuration
  nisabCardTitle: string;
  nisabSelectLabel: string;
  nisabSilverLabel: string;
  nisabGoldLabel: string;
  nisabRecommendedTag: string;
  standardSelectorLabel: string;
  standardHanafiLabel: string;
  standardAaoifiLabel: string;
  liveRatesTitle: string;
  liveRatesSubtitle: string;
  liveRateGoldLabel: string;
  liveRateSilverLabel: string;
  lastUpdated: string;
  customPricePrompt: string;
  manualOverrideBtn: string;
  saveRatesBtn: string;

  // Asset inputs
  assetsTitle: string;
  cashInHandLabel: string;
  cashInHandTooltip: string;
  bankSavingsLabel: string;
  bankSavingsTooltip: string;

  goldLabel: string;
  goldTooltip: string;
  silverLabel: string;
  silverTooltip: string;
  unitGrams: string;
  unitTola: string;
  unitInrValue: string;
  purityLabel: string;
  calculatedValue: string;

  jewelleryCheckboxLabel: string;
  jewelleryCheckboxTooltip: string;

  sharesLabel: string;
  sharesTooltip: string;
  businessStockLabel: string;
  businessStockTooltip: string;
  moneyOwedLabel: string;
  moneyOwedTooltip: string;
  fdLabel: string;
  fdTooltip: string;
  cryptoLabel: string;
  cryptoTooltip: string;
  otherAssetsLabel: string;
  otherAssetsTooltip: string;

  // Liabilities
  liabilitiesTitle: string;
  debtsDueNowLabel: string;
  debtsDueNowTooltip: string;
  unpaidBillsLabel: string;
  unpaidBillsTooltip: string;
  loanInstallmentsLabel: string;
  loanInstallmentsTooltip: string;
  otherLiabilitiesLabel: string;
  otherLiabilitiesTooltip: string;

  // Running strip & action buttons
  runningStripAssets: string;
  runningStripLiabilities: string;
  runningStripNet: string;
  calculateBtn: string;
  clearAllBtn: string;

  // Results panel
  resultsTitle: string;
  resultsPlaceholder: string;
  statusDueBadge: string;
  statusBelowBadge: string;
  eligibleHeading: string;
  notEligibleHeading: string;
  notEligibleMessage: string;
  sadaqahWelcomeText: string;
  hawlReminderTitle: string;
  hawlReminderDesc: string;

  breakdownTitle: string;
  breakdownTotalAssets: string;
  breakdownTotalLiabilities: string;
  breakdownNetAssets: string;
  breakdownNisabUsed: string;
  breakdownZakatRate: string;
  breakdownFinalAmount: string;

  // Action buttons
  payZakatNowBtn: string;
  shareWhatsAppBtn: string;
  downloadPdfBtn: string;
  remindMeBtn: string;
  chooseCauseLabel: string;

  causes: {
    general: string;
    needy: string;
    widowsOrphans: string;
    medical: string;
    education: string;
    food: string;
  };

  impactLinksTitle: string;
  viewImpactBtn: string;
  viewTransparencyBtn: string;

  // Trust strip
  trustStripTitle: string;
  trustPolicyLabel: string;
  trustRegLabel: string;

  // Educational guide
  guideTitle: string;
  guideSubtitle: string;
  guideWhatIsZakatTitle: string;
  guideWhatIsZakatBody: string;
  guideNisabHawlTitle: string;
  guideNisabHawlBody: string;
  guideCategoriesTitle: string;
  guideCategoriesVerse: string;
  guideCategoriesList: string[];
  guideAssetsTitle: string;
  guideAssetsPoints: { title: string; desc: string }[];

  // FAQ
  faqTitle: string;
  faqSubtitle: string;
  faqDisclaimer: string;
  faqs: { q: string; a: string }[];
}

export const zakatTranslations: Record<ZakatLanguage, ZakatTranslation> = {
  en: {
    badge: 'Zakat & Charity in India',
    heroArabic: 'زكاة المال',
    heroTitle: 'Online Zakat Calculator India',
    heroSubtitle:
      'Calculate your obligatory 2.5% Zakat precisely with real-time gold and silver Nisab rates, itemized deductions, and immediate donation receipt for poor families.',
    langName: 'English',

    nisabCardTitle: 'Understanding Nisab Values',
    nisabSelectLabel: 'Choose Nisab Benchmark',
    nisabSilverLabel: 'Silver Nisab',
    nisabGoldLabel: 'Gold Nisab',
    nisabRecommendedTag: 'Commonly recommended for maximum benefit to the poor',
    standardSelectorLabel: 'Jurisprudential Standard',
    standardHanafiLabel: 'Classical / Hanafi (612.36g Silver / 87.48g Gold)',
    standardAaoifiLabel: 'AAOIFI Standard (595g Silver / 85g Gold)',
    liveRatesTitle: 'Live Precious Metals Pricing (India)',
    liveRatesSubtitle: 'Real-time XAU/XAG converted to INR via open exchange rates.',
    liveRateGoldLabel: '24K Gold / Gram',
    liveRateSilverLabel: 'Fine Silver / Gram',
    lastUpdated: 'Last updated',
    customPricePrompt: 'Edit or customize metal rates to match your local bullion market.',
    manualOverrideBtn: 'Custom Rates',
    saveRatesBtn: 'Save Rates',

    assetsTitle: 'Zakatable Assets (What You Own)',
    cashInHandLabel: 'Cash in Hand',
    cashInHandTooltip: 'Currency notes and coins physically held at home, office, or in your wallet.',
    bankSavingsLabel: 'Bank Balances (Savings & Current)',
    bankSavingsTooltip: 'All money sitting in savings, current, and liquid digital wallets (excluding interest earnings).',

    goldLabel: 'Gold Owned',
    goldTooltip: 'Gold bars, coins, biscuits, or jewellery. Weight and purity auto-calculate using live INR rates.',
    silverLabel: 'Silver Owned',
    silverTooltip: 'Silver bars, utensils, coins, or ornaments based on current market weight.',
    unitGrams: 'Grams',
    unitTola: 'Tola (11.66g)',
    unitInrValue: 'I know the ₹ value',
    purityLabel: 'Purity',
    calculatedValue: 'Computed Value',

    jewelleryCheckboxLabel: 'Include jewellery worn for personal daily use',
    jewelleryCheckboxTooltip:
      'Views differ among Islamic schools: the Hanafi school includes all gold and silver jewellery, whereas Shafi‘i, Maliki, and Hanbali schools generally exempt customary personal wear. If uncertain, consult a qualified Islamic scholar.',

    sharesLabel: 'Shares & Mutual Funds (Zakatable Portion)',
    sharesTooltip:
      'For short-term trading: full market value. For long-term dividend investments: 25%–30% proxy representing net underlying liquid assets.',
    businessStockLabel: 'Business Inventory & Finished Goods',
    businessStockTooltip:
      'Current wholesale market value of finished stock and merchandise held strictly for sale or resale (exclude fixed tools, machines, and real estate).',
    moneyOwedLabel: 'Money Owed to You (Good Debts)',
    moneyOwedTooltip:
      'Loans or deposits you expect to recover from solvent borrowers. Do not include unrecoverable bad debts.',
    fdLabel: 'Fixed Deposits, RDs & Savings Bonds',
    fdTooltip: 'The principal face value of FDs, RDs, or government certificates. Note: Exclude accrued interest; donate interest to charity without seeking reward.',
    cryptoLabel: 'Cryptocurrency & Digital Tokens',
    cryptoTooltip: 'Current market value in INR of liquid cryptocurrencies, tokens, and digital stablecoins.',
    otherAssetsLabel: 'Other Liquid Wealth & Assets',
    otherAssetsTooltip: 'Foreign currency, prize bonds, rental deposits you will get back, or any other wealth convertible to cash.',

    liabilitiesTitle: 'Deductible Liabilities (What You Owe)',
    debtsDueNowLabel: 'Debts Due Immediately (Payable Now)',
    debtsDueNowTooltip: 'Personal loans, credit card balances, or debts past their due date that must be settled immediately.',
    unpaidBillsLabel: 'Unpaid Bills, Rent & Outstanding Taxes',
    unpaidBillsTooltip: 'Overdue rent, electricity/utility bills, worker wages, and taxes owed for the past period.',
    loanInstallmentsLabel: 'Loan Installments Due Within the Coming Year',
    loanInstallmentsTooltip:
      'Principle EMI or loan installments falling due within the next 12 lunar months (the non-interest principal component).',
    otherLiabilitiesLabel: 'Other Immediate Liabilities',
    otherLiabilitiesTooltip: 'Any other verified short-term financial liability due within the current Hijri cycle.',

    runningStripAssets: 'Total Assets',
    runningStripLiabilities: 'Total Liabilities',
    runningStripNet: 'Net Zakatable Wealth',
    calculateBtn: 'Calculate My Zakat',
    clearAllBtn: 'Clear All',

    resultsTitle: 'Your Zakat Assessment',
    resultsPlaceholder: 'Enter your financial details and click "Calculate My Zakat" to view your verified breakdown.',
    statusDueBadge: 'Zakat Due (Obligatory)',
    statusBelowBadge: 'Below Nisab Threshold',
    eligibleHeading: 'Zakat is Obligatory on Your Wealth',
    notEligibleHeading: 'Zakat is Not Obligatory on You Right Now',
    notEligibleMessage:
      'Your net wealth is below the required Nisab threshold. You are not obligated to pay Zakat at this time, though voluntary Sadaqah is always deeply virtuous and welcome.',
    sadaqahWelcomeText: 'Give voluntary Sadaqah to support vulnerable families',
    hawlReminderTitle: 'Hawl Requirement (One Full Hijri Year)',
    hawlReminderDesc:
      'Zakat is only obligatory if your net wealth remained equal to or above the Nisab benchmark continuously for one full lunar year (354 days).',

    breakdownTitle: 'Itemized Calculation Breakdown',
    breakdownTotalAssets: 'Total Gross Assets',
    breakdownTotalLiabilities: 'Deductible Liabilities',
    breakdownNetAssets: 'Net Zakatable Wealth',
    breakdownNisabUsed: 'Applied Nisab Threshold',
    breakdownZakatRate: 'Zakat Rate (2.5% / 1/40th)',
    breakdownFinalAmount: 'Total Zakat Payable',

    payZakatNowBtn: 'Pay Zakat Now',
    shareWhatsAppBtn: 'Share on WhatsApp',
    downloadPdfBtn: 'Download PDF Summary',
    remindMeBtn: 'Remind Me (Hijri Calendar)',
    chooseCauseLabel: 'Select Specific Zakat Cause (Optional):',

    causes: {
      general: 'Where Most Needed (General Zakat Fund)',
      needy: 'Direct Relief for Impoverished Families',
      widowsOrphans: 'Sponsor Widows & Orphan Children',
      medical: 'Life-Saving Surgeries & Medical Aid',
      education: 'Poor Student Scholarships & Books',
      food: 'Emergency Food Ration Kits for Hunger Relief',
    },

    impactLinksTitle: 'Transparency & Verified Impact',
    viewImpactBtn: 'View Real Ground Impact',
    viewTransparencyBtn: 'Read 100% Transparency Audit',

    trustStripTitle: 'Faith-Based Governance & Compliance',
    trustPolicyLabel: '100% Zakat Policy: All collected Zakat is distributed strictly to Quranic eligible categories (Asnaf) without administrative deductions.',
    trustRegLabel: 'Registered Under Rajasthan Societies Act: Reg. No. COOP/2025/BHILWARA/500577',

    guideTitle: 'Comprehensive Guide to Zakat in India',
    guideSubtitle: 'Understanding the divine third pillar of Islam under Indian financial practices and classical jurisprudence.',
    guideWhatIsZakatTitle: 'What is Zakat and Why is It Obligatory?',
    guideWhatIsZakatBody:
      'Zakat is one of the five pillars of Islam, mandated in the Holy Quran upon every sane, adult Muslim who possesses wealth equal to or exceeding the Nisab threshold for a full lunar year (Hawl). Rather than an optional charity, Zakat is a divine right of the impoverished upon the wealthy, purifying the giver’s assets and redistributing economic surplus.',
    guideNisabHawlTitle: 'Understanding Nisab and Hawl in India',
    guideNisabHawlBody:
      'Nisab represents the minimum threshold of wealth below which no Zakat is due. Historically set at 87.48 grams of gold or 612.36 grams of silver (Hanafi school). Because the silver threshold is currently lower in INR, classical scholars widely recommend using Silver Nisab as the benchmark to benefit more vulnerable individuals. Hawl refers to the completion of one full lunar year (354 days) from the day your wealth first met or exceeded Nisab.',
    guideCategoriesTitle: 'The 8 Quranic Categories (Surah At-Tawbah 9:60)',
    guideCategoriesVerse:
      '"Zakat expenditures are only for the poor and for the needy and for those employed to collect [zakat] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah. And Allah is Knowing and Wise." (Surah At-Tawbah, 9:60)',
    guideCategoriesList: [
      'Al-Fuqara (The Poor who possess little to no wealth)',
      'Al-Masakin (The Destitute who cannot fulfill basic daily survival)',
      'Al-Amilina Alayha (The verified administrators and collectors of Zakat)',
      'Al-Mu’allafatu Qulubuhum (Reconciling hearts toward truth and faith)',
      'Fir-Riqab (Freeing oppressed individuals and those in servitude)',
      'Al-Gharimin (Debtors overwhelmed by inescapable debt for basic needs)',
      'Fi Sabilillah (In the path of Allah: communal welfare, learning, and faith)',
      'Ibn As-Sabil (Wayfarers and stranded travelers in urgent distress)',
    ],
    guideAssetsTitle: 'How to Treat Specific Asset Classes',
    guideAssetsPoints: [
      {
        title: 'Gold & Silver Jewellery',
        desc: 'In the Hanafi school, all gold and silver is zakatable, whether worn or stored. In other schools, ordinary personal wear is exempt. Shah Seva’s calculator lets you toggle this based on your personal scholarly guidance.',
      },
      {
        title: 'Shares, Mutual Funds & Equity',
        desc: 'If purchased for short-term trading, zakat applies to the full market value. If held for long-term dividend income, zakat is due only on the company’s underlying zakatable assets (typically 25%–30% of total share value).',
      },
      {
        title: 'Fixed Deposits (FD) & National Savings Certificates',
        desc: 'Zakat is obligatory only on the principal deposited amount. Any earned banking interest must be disposed of directly to charity without expecting spiritual reward.',
      },
      {
        title: 'Business Stock & Merchandise',
        desc: 'Evaluated at current wholesale replacement value at the end of your Zakat accounting year. Do not include fixed capital such as shops, vehicles, computers, or tools.',
      },
      {
        title: 'Cryptocurrency & Digital Assets',
        desc: 'Treated as trade assets or digital wealth; valued at the prevailing INR spot price on your calculation date.',
      },
    ],

    faqTitle: 'Frequently Asked Questions About Zakat',
    faqSubtitle: 'Clear, authentic answers to common calculation and eligibility questions.',
    faqDisclaimer:
      'Disclaimer: This calculator is provided as a digital estimation and educational aid. For complex estates, partnership deeds, or individual fatwas, please consult a qualified Islamic scholar or local Mufti.',
    faqs: [
      {
        q: 'Which Nisab should I choose: Gold or Silver?',
        a: 'The majority of contemporary Indian scholars recommend using the Silver Nisab (approx. 612.36g) because its lower monetary value allows more impoverished families to receive vital support. However, if your wealth consists purely of gold with zero cash or silver, some scholars permit using the Gold Nisab.',
      },
      {
        q: 'What is the exact percentage of Zakat?',
        a: 'The standard Zakat rate on commercial wealth, cash, and precious metals is 2.5% (one fortieth, or 1/40th) of net zakatable assets according to the lunar calendar year.',
      },
      {
        q: 'How does the Hawl (1-year cycle) work?',
        a: 'Hawl requires you to possess net assets above the Nisab for one continuous lunar year (approx. 354 days). Many Muslims choose the blessed month of Ramadan or a specific Islamic month (such as Muharram or Rajab) as their fixed annual calculation date.',
      },
      {
        q: 'Is Zakat due on personal property, cars, or homes?',
        a: 'No. Primary residences, personal vehicles, furniture, everyday clothing, and tools used for one’s profession are strictly exempt from Zakat.',
      },
      {
        q: 'Can I deduct my long-term home loan or car loan?',
        a: 'Scholars hold that you may only deduct the principal installments due in the immediate 12 months (or debts due right now). You cannot deduct the entire 15–20 year mortgage balance against this year’s cash and gold.',
      },
      {
        q: 'Do I have to pay Zakat on gold jewellery that I wear every day?',
        a: 'In the Hanafi jurisprudence followed predominantly across the Indian subcontinent, Zakat is due on all gold and silver regardless of whether it is worn or stored. In Shafi‘i, Maliki, and Hanbali schools, reasonable personal wear is exempt. We provide a toggle so you can calculate according to your practice.',
      },
      {
        q: 'Can Zakat be given to close relatives?',
        a: 'You cannot give Zakat to direct ascendants (parents, grandparents) or direct descendants (children, grandchildren), nor to your spouse. However, Zakat can and should be prioritized for needy siblings, uncles, aunts, and in-laws if they meet Quranic eligibility, carrying double reward (charity + family ties).',
      },
      {
        q: 'How does Shah Seva Sansthan distribute Zakat?',
        a: 'Shah Seva Sansthan strictly distributes Zakat in full ownership (Tamleek) to verified poor families, widows, emergency medical surgery cases, and underprivileged students in accordance with Surah At-Tawbah 9:60 without administrative deduction.',
      },
      {
        q: 'Can I pay my Zakat in advance before the year ends?',
        a: 'Yes, if you already meet the Nisab, it is permissible and recommended by scholars to pay Zakat ahead of time—especially during crises, natural disasters, or during the blessed days of Ramadan.',
      },
      {
        q: 'What if my net assets fall below Nisab during the year?',
        a: 'According to the Hanafi school, if your wealth was above Nisab at the start and end of your annual accounting date, fluctuations during the intermediate year do not invalidate your obligation, as long as wealth did not completely diminish to zero.',
      },
    ],
  },

  hi: {
    badge: 'भारत में जकात और खैरात',
    heroArabic: 'زكاة المال',
    heroTitle: 'ऑनलाइन जकात कैलकुलेटर इंडिया',
    heroSubtitle:
      'सोने और चांदी के लाइव निसब भाव के अनुसार अपनी 2.5% अनिवार्य जकात की सटीक गणना करें और जरूरतमंद गरीब परिवारों तक सीधे पहुंचाएं।',
    langName: 'हिन्दी',

    nisabCardTitle: 'निसब की सही समझ',
    nisabSelectLabel: 'निसब पैमाना चुनें',
    nisabSilverLabel: 'चांदी का निसब (सिल्वर)',
    nisabGoldLabel: 'सोने का निसब (गोल्ड)',
    nisabRecommendedTag: 'गरीबों के अधिकतम लाभ हेतु उलेमा द्वारा अनुशंसित',
    standardSelectorLabel: 'इस्लामी मानक',
    standardHanafiLabel: 'हनाफी मानक (612.36 ग्राम चांदी / 87.48 ग्राम सोना)',
    standardAaoifiLabel: 'AAOIFI मानक (595 ग्राम चांदी / 85 ग्राम सोना)',
    liveRatesTitle: 'भारत में सोने व चांदी के लाइव भाव',
    liveRatesSubtitle: 'अंतर्राष्ट्रीय बुलियन मार्केट से भारतीय रुपयों में रीयल-टाइम गणना।',
    liveRateGoldLabel: '24K सोना / ग्राम',
    liveRateSilverLabel: 'शुद्ध चांदी / ग्राम',
    lastUpdated: 'अंतिम अपडेट',
    customPricePrompt: 'आप अपने स्थानीय सराफा बाजार के अनुसार भाव स्वयं बदल सकते हैं।',
    manualOverrideBtn: 'भाव बदलें',
    saveRatesBtn: 'भाव सहेजें',

    assetsTitle: 'जकात योग्य संपत्ति (कुल जायदाद)',
    cashInHandLabel: 'हाथ में नकद रकम (Cash in Hand)',
    cashInHandTooltip: 'घर, दुकान या जेब में रखी नकदी।',
    bankSavingsLabel: 'बैंक बचत व चालू खाते की रकम',
    bankSavingsTooltip: 'बचत और चालू बैंक खातों में जमा राशि (ब्याज की रकम छोड़कर)।',

    goldLabel: 'सोने की मात्रा या मूल्य',
    goldTooltip: 'सोने के जेवर, सिक्के, बिस्किट या ईंट। ग्राम या तोले में दर्ज करें।',
    silverLabel: 'चांदी की मात्रा या मूल्य',
    silverTooltip: 'चांदी के जेवर, बर्तन, सिक्के या सिल्लियां।',
    unitGrams: 'ग्राम',
    unitTola: 'तोला (11.66g)',
    unitInrValue: 'सीधे ₹ मूल्य दर्ज करें',
    purityLabel: 'शुद्धता (Purity)',
    calculatedValue: 'अनुमानित कुल मूल्य',

    jewelleryCheckboxLabel: 'दैनिक उपयोग में पहने जाने वाले जेवर भी शामिल करें',
    jewelleryCheckboxTooltip:
      'हनाफी फिकह के अनुसार पहने जाने वाले जेवरों पर भी जकात वाजिब है। अन्य फिकह में छूट दी गई है। आवश्यकतानुसार अपने मुफ्ती साहिब से मशवरा लें।',

    sharesLabel: 'शेयर, म्यूचुअल फंड व निवेश',
    sharesTooltip: 'ट्रेडिंग के शेयरों का पूरा बाजार मूल्य; लंबे निवेश के लिए अनुमानित 25-30% तरल हिस्सा।',
    businessStockLabel: 'व्यापारिक माल (दुकान/गोदाम का स्टॉक)',
    businessStockTooltip: 'बिक्री के लिए रखे गए माल का मौजूदा थोक बाजार मूल्य।',
    moneyOwedLabel: 'उधार दी गई रकम जो वापस मिलनी है',
    moneyOwedTooltip: 'वह कर्ज जो आपने किसी को दिया है और उसकी वापसी की पूरी उम्मीद है।',
    fdLabel: 'फिक्स्ड डिपॉजिट (FD) व बचत पत्र',
    fdTooltip: 'एफडी या आरडी की मूल राशि। मिलने वाला ब्याज अलग निकाल कर बिना सवाब की नीयत से सदका कर दें।',
    cryptoLabel: 'क्रिप्टोकरेंसी व डिजिटल टोकन',
    cryptoTooltip: 'डिजिटल करेंसी का भारतीय रुपयों में मौजूदा मूल्य।',
    otherAssetsLabel: 'अन्य तरल संपत्तियां',
    otherAssetsTooltip: 'विदेशी मुद्रा, वापसी योग्य किराया डिपॉजिट या अन्य नकदी समकक्ष धन।',

    liabilitiesTitle: 'घटाने योग्य देनदारियां (कर्ज व बिल)',
    debtsDueNowLabel: 'तुरंत चुकाने योग्य कर्ज (Immediate Debts)',
    debtsDueNowTooltip: 'वह कर्ज जो अभी इसी वक्त अदा करना लाजिम है।',
    unpaidBillsLabel: 'बकाया बिल, किराया व टैक्स',
    unpaidBillsTooltip: 'दुकान या मकान का बकाया किराया, बिजली बिल व टैक्स।',
    loanInstallmentsLabel: 'आगामी 1 वर्ष में देय लोन किस्तें (मूलधन)',
    loanInstallmentsTooltip: 'अगले 12 महीनों में आने वाली होम लोन या कार लोन की मूल किस्तें।',
    otherLiabilitiesLabel: 'अन्य तात्कालिक देनदारियां',
    otherLiabilitiesTooltip: 'अन्य कोई भी अल्पकालिक देनदारी जो इसी वर्ष चुकानी है।',

    runningStripAssets: 'कुल संपत्ति',
    runningStripLiabilities: 'कुल देनदारियां',
    runningStripNet: 'शुद्ध जकात योग्य संपत्ति',
    calculateBtn: 'मेरी जकात की गणना करें',
    clearAllBtn: 'फॉर्म साफ करें',

    resultsTitle: 'जकात गणना का परिणाम',
    resultsPlaceholder: 'अपनी संपत्ति व देनदारियों का विवरण भरकर "मेरी जकात की गणना करें" पर क्लिक करें।',
    statusDueBadge: 'जकात वाजिब है (Due)',
    statusBelowBadge: 'निसब से कम (Below Nisab)',
    eligibleHeading: 'आपके माल पर जकात वाजिब (फर्ज) है',
    notEligibleHeading: 'वर्तमान में आप पर जकात वाजिब नहीं है',
    notEligibleMessage:
      'आपकी शुद्ध संपत्ति निसब की निर्धारित सीमा से कम है। आप पर जकात फर्ज नहीं है, परंतु आप स्वेच्छा से सदका दे सकते हैं।',
    sadaqahWelcomeText: 'गरीब और बेसहारा परिवारों के लिए नफली सदका दें',
    hawlReminderTitle: 'हौल की शर्त (पूरा एक इस्लामी वर्ष)',
    hawlReminderDesc:
      'जकात केवल तभी वाजिब होती है जब आपकी संपत्ति पूरे एक हिजरी वर्ष (लगभग 354 दिन) तक निसब के बराबर या अधिक रही हो।',

    breakdownTitle: 'विस्तृत गणना तालिका (Breakdown)',
    breakdownTotalAssets: 'कुल संपत्तियां',
    breakdownTotalLiabilities: 'कुल देनदारियां',
    breakdownNetAssets: 'शुद्ध संपत्ति (Net Wealth)',
    breakdownNisabUsed: 'लागू निसब सीमा',
    breakdownZakatRate: 'जकात की दर (2.5% / 40वां हिस्सा)',
    breakdownFinalAmount: 'देय कुल जकात',

    payZakatNowBtn: 'जकात अदा करें',
    shareWhatsAppBtn: 'व्हाट्सएप पर शेयर करें',
    downloadPdfBtn: 'पीडीएफ (PDF) रसीद डाउनलोड करें',
    remindMeBtn: 'रमजान / हिजरी साल का रिमाइंडर सेट करें',
    chooseCauseLabel: 'जकात का मद चुनें (वैकल्पिक):',

    causes: {
      general: 'जहां सबसे अधिक जरूरत हो (सामान्य जकात फंड)',
      needy: 'अति निर्धन परिवारों को नकद सहायता व राशन',
      widowsOrphans: 'बेवाओं और यतीम बच्चों की परवरिश',
      medical: 'गरीब मरीजों का इलाज व आपात सर्जरी',
      education: 'जरूरतमंद बच्चों की स्कूल फीस व कॉपियां',
      food: 'भूखे परिवारों के लिए राशन किट वितरण',
    },

    impactLinksTitle: 'पारदर्शिता और जमीनी कार्य',
    viewImpactBtn: 'जमीनी प्रभाव देखें (Impact)',
    viewTransparencyBtn: '100% पारदर्शिता रिपोर्ट पढ़ें',

    trustStripTitle: 'शरीयत अनुपालन व सरकारी पंजीयन',
    trustPolicyLabel: '100% जकात नीति: एकत्र की गई जकात बिना किसी प्रशासनिक कटौती के कुरान पाक के 8 हकदारों तक पहुंचाई जाती है।',
    trustRegLabel: 'राजस्थान संस्था रजिस्ट्रीकरण अधिनियम अंतर्गत पंजीकृत: Reg. No. COOP/2025/BHILWARA/500577',

    guideTitle: 'भारत में जकात की मुकम्मल रहनुमाई',
    guideSubtitle: 'इस्लाम के तीसरे अहम सुतून जकात की भारतीय वित्तीय संदर्भ में प्रमाणिक जानकारी।',
    guideWhatIsZakatTitle: 'जकात क्या है और यह क्यों फर्ज है?',
    guideWhatIsZakatBody:
      'जकात इस्लाम के पांच बुनियादी अरकानों में से एक है। कुरान मजीद में हर उस साहिबे-निसब बालिग और अक्लमंद मुसलमान पर जकात फर्ज की गई है जिसके पास अपनी बुनियादी जरूरतों से जायद माल एक साल तक मौजूद रहा हो।',
    guideNisabHawlTitle: 'निसब और हौल (एक साल) की समझ',
    guideNisabHawlBody:
      'निसब वह न्यूनतम पैमाना है जिसके नीचे जकात नहीं होती। हनाफी फिकह में 87.48 ग्राम सोना या 612.36 ग्राम चांदी निसब है। चूंकि चांदी का निसब रुपयों में कम बनता है, इसलिए हिंदुस्तान के उलमा चांदी के निसब को तरजीह देते हैं ताकि ज्यादा से ज्यादा गरीबों की मदद हो सके।',
    guideCategoriesTitle: 'कुरान के 8 मुस्तहिकिन (सूरह अत-तौबा 9:60)',
    guideCategoriesVerse:
      '"सदकात (जकात) तो सिर्फ फकीरों और मिस्कीनों के लिए है, और उन कारकुनों के लिए जो उन पर मुकर्रर हैं, और जिनकी दिलदारी मकसूद हो, और गर्दनों को छुड़ाने में, और कर्जदारों के लिए, और अल्लाह की राह में, और मुसाफिरों के लिए; यह अल्लाह की तरफ से मुकर्रर किया हुआ हुक्म है।" (सूरह अत-तौबा, आयत 60)',
    guideCategoriesList: [
      'अल-फुकरा (वह गरीब जिनके पास निसब से कम माल हो)',
      'अल-मसाकीन (वह बेसहारा जो बिल्कुल मोहताज हों)',
      'अल-आमिलीना अलैहा (जकात इकट्ठा व बांटने वाले मुकर्रर मुलाजिम)',
      'अल-मुअल्लफतु कुलूबुहुम (जिनकी दिलजोई मकसूद हो)',
      'फिर-रिकाब (गुलामों या मजलूमों को आजाद कराने में)',
      'अल-गारिमीन (वह कर्जदार जो कर्ज चुकाने से आजिज हों)',
      'फी सबीलील्लाह (अल्लाह की राह में नेकी के कामों में)',
      'इब्न उस-सबील (वह मुसाफिर जो रास्ते में बेयारो-मददगार हो जाए)',
    ],
    guideAssetsTitle: 'विभिन्न संपत्तियों पर जकात के नियम',
    guideAssetsPoints: [
      {
        title: 'सोने-चांदी के जेवरात',
        desc: 'हनाफी मसलक में पहनने वाले जेवरात पर भी जकात वाजिब है। अन्य मसलक में व्यक्तिगत इस्तेमाल के जेवर पर छूट है।',
      },
      {
        title: 'शेयर व म्यूचुअल फंड',
        desc: 'व्यापार की नीयत से खरीदे गए शेयरों पर कुल बाजार मूल्य पर, तथा लंबे निवेश पर कंपनी के तरल एसेट्स (लगभग 25-30%) पर जकात दी जाती है।',
      },
      {
        title: 'फिक्स्ड डिपॉजिट (FD)',
        desc: 'एफडी के मूलधन पर जकात लाजिम है। ब्याज की रकम को अलग करके बिना सवाब की नीयत से सदका कर देना चाहिए।',
      },
      {
        title: 'व्यापार का स्टॉक',
        desc: 'साल पूरा होने पर दुकान या गोदाम में मौजूद माल-ए-तिजारत के मौजूदा थोक भाव पर जकात निकाली जाती है।',
      },
      {
        title: 'क्रिप्टो व डिजिटल करेंसी',
        desc: 'मौजूदा बाजार मूल्य के आधार पर 2.5% जकात निकाली जाती है।',
      },
    ],

    faqTitle: 'जकात से जुड़े आम सवालात (FAQ)',
    faqSubtitle: 'जकात की अदायगी और हिसाब से जुड़े अक्सर पूछे जाने वाले सवालों के प्रामाणिक जवाब।',
    faqDisclaimer:
      'सलाह: यह कैलकुलेटर केवल हिसाब में आसानी के लिए बनाया गया डिजिटल साधन है। किसी भी विशेष मसले के लिए अपने स्थानीय मुफ्ती-ए-कराम से फतवा लें।',
    faqs: [
      {
        q: 'सोने का निसब मानें या चांदी का?',
        a: 'भारतीय उलमा-ए-कराम चांदी के निसब (612.36 ग्राम) को अपनाने की सलाह देते हैं ताकि ज्यादा से ज्यादा गरीबों की मदद हो सके।',
      },
      {
        q: 'जकात कितने प्रतिशत दी जाती है?',
        a: 'जकात कुल शुद्ध संपत्ति का 2.5% (यानी 40वां हिस्सा) दी जाती है।',
      },
      {
        q: 'क्या घर या निजी गाड़ी पर जकात लगती है?',
        a: 'नहीं, रहने का मकान, घरेलू सामान, सवारी की गाड़ी और रोजी-रोटी के औजारों पर कोई जकात नहीं है।',
      },
      {
        q: 'क्या होम लोन का पूरा कर्ज घटा सकते हैं?',
        a: 'नहीं, केवल चालू वर्ष में दी जाने वाली 12 महीनों की किस्तों का मूलधन ही घटाया जा सकता है।',
      },
      {
        q: 'शाह सेवा संस्थान जकात कैसे खर्च करता है?',
        a: 'शाह सेवा संस्थान एकत्र की गई जकात को शत-प्रतिशत कुरान के बताए मुस्तहिकों (मरीजों के इलाज, यतीमों और बेवाओं) तक पहुंचाता है।',
      },
      {
        q: 'क्या साल पूरा होने से पहले जकात दी जा सकती है?',
        a: 'जी हां, साहिबे-निसब शख्स साल खत्म होने से पहले रमजानुल मुबारक या किसी जरूरतमंद की मदद के लिए पेशगी जकात अदा कर सकता है।',
      },
      {
        q: 'क्या अपने रिश्तेदारों को जकात दी जा सकती है?',
        a: 'मां-बाप, दादा-दादी और औलाद तथा जीवनसाथी को छोड़कर जरूरतमंद भाई, बहन, चाचा, खाला आदि को जकात दी जा सकती है और इसका दोहरा सवाब है।',
      },
      {
        q: 'क्या जेवर गिरवी रखे हों तो जकात देनी होगी?',
        a: 'यदि जेवर आपके स्वामित्व में हैं तो उनके शुद्ध मूल्य पर जकात का हिसाब लगाया जाएगा।',
      },
      {
        q: 'यदि पूरे साल संपत्ति घटती-बढ़ती रहे तो क्या नियम है?',
        a: 'हनाफी फिकह में साल के शुरू और अंत में निसब पूरा होना चाहिए, बीच में संपत्ति शून्य न हुई हो तो जकात वाजिब मानी जाती है।',
      },
      {
        q: 'जकात किस महीने में निकालना सबसे बेहतर है?',
        a: 'जकात का संबंध आपके साल पूरे होने से है, लेकिन अधिकांश लोग रमजानुल मुबारक की बरकतों में 70 गुना सवाब हासिल करने के लिए रमजान में हिसाब करते हैं।',
      },
    ],
  },

  ur: {
    badge: 'زکوٰۃ و صدقاتِ ہند',
    heroArabic: 'زكاة المال',
    heroTitle: 'آن لائن زکوٰۃ کیلکولیٹر انڈیا',
    heroSubtitle:
      'سونے اور چاندی کے لائیو نصاب کے مطابق اپنی واجب الادا 2.5 فیصد زکوٰۃ کا شفاف و مستند حساب لگائیں اور مستحق غریبوں تک پہنچائیں۔',
    langName: 'اردو',

    nisabCardTitle: 'نصاب کی حقیقت و اہمیت',
    nisabSelectLabel: 'نصاب کا معیار منتخب فرمائیں',
    nisabSilverLabel: 'چاندی کا نصاب (Silver)',
    nisabGoldLabel: 'سونے کا نصاب (Gold)',
    nisabRecommendedTag: 'فقہائے ہند کی طرف سے فقراء کے زیادہ نفع کے لیے مستحب و معتمد',
    standardSelectorLabel: 'فقہی معیار',
    standardHanafiLabel: 'حنفی معیار (612.36 گرام چاندی / 87.48 گرام سونا)',
    standardAaoifiLabel: 'AAOIFI معیار (595 گرام چاندی / 85 گرام سونا)',
    liveRatesTitle: 'ہندوستان میں سونے و چاندی کے تازہ ترین نرخ',
    liveRatesSubtitle: 'عالمی بلین مارکیٹ سے براہ راست روپے میں تبدیل شدہ ریٹس۔',
    liveRateGoldLabel: '24 قیراط سونا / فی گرام',
    liveRateSilverLabel: 'خالص چاندی / فی گرام',
    lastUpdated: 'آخری تجدید',
    customPricePrompt: 'آپ اپنی مقامی صرافہ مارکیٹ کے ریٹ دستی طور پر بھی درج کر سکتے ہیں۔',
    manualOverrideBtn: 'ریٹ تبدیل کریں',
    saveRatesBtn: 'ریٹ محفوظ کریں',

    assetsTitle: 'قابلِ زکوٰۃ اثاثہ جات (مال و دولت)',
    cashInHandLabel: 'نقد رقم (Cash in Hand)',
    cashInHandTooltip: 'گھر، دکان، بٹوے یا تجوری میں موجود نقد روپے۔',
    bankSavingsLabel: 'بینک بیلنس (کرنٹ و سیونگ اکاؤنٹس)',
    bankSavingsTooltip: 'تمام بینک کھاتوں میں جمع رقم (سودی نفع کے علاوہ)۔',

    goldLabel: 'سونے کی مقدار یا قیمت',
    goldTooltip: 'سونے کے زیورات، بسکٹ، سکے یا سلاخیں۔ گرام یا تولہ میں درج کریں۔',
    silverLabel: 'چاندی کی مقدار یا قیمت',
    silverTooltip: 'چاندی کے زیورات، برتن یا سکے وزن کے حساب سے۔',
    unitGrams: 'گرام',
    unitTola: 'تولہ (11.66 گرام)',
    unitInrValue: 'براہ راست روپے میں قیمت درج کریں',
    purityLabel: 'خالص پن (Purity)',
    calculatedValue: 'کل مالیت',

    jewelleryCheckboxLabel: 'استعمال کے زیورات بھی شامل کریں',
    jewelleryCheckboxTooltip:
      'فقہ حنفی میں زیرِ استعمال زیورات پر بھی زکوٰۃ واجب ہے۔ دیگر ائمہ کے نزدیک استثناء ہے۔ بوقتِ ضرورت اپنے مفتی صاحب سے رجوع فرمائیں۔',

    sharesLabel: 'شئیرز، میوچل فنڈز اور سرپلس انویسٹمنٹ',
    sharesTooltip: 'ٹریڈنگ کے شئیرز کی مارکیٹ قیمت؛ طویل مدتی سرمایہ کاری کے لیے 25 تا 30 فیصد مائع اثاثے۔',
    businessStockLabel: 'مالِ تجارت (دکان کا تجارتی سامان)',
    businessStockTooltip: 'فروخت کی نیت سے رکھے گئے تیار مال کی موجودہ ہول سیل مارکیٹ قیمت۔',
    moneyOwedLabel: 'لوگوں کے ذمے واجب الوصول قرض',
    moneyOwedTooltip: 'وہ رقم جو آپ نے کسی کو دی ہو اور اس کی واپسی یقینی یا قوی امید ہو۔',
    fdLabel: 'فکسڈ ڈپازٹس اور سیونگ سرٹیفکیٹس',
    fdTooltip: 'اصل جمع شدہ رقم پر زکوٰۃ ہوگی۔ ملنے والے سود کو بغیر ثواب کی نیت کے صدقہ کر دیں۔',
    cryptoLabel: 'کرپٹو کرنسی اور ڈیجیٹل اثاثے',
    cryptoTooltip: 'ڈیجیٹل کوائنز اور ٹوکنز کی موجودہ انڈین روپے میں قیمت۔',
    otherAssetsLabel: 'دیگر مائع اثاثہ جات',
    otherAssetsTooltip: 'غیر ملکی کرنسی، پرائز بانڈز یا قابلِ واپسی سیکیورٹی ڈیپازٹ۔',

    liabilitiesTitle: 'منہا کی جانے والی ادائیگیاں (قرض و بل)',
    debtsDueNowLabel: 'فوری واجب الادا قرض (Immediate Debts)',
    debtsDueNowTooltip: 'وہ ذاتی یا کاروباری قرض جو ابھی فوری طور پر ادا کرنا لازم ہو۔',
    unpaidBillsLabel: 'واجب الادا کرایہ، بل اور واجبات',
    unpaidBillsTooltip: 'دکان یا مکان کا بقایا کرایہ، بجلی کے بل اور واجب الادا ٹیکس۔',
    loanInstallmentsLabel: 'آئندہ 12 ماہ میں آنے والی قرض کی اقساط',
    loanInstallmentsTooltip: 'اگلے ایک سال کے اندر واجب الادا بننے والی قرض کی اصل رقم (بغیر سود)۔',
    otherLiabilitiesLabel: 'دیگر فوری ذمہ داریاں',
    otherLiabilitiesTooltip: 'دیگر قلیل مدتی ادائیگیاں جو اسی سال ادا کرنی ہوں۔',

    runningStripAssets: 'کل اثاثہ جات',
    runningStripLiabilities: 'کل واجبات',
    runningStripNet: 'خالص قابلِ زکوٰۃ مال',
    calculateBtn: 'میری زکوٰۃ کا حساب لگائیں',
    clearAllBtn: 'فارم خالی کریں',

    resultsTitle: 'زکوٰۃ کا تفصیلی تخمینہ',
    resultsPlaceholder: 'اپنے کوائف درج فرما کر "میری زکوٰۃ کا حساب لگائیں" پر کلک فرمائیں۔',
    statusDueBadge: 'زکوٰۃ فرض ہے (Zakat Due)',
    statusBelowBadge: 'نصاب سے کم (Below Nisab)',
    eligibleHeading: 'آپ کے مال پر زکوٰۃ کی ادائیگی فرض ہے',
    notEligibleHeading: 'فی الحال آپ پر زکوٰۃ واجب نہیں ہے',
    notEligibleMessage:
      'آپ کی خالص دولت نصاب کی کم از کم حد سے کم ہے۔ آپ پر زکوٰۃ فرض نہیں، البتہ رضاکارانہ نفلی صدقہ دینا انتہائی بابرکت عمل ہے۔',
    sadaqahWelcomeText: 'غریب و نادار خاندانوں کے لیے نفلی صدقہ پیش کریں',
    hawlReminderTitle: 'حولانِ حول (ایک قمری سال گزرنا)',
    hawlReminderDesc:
      'زکوٰۃ اسی وقت فرض ہوتی ہے جب آپ کا مال نصاب کے برابر یا اس سے زائد مسلسل ایک مکمل قمری سال (354 دن) تک برقرار رہا ہو۔',

    breakdownTitle: 'مکمل حسابی گوشوارہ (Breakdown)',
    breakdownTotalAssets: 'مجموعی اثاثے',
    breakdownTotalLiabilities: 'منہا قرض و واجبات',
    breakdownNetAssets: 'خالص قابلِ زکوٰۃ مال',
    breakdownNisabUsed: 'نافذ شدہ نصاب کی حد',
    breakdownZakatRate: 'شرحِ زکوٰۃ (2.5 فیصد یعنی چالیسواں حصہ)',
    breakdownFinalAmount: 'کل واجب الادا زکوٰۃ',

    payZakatNowBtn: 'ابھی زکوٰۃ ادا فرمائیں',
    shareWhatsAppBtn: 'واٹس ایپ پر شیئر کریں',
    downloadPdfBtn: 'پی ڈی ایف (PDF) ڈاؤن لوڈ کریں',
    remindMeBtn: 'رمضان المبارک / سالانہ یاد دہانی سیٹ کریں',
    chooseCauseLabel: 'زکوٰۃ کا مخصوص شعبہ منتخب فرمائیں (اختیاری):',

    causes: {
      general: 'جہاں سب سے زیادہ ضرورت ہو (عمومی زکوٰۃ فنڈ)',
      needy: 'انتہائی غریب و نادار خاندانوں کی مالی مدد',
      widowsOrphans: 'بیواؤں اور یتیم بچوں کی کفالت و پرورش',
      medical: 'غریب مریضوں کے مفت علاج و آپریشن',
      education: 'نادار طلبہ کی فیس و تعلیمی معاونت',
      food: 'مستحق گھرانوں کے لیے راشن کٹس',
    },

    impactLinksTitle: 'شفافیت اور زمینی خدمات',
    viewImpactBtn: 'ہماری خدمات دیکھیں (Impact)',
    viewTransparencyBtn: 'مکمل شفافیت اور آڈٹ رپورٹ',

    trustStripTitle: 'شرعی پاسداری اور قانونی اندراج',
    trustPolicyLabel: '100 فیصد زکوٰۃ پالیسی: جمع شدہ زکوٰۃ کسی انتظامی کٹوتی کے بغیر تملیکِ شرعی کے تحت صرف مستحقین تک پہنچائی جاتی ہے۔',
    trustRegLabel: 'راجستھان سوسائٹیز ایکٹ کے تحت رجسٹرڈ ادارہ: Reg. No. COOP/2025/BHILWARA/500577',

    guideTitle: 'ہندوستان میں زکوٰۃ کی شرعی و عملی رہنمائی',
    guideSubtitle: 'اسلام کے تیسرے اہم رکن کی ادائیگی کے متعلق مستند اور مستحکم شرعی معلومات۔',
    guideWhatIsZakatTitle: 'زکوٰۃ کیا ہے اور کیوں فرض ہے؟',
    guideWhatIsZakatBody:
      'زکوٰۃ اسلام کے پانچ بنیادی ارکان میں سے ایک ہے۔ قرآن مجید میں نماز کے ساتھ بار بار زکوٰۃ کا حکم وارد ہوا ہے۔ یہ کوئی احسان نہیں بلکہ ناداروں اور مسکینوں کا وہ حق ہے جو اللہ نے صاحبِ نصاب مسلمانوں کے مال میں مقرر فرمایا ہے۔',
    guideNisabHawlTitle: 'نصاب اور حول (سال) کا مفہوم',
    guideNisabHawlBody:
      'نصاب مال کی وہ مقدار ہے جس کے بعد زکوٰۃ کا وجوب ہوتا ہے۔ فقہ حنفی میں 87.48 گرام سونا یا 612.36 گرام چاندی نصاب ہے۔ چونکہ چاندی کا نصاب کم مالیت کا بنتا ہے اس لیے علمائے کرام چاندی کے نصاب پر حساب لگانے کو افضل قرار دیتے ہیں تاکہ غریبوں کو زیادہ سے زیادہ نفع پہنچے۔',
    guideCategoriesTitle: 'زکوٰۃ کے 8 شرعی مصارف (سورۃ التوبہ آیت 60)',
    guideCategoriesVerse:
      '"زکوٰۃ تو صرف حق ہے غریبوں کا اور محتاجوں کا اور جو اسے وصول کرنے پر مامور ہیں اور جن کی دلجوئی مقصود ہو اور گردنیں چھڑانے میں اور قرض داروں کے لیے اور اللہ کی راہ میں اور مسافروں کے لیے؛ یہ اللہ کا باندھا ہوا حکم ہے اور اللہ جاننے والا حکمت والا ہے۔" (سورۃ التوبہ، 60)',
    guideCategoriesList: [
      'الفقراء (وہ نادار لوگ جن کے پاس نصاب سے کم مال ہو)',
      'المساکین (وہ محتاج جن کے پاس گزر بسر کا کوئی ذریعہ نہ ہو)',
      'العاملین علیہا (زکوٰۃ جمع اور تقسیم کرنے والے معین کارندے)',
      'المؤلفۃ قلوبہم (جن کی دلجوئی شرعاً مطلوب ہو)',
      'فی الرقاب (مظلوموں اور قیدیوں کو آزادی دلانے میں)',
      'الغارمین (وہ مقروض جو قرض ادا کرنے کی سکت نہ رکھتے ہوں)',
      'فی سبیل اللہ (اللہ کی رضا کے دینی و رفاہی کاموں میں)',
      'ابن السبیل (وہ مسافر جو سفر کے دوران تنگ دست ہو جائے)',
    ],
    guideAssetsTitle: 'مختلف اثاثوں پر زکوٰۃ کے احکام',
    guideAssetsPoints: [
      {
        title: 'سونے چاندی کے زیورات',
        desc: 'فقہ حنفی کے مطابق پہنے جانے والے زیورات پر بھی زکوٰۃ فرض ہے۔ دیگر مسالک میں ذاتی استعمال کے عام زیورات مستثنیٰ ہیں۔',
      },
      {
        title: 'شئیرز اور تجارتی مال',
        desc: 'تجارت کی نیت کے شئیرز پر پوری مارکیٹ ویلیو کے حساب سے، جبکہ لانگ ٹرم انویسٹمنٹ میں مائع اثاثوں پر زکوٰۃ ادا کی جاتی ہے۔',
      },
      {
        title: 'فکسڈ ڈپازٹس',
        desc: 'اصل رقم پر زکوٰۃ ادا ہوگی اور سودی رقم کو ثواب کی نیت کے بغیر غرباء پر صدقہ کرنا لازم ہے۔',
      },
      {
        title: 'کاروباری سامان',
        desc: 'سال پورا ہونے پر دکان میں موجود مالِ فروخت کی ہول سیل مارکیٹ قیمت کا حساب لگا کر 2.5 فیصد ادا کیا جائے گا۔',
      },
      {
        title: 'کرپٹو کرنسی',
        desc: 'ڈیجیٹل کرنسی پر مارکیٹ ریٹ کے مطابق زکوٰۃ واجب الادا ہوگی۔',
      },
    ],

    faqTitle: 'زکوٰۃ سے متعلق عام سوالات و جوابات (FAQ)',
    faqSubtitle: 'حساب اور ادائیگی سے متعلق اہم شرعی سوالات کے مستند جوابات۔',
    faqDisclaimer:
      'تنبیہ: یہ کیلکولیٹر حساب کی آسانی کے لیے ڈیجیٹل معاون ہے۔ پیچیدہ و مخصوص مسائل کے لیے اپنے مستند مفتیانِ کرام سے شرعی فتویٰ حاصل کریں۔',
    faqs: [
      {
        q: 'سونے کے نصاب پر حساب کریں یا چاندی پر؟',
        a: 'ہندوستان کے جمہور فقہاء چاندی کے نصاب (612.36 گرام) کو ترجیح دیتے ہیں تاکہ غرباء و مساکین کا زیادہ بھلا ہو سکے۔',
      },
      {
        q: 'زکوٰۃ کی شرح کتنی ہے؟',
        a: 'قمری سال کے حساب سے کل خالص قابلِ زکوٰۃ مال کا 2.5 فیصد یعنی چالیسواں حصہ ادا کرنا فرض ہے۔',
      },
      {
        q: 'کیا ذاتی مکان یا کار پر زکوٰۃ ہے؟',
        a: 'رہائش کا مکان، گھریلو استعمال کی اشیاء، ذاتی سواری اور پیشہ ورانہ اوزار زکوٰۃ سے مستثنیٰ ہیں۔',
      },
      {
        q: 'کیا ہوم لون کی پوری رقم منہا کی جا سکتی ہے؟',
        a: 'نہیں، صرف آئندہ بارہ مہینوں میں ادا ہونے والی اقساط کی اصل رقم ہی منہا کی جا سکتی ہے۔',
      },
      {
        q: 'شاہ سیوا سنستھان زکوٰۃ کی رقم کیسے تقسیم کرتا ہے؟',
        a: 'شاہ سیوا سنستھان جمع شدہ زکوٰۃ کو شرعی تملیک کے ساتھ تصدیق شدہ غریبوں، بیواؤں، یتیموں اور بیماروں پر مکمل شفافیت کے ساتھ خرچ کرتا ہے۔',
      },
      {
        q: 'کیا سال مکمل ہونے سے پہلے پیشگی زکوٰۃ ادا کی جا سکتی ہے؟',
        a: 'جی ہاں، صاحبِ نصاب شخص کے لیے سال مکمل ہونے سے پہلے بالخصوص ماہِ رمضان یا ہنگامی ضرورت کے وقت پیشگی زکوٰۃ دینا جائز اور مستحب ہے۔',
      },
      {
        q: 'کیا قریبی رشتہ داروں کو زکوٰۃ دی جا سکتی ہے؟',
        a: 'والدین، دادا دادی، اولاد اور بیوی یا شوہر کو زکوٰۃ نہیں دی جا سکتی۔ البتہ ضرورت مند بھائی، بہن، چچا، ماموں، خالہ وغیرہ اگر مستحق ہوں تو ان کو دینا نہ صرف جائز ہے بلکہ دہرے اجر کا باعث ہے۔',
      },
      {
        q: 'اگر سال کے دوران مال کم یا زیادہ ہوتا رہے تو کیا حکم ہے؟',
        a: 'حنفی مسلک میں اگر سال کے آغاز اور اختتام دونوں وقت نصاب موجود رہے اور درمیان میں مال بالکل ختم نہ ہوا ہو تو سال کے آخر کی موجودہ رقم پر زکوٰۃ واجب ہوگی۔',
      },
      {
        q: 'زکوٰۃ کس مہینے میں نکالنا بہتر ہے؟',
        a: 'اصل حکم تو سال پورا ہونے کا ہے، لیکن رمضان المبارک کی برکات اور ثواب میں بے پناہ اضافے کی خاطر اکثر مسلمان رمضان میں حساب لگاتے ہیں۔',
      },
      {
        q: 'کیا زکوٰۃ کی رقم سے کھانا یا سامان خرید کر دیا جا سکتا ہے؟',
        a: 'جی ہاں، مستحقین کی ضرورت کے مطابق راشن یا اشیاء خرید کر تملیک کے ساتھ دینا شرعاً درست ہے۔',
      },
    ],
  },
};
