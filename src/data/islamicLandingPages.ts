export interface IslamicFAQ {
  question: string;
  answer: string;
}

export interface IslamicLandingPage {
  id: string; // url slug
  keyword: string;
  title: string;
  metaDescription: string;
  arabicPhrase: string; // e.g. "زكاة المال"
  arabicPhraseTranslit: string; // e.g. "Zakat al-Maal"
  quranVerse: {
    arabic: string;
    reference: string;
    translation: string;
  };
  introduction: string;
  sections: {
    title: string;
    content: string;
  }[];
  faqs: IslamicFAQ[];
  ctaUrl: string;
  ctaText: string;
}

export const islamicLandingPages: IslamicLandingPage[] = [
  {
    id: "zakat-donation-online",
    keyword: "zakat donation online",
    title: "Pay Zakat Online in India — Shah Seva Trusted Islamic Charity",
    metaDescription: "Pay your Zakat online in India safely. Shah Seva ensures 100% transparent distribution to Shariah-compliant Asnaf recipients in severe medical need.",
    arabicPhrase: "فريضة الزكاة الواجبة",
    arabicPhraseTranslit: "Fardh al-Zakat",
    quranVerse: {
      arabic: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ",
      reference: "Surah Al-Baqarah (2:110)",
      translation: "\"And establish prayer and give Zakat, and whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah is Seeing of what you do.\""
    },
    introduction: "Paying Zakat is not merely a charitable act; it is a fundamental pillar of Islam (Arkan al-Islam) and a divine mandate designed to purify wealth and establish economic equilibrium. The word Zakat (زكاة) linguistically translates to 'purification' and 'growth'. By choosing to complete your Zakat donation online in India through Shah Seva, you fulfill this sacred obligation in complete compliance with Shariah guidelines, directing your funds directly to poor, struggling, and medical-emergency patients in Rajasthan who qualify under the divinely decreed categories of recipients.",
    sections: [
      {
        title: "1. Understanding Zakat: What is it and Who Must Pay?",
        content: "Zakat is an obligatory annual payment (Zakat al-Maal) levied on every sane, mature Muslim who possesses wealth equal to or exceeding a specific threshold known as the Nisab (نصاب) for a complete lunar year (Hawl). This obligation ensures that the wealthy recognize the inalienable rights of the less fortunate over their accumulated surplus assets.\n\nWho must pay Zakat?\n- Being Muslim: The obligation is exclusively specified for Muslims.\n- Sound Mind and Maturity: The individual must be sane and mature (though in some classical Shariah interpretations, Zakat is also calculated on the wealth of orphans and minors if held in trust by guardians).\n- Direct Ownership: The individual must have sole, unrestricted ownership of the wealth.\n- Nisab Threshold: The wealth must exceed the current Nisab threshold.\n- Completion of Hawl: The wealth must be held for a continuous lunar year (354 days) without dropping below the Nisab."
      },
      {
        title: "2. The Mathematical Grace: Calculating Your 2.5% Share",
        content: "The Zakat rate is fixed at 2.5% (one-fortieth) of an individual's total qualifying cash savings and liquid assets. When calculating your Zakat online, you must aggregate the following classes of wealth held on your designated Zakat anniversary:\n- Ready Cash: The balance in all active savings accounts, current accounts, physical currency at home, and cash stored in vaults.\n- Gold and Silver: The current resale value of jewelry and bullion. Under Shariah guidelines, only the weight of the precious metal is calculated, excluding any workmanship charges or embedded synthetic gemstones.\n- Liquid Investment Assets: Shares, mutual funds, corporate bonds, trust certifications, and active cash balances in trading profiles.\n- Business Merchandise: The net wholesale value of unsold stock, raw source materials, and goods in transit.\n- Receivables: Clean financial loans granted to family members or businesses that you are fully confident will be paid back."
      },
      {
        title: "3. The Nisab Value in INR (Current 2024–2026 Guidelines)",
        content: "Under Islamic jurisprudence, the Nisab is determined by two distinct standards, originally set during the era of Prophet Muhammad (ﷺ):\n- The Gold Standard (87.48 grams of 24-karat gold).\n- The Silver Standard (612.36 grams of pure silver).\n\nIn modern economic conditions, most non-profits and scholars urge donors to calculate Zakat using the Silver Standard, as its lower threshold releases maximum help for Asnaf (eligible beneficiaries). For the current period, the Silver Nisab value in India fluctuates between INR 45,000 to INR 55,000 depending on real-time commodity exchange metrics. If your total net qualifying liquid assets have remained above this silver value for 12 lunar months, you are obligatorily required to distribute 2.5% of that aggregate surplus as Zakat."
      },
      {
        title: "4. Shariah-Compliant Distribution: Serving the Eligible Asnaf Recipients",
        content: "Zakat cannot be spent on projects that do not provide direct, unrestricted ownership (Tamleek) to the beneficiaries. Shariah defines precisely eight eligible categories of recipients (Asnaf) in Surah Al-Tawbah (9:60):\n1. Al-Fuqara (الفقراء): The extremely poor who possess virtually no assets or means.\n2. Al-Masakin (المساكين): The needy who have some income but are unable to satisfy their basic human needs of medical treatment, food, and shelter.\n3. Al-Amilina 'Alayha (العاملين عليها): The administrators who collect and distribute Zakat.\n4. Al-Mu'allafati Qulubuhum (المؤلفة قلوبهم): To reconcile hearts and support those new to or friendly toward Islam.\n5. Fir-Riqab (في الرقاب): For freeing captives and slaves.\n6. Al-Gharimin (الغارمين): Those burdened with crippling debts incurred due to lawful, desperate emergencies.\n7. Fi-Sabilillah (في سبيل الله): Those striving in the path of Allah, including poor students pursuing education.\n8. Ibn al-Sabil (ابن السبيل): The stranded traveler without access to their funds.\n\nAt Shah Seva, we strictly distribute your Zakat funds to Al-Fuqara and Al-Masakin—specifically underprivileged Muslim patients who cannot afford life-saving cancer chemo, emergency surgeries, or critical care. We make payments and buy oncology drugs, transferring the direct benefit to the patient, thereby protecting their lives and dignity while strictly adhering to the requirements of Tamleek."
      }
    ],
    faqs: [
      {
        question: "Can Zakat be given to clear a poor patient's hospital bill?",
        answer: "Yes. Under modern Shariah rulings, Zakat can be utilized to directly pay the hospital bills and purchase surgical implants or medicines for poor patients (Al-Fuqara/Al-Masakin). This fulfills the condition of Tamleek (transfer of ownership) by directly relieving them of a legal and heavy financial debt that they cannot clear themselves."
      },
      {
        question: "Do I pay Zakat on jewelry that is worn regularly?",
        answer: "There is a difference of opinion among classical Islamic scholars. According to the Hanafi school of jurisprudence, Zakat is obligatorily payable on all gold and silver jewelry, regardless of whether it is worn or stored. Other schools rule that regularly worn jewelry is exempt. To be safe and maximize aid, many choose to include all gold jewelry in their calculations."
      },
      {
        question: "How does Shah Seva guarantee Shariah-compliant Zakat distribution?",
        answer: "Shah Seva is closely affiliated with Dargah Saiyad Ali Shah, serving the community with traditional Islamic values. Our on-ground volunteers physically verify the financial background, clinical urgency, and religious status of applicants, ensuring that Zakat funds are placed strictly into a separate dedicated bank account and distributed only to deserving, Shariah-eligible individuals."
      }
    ],
    ctaUrl: "/zakat-calculator",
    ctaText: "CALCULATE & PAY ZAKAT ONLINE"
  },
  {
    id: "donate-sadaqah-online",
    keyword: "donate sadaqah online",
    title: "Donate Sadaqah Online — Sadaqah Jariyah Through Shah Seva",
    metaDescription: "Donate Sadaqah online in India. Support medical supplies, clean water wells, and diagnostic care. Earn continuous rewards (Sadaqah Jariyah).",
    arabicPhrase: "الصدقة الجارية الباقية",
    arabicPhraseTranslit: "Sadaqah Jariyah",
    quranVerse: {
      arabic: "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً",
      reference: "Surah Al-Baqarah (2:245)",
      translation: "\"Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who restricts and unleashes [wealth], and to Him you will be returned.\""
    },
    introduction: "Charity is a cornerstone of the Islamic lifestyle, representing the outward proof of an individual's inward faith. While Zakat is an annual obligation with strict rules, Sadaqah (صدقة) is the beautiful, voluntary sharing of wealth at any time, in any amount, out of pure love for Allah. When you choose to donate Sadaqah online in India, you are participating in a timeless prophetic practice that clears sins, averts unexpected calamities, and brings immense spiritual blessings to your household.",
    sections: [
      {
        title: "1. The Beautiful Types of Sadaqah: Lillah, Nafilah, and Sadaqah Jariyah",
        content: "Islamic jurisprudence distinguishes between separate types of voluntary charity to channel their rewards effectively:\n- Sadaqah Nafilah (العادية): General voluntary charity given to anyone in need to relieve immediate hunger, buy standard clothing, or help clear a utility bill.\n- Sadaqah Jariyah (الصدقة الجارية): Ongoing, long-term charity. This refers to investments in actions that continue to yield benefits to the public even after the donor passes away. The Prophet (ﷺ) said: 'When a man dies, his deeds come to an end except for three: an ongoing charity (Sadaqah Jariyah), knowledge from which benefit is derived, or a righteous son who prays for him.' (Sahih Muslim)\n- Lillah (لله): Charity given purely for the sake of Allah to construct communal assets like masjids, clinics, or schools, not limited by individual ownership constraints."
      },
      {
        title: "2. The Spiritual Benefits: A Shield Against Calamity and Sins",
        content: "Sadaqah is a powerful spiritual medicine. The Prophet Muhammad (ﷺ) taught that 'Charity extinguishes sins as water extinguishes fire' (Tirmidhi) and urged believers to 'Treat your sick ones by giving Sadaqah.' When you are facing personal difficulties, emotional turmoil, or dangerous health crises within your family, allocating a voluntary online donation acts as an immediate prayer for relief. It is recorded that Sadaqah appeases the anger of Allah, protects the donor from an agonizing death, and serves as an shade of cool relief on the Day of Resurrection."
      },
      {
        title: "3. How Online Sadaqah Empowers the Shah Seva Medical Shield",
        content: "At Shah Seva, under the spiritual guidance of Dargah Saiyad Ali Shah in Bhilwara, we use your voluntary Sadaqah donations to build long-term, life-saving infrastructure for poor and terminal patients. Your Sadaqah online directly funds:\n- Purchase of Reusable Medical Equipment: Sponsoring heavy wheelchair fleets, orthopedic beds, dialysis machinery support, and emergency oxygen concentrators that are rented out free of charge to poor patients—generating direct Sadaqah Jariyah rewards for you with every breath they take.\n- Healthcare Access Camps: Conducting free diagnostic, preventative, and oncology counseling camps in rural Rajasthan to spot diseases early and save thousands of lives."
      }
    ],
    faqs: [
      {
        question: "Can I donate Sadaqah on behalf of a deceased relative?",
        answer: "Yes, absolutely. Donating Sadaqah on behalf of deceased parents, grandparents, or relatives is a highly virtous act highly recommended in Islam. The continuous rewards of the charity (Sadaqah Jariyah) accumulate directly to their record of deeds, bringing them comfort and light in their graves."
      },
      {
        question: "What is the primary difference between Zakat and Sadaqah?",
        answer: "Zakat is an obligatory 2.5% tax on surplus wealth, mandatory for every eligible Muslim, and has strict distribution guidelines. Sadaqah, however, is purely voluntary, can be given in any amount (no matter how small), can be given to anyone (including non-Muslims), and is not bound by Nisab or anniversary constraints."
      },
      {
        question: "How does Shah Seva maintain donor trust for online Sadaqah?",
        answer: "Shah Seva maintains an uncompromised standard of transparency. Operating under Gov. Registration COOP/2025/BHILWARA/500577, we track every paisa, utilize 100% of voluntary public donations on actual beneficiary services without heavy admin deductions, and share regular photo updates and video proofs of our distributions."
      }
    ],
    ctaUrl: "/donate",
    ctaText: "DONATE VOLUNTARY SADAQAH ONLINE"
  },
  {
    id: "masjid-donation-online",
    keyword: "masjid donation online",
    title: "Donate for Masjid Online — Support Your Local Mosque",
    metaDescription: "Donate for Masjid online in India. Fund historical mosque repairs, clean water systems, wudu areas, and carpet maintenance with Shah Seva.",
    arabicPhrase: "عمارة بيوت الله",
    arabicPhraseTranslit: "Imarat Buyut Allah",
    quranVerse: {
      arabic: "إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ",
      reference: "Surah At-Tawbah (9:18)",
      translation: "\"The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer and give Zakat and do not fear except Allah.\""
    },
    introduction: "The Masjid (مسجد) is the spiritual heartbeat of a Muslim society, serving as a house of prayer, a sanctuary of theological learning, and a community space for mutual support. Building, restoring, and maintaining a mosque carries immense rewards. The Prophet Muhammad (ﷺ) promised: 'Whoever builds a mosque for Allah, Allah will build for him a house in Paradise.' (Sahih al-Bukhari). By choosing to make a masjid donation online through Shah Seva, you participate in this beautiful ongoing charity (Sadaqah Jariyah), building your heavenly home while establishing spaces of prayer on Earth.",
    sections: [
      {
        title: "1. The Core Importance of Supporting Mosques in Underprivileged Areas",
        content: "While city centers often have well-funded, luxurious mosques, countless rural and underdeveloped neighborhoods across India struggle to maintain basic masjid structures. Many of these remote mosques operate with damaged roofs that leak durante monsoon storms, fractured wudu (ablution) plumbing systems that waste water, lack of fans during severe Indian summers, and obsolete lighting configurations that make Isha and Fajr prayers difficult. Your online masjid donation helps restore these vital community spaces, ensuring that prayers can be offered with complete peace of mind (Khushu)."
      },
      {
        title: "2. Focus Areas of Shah Seva Masjid Maintenance Fund",
        content: "Under the spiritual heritage of Dargah Saiyad Ali Shah, we manage a dedicated Masjid Support and Maintenance Fund. Your generous online donations are directed strictly toward:\n- Sponsoring Clean Drinking Water and Wudu Systems: Drilling borewells and installing secure solar-powered water filtration units to provide worshipers with cold, clean water for ablution.\n- Infrastructure Restorations: Repairing structural cracks, waterproofing leaking concrete roofs, laying clean prayer carpets (Safs), and installing energy-efficient fans and lights.\n- Sponsoring Basic Amenities: Supporting underprivileged local Imams and Muadhins who serve remote mosques with devotion but receive meager salaries."
      },
      {
        title: "3. Direct Sadaqah Jariyah with Every Prayer Offered",
        content: "Supporting a masjid is a highly compoundable charity. For every single prostration (Sajdah) made by a worshiper on a carpet you helped lay, for every single drop of water used by a believer for wudu from a filter you sponsored, and for every word of the Noble Quran memorized by a child under the light of a fan you paid for, you receive a direct, equal share of the spiritual rewards from Allah. This continues silently and continuously, even long after you have departed from this temporary world."
      }
    ],
    faqs: [
      {
        question: "Can I pay Zakat for Masjid construction or repair?",
        answer: "According to the vast majority of classical and contemporary Islamic scholars, Zakat cannot be used for the construction, repair, or general upkeep of a Masjid. This is because Zakat requires 'Tamleek' (transferring direct, personal ownership to a poor individual). Sponsoring public buildings like mosques does not fulfill this condition. Therefore, Masjid donations must be made from voluntary Sadaqah, Lillah, or general charity funds."
      },
      {
        question: "How does Shah Seva select Masjids for maintenance support?",
        answer: "Our volunteer teams conduct detailed physical assessments of remote, rural, and economically impoverished areas across Rajasthan. We prioritize small, historic, or community-built mosques that have no formal administrative trusts or regular funding sources, addressing critical structural damage, wudu crises, and electricity needs first."
      },
      {
        question: "Is there a minimum amount required to join the Masjid fund online?",
        answer: "No, there is absolutely no minimum limit. Whether you donate the cost of a single brick, a single square foot of prayer carpet, or a basic water tap, every single rupee counts in the sight of Allah. Your small share combined with others builds a home of prayer."
      }
    ],
    ctaUrl: "/donate",
    ctaText: "SUPPORT THE MASJID MAINTENANCE FUND"
  },
  {
    id: "donate-food-in-ramadan",
    keyword: "donate food in ramadan",
    title: "Donate Food in Ramadan & Give Charity on Eid — Shah Seva",
    metaDescription: "Donate food in Ramadan 2026. Sponsor Shariah-compliant Iftar plates, dry ration kits for poor families, and Eid Sadaqah through Shah Seva.",
    arabicPhrase: "إطعام الطعام في رمضان",
    arabicPhraseTranslit: "It'am al-Ta'am fi Ramadan",
    quranVerse: {
      arabic: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا",
      reference: "Surah Al-Insan (76:8)",
      translation: "\"And they give food in spite of love for it to the needy, the orphan, and the captive, [Saying], 'We feed you only for the countenance of Allah...'\""
    },
    introduction: "Ramadan is the month of intense spiritual reflection, fasting, and supreme generosity. It is the blessed period when the rewards of all good deeds are multiplied seventy-fold. The Prophet Muhammad (ﷺ) was the most generous of people, and he was at his absolute peak of generosity during the month of Ramadan. Sponsoring Iftar meal packs and distributing essential dry grocery ration kits to poor, fasting families is a blessed way to follow the Sunnah, secure forgiveness, and ensure that no fasting Muslim goes to sleep on an empty stomach.",
    sections: [
      {
        title: "1. The Supreme Reward of Feeding a Fasting Person (Iftar)",
        content: "The Prophet Muhammad (ﷺ) said: 'Whoever feeds a fasting person will have a reward like that of the fasting person, without any reduction in the reward of the fasting person.' (Tirmidhi). Feeding a family during Iftar does not require exorbitant wealth. By sponsoring complete Iftar meal plates, you gain the complete spiritual rewards of their entire day of starvation and devotion. This represents an incredible spiritual leverage designed by Allah to help believers elevate their scales of deeds during this holy month."
      },
      {
        title: "2. Sponsoring Shah Seva Dry Ramadan Ration Packs (Grocery Kits)",
        content: "For an impoverished daily laborer in India, fasting for 14 hours during severe heat while knowing there is no food stored in the kitchen for Suhoor or Iftar is a deeply stressful experience. To address this, Shah Seva organizes large-scale Dry Ramadan Ration Distributions. Each specialized grocery kit costs approximately INR 1,500 and is meticulously packed with:\n- Premium Basmati Rice (5kg)\n- Shariah-compliant Whole Wheat Flour (10kg)\n- Nutritious Pulses & Lentils (3kg)\n- Cooking Refined Oil (2L)\n- Pure Sugar and Refined Salt\n- Organic Tea Leaves and Spices\n- Natural Dates (Khajoor) for ending the fast beautifully. Each ration pack sustains a family of five for the entire thirty days of Ramadan, allowing parents to fast with dignity and safety."
      },
      {
        title: "3. Spreading Joy: Eid Sadaqah and Fitrana (Sadaqat al-Fitr)",
        content: "As the holy month of fasting draws to a close, Islam institutes a beautiful obligatory charity called Sadaqat al-Fitr (Fitrana). This must be paid before the Eid-ul-Fitr prayer to ensure that poor children and families can join the communal joy and feast of Eid. The current estimated Fitrana in India ranges from INR 100 to INR 150 per head of the household. Shah Seva distributes this specific food grain help to mapped widows, orphans, and daily wage earners on the eve of Eid, replacing their worries with smiles."
      }
    ],
    faqs: [
      {
        question: "Can I sponsor a complete community Iftar session through Shah Seva?",
        answer: "Yes, absolutely! You can sponsor a large-scale community Iftar dinner for 50, 100, or 200 impoverished fasting worshipers at our designated community kitchens in Rajasthan. Our teams handle complete dry sourcing, sanitary cooking, and distribution, sharing actual photos of the Iftar dinner with the sponsor."
      },
      {
        question: "When is the absolute deadline to submit my Eid Fitrana?",
        answer: "Fitrana must be paid before the start of the Eid-ul-Fitr congregational prayer on the 1st of Shawwal. Paying it a few days in advance of Eid is highly recommended by classical scholars, as it gives charities like Shah Seva sufficient time to physically buy and distribute the food grains to poor families before the festive morning."
      },
      {
        question: "Is Shah Seva affiliated with an authentic Islamic Trust?",
        answer: "Yes, Shah Seva is affiliated directly with Dargah Saiyad Ali Shah in Bhilwara, serving underprivileged communities with strict adherence to Islamic values, transparency, and deep sectarian harmony."
      }
    ],
    ctaUrl: "/donate",
    ctaText: "SPONSOR EID & RAMADAN FOOD KITS NOW"
  },
  {
    id: "fidya-donation-online",
    keyword: "fidya donation online",
    title: "Pay Fidya Online — Shah Seva Islamic Charity Guide",
    metaDescription: "Pay your Fidya online in India safely. Shah Seva converts your missed fast compensations into fresh, nutritious meals for poor patients and orphans.",
    arabicPhrase: "فدية الإفطار الواجبة",
    arabicPhraseTranslit: "Fidya al-Siyam",
    quranVerse: {
      arabic: "وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ",
      reference: "Surah Al-Baqarah (2:184)",
      translation: "\"And upon those who are able [to fast, but with hardship] - a ransom [as substitute] of feeding a poor person [each day].\""
    },
    introduction: "In Islam, fasting during the holy month of Ramadan is an obligatorily established duty (Fardh). However, our beautiful Shariah is built on divine ease, compassion, and complete consideration for human vulnerability. If an individual is permanently unable to fast due to advanced seniority, chronic incurable illness, severe clinical disabilities, or long-term dynamic medical concerns, they are legally exempt. Instead, they are directed to pay a monetary compensation called Fidya (فدية) to feed one poor person for every missed fast.",
    sections: [
      {
        title: "1. Who is Liable to Pay Fidya?",
        content: "Fidya is only applicable to individuals who meet the following clinical and age-related exemptions:\n- Advanced Seniors: Elderly Muslims whose physical strength has declined to the point where fasting poses a direct threat to their lives.\n- Chronically Ill Patients: Individuals suffering from diseases like advanced diabetes requiring continuous daily multi-dose insulin, end-stage renal failure demanding bi-weekly dialysis, or active cancer treatments.\n- Pregnant or Breastfeeding Mothers: If medical advice indicates that fasting will cause severe harm to their health or the baby's safety, and they are temporarily unable to make up the fasts later.\nNote: Healthy individuals who miss fasts due to transient, curable sickness or temporary travel do not pay Fidya. They are strictly required to make up (Qadha) the missed fasts step-by-step when their situation normalizes."
      },
      {
        title: "2. Calculating the Current Fidya Amount in India (2026 Guidelines)",
        content: "The value of Fidya is classically defined by Islamic scholars as the equivalent of feeding one poor person two complete, nutritious meals for each missed fast. This is calculated based on the price of 1.6 kilograms of whole wheat, flour, or staple food grains.\n\nIn modern Indian currency, the standard estimated Fidya is:\n- Missed Fast: Approx. INR 100 to INR 150 per day.\n- Entire Month of Ramadan (30 Fasts): Approx. INR 3,000 to INR 4,500.\nIf you miss the entire month of Ramadan due to chronic illness, you can easily fulfill your obligation by completing your Fidya donation online through Shah Seva's dedicated food portal, which converts your payment into fresh food."
      },
      {
        title: "3. Directing Your Fidya to Deserving Poor Patients and Orphans",
        content: "At Shah Seva, in accordance with the spiritual ethics of Dargah Saiyad Ali Shah in Bhilwara, we process your online Fidya payments with absolute care. We do not use Fidya money for general construction or salaries. Instead, 100% of the funds are set aside to cook and distribute double hot meals to poor, malnourished patients waiting outside government hospitals, cancer wards, and orphanages. This ensures your religious compensation is executed perfectly, directly feeding those whose poverty makes food security a daily crisis."
      }
    ],
    faqs: [
      {
        question: "Can I pay my entire month's Fidya in advance of Ramadan?",
        answer: "According to the majority of Hanafi and Shafi'i scholars, it is highly preferred to pay your Fidya either day-by-day as the fasts are missed, or in a single lump sum on the final days of Ramadan. However, paying it on the first day of Ramadan for the entire month is also classicaly permissible for chronic patients."
      },
      {
        question: "What if a chronic patient pays Fidya and later recovers their health?",
        answer: "If a patient pays Fidya because doctors diagnosed their illness as incurable, but later by the grace of Allah, a medical cure is found and they regain complete health, their previous Fidya acts as a beautiful voluntary charity. They are then required to fast the Qadha (make-up) fasts for the missed periods."
      },
      {
        question: "Can one poor person be fed multiple days of Fidya?",
        answer: "Yes. In Islamic jurisprudence, it is entirely permissible to distribute thirty days worth of Fidya meals to a single eligible poor family or individual to ensure their long-term food security, or to divide it across thirty separate poor individuals."
      }
    ],
    ctaUrl: "/donate",
    ctaText: "PAY YOUR FIDYA ONLINE NOW"
  },
  {
    id: "kaffara-donation",
    keyword: "kaffara donation",
    title: "Kaffara Donation — Expiate Your Sins Through Charity at Shah Seva",
    metaDescription: "Pay your Kaffara donation in India. Compensate for broken oaths and missed fasts safely. 100% transparent distribution to the poor through Shah Seva.",
    arabicPhrase: "كفارة اليمين والذنوب",
    arabicPhraseTranslit: "Kaffarah al-Yameen",
    quranVerse: {
      arabic: "لَا يُؤَاخِذُكُمُ اللَّهُ بِاللَّغْوِ فِي أَيْمَانِكُمْ وَلَٰكِن يُؤَاخِذُكُم بِمَا عَقَّدتُّمُ الْأَيْمَانَ ۖ فَكَفَّارَتُهُ إِطْعَامُ عَشَرَةِ مَسَاكِينَ",
      reference: "Surah Al-Ma'idah (5:89)",
      translation: "\"Allah will not impose blame upon you for what is meaningless in your oaths, but He will impose blame upon you for what you solemnize in oaths. So its expiation is the feeding of ten needy people...\""
    },
    introduction: "In Islamic law, a Kaffara (كفارة) is an obligatory compensation or act of expiation designed to reform a believer after they have committed a specific, major religious transgression or violated a binding covenant. The word Kaffara stems from the Arabic root 'Kafara', which means 'to cover or erase'. Essentially, Kaffara is a divine mechanism of spiritual rehabilitation, allowing a Muslim to seek forgiveness from Allah by giving generous charity (Kaffara donation) to feed or clothe impoverished people.",
    sections: [
      {
        title: "1. The Primary Types of Kaffara and Their Triggers",
        content: "Islamic jurisprudence specifies several active triggers that demand the payment of Kaffara:\n- Kaffara of a Broken Oath (كفارة اليمين): Triggered when a Muslim swears a formal oath using the Name of Allah to do or not do something, and subsequently breaks it. The expiation is strictly codified in the Quran: feeding ten needy people two proper meals, or clothing them.\n- Kaffara of Ramadan (كفارة الفطر): Triggered when an individual deliberately breaks a fast during Ramadan without a valid Shariah-compliant excuse (such as illness or travel) by eating, drinking, or engaging in conjugal relations. The penalty is fasting is sixty consecutive days, and if physically impossible, feeding sixty poor people two meals each.\n- Kaffara of Zihar & Other Forms: Highly specialized penalties for domestic covenants or minor pilgrimage violations."
      },
      {
        title: "2. Calculating Your Kaffara Donation in India",
        content: "To pay your Kaffara online, you must calculate the current cost of staple food grains in the regional Indian market. The expiation is valued as follows:\n- Broken Oath Kaffara: Feeding 10 poor people two full meals. At an average estimated cost of INR 150 per day of feeding, the Oath Kaffara in India is valued at INR 1,500.\n- Missed Fast Kaffara (Deliberate Violation): Feeding 60 poor people two full meals. This is valued at INR 9,000.\nBy selecting Shah Seva's verified online payment portal, you can execute these payments instantly. Our administrative team registers the transactions under a separate ledger to ensure your religious duty is fulfilled in absolute compliance with Shariah laws."
      },
      {
        title: "3. Shah Seva's Strict Distribution Measures for Kaffara Funds",
        content: "Under the spiritual standards of Dargah Saiyad Ali Shah in Bhilwara, we treat religious compensations with extreme administrative care. Kaffara funds are completely isolated from general construction budgets. We purchase high-quality dry food grains (wheat, rice, pulses, oil) and deliver them directly to mapped single mothers, landless agricultural workers, and distressed families. This satisfies the strict condition of feeding physical food (It'am) to the exact number of needy individuals prescribed by the Holy Quran."
      }
    ],
    faqs: [
      {
        question: "Can I fast instead of paying monetary Kaffara for a broken oath?",
        answer: "According to the Quranic order in Surah Al-Ma'idah (5:89), fasting is only permissible if an individual is financially unable to feed or clothe ten poor people. If you possess basic liquid savings or disposable income, you must choose the path of feeding or clothing first. Fasting 3 days is a concession reserved strictly for the destitute."
      },
      {
        question: "Can I feed one poor person for ten days to settle an Oath Kaffara?",
        answer: "According to the Hanafi school of jurisprudence, yes, it is valid to feed a single poor person two meals a day for ten consecutive days. However, other schools like the Shafi'i require feeding ten separate, distinct poor individuals. To satisfy all classical schools, Shah Seva distributes the food grains to ten separate families simultaneously."
      },
      {
        question: "Does Shah Seva provide receipts for Kaffara payments?",
        answer: "Yes, Shah Seva provides instant digital payment receipts and verified statements showing the amount collected and allocated to our food grain distribution drive under Govt. Registration COOP/2025/BHILWARA/500577."
      }
    ],
    ctaUrl: "/donate",
    ctaText: "PAY KAFFARA DONATION ONLINE"
  }
];
