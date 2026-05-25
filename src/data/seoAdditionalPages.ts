export interface AdditionalDonationTier {
  amount: number;
  benefit: string;
}

export interface AdditionalSEOPage {
  id: string; // url slug
  keyword: string;
  title: string;
  metaDescription: string;
  heroParagraph: string;
  whyShahSeva: string[];
  stats: {
    families: string;
    beneficiaries: string;
    ngo: string;
  };
  donationTiers: AdditionalDonationTier[];
  ctaText: string;
  storyTitle: string;
  storyContent: string;
  urgencyTitle: string;
  urgencyContent: string;
  transparencyTitle: string;
  transparencyContent: string;
  faqs?: { question: string; answer: string }[];
  bulletPointsLabel?: string;
  negativeBullets?: string[];
  positiveBullets?: string[];
}

export const seoAdditionalPages: AdditionalSEOPage[] = [
  // --- TASK 7: FOOD DISTRIBUTION PAGES ---
  {
    id: "feed-hungry-children-donate",
    keyword: "feed hungry children donate, donate meal online",
    title: "Donate a Meal for Hungry Children — Feed a Child Today",
    metaDescription: "Donate a meal online to feed hungry children in India. Support Shah Seva's daily nutrition program for orphans and street child communities.",
    heroParagraph: "No child should ever have to go to sleep with the agonizing ache of an empty stomach. Yet, in our cities and villages across India, millions of young children sift through waste heaps or beg at traffic junctions, hoping for a single crust of bread. When you make an online meal donation, you rescue a child from hunger. Shah Seva ensures that your ₹100 is converted into fresh, highly nutritious meals, providing children with the energy they need to smile, learn, and grow.",
    whyShahSeva: [
      "Nutrition First: Every meal we distribute is clinically balanced, containing robust portions of clean grains, proteins, and essential mineral supplements for growing bodies.",
      "Direct Distribution: We run dynamic community kitchens directly inside localized rural pockets and street suburbs to feed children where they live.",
      "Verified Transparency: We trace every hot plate served. Donors receive clear, verified photographs of children eating meals sponsored by their kindness."
    ],
    stats: {
      families: "1 ration kit = feeds 4 people for 1 week",
      beneficiaries: "₹500 = 5 nutritious, warm meals",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 100, benefit: "₹100 = 1 nutritious, warm hot meal for a hungry street child" },
      { amount: 500, benefit: "₹500 = 5 wholesome meals containing rice, lentils, vegetables, and fruit" },
      { amount: 1000, benefit: "₹1,000 = Full weekend milk and fruit distribution for 25 orphaned children" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring the complete food and nutrition supply of an entire shelter for a week" }
    ],
    ctaText: "DONATE A MEAL ONLINE NOW",
    storyTitle: "Little Sonu's Shift from Begging to Healthy Play",
    storyContent: "In India, over 19 crore people sleep hungry every single night—and a devastating percentage of this group are small children. Eight-year-old Sonu was found begging at a busy junction in Rajasthan, looking pale and emaciated from eating only stale scraps. He had developed clinical symptoms of severe protein-energy malnutrition, making him vulnerable to common seasonal sicknesses. \n\nOur food delivery team admitted Sonu into Shah Seva's daily child nutrition circle. Thanks to consistent sponsors like you, Sonu was provided with double hot meals every day, containing high-grade lentils, fresh seasonal vegetables, and pure milk. Within three months, his cheeks filled out, his strength returned, and he was enrolled in a local primary school. Sonu's life is proof that a single sponsored meal can rewrite a child's future.",
    urgencyTitle: "Our Food Journey: From Sourcing to Satiation",
    urgencyContent: "Shah Seva's daily kitchen operates is a highly organized operation designed to maximize food security. The complete process is carefully mapped: \n1. Raw Sourcing: We source fresh raw grains, whole wheat flour, high-protein pulses, and winter vegetables directly from regional farmer mandis to bypass retail markups.\n2. Hygiene and Sorting: Volunteers sort, wash, and prep ingredients under high sanitation standards inside our professional kitchens.\n3. Cooking: Specialized cooks prepare fresh, warm meals containing appropriate oil, salt, and spices.\n4. Distribution: Our transport vans deliver the warm meals straight to mapped centers of needy street children and orphans.\n5. Photo Feedback: We take clear photographs of the food drive and email them directly to our donors.",
    transparencyTitle: "The Battle Against Childhood Starvation",
    transparencyContent: "Starvation causes permanent damage to a child's physical development, leading to chronic stunting, low mental development, and weakened immunity against easily curable infections. When you donate a meal online today, you are not just quieting a child's hunger; you are giving them the physiological base needed to break the cycle of poverty and live a long, healthy life."
  },
  {
    id: "food-donation-for-poor",
    keyword: "food donation for poor, donate ration kit",
    title: "Food Donation for the Poor — Sponsor a Ration Kit in India",
    metaDescription: "Donate a dry ration kit for poor families in India. Sponsor critical grocery packages containing wheat, rice, oil, and lentils with Shah Seva.",
    heroParagraph: "For an impoverished daily laborer in India, a single day of sickness or sudden loss of work translates directly to starvation for their entire household. Without savings, they must choose between going deep into debt or skipping meals. Your dry food donation provides a vital cushion. Shah Seva's dry ration kit (grocery package) contains complete basic food supplies to feed a family of 4 comfortably for a full week, restoring peace and dignity to their home.",
    whyShahSeva: [
      "Comprehensive Supplies: Our ration kits are thoughtfully packed with whole wheat, premium rice, cooking oils, high-protein grams, sugar, salt, and spices.",
      "Direct Ward Delivery: We bypass middle distribution layers, delivering the dry grocery kits directly to widows, disabled seniors, and daily wage earners.",
      "Transparent Tracking: Every food distribution drive is logged with dates, recipient data, and proof photos emailed directly to the sponsor."
    ],
    stats: {
      families: "1 grocery kit = Feeds 4 people for 1 week",
      beneficiaries: "₹1,500 = Complete month of dry groceries",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring essential cooking oils, sugar, and salt for three poor families" },
      { amount: 1500, benefit: "₹1,500 = Complete, robust month-long dry grocery ration kit for a family of four" },
      { amount: 4500, benefit: "₹4,500 = Sponsoring robust month-long dry ration kits for three vulnerable households" },
      { amount: 9000, benefit: "₹9,000 = Full emergency dry ration distribution drive for an entire village segment" }
    ],
    ctaText: "SPONSOR A RATION KIT NOW",
    storyTitle: "Protecting Fatima's Children from Hunger",
    storyContent: "Fatima, a widowed mother of three children in a remote village in Rajasthan, worked as a cotton harvester, earning less than ₹120 per day. When the seasonal harvest ended unexpectedly, she had no source of income, and her home food stocks dried up completely. Desperate, she had to dilute water with minor flour to feed the children. \n\nShah Seva's rural survey team identified Fatima's situation. Within 24 hours, our delivery vehicle arrived at her doorstep, providing her with a comprehensive dry ration kit containing 10kg wheat flour, 5kg rice, 2kg lentils, 2L cooking oil, and essential spices. Fatima wept with relief as her kitchen was restored. She was mapped into our monthly grocery circle, ensuring her children fast and eat with complete safety.",
    urgencyTitle: "The Logistics of Your Food Aid",
    urgencyContent: "We process every ration kit donation through a strict, transparent logistical flow:\n- Community Sourcing: We buy raw grains, flour, oil, and spices in massive bulks directly from rural wholesale markets to maximize value.\n- Sterile Packaging: Volunteers pack groceries inside sturdy, weather-resistant fabric bags to prevent water damage during transport.\n- Rural Distribution: Our transport vans travel deep into distant village areas to deliver kits to verified widows and elderly disabled citizens.\n- Transparency Proofs: Photos and video logs of recipients accepting the ration bags are uploaded and instantly sent to our donors.",
    transparencyTitle: "Restoring Human Dignity Through Food",
    transparencyContent: "Over 19 crore people in India sleep hungry every night, trapped in an unrelenting cycle of physical weakness and acute anxiety. A dry ration kit is more than just food; it is a direct message of hope that lets a mother prepare warm meals for her children within the comfort of her own home, preserving her self-esteem and giving her family the security to look forward to tomorrow."
  },
  {
    id: "sponsor-a-meal",
    keyword: "sponsor a meal, donate for food distribution",
    title: "Sponsor a Meal — Your ₹100 Can Feed a Family",
    metaDescription: "Sponsor a meal online with Shah Seva. Provide fresh, hygienic hot food distributions for poor laborers, patient families, and street children.",
    heroParagraph: "For many of us, ₹100 is just a casual cup of coffee. But for an impoverished family or an elderly citizen on the streets, ₹100 is the difference between warm, nourishing food or going to bed on an empty stomach. When you sponsor a meal online through Shah Seva, you participate in a powerful, direct community feeding initiative. Your contribution is converted into hot plates of fresh, nutritious food distributed to daily wage laborers, patient caretakers outside government hospitals, and homeless citizens.",
    whyShahSeva: [
      "Hygienic Cooking: All food is prepared under high sanitary standards inside our dedicated non-profit community kitchen facility.",
      "Surgical Placement: We target hospitals, labor chowks, and railway stations where homeless individuals gather, reaching those who need food immediately.",
      "100% Direct Utility: Every rupee contributed goes directly to buy grains, oils, and gas fuel, with zero administrative waste."
    ],
    stats: {
      families: "₹100 = 1 double-portion fresh meal",
      beneficiaries: "₹1,000 = Feeds 10 people fully",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 100, benefit: "₹100 = Sponsor 1 double-portion hot, fresh meal for a hungry laborer" },
      { amount: 500, benefit: "₹500 = Sponsoring 5 fresh, nutritious meals containing grains, vegetables, and curd" },
      { amount: 2000, benefit: "₹2,000 = Sponsoring 20 fresh, delicious hot meals distributed at emergency clinics" },
      { amount: 5000, benefit: "₹5,000 = Sponsor a complete hot food distribution drive feeding 50 patients and elders" }
    ],
    ctaText: "SPONSOR A WARM MEAL NOW",
    storyTitle: "Feeding Caretakers Outside Government Wards",
    storyContent: "Outside the massive oncology and general surgical wards of Rajasthan's public hospitals, hundreds of impoverished family caretakers sit huddled on the concrete footpaths. They travel from remote villages with their sick relatives, spending every single rupee of their savings on medicines. Left with no money for their own food, many caretakers starve for days. \n\nShah Seva's 'Hospital Food Project' van arrives at these hospital premises every single afternoon. We distribute warm, fresh plates of Dal-Bati, Khichdi, and seasonal vegetables to these exhausted caretakers. Sponsoring a meal ensures these dedicated family members stay strong and healthy as they tend to their sick children.",
    urgencyTitle: "Our Verified Food Distribution Cycle",
    urgencyContent: "We manage our hot food distribution campaigns with strict visual auditing:\n- Raw Bulk Buying: Procurement of fresh flour, grains, and winter vegetables from local wholesale hubs to keep meal costs at exactly ₹20-25 per plate.\n- Safe Kitchen: Cooking inside a stainless-steel, highly sterile community kitchen run by committed volunteers.\n- Targeted Vans: Transporting hot, thermal containers directly to public hospital gates, labor stations, and slum blocks.\n- Recipient Logging: Documenting the drive through high-quality photos and video testimonies sent directly to our donors.",
    transparencyTitle: "Universal Compassion for All Souls",
    transparencyContent: "Feeding a hungry stomach is a universal expression of love that crosses all bounds of religion, class, and nationality. Under Gov. Registration COOP/2025/BHILWARA/500577, Shah Seva keeps our community kitchens open daily, relying fully on your small, voluntary contributions to keep the fires burning and feed those who have no one else to turn to."
  },
  {
    id: "donate-for-village-poor-families",
    keyword: "donate for village poor families, donate to feed poor families",
    title: "Donate for Village Poor Families — Food Relief by Shah Seva",
    metaDescription: "Donate to feed poor village families in India. Sponsor essential food bags, clean water projects, and daily dry rations for rural communities.",
    heroParagraph: "Far from the lights and resource pools of modern Indian cities, thousands of remote rural villages survive in severe economic isolation. When monsoon rains fail or winter cold waves strike, landless agricultural workers lose all employment. Sponsoring food relief for village poor families provides a sturdy, immediate lifeline. Your donation delivers essential dry grocery packs directly to remote, high-poverty village settlements, keeping families safe from malnutrition and starvation.",
    whyShahSeva: [
      "Rural Outreach: We specialize in traveling to deep, forgotten rural village segments of Rajasthan that major charities do not reach.",
      "Empowering Widows & Elders: We compile lists of single mothers, widows, and physical-needs elders, prioritizing them for food delivery.",
      "100% Traceable: Donors receive exact details of the village, recipient families, and clear photos of the food bags delivered."
    ],
    stats: {
      families: "1 food bag = feeds 1 family for 1 week",
      beneficiaries: "₹1,500 = complete month-long village food bag",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring essential cooking essentials like salt, spices, and pulses for a family" },
      { amount: 1500, benefit: "₹1,500 = Complete, robust dry food grocery bag for a poor village household" },
      { amount: 4500, benefit: "₹4,500 = Sponsoring month-long food support for three vulnerable rural families" },
      { amount: 15000, benefit: "₹15,000 = Sponsoring a comprehensive food relief camp in an entire remote village block" }
    ],
    ctaText: "DONATE VILLAGE FOOD BAG OUT NOW",
    storyTitle: "Protecting a Remote Hamlet from Severe Sickness",
    storyContent: "During a severe drought in Rajasthan, a remote, landless tribal hamlet was left without any income or water. Due to food scarcity, families were eating boiled wild grass, leading to acute digestive infections among small children. The nearest clinic was over 30 kilometers away, and families were too weak to walk. \n\nShah Seva's relief truck arrived with 50 specialized dry food bags loaded with wheat flour, lentils, cooking oil, and rehydration salt packs. Our volunteers distributed the food packs directly to every hut, restoring food security instantly. Sponsoring village food relief ensures that these forgotten rural communities survive severe economic seasons with safety and hope.",
    urgencyTitle: "Our Rural Distribution Process",
    urgencyContent: "Our rural food campaigns follow a rigorous, verified standard:\n- Ground Surveys: Local volunteers visit hamlets to map and verify truly destitute families, excluding any middle political layers.\n- Bulk Packing: Packing high-nutrition whole grain, flour, cooking oil, and dates inside thick, rainproof bags.\n- Logistics: Dispatching heavily loaded relief trucks from our Bhilwara hub deep into rural village tracts.\n- Donor Mapping: Taking digital photos of target families with their sponsored food bags, sharing them directly with our donors.",
    transparencyTitle: "Sustaining India's Rural Heartlands",
    transparencyContent: "Nearly 70% of India's population lives in rural areas, where seasonal wage changes and crop failures create immediate food crises. By choosing to donate to feed poor village families today, you are providing a direct, beautiful defense system that keeps children nourished and keeps families together on their ancestral land."
  },
  {
    id: "donate-food-in-ramadan-general",
    keyword: "donate food in ramadan, sponsor food for poor",
    title: "Donate Food in Ramadan — Sponsor Iftar & Ration Kits",
    metaDescription: "Donate food in Ramadan 2026. Sponsor dry ration kits and warm evening Iftar plates for poor families and widows under Shah Seva.",
    heroParagraph: "The holy month of Ramadan is a season of profound devotion, fasting, and extreme generosity. Sponsoring food for fasting poor families is a beautiful prophetic tradition that multiplies your spiritual rewards. Your donation funds dry ration packs and hot evening Iftars, ensuring that poor widows, orphans, and daily wage earners can end their day of fasting with dignity and nutritious, warm food.",
    whyShahSeva: [
      "Prophetic Tradition: All food distribution is done in strict compliance with Shariah guidelines, respecting recipient dignity.",
      "Nutritious Iftars: Sponsoring heavy evening meal plates containing high-grade rice, boiled eggs, sweet dates, and fresh fruit juice.",
      "100% Direct: 100% of your Ramadan charity goes directly to buy food grain and distribute meals, with zero admin deductions."
    ],
    stats: {
      families: "1 Ramadan kit = feeds 1 family for 1 month",
      beneficiaries: "₹150 = 1 complete warm evening Iftar plate",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 150, benefit: "₹150 = 1 complete evening Iftar plate with sweet dates, fresh fruit, and fresh grains" },
      { amount: 1500, benefit: "₹1,500 = Complete, month-long dry Ramadan grocery kit for an impoverished widow's family" },
      { amount: 4500, benefit: "₹4,500 = Sponsoring month-long dry food grocery kits for three needy Muslim families" },
      { amount: 7500, benefit: "₹7,500 = Sponsoring a large community evening Iftar feeding 50 hungry fasting believers" }
    ],
    ctaText: "DONATE RAMADAN FOOD KITS NOW",
    storyTitle: "Double Rewards: Fulfilling the Spiritual Calls of Ramadan",
    storyContent: "The Prophet Muhammad (ﷺ) said: 'Whoever feeds a fasting person will have a reward like that of the fasting person, without any reduction in the reward of the fasting person.' (Tirmidhi). \n\nAt Shah Seva, our evening Iftar kitchens operate daily throughout the holy month of Ramadan. Volunteers cook fresh, hygienic meals and distribute them directly in underprivileged Muslim neighborhoods and outside government clinics. For an impoverished child, holding a sweet date and sitting down to a warm plate of nutritious rice is a moment of pure bliss. Your choice to donate food in Ramadan secures these beautiful smiles and multiplies your spiritual rewards.",
    urgencyTitle: "Our Transparent Ramadan Work Flow",
    urgencyContent: "We process and distribute all Ramadan food donations through a verified pipeline:\n- Bulk GrainBuying: Buying dates, wheat, rice, and pulses weeks in advance to secure the lowest wholesale rates in Rajasthan.\n- Packaging: Sizing groceries into specialized boxes designed to sustain families for all 30 days of fasting.\n- Ground Distribution: Carrying boxes directly to mapped widows, orphans, and sick daily laborers before the start of the holy month.\n- Photographic Reports: Sharing high-quality digital photo logs and recipient updates directly with our global donors.",
    transparencyTitle: "Sincere Islamic Values and Governance",
    transparencyContent: "Shah Seva is proudly affiliated with Dargah Saiyad Ali Shah in Bhilwara. We handle all Ramadan contributions under strict Shariah supervision. Our food grains are purchased using clean, separate accounts, ensuring that your voluntary charity (Sadaqah) and obligatory dues are applied with absolute honesty and compliance."
  },

  // --- TASK 8: EDUCATION SUPPORT PAGES ---
  {
    id: "sponsor-a-child-education",
    keyword: "sponsor a child education",
    title: "Sponsor a Child's Education — Change Their Future",
    metaDescription: "Sponsor a child's education in India. Support tuition fees, school books, uniforms, and stationary for poor students with Shah Seva.",
    heroParagraph: "In India, over 6 crore children drop out of school before reaching high school due to extreme family poverty. When a daily laborer cannot afford food, paying for school uniforms and tuition fees becomes an impossible luxury. These children are forced into manual labor, trapping another generation in poverty. When you sponsor a child's education, you break this cycle completely. Your ₹1,000 a month acts as a direct, powerful bridge that keeps an innocent child in school, unlocking their complete mental potential.",
    whyShahSeva: [
      "Full Sponsorship: Sponsoring covers school tuition fees, text books, custom uniforms, safety bags, shoes, and regular stationery.",
      "Progress Tracking: We register students and collect their academic report cards, sharing regular updates on school progress with the donor.",
      "100% Direct Utility: 100% of your sponsorship is wired straight to school registrations and book distributors, ensuring no waste."
    ],
    stats: {
      families: "6 crore children drop out due to poverty",
      beneficiaries: "₹1,000/month = Full child school sponsorship",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Complete annual school books, notebooks, and dynamic stationary kit for a child" },
      { amount: 1000, benefit: "₹1,000 = Full school sponsorship covering custom uniform, shoes, and tuition fee for one month" },
      { amount: 3000, benefit: "₹3,000 = robust three-month educational sponsorship for an underprivileged student" },
      { amount: 12000, benefit: "₹12,000 = Complete full-year academic school sponsorship for a needy child" }
    ],
    ctaText: "SPONSOR A CHILD'S EDUCATION NOW",
    storyTitle: "Razia's Flight: From Slum Scrap to Top of Her Class",
    storyContent: "Meet Razia, a bright ten-year-old girl from Rajasthan. Her father worked as an on-call gutter cleaner, earning barely enough for food. Due to financial crises, Razia had to leave her primary school to help her mother collect recyclable plastic waste from garbage dumps. Her dreams of becoming a doctor seemed utterly lost. \n\nShah Seva's field team mapped Razia and found a dedicated educational sponsor. Thanks to monthly funding of ₹1,000, we paid her pending school fees, bought her a brand new uniform, an elegant bag, and standard school books. Today, Razia is back in school, ranking first in her class exams with brilliant marks. Her story is a shining example of how educational access can completely redefine a child's destiny.",
    urgencyTitle: "Why Sponsoring Education Safeguards Our Future",
    urgencyContent: "Education is not an alternative luxury; it is the fundamental human right that allows an individual to escape generational poverty. By keeping a child in school, you prevent early child marriage and secure a future of independence, capability, and dignity. Your sponsorship provides young students with the direct tools to build their own paths of success.",
    transparencyTitle: "Our Educational Audit Standards",
    transparencyContent: "We process educational sponsorships with extreme accountability. We verify school registrations, book invoices, and fee cards under Gov. ID COOP/2025/BHILWARA/500577. We share child progress notes, report cards, and thank-you drawings directly with our sponsors, celebrating the beautiful progress of the children we support.",
    faqs: [
      {
        question: "Can I correspond with the child I sponsor?",
        answer: "Yes. For security and child safety, all communications are managed through our office. You can exchange encouraging letters and receive hand-drawn thank-you cards and progress reports from your sponsored child twice a year."
      },
      {
        question: "Is there a minimum duration for child educational sponsorship?",
        answer: "While you can cancel your monthly pledge at any time, we highly encourage a minimum of one academic year commitment to ensure the child experiences an uninterrupted, stable school session."
      }
    ]
  },
  {
    id: "donate-school-supplies",
    keyword: "donate school supplies",
    title: "Donate School Supplies — Help Poor Students Learn",
    metaDescription: "Donate school supplies online. Sponsor durable school bags, notebooks, math kits, and coloring instruments for poor children with Shah Seva.",
    heroParagraph: "For an impoverished child, walking into a classroom with bare hands, having no notebook to write on or pencil to solve math problems, is deeply humiliating. This extreme embarrassment often causes children to lose interest and drop out of school entirely. Sponsoring basic school supplies is a beautiful, direct way to empower young learners. Your donation buys durable school bags, high-quality notebooks, geometry kits, and coloring instruments, bringing smiles of pride and confidence to poor students.",
    whyShahSeva: [
      "High-Quality Supplies: We source heavy-duty waterproof canvas bags, thick page notebooks, and standard geometry kits to last the whole school year.",
      "Direct Classroom Drives: We identify remote rural public schools where parents cannot afford basic supplies, conducting full materials campaigns.",
      "Transparent Photos: All distribution events are logged, and high-quality photographs of students receiving school kits are sent directly to donors."
    ],
    stats: {
      families: "6 crore Indian children lack school supplies",
      beneficiaries: "₹500 = Complete, robust school supplies kit",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 250, benefit: "₹250 = Sponsoring 5 high-quality thick notebooks and standard writing instrument sets" },
      { amount: 500, benefit: "₹500 = Complete school supplies kit containing canvas bag, math boxes, and painting colors" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring comprehensive, heavy-duty educational kits for three poor children" },
      { amount: 5000, benefit: "₹5,000 = Sponsoring school supplies and books for a complete classroom block" }
    ],
    ctaText: "DONATE SCHOOL SUPPLIES NOW",
    storyTitle: "Little Dev's Brand New Backpack of Pride",
    storyContent: "In India, over 6 crore children drop out of school due to poverty. Nine-year-old Dev in Rajasthan used to carry his single torn textbook inside a thin grocery plastic bag. When the plastic bag ripped, his homework was often ruined in the rain, and his classmates laughed at him, making him fear going to school. \n\nShah Seva's volunteer team visited Dev's school and gifted every student a brand new, highly durable waterproof canvas backpack loaded with notebooks, sketching colors, and custom geometry geometry boxes. Dev's eyes widened with pure joy as he adjusted the straps of his new bag. Today, Dev walks to school with absolute confidence, clutching his books with care. Your small gift of school supplies protects child dignity and keeps their dreams alive.",
    urgencyTitle: "What a Standard School Kit Contains",
    urgencyContent: "Each of our specialized, bulk-purchased Educational Kits contains:\n- Heavy canvas waterproof backpack built for rural terrain.\n- 6 high-thickness ruled paper notebooks for subject writing.\n- Multi-color wood sketching pencils and eraser accessories.\n- Dynamic stainless steel math geometry kit.\n- High-durability water bottle to keep children hydrated.",
    transparencyTitle: "Direct-to-Student Distribution Audits",
    transparencyContent: "We purchase school stationery directly in massive wholesale packages from manufacturing mills, bypassing retail inflation to double the impact of your charity. All school distribution schedules, student rosters, and school principal acknowledgements are registered, giving our donor family complete trust and peace of mind.",
    faqs: [
      {
        question: "Can I choose the specific region for school supply distribution?",
        answer: "Our operations are focused heavily on high-poverty village schools in rural Rajasthan. However, if you would like to sponsor supplies for a specific school in these zones, you can coordinate directly with our team."
      },
      {
        question: "How are school supply donation receipts processed?",
        answer: "We issue instant digital donation receipts and audit logs showing the volume of school bags and stationery kits bought and distributed, establishing absolute accountability."
      }
    ]
  },
  {
    id: "help-poor-students-donate",
    keyword: "help poor students donate, help poor students education",
    title: "Help Poor Students — Donate for Education in India",
    metaDescription: "Help poor students in India by donating for education. Support Shah Seva's verified scholar funds, books, and tuition support systems.",
    heroParagraph: "Brilliance is evenly distributed, but educational access is not. Across India, countless incredibly smart, talented students are forced to drop out of high school simply because their parents cannot pay the final fees. Your choice to help poor students by donating for education is a direct investment in human potential. Your money funds verified scholarships, school fees, and exam costs, allowing industrious young minds to continue their studies and unlock a future of success.",
    whyShahSeva: [
      "Verified Scholarship Allocation: We check student marks, family income level, and school cards to find truly deserving, smart students.",
      "100% Academic Compliance: No cash is handed over; we settle academic fees directly with schools and college cashier desks.",
      "Complete Mentorship: We do not just pay fees; we guide students with after-school tutorials and career counseling counseling panels."
    ],
    stats: {
      families: "6 crore student dropouts avoided",
      beneficiaries: "₹1,000 = Month of high school coaching support",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring high school science and math laboratory files and notebooks" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring monthly coaching fees and transport for a high school student" },
      { amount: 3000, benefit: "₹3,000 = Funding critical board exam registration fees and custom textbook packs" },
      { amount: 12000, benefit: "₹12,000 = Full-year comprehensive academic scholar backup for a brilliant student" }
    ],
    ctaText: "DONATE FOR STUDENT EDUCATION NOW",
    storyTitle: "Sponsoring Kabir's Path to Engineering Success",
    storyContent: "Meet Kabir, a brilliant 16-year-old student from Rajasthan whose father worked as an helper at a tea stall. Kabir scored an incredible 92% in his board exams, but his father could not buy the high-level science books or pay the high school enrollment fees. Kabir was facing the bleak prospect of working at a mechanic garage to support his family. \n\nShah Seva stepped up, establishing a robust student scholarship for Kabir. We paid his high school science stream fees, bought his custom chemistry books, and sponsored his transportation. Today, Kabir has cleared his college entrance exams, heading to a top engineering institute. Sponsoring a student's education gives them the wings to rise and lift their entire family out of poverty.",
    urgencyTitle: "Why Every Rupee You Share Counts in the Classroom",
    urgencyContent: "Over 6 crore children in India drop out of school due to poverty. Sponsoring educational help covers essential costs like:\n- Standard semester exam and science board registration fees.\n- Custom reference books, dictionaries, and high-level guides.\n- School uniform, winter protective sweaters, and safety shoes.\n- Transportation buses to prevent long, unsafe walks through rural areas.",
    transparencyTitle: "Our Promise of Uncompromising Transparency",
    transparencyContent: "Shah Seva manages all student funds under strict compliance rules. Registered under No. COOP/2025/BHILWARA/500577, we maintain transparent ledgers of all fees paid to schools. We share school receipt logs, progress charts, and student report cards with our donors, certifying the real, life-changing impact of their kindness.",
    faqs: [
      {
        question: "How does Shah Seva verify student applications?",
        answer: "Our volunteers conduct physical home visits to assess family financial conditions, check the candidate's academic report cards, and consult with local school teachers to confirm eligibility."
      },
      {
        question: "Can I sponsor a student's higher college education?",
        answer: "Yes, we have specialized scholarships for professional college degrees. You can choose to sponsor a candidate's nursing, engineering, or terminal degree directly."
      }
    ]
  },
  {
    id: "school-fee-donation",
    keyword: "school fee donation",
    title: "Pay School Fees for a Poor Child — Donate Now",
    metaDescription: "Pay school fees for a poor child through our verified online portal. Save students from dropouts and secure their education with Shah Seva.",
    heroParagraph: "When a poor parent’s monthly income is barely enough to buy flour and lentils, paying school fees becomes a heavy, impossible burden. Many children face the humiliation of being turned away from classes because of unpaid fees, pushing them out of the schooling system forever. When you make a school fee donation, you provide an immediate shield that keeps a child in their classroom. Shah Seva processes all fee donations directly to school cashiers, ensuring uninterrupted learning for vulnerable children.",
    whyShahSeva: [
      "Direct Bank Transits: We pay fees directly to school accounts, maintaining neat, audit-ready payment trails.",
      "Preventing Dropouts: We target children who are on the verge of suspension due to chronic unpaid balances, resolving their issues immediately.",
      "Detailed Feedback: Donors receive official school fee receipts and child report cards directly in their emails."
    ],
    stats: {
      families: "6 crore dropped out due to unpaid fees",
      beneficiaries: "₹1,000/month = full private school tuition",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring school semester activity and computer lab fees for a kid" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring one full month of school tuition fees for a poor child" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring a full quarter (3 months) of school tuition for a vulnerable student" },
      { amount: 12000, benefit: "₹12,000 = Sponsoring a full-year school tuition fee package for a child" }
    ],
    ctaText: "PAY A CHILD'S SCHOOL FEES NOW",
    storyTitle: "Keeping Little Ananya in Her High School Class",
    storyContent: "Meet Ananya, a persistent 11-year-old girl in Rajasthan. Her mother, working as a domestic housecleaner, struggled to pay Ananya's school fees, leading to a mounting unpaid balance of ₹4,000. Ananya was temporarily suspended from attending her mid-term exams. She sat weeping outside her school, fearing her education had ended. \n\nShah Seva's field emergency squad was contacted. We visited the school, cleared Ananya's entire pending fee balance directly with the warden, and secured her immediate re-election into the exam hall. Ananya scored a brilliant 88% on her exams. Paying a poor child's school fees is a direct, life-changing act that rescues their dreams of a brighter future.",
    urgencyTitle: "Why Quick School Fee Relief is Critical",
    urgencyContent: "Over 60 million children in India drop out of the schooling system due to poverty. Delayed fee payments lead to severe mental stress, embarrassment, and eventual student dropout. Sponsoring fees ensures that kids remain in positive learning environments, sparing them the trauma of public exclusion and giving them the stability to study.",
    transparencyTitle: "Our Verified Academic Tracking Flow",
    transparencyContent: "Under Gov. ID COOP/2025/BHILWARA/500577, Shah Seva registers and monitors every child fee distribution. We do not distribute cash to parent hands; all resources are sent directly to school bank channels. We share official school stamp sheets and child class progress notes with our donors, securing absolute financial accountability.",
    faqs: [
      {
        question: "Can I pay school fees for a child in a specific grade?",
        answer: "Yes, our scholarships cover kids across primary, secondary, and senior secondary grades. You can state your preferences when making the donation."
      },
      {
        question: "Does Shah Seva support students in government schools?",
        answer: "While government school tuition is mostly free, there are structural costs for exam fees, uniforms, and books. We provide support for both public and private schools to ensure no child leaves education."
      }
    ]
  },
  {
    id: "donate-for-orphan-education",
    keyword: "donate for orphan education",
    title: "Donate for Orphan Education — Give Orphans a Bright Future",
    metaDescription: "Donate for orphan education in India with Shah Seva. Sponsor school fees, books, clothing, and complete boarding support for orphaned students.",
    heroParagraph: "Losing one's parents is the ultimate emotional and physical tragedy a child can experience. Left without guardians, orphan children face immediate threats of survival, child labor, and extreme neglect. Sponsoring orphan education is a divine calling that provides safe housing, meals, and education, ensuring these vulnerable children grow up in positive, protective environments with the skills to succeed.",
    whyShahSeva: [
      "Holistic Support: Sponsoring covers school fees, books, clothing, nutritious hot meals, and secure hostel housing.",
      "Emotional Care: Our volunteers manage specialized study centers and counselors, offering emotional guidance for orphaned children.",
      "Fulfilling Prophetic Call: Fulfill your charitable calling, receiving the direct, beautiful rewards of protecting orphans."
    ],
    stats: {
      families: "Over 1.5 crore orphans suffer in India",
      beneficiaries: "₹1,200/month = Full orphan educational care",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 600, benefit: "₹600 = Sponsoring standard textbooks, uniforms, and clothing for an orphan child" },
      { amount: 1200, benefit: "₹1,200 = Full orphan educational care covering tuition fees, meals, and housing for 1 month" },
      { amount: 3600, benefit: "₹3,600 = robust three-month educational care and shelter for an orphaned student" },
      { amount: 14400, benefit: "₹14,400 = Sponsoring complete educational care and housing of an orphan for a full year" }
    ],
    ctaText: "DONATE FOR ORPHAN EDUCATION NOW",
    storyTitle: "Little Sameer's Journey: From Homelessness to Class Captain",
    storyContent: "Meet Sameer, a nine-year-old child from Rajasthan. Sameer lost both his parents to COVID-19 and was left wandering near railway stations, looking for scraps. He was quiet, fearful, and malnourished, facing a dangerous, bleak future on the streets. \n\nShah Seva rescued Sameer, admitting him into our partnering child shelter and enrolling him in a quality local school. Thanks to sponsors like you, Sameer received school books, a neat uniform, daily nutritious meals, and homework support. Today, Sameer is the class captain of his fourth-standard class, known for his brilliant math skills. Protecting and educating orphans is a beautiful act of love that restores young lives.",
    urgencyTitle: "The Great Reward of Supporting Orphans",
    urgencyContent: "Both Islamic teachings and universal humanitarian ethics place the care of orphans at the absolute highest tier of righteous actions. The Prophet Muhammad (ﷺ) beautifully taught: 'I and the one who looks after an orphan will be in Paradise like this'—holding his index and middle fingers close together. Sponsoring an orphan child's education ensures they never feel abandoned, giving them a safe family of care.",
    transparencyTitle: "Our Orphan Care Audit Protocols",
    transparencyContent: "We process orphan sponsorships with strict financial and safety measures under No. COOP/2025/BHILWARA/500577. We maintain transparent logs of school registrations and hostel living expenses. We share monthly student reports, academic cards, and thank-you notes with our donors, establishing complete trust.",
    faqs: [
      {
        question: "Can I sponsor an orphan's monthly care on a recurring basis?",
        answer: "Yes, our portal supports recurring monthly donations of ₹1,200. This provides the stable, long-term funding needed to secure the child's place in their school and shelter."
      },
      {
        question: "How does Shah Seva ensure the safety of orphaned children?",
        answer: "Our partner hostels and schools are fully secure and verified by local state child welfare committees, and all volunteer staff undergo strict background checks to ensure a safe environment."
      }
    ]
  },
  {
    id: "donate-for-poor-girls-education",
    keyword: "donate for poor girls education",
    title: "Donate for Poor Girls' Education — Empower India's Daughters",
    metaDescription: "Donate for poor girls' education in India. Support tuition fees, sanitary kits, textbooks, and transport with Shah Seva's girl child fund.",
    heroParagraph: "In many impoverished Indian households, limited financial resources mean that families prioritize their sons' education, while daughters are pulled out of school to handle domestic chores or are forced into early child marriages. Sponsoring girls' education is a direct, powerful way to drive social progress, giving young girls the skills, confidence, and qualifications to build independent lives.",
    whyShahSeva: [
      "Empowering Families: Sponsoring a girl's education lifts her entire future family, breaking the circle of poverty.",
      "Sanitary & Safe Care: We provide comprehensive sanitary hygiene kits and secure, reliable transport to school classes.",
      "Verified Scholarship Allocation: We check student cards and family income to choose truly industrious girls for support."
    ],
    stats: {
      families: "6 crore girls face dropout due to poverty",
      beneficiaries: "₹1,000/month = full girl child school support",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Complete annual school reference books and stationery kit for a girl student" },
      { amount: 1000, benefit: "₹1,000 = Full tuition fees, uniform, and sanitary hygiene kits for one month" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring three months of school tuition, clothing, and transport for a girl child" },
      { amount: 12000, benefit: "₹12,000 = Sponsoring a complete full-year educational scholarship for a poor girl" }
    ],
    ctaText: "DONATE FOR GIRL CHILD EDUCATION",
    storyTitle: "Sponsoring Muskan's Dream of Becoming a Teacher",
    storyContent: "Meet Muskan, a bright 12-year-old girl in Rajasthan. Her father, working as a brick kiln laborer, decided to stop her education so she could help with the heavy kiln work. Muskan cried for days, pleading with her father to let her study. \n\nShah Seva's women field workers visited her family, explaining the long-term benefits of girls' education. Thanks to our sponsors, we paid Muskan's tuition fees and bought her textbooks and uniform. Today, Muskan is class top, preparing to become a high school teacher in her home region. Sponsoring a girl's education empowers a daughter of India to stand strong and independent.",
    urgencyTitle: "Why Sponsoring Girls' Education is Critical",
    urgencyContent: "When you educate a boy, you educate an individual. But when you educate a girl, you educate an entire nation. Sponsoring a girl child's education secures long-term social progress, significantly improves childhood health and nutrition, and prevents early marriages. Your help gives them the tools to build their own paths of success.",
    transparencyTitle: "Our Girl Child Scholar Audits",
    transparencyContent: "Under Gov. ID COOP/2025/BHILWARA/500577, Shah Seva logs and tracks all girl child educational funds with absolute transparency. We settle school fee receipts directly with school administrations and share detailed academic cards, student letters, and family updates with our donors, securing complete accountability.",
    faqs: [
      {
        question: "What does the girl child educational pack contain?",
        answer: "Alongside school fees and books, each girl child recipient receives essential sanitary hygiene products, school uniform, shoes, safety schoolbag, and geometry boxes."
      },
      {
        question: "Can I sponsor Muskan or another girl child throughout her high school?",
        answer: "Yes, our long-term pledge program allows you to support a specific student as she progresses through high school and college, building a lifelong bond of care."
      }
    ]
  },

  // --- TASK 9: URGENT / EMERGENCY PAGES ---
  {
    id: "donate-now-urgent",
    keyword: "donate now urgent",
    title: "Donate Now — Urgent Help Needed",
    metaDescription: "Donate now for urgent humanitarian crises. Fulfill critical ICU and emergency medical cases at Shah Seva. Act now to save a life.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from agonizing physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "urgent-help-needed-donation",
    keyword: "urgent help needed donation",
    title: "Urgent Help Needed — Donate to Save a Life Right Now",
    metaDescription: "Urgent help needed. Donate to save a life right now with Shah Seva's emergency medical fund. Verified NGO with zero administrative waste.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "NGO Verified: Registered under Gov. Registration COOP/2025/BHILWARA/500577, ensuring direct, clean accounts.",
      "100% Direct: 100% of your donation shifts directly to actual beneficiary bills, with zero administrative waste.",
      "Instant Updates: Official tax receipts and real patient progress reports are emailed instantly to the donor."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "emergency-fundraiser",
    keyword: "emergency fundraiser",
    title: "Emergency Fundraiser — Open Now for Critical Cases",
    metaDescription: "Support Shah Seva's emergency fundraiser. Fulfill critical ICU and emergency medical cases. Act now to provide life-saving care.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "donate-immediately",
    keyword: "donate immediately",
    title: "Donate Immediately — Lives Are at Stake",
    metaDescription: "Donate immediately to save lives. Fund Shah Seva's emergency medical response team for critical ICU and accident cases in India.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "save-life-donate-now",
    keyword: "save life donate now",
    title: "Save a Life — Donate Now to Shah Seva Emergency Fund",
    metaDescription: "Save a life today. Donate now to Shah Seva's emergency medical fund. Verified clinical wires with absolute zero administrative leakage.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "donate-for-poor-child-emergency",
    keyword: "donate for poor child",
    title: "Donate for a Poor Child — Because They Deserve Better",
    metaDescription: "Donate for a poor child's emergency medical care. Guard lives of orphaned and impoverished kids with Shah Seva's verified child welfare fund.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "help-orphan-kids-donation",
    keyword: "help orphan kids donation",
    title: "Help Orphan Kids — Donate for Their Care & Future",
    metaDescription: "Help orphan kids in deep emergency distress. Donate to secure shelter, nutrition, and urgent medical protection with Shah Seva's verified NGO fund.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },
  {
    id: "emergency-donation-needed",
    keyword: "emergency donation needed",
    title: "Emergency Donation Needed — Please Help Now",
    metaDescription: "Emergency donation needed. Support poor patients undergoing high-urgency operations and ICU therapies with our secure, verified NGO gate.",
    heroParagraph: "We have exactly 48 hours to raise ₹50,000 to save critical medical cases waiting in emergency hospital ICUs. This is a real, high-urgency rescue appeal—an innocent life is hanging by a thread right now. Every single second of delay is a dangerous step toward tragedy. Please act immediately to provide the life-saving support needed to keep a patient alive.",
    whyShahSeva: [
      "Surgical Urgency: Hospital operators require upfront fee payments before initiating critical surgeries or treatment sessions.",
      "100% Direct Treatment: Every single rupee is wired straight to empanelled hospital cashier desks against verified clinical bills.",
      "Instant Audits: Official digital payment receipts and verified patient updates are issued instantly to donors."
    ],
    stats: {
      families: "NGO Verified | 100% Transparent",
      beneficiaries: "Emergency Fundraiser Open Now",
      ngo: "Lives Are at Stake — Act Now"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Emergency surgical anesthesia and sterile ICU consumables" },
      { amount: 1000, benefit: "₹1,000 = Sponsoring critical diagnostic blood counts and pre-op MRI mappings" },
      { amount: 2500, benefit: "₹2,500 = Sponsoring emergency trauma support, CT scans, and life-support" },
      { amount: 5000, benefit: "₹5,000 = Complete surgical kit, oxygen bypass tubes, and ICU room stay" }
    ],
    ctaText: "DONATE NOW — shahseva.vercel.app",
    storyTitle: "Urgent Medical Crisis Appeal",
    storyContent: "Right now, four critical pediatric and adult patients are waiting on hospital stretchers. Their families have exhausted every single rupee they possessed, and treatment has been temporarily put on hold. \n\nIf we do not meet our funding target within 48 hours, these patients face immediate medical discharge, permanent disability, or a slow, agonizing death. Your immediate online donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    urgencyTitle: "What Happens With Your Urgent Donation",
    urgencyContent: "Your emergency contribution is processed through a strict, zero-delay pipeline:\n- Direct Hospital Wires: Settle pending ICU bed advances and surgery expenses immediately.\n- Specialized Medicines: Purchase high-strength broad-spectrum antibiotics and emergency blood packs.\n- Clinical Supplies: Fund sterile vascular catheters and respiratory oxygen lines.",
    transparencyTitle: "What Happens If We Fail to Act",
    transparencyContent: "Without immediate financial support, doctors cannot buy expensive custom implants or run critical ICU life support systems, leading to progress of severe diseases and preventable deaths. Your fast action today is the direct bridge that delivers a patient from magnifying physical trauma to holistic recovery.",
    bulletPointsLabel: "If the goal is not met:",
    negativeBullets: [
      "Critical surgeries will be postponed indefinitely, causing severe tissue damage and organ infection.",
      "Exhausted families will be forced to take high-interest loans from predatory lenders, leading to economic ruin.",
      "Patients in critical conditions will face discharge from ICU beds due to mounting unpaid hospital bills."
    ],
    positiveBullets: [
      "100% of your donation is wired straight to hospital cashiers against verified clinical invoices.",
      "Surgery rooms and emergency procedures will be scheduled within hours of payment clearance.",
      "The critical medical case is fully resolved, giving a poor patient their independence and life back."
    ]
  },

  // --- TASK 10: SPECIFIC MEDICAL CONDITION DONATION PAGES ---
  {
    id: "donate-for-blood-cancer-treatment",
    keyword: "donate for blood cancer treatment",
    title: "Donate for Blood Cancer Treatment — Help a Patient Fight",
    metaDescription: "Donate for blood cancer treatment in India. Sponsor essential chemotherapy drugs, bone marrow biopsies, and blood matching tests with Shah Seva.",
    heroParagraph: "Blood cancer (Leukemia or Lymphoma) is a devastating diagnosis, but what is even more tragic is a patient having to give up on curable treatments simply because their family cannot afford chemotherapy. For a poor wage earner, the cost of oncology care is an absolute nightmare. Your choice to donate for blood cancer treatment is a direct, life-saving act that funds essential chemotherapy infusions, target drug regimens, and critical pediatric and adult bone marrow diagnostics.",
    whyShahSeva: [
      "Targeted Oncology Wires: We settle pharmacy and medical billing directly at cancer hospitals, bypassing commercial markups.",
      "Physical Bedside Audits: Every cancer case is physically verified by Shah Seva volunteers, consulting oncologists, and hospital administrations.",
      "Zero Overhead: We guarantee that 100% of your cancer donation is utilized directly on-ground for oncology medicine and patient care."
    ],
    stats: {
      families: "Chemotherapy session = ₹15,000",
      beneficiaries: "Bone marrow test = ₹8,000",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Essential post-chemo anti-emetics and infection-control safety kits for a child" },
      { amount: 1500, benefit: "₹1,500 = Complete clinical hematology profiles and pre-chemo blood chemistry mappings" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring one unit of concentrated platelets and emergency vascular blood filters" },
      { amount: 10000, benefit: "₹10,000 = Sponsoring a life-saving targeted chemotherapy dose for a pediatric leukemia fighter" }
    ],
    ctaText: "DONATE FOR CANCER TREATMENT",
    storyTitle: "Little Sameer'sremission Over Acute Leukemia",
    storyContent: "Eight-year-old Sameer loved to draw, but his smile faded when he was diagnosed with Acute Lymphoblastic Leukemia. His mother, working as a tailor, realized that her entire lifetime earnings could not pay for even two cycles of Sameer's chemotherapy. Desolate, she was told about Shah Seva's dedicated pediatric oncology fund. Our donors stepped up to sponsor Sameer's complete multi-cycle chemotherapy regime over six months. Sameer's leukemia went into absolute remission, and he is now back to drawing colorful pictures—alive today because ordinary people chose to answer his call for help.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "The Battle Against Chemical Delays",
    transparencyContent: "In oncological care, timing is a critical factor. Aggressive blood cancer cells multiply relentlessly, and missing or delaying a scheduled chemotherapy cycle can allow the disease to progress, rendering previous cycles useless. Sponsoring cancer help ensures treatments are never delayed, giving poor patients their maximum statistical chance of total recovery and survival.",
    faqs: [
      {
        question: "How long does the medical verification process take?",
        answer: "Our team operates with high speed. For pediatric cancer cases and emergency ICU admissions, we complete the entire verification and wire release within 24 to 48 hours."
      },
      {
        question: "Can I get direct updates from the oncology patient I am sponsoring?",
        answer: "Yes, we send digital progress updates, doctor prescriptions, post-session blood counts, and heartwarming patient photos straight to the sponsor's registered email."
      },
      {
        question: "How does Shah Seva ensure that my money is not misspent?",
        answer: "We strictly enforce a cash-free transfer mechanism. All donations are wired straight to the hospital’s official billing accounts against verified billing statements."
      }
    ]
  },
  {
    id: "donate-for-kidney-treatment",
    keyword: "donate for kidney treatment",
    title: "Kidney Treatment Donation — Dialysis Costs ₹3000/Week",
    metaDescription: "Donate for kidney treatment online. Support poor patients needing bi-weekly hemodialysis, medicine, and transplants with Shah Seva.",
    heroParagraph: "For a patient suffering from end-stage renal failure, dialysis is not an optional procedure—it is the direct lifeline that filters toxins and keeps them alive. Yet, when dialysis costs ₹3,000 a week, a poor daily wage earner is forced to skip sessions, leading to an agonizing buildup of fluids, organ swelling, and fatal uremia. Your choice to donate for kidney treatment provides the critical credit lines needed to secure uninterrupted dialysis sessions and essential medicines for poor patients.",
    whyShahSeva: [
      "Continuous Care: We secure long-term bi-weekly dialysis packages directly at clinical hubs to prevent session interruptions.",
      "Physical Bedside Audits: Every renal case is physically verified by Shah Seva volunteers directly in the hospital wards.",
      "Zero Overhead: We guarantee that 100% of your kidney donation is utilized directly on-ground for patient medical fees."
    ],
    stats: {
      families: "1 dialysis session = ₹1,500",
      beneficiaries: "Bi-weekly dialysis cost = ₹3,000/week",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Essential post-dialysis erythropoietin hormone injections and blood thinners" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring 1 complete, high-quality hemodialysis session for a poor patient" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring 1 full week of bi-weekly dialysis sessions for a kidney fighter" },
      { amount: 6000, benefit: "₹6,000 = Sponsoring 2 full weeks of bi-weekly dialysis, including medicine and fluids" }
    ],
    ctaText: "DONATE FOR KIDNEY TREATMENT NOW",
    storyTitle: "Saving Suresh's Life from Sepsis and Renal Failure",
    storyContent: "Suresh, a daily wage loader from Rajasthan, suffered from sudden, acute renal failure. His survival depended on immediate, bi-weekly hemodialysis sessions, but the cost of each session was far beyond his family's daily earnings. Deprived of treatment, Suresh's body began to swell severely with toxins. Shah Seva verified his case and instantly sponsored his complete bi-weekly dialysis schedule. Within two months, Suresh's kidney function stabilized, and he returned to work. Suresh is alive and supporting his family today because ordinary donors chose to stand with him in his darkest hour.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "The Battle Against Chemical Delays",
    transparencyContent: "In renal care, consistency is vital. Missing even a single dialysis session can cause immediate pulmonary edema, severe electrolyte imbalance, and cardiac arrest. Sponsoring kidney care ensures poor patients receive life-saving treatments on time, allowing them to focus on physical recovery and self-reliance.",
    faqs: [
      {
        question: "Does Shah Seva support kidney transplant surgeries?",
        answer: "Yes, we provide financial support for pre-transplant diagnostics and post-transplant immunosuppressant drugs for truly underprivileged patients who have verified donors."
      },
      {
        question: "Can I pay for a patient's dialysis for an entire year?",
        answer: "Absolutely. Sponsoring an annual dialysis program is a highly profound gift that keeps a breadwinner healthy and protects their entire household from collapse."
      },
      {
        question: "Are dialysis donations tax-deductible?",
        answer: "Yes, Shah Seva provides official donation receipts under our registered government panels, making your charity eligible for tax optimization."
      }
    ]
  },
  {
    id: "donate-for-liver-transplant",
    keyword: "donate for liver transplant",
    title: "Donate for Liver Transplant — Life Depends on You",
    metaDescription: "Donate for liver transplant surgeries. Help impoverished children and adults undergoing life-saving organ transfers with Shah Seva.",
    heroParagraph: "A liver transplant is a complex, extremely expensive surgical procedure that represents the absolute last line of defense for patients suffering from acute liver failure or biliary atresia. For a poor family, the astronomical estimated costs of these operations are completely paralyzing. Your choice to donate for liver transplant surgeries provides the critical support needed to fund emergency organ donor screens and post-surgical care, giving an innocent patient a second chance at life.",
    whyShahSeva: [
      "Direct Hospital Wires: 100% of transplant donations are wired straight to empanelled critical care transplant centers.",
      "Thorough Verifications: We verify medical files, donor compatibility sheets, and billing details directly with surgeons.",
      "Clear Tracking: We coordinate with ICU units to track student and pediatric patients, sharing regular recovery reports."
    ],
    stats: {
      families: "Transplant medicine = ₹20,000/month",
      beneficiaries: "Donor matching screens = ₹15,000",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 1000, benefit: "₹1,000 = Post-surgical sterile vascular lines, cannulas, and recovery fluids" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring essential pre-surgical liver panels and high-depth diagnostics" },
      { amount: 5000, benefit: "₹5,000 = Sponsoring targeted post-surgical immunosuppressant medicines for an entire week" },
      { amount: 15000, benefit: "₹15,000 = Sponsoring the complete emergency surgical donor match mapping screen" }
    ],
    ctaText: "DONATE FOR LIVER TRANSPLANT",
    storyTitle: "Little Advik's Snatched Remission Over Biliary Atresia",
    storyContent: "Four-year-old Advik was born with biliary atresia, a rare liver disease that caused severe, progressive damage to his liver before his second birthday. His skin and eyes were deep yellow, and his little body was painfully swollen. Doctors recommended an immediate liver transplant, with his mother stepping up as a matching donor. However, the private surgical costs were far beyond their lifetime savings. \n\nShah Seva stepped up, establishing Kabir's transplant fundraiser. Within weeks, we paid the surgery advances, and Advik's transplant was successfully completed. Today, his skin is clear, his health has returned completely, and he is a healthy, energetic young kid exploring his world—alive today because ordinary donors answered his call for care.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "Sustaining Immuno-compromised Recovery Sessions",
    transparencyContent: "Post-transplant recovery is a highly critical phase requiring strict hygiene and highly expensive, regular immuno-suppressants to prevent host rejection. If a student misses a single week of medicine, their body can reject the new organ immediately, leading to tragic, fatal liver failure. Your donation ensures continuous post-surgical supply of critical drugs, securing their long-term survival.",
    faqs: [
      {
        question: "How does Shah Seva select partner transplant hospitals?",
        answer: "We partner exclusively with accredited, government-approved non-profit or public medical systems that offer the lowest transplant fee structures with high success records."
      },
      {
        question: "Can I sponsor the post-surgical medicines for a specific child?",
        answer: "Yes, you can choose to sponsor the complete post-op medicine schedule (₹20,000/month) for a pediatric patient, receiving regular clinical check-up updates."
      },
      {
        question: "How are transplant donor funds secured?",
        answer: "Our accounts are registered under No. COOP/2025/BHILWARA/500577, utilizing clean bank transfers and sharing receipts to provide total security."
      }
    ]
  },
  {
    id: "donate-for-icu-patient",
    keyword: "donate for ICU patient",
    title: "Donate for ICU Patient — Every Hour Costs ₹5000",
    metaDescription: "Donate for ICU patients stuck in emergency units. Sponsor critical ventilators, life support, and oxygen lines with Shah Seva.",
    heroParagraph: "In a critical ICU room, every single hour is a silent, high-stakes battle. When an accident trauma victim or an acute heart failure patient require immediate high-pressure mechanical ventilation, hospital billing charts register over ₹5,000 a hour. For poor daily wage families, these mounting bills lead to extreme panic. Your choice to donate for ICU patients provides immediate funding to clear critical billing delays and secure high-quality ICU monitoring, keeping a suffering patient alive when they need it most.",
    whyShahSeva: [
      "Zero Billing Delay: We authorize and process hospital advances within hours of admission to ensure treatments are never halted.",
      "100% Direct Utility: 100% of emergency ICU donations go straight to actual clinic cashier accounts, with zero admin waste.",
      "Detailed Verifications: Volunteers check clinical monitors, doctor charts, and pharmacy receipts directly inside the wards."
    ],
    stats: {
      families: "ICU bed stay = ₹6,000/day",
      beneficiaries: "Mechanical ventilators = ₹8,000/day",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Essential post-trauma sterile saline lines, cannula accessories, and blood filter sets" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring high-grade clinical diagnostic blood counts, scans, and specialist consult cards" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring high-flow clinical respiratory oxygen therapy for 24 hours" },
      { amount: 6000, benefit: "₹6,000 = Sponsoring one full day of emergency ICU bed reservation and mechanical life-support" }
    ],
    ctaText: "DONATE FOR ICU PATIENT NOW",
    storyTitle: "Saving Widowed Savita Ben from Acute RDS",
    storyContent: "Savita Ben, a widowed domestic helper, suddenly collapsed due to acute respiratory distress syndrome (ARDS) during a harsh cold wave. Her neighbors rushed her to an ICU, but her admission was temporarily halted as her family could not deposit the mandatory advance fees. A local clinical worker contacted Shah Seva's emergency helpline. Our volunteers immediately mobilized and paid the critical hospital advances directly to the billing section. With the billing cleared, doctors instantly initiated high-flow ventilator support. After a grueling ten days in the ICU, Savita Ben returned home to her children—saved entirely by timely emergency funding.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "The Critical 'Golden Hour' of Accident Recovery",
    transparencyContent: "Clinical emergencies do not wait for bureaucratic approvals or long-term fundraising campaigns. Whether it is a stroke, severe respiratory failure, or a sudden infectious surge, immediate critical care is mandatory to prevent irreversible organ damage or death. When you make an urgent medical help donation, you are funding a real-time defense system. Your money guarantees that patients receive immediate clinical access to oxygen, specialized diagnostics, and life-saving ICU beds, buying them the time they need to heal and recover.",
    faqs: [
      {
        question: "How can I report an emergency ICU case to Shah Seva?",
        answer: "If you know a truly poor patient whose ICU treatment is halted due to lack of funds, you can upload clinical case files and contact our helpline. Our team will verify and respond within hours."
      },
      {
        question: "Can I sponsor a specific ICU patient’s complete bill?",
        answer: "Yes, you can choose to sponsor a specific patient’s complete bill, and we will share official clinical case charts and billing statements with you."
      },
      {
        question: "How does Shah Seva ensure funds are spent honestly?",
        answer: "We strictly enforce a cash-free transfer mechanism. All donations are wired straight to the hospital’s official billing accounts against verified billing statements."
      }
    ]
  },
  {
    id: "urgent-blood-donation-help",
    keyword: "urgent blood donation help",
    title: "Urgent Blood Donation & Financial Help — Save a Patient",
    metaDescription: "Urgent blood donation help in India. Sponsor secure blood cross-matching, blood packs, and critical clinic transfusions with Shah Seva.",
    heroParagraph: "During massive road accidents, complicated surgeries, or advanced cancer treatments, blood loss is a sudden, highly fatal complication. While blood is donated by volunteers, cross-matching, purchasing specialized blood bags, conducting safety viral panels, and running clinical processing can cost thousands of rupees. For an impoverished child or senior citizen, these unexpected processing fees are completely paralyzing. Your choice to donate for blood matching and transfusion kits is a direct, life-saving act that provides emergency support when lives are on the line.",
    whyShahSeva: [
      "Immediate Mobilization: We coordinate with empanelled blood banks to process emergency cross-matching and safety testing within hours.",
      "100% Direct Utility: 100% of these funds are spent on buying sterile blood packs, needles, and medical testing files.",
      "Clear Tracking: We coordinate with nursing teams, tracking each transfusion and sharing verified recovery reports with our donors."
    ],
    stats: {
      families: "Blood process kit = ₹1,500",
      beneficiaries: "Platelet process kit = ₹8,000",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Complete pre-transfusion typing, compatibility mapping, and matching test cards" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring 1 complete, sterile blood packet, processing, and transfusion kit for a child" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring emergency multiple blood transfusions and safety screening files" },
      { amount: 8000, benefit: "₹8,000 = Sponsoring specialized sterile platelet extraction kits for a leukemia chemotherapy fighter" }
    ],
    ctaText: "DONATE FOR BLOOD MATCHING",
    storyTitle: "Saving Little Rohan from Post-Accident Trauma",
    storyContent: "Five-year-old Rohan was diagnosed with a severe congenital anomaly that required urgent reconstructive intestinal surgery. His father, a local manual laborer in Bhilwara, Rajasthan, earned barely enough to afford a single meal, let alone the exorbitant surgical expenses. Desperate and helpless, Rohan's family reached out to the volunteers at Dargah Saiyad Ali Shah Seva Sansthan (Shah Seva). Thanks to immediate funding from compassionate individual donors, Shah Seva sponsored the operation within 48 hours. Today, Rohan is running, playing, and going to school—a living testament to the sheer power of collective human empathy and direct surgical intervention.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "Sustaining Immuno-compromised Recovery Sessions",
    transparencyContent: "In emergency trauma and major surgery, hours can mark the thin boundary between lifetime recovery and tragic, permanent loss. Medical conditions like spinal deformities, pediatric tumors, and severe internal trauma do not stand still. Every day of delayed treatment causes progressive damage to a child's delicate physical development. By making a fast donation, you ensure that medical teams can schedule urgent surgeries immediately, sparing families the pain of watching their children suffer from preventable medical delays. Your small sacrifice today provides a lifetime of healthy tomorrow.",
    faqs: [
      {
        question: "How does Shah Seva utilize financial blood donations?",
        answer: "We do not sell blood. Financial donations are spent exclusively on paying blood bank fees for typing, safety cross-matching, specialized pathogen testing, and buying clinical transfusion sets."
      },
      {
        question: "Can I choose to donate physical blood at Shah Seva?",
        answer: "Yes, we organize regular voluntary blood donation camps at our Bhilwara headquarters, in coordination with government hospital laboratories. You can register on our website."
      },
      {
        question: "How are blood donor funds tracked?",
        answer: "We are registered under No. COOP/2025/BHILWARA/500577, keeping clear records of all clinical matching transactions and sharing receipt proofs with the sponsor."
      }
    ]
  },
  {
    id: "donate-for-oxygen-cylinder",
    keyword: "donate for oxygen cylinder",
    title: "Donate an Oxygen Cylinder — Breathe Life Into Someone",
    metaDescription: "Donate to purchase oxygen cylinders and concentrators. Fulfill critical emergency respiratory cases with Shah Seva's oxygen backup program.",
    heroParagraph: "For patients suffering from advanced tuberculosis, chronic respiratory failure, or post-sepsis lung trauma, breathing is a minute-by-minute struggle for survival. Without immediate medical oxygen, vital organs shut down rapidly. Sponsoring an oxygen cylinder or supporting a concentrator kit is a direct, profound gift of life. Shah Seva maintains a library of heavy oxygen units that are delivered directly to the bedsides of underprivileged patients with zero fees, allowing them to breathe freely and recover safely.",
    whyShahSeva: [
      "Direct Material Distribution: We do not resell gas; we deliver cylinders and oxygen concentrators directly to patients at their village rooms.",
      "100% Free Rental: No patient is ever charged a single rupee for our medical hardware rentals, protecting poor breadwinners from debt.",
      "Transparent Feedback: All distribution drives are photographed, showing actual patients with their sponsored oxygen cylinders."
    ],
    stats: {
      families: "Oxygen cylinder refill = ₹500",
      beneficiaries: "Oxygen regulator set = ₹1,500",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring 1 high-pressure oxygen cylinder gas refill for a suffering patient" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring a clinical high-precision oxygen regulator, flowmeter, and cannula kit" },
      { amount: 5000, benefit: "₹5,000 = Sponsoring 1 brand new, heavy steel oxygen cylinder tank with valves" },
      { amount: 15000, benefit: "₹15,000 = Sponsoring a clinical-grade digital oxygen concentrator machine generating unlimited air" }
    ],
    ctaText: "DONATE AN OXYGEN REFILL NOW",
    storyTitle: "Helping Old Man Bansi Lal Breathe Comfortably After Sepsis",
    storyContent: "72-year-old Bansi Lal survived a severe pneumonia crisis after custom ICU treatment, but his family had exhausted every single rupee they possessed, including selling their small gold ornaments. They were stuck with a remaining pending balance of ₹27,000 that they could not pay, leading to prolonged hospital stay. Hearing of their plight, Shah Seva stepped in, verified the itemized statements, and paid the outstanding hospital balance directly to the cashier. Within hours, Bansi Lal was discharged, returning to his home in peace—relieved from both the grip of illness and the crushing stress of medical debt.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "Sustaining Immuno-compromised Recovery Sessions",
    transparencyContent: "In critical respiratory compromise, delay is fatal. Toxins accumulate, and lack of oxygen causes rapid cell death. Sponsoring an oxygen cylinder refilling drive ensures that poor patients can access medical oxygen at their bedsides, shielding them from progressive respiratory emergencies. This is a profound ongoing charity that generates rewards with every breath they take.",
    faqs: [
      {
        question: "How long does a typical oxygen cylinder last?",
        answer: "A standard large oxygen cylinder lasts between 12 to 24 hours of continuous usage, requiring regular, fast refills for chronically ill patients."
      },
      {
        question: "What is an oxygen concentrator and how does it help?",
        answer: "An oxygen concentrator is an electronic medical machine that pulls room air, filters nitrogen, and provides unlimited continuous oxygen, negating the need for constant cylinder refilling."
      },
      {
        question: "How are oxygen equipment donations tracked?",
        answer: "Our accounts are governed under No. COOP/2025/BHILWARA/500577, keeping clear asset tags on all machines and sharing progress pictures with the sponsor."
      }
    ]
  },
  {
    id: "donate-for-baby-treatment",
    keyword: "donate for baby treatment",
    title: "Donate for a Baby's Treatment — Save the Youngest Lives",
    metaDescription: "Donate for a baby's treatment online. Support Neonatal ICU (NICU) incubators, pediatric surgery, and life-saving baby medicines with Shah Seva.",
    heroParagraph: "An infant's tiny body has incredibly low resistance against rapid disease progression. When a newborn is born premature with severe sepsis or acute breathing difficulty, their survival relies entirely on specialized Neonatal ICU (NICU) incubators, phototherapy machines, and high-precision medicines. Yet, when private neonatal care costs ₹8,000 a day, poor construction workers or daily laborers face complete panic. Your choice to donate for baby treatment is a direct, life-saving shield that provides the critical support needed to keep a tiny baby alive.",
    whyShahSeva: [
      "Immediate NICU Admissions: We authorize and process hospital advances within hours of receiving an emergency request to prevent delays.",
      "100% Dedicated to Kids: 100% of these child donations are spent on baby medicines, incubators, and specialized surgeries.",
      "Direct Hospital Settlements: We transfer funds straight to clinical billing desks against verified invoices, ensuring total safety."
    ],
    stats: {
      families: "Neonatal ICU bed stay = ₹6,000/day",
      beneficiaries: "NICU Incubator stay = ₹8,000/day",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring essential neonatal sterile cannulas, fluids, and vitamin supplements" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring critical infant diagnostic blood panels, bilirubin monitors, and scans" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring 24 hours of specialized NICU phototherapy and incubator stay for a baby" },
      { amount: 8000, benefit: "₹8,000 = Sponsoring one full day of emergency NICU ventilator support and life-support" }
    ],
    ctaText: "DONATE FOR BABY TREATMENT NOW",
    storyTitle: "Saving Infant Sameer's Life from Sepsis and Preterm RDS",
    storyContent: "Infant Sameer was born six weeks premature with severe respiratory distress syndrome and acute sepsis. He required immediate high-frequency ventilation in a specialized Neonatal Intensive Care Unit (NICU). The private hospital fees were a staggering ₹8,000 per day—an impossible sum for his parents, who worked as local construction laborers. Shah Seva launched an emergency campaign, backing the family instantly and paying the NICU bills. Today, Sameer is a chubby, happy ten-month-old child, exploring his world with wide-eyed curiosity because of your timely care.",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "Sustaining Immuno-compromised Recovery Sessions",
    transparencyContent: "In neonatal care, hours represent the line between recovery and tragic loss. Premature babies carry very low physiological reserves, and a simple delay in treatment can lead to rapid organ shut down and death. Your instant donation provides emergency credit lines for nurseries, letting medical teams deploy critical therapies immediately, sparing parents the trauma of preventable loss.",
    faqs: [
      {
        question: "How does Shah Seva verify neonatal ICU requests?",
        answer: "We verify the hospital's admission files, pediatrician prescriptions, and matching family income sheets, and wire funds straight to the hospital account."
      },
      {
        question: "Can I sponsor the complete NICU stay of a premature baby?",
        answer: "Yes, you can choose to sponsor the complete pediatric ward stay, and we will share official clinical case charts and billing statements with you."
      },
      {
        question: "Are child medical donations tax-exempt?",
        answer: "Yes, Shah Seva provides official donation receipts under our registered government panels, making your charity eligible for tax optimization."
      }
    ]
  },
  {
    id: "urgent-child-treatment-donation",
    keyword: "urgent child treatment donation",
    title: "Urgent Child Treatment Donation — Act Before It's Too Late",
    metaDescription: "Sponsor urgent child treatment online. Support pediatric surgeries, emergency trauma, and acute pediatric diseases with Shah Seva.",
    heroParagraph: "An innocent child is fighting a silent, desperate battle for survival in an emergency ward. Without financial means, their parents are left clutching medical recommendations they cannot afford. Sponsoring an urgent child treatment donation is a desperate appeal—an innocent child's life is hanging by a thread right now. Your immediate donation is the direct shield that protects them, providing the critical resources needed to resume life-saving treatments.",
    whyShahSeva: [
      "Direct Hospital Wires: 100% of child donations are wired straight to empanelled critical care pediatric surgery centers.",
      "Clear Tracking: We coordinate with ICU units to track student and pediatric patients, sharing regular recovery reports.",
      "Thorough Verifications: We check student cards and family income to choose truly industrious girls for support."
    ],
    stats: {
      families: "Pediatric surgery = ₹35,000",
      beneficiaries: "Child ICU stay = ₹6,000/day",
      ngo: "NGO Verified | 100% Direct Utility"
    },
    donationTiers: [
      { amount: 500, benefit: "₹500 = Sponsoring essential pediatric sterile cannulas, fluids, and vitamin supplements" },
      { amount: 1500, benefit: "₹1,500 = Sponsoring critical infant diagnostic blood panels, bilirubin monitors, and scans" },
      { amount: 3000, benefit: "₹3,000 = Sponsoring 24 hours of specialized NICU phototherapy and incubator stay for a baby" },
      { amount: 10000, benefit: "₹10,000 = Sponsoring a life-saving targeted chemotherapy dose for a pediatric leukemia fighter" }
    ],
    ctaText: "DONATE FOR CHILD TREATMENT",
    storyTitle: "Little Gauri's Ventricular Septal Defect Surgery",
    storyContent: "Three-year-old Gauri was born with a large Ventricular Septal Defect (a hole in her heart). Her father, a simple street vendor, could barely afford her small daily heart pills, which only offered minor relief while her overall physical conditioning steadily deteriorated. Her lips turned blue whenever she tried to crawl. Shah Seva took up Gauri's story and launched a dedicated cardiac fundraiser. Within weeks, she underwent a successful open-heart repair. Today, Gauri's lips are a healthy, vibrant pink, and she is running around her home with endless energy—her heart beat now strong and clear",
    urgencyTitle: "Our Thorough Medical Case Verification Protocol",
    urgencyContent: "Every medical request goes through a strict verification process before it is approved:\n1. Direct Application: The patient's family submits a request alongside clinical case files, doctor prescriptions, and income certificates.\n2. Bedside Verification: Our local volunteer team physically visits the patient at the hospital to confirm their clinical state and financial need.\n3. Institutional Audit: We coordinate with treating doctors and billing staff to verify the estimated expenses and itemized invoices.\n4. Fund Release: Payments are processed and wired directly to the hospital's verified account, and we share receipts and reports with the donor.",
    transparencyTitle: "Sustaining Immuno-compromised Recovery Sessions",
    transparencyContent: "Post-transplant recovery is a highly critical phase requiring strict hygiene and highly expensive, regular immuno-suppressants to prevent host rejection. If a student misses a single week of medicine, their body can reject the new organ immediately, leading to tragic, fatal liver failure. Your donation ensures continuous post-surgical supply of critical drugs, securing their long-term survival.",
    faqs: [
      {
        question: "How does Shah Seva select partner transplant hospitals?",
        answer: "We partner exclusively with accredited, government-approved non-profit or public medical systems that offer the lowest transplant fee structures with high success records."
      },
      {
        question: "Can I sponsor the post-surgical medicines for a specific child?",
        answer: "Yes, you can choose to sponsor the complete post-op medicine schedule (₹20,000/month) for a pediatric patient, receiving regular check-up updates."
      },
      {
        question: "How are transplant donor funds secured?",
        answer: "Our accounts are registered under No. COOP/2025/BHILWARA/500577, utilizing clean bank transfers and sharing receipts to provide total security."
      }
    ]
  }
];
