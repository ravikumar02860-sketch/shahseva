export interface IslamicName {
  id: string;
  name: string;
  arabic: string;
  meaning: string;
  urduMeaning: string;
  gender: 'Boy' | 'Girl';
  origin: string;
  luckyNumber: number;
  significance: string;
  category: string[];
  trending?: boolean;
}

export const islamicNames: IslamicName[] = [
  {
    id: "mohammad",
    name: "Mohammad",
    arabic: "محمد",
    meaning: "Praiseworthy, Commendable",
    urduMeaning: "تعریف کے قابل",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 2,
    significance: "The name of the Prophet Mohammad (PBUH).",
    category: ["Trending", "Arabic", "Quranic"],
    trending: true
  },
  {
    id: "ahmed",
    name: "Ahmed",
    arabic: "أحمد",
    meaning: "Most Highly Adored",
    urduMeaning: "بہت زیادہ تعریف والا",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 8,
    significance: "Another name for Prophet Mohammad (PBUH).",
    category: ["Modern", "Arabic", "Quranic"]
  },
  {
    id: "ali",
    name: "Ali",
    arabic: "علي",
    meaning: "High, Exalted",
    urduMeaning: "بلند، برتر",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 9,
    significance: "The name of the fourth Caliph of Islam.",
    category: ["Trending", "Arabic", "Unique"]
  },
  {
    id: "fatima",
    name: "Fatima",
    arabic: "فاطمة",
    meaning: "One who abstains",
    urduMeaning: "پرہیز کرنے والی",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 1,
    significance: "The name of the beloved daughter of Prophet Mohammad (PBUH).",
    category: ["Trending", "Arabic", "Quranic"],
    trending: true
  },
  {
    id: "ayesha",
    name: "Ayesha",
    arabic: "عائشة",
    meaning: "Prosperous, Lively",
    urduMeaning: "آسودہ حال، زندہ دل",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 7,
    significance: "The name of the third wife of Prophet Mohammad (PBUH).",
    category: ["Modern", "Arabic"]
  },
  {
    id: "zainab",
    name: "Zainab",
    arabic: "زينب",
    meaning: "Beautiful, Fragrant flower",
    urduMeaning: "خوبصورت، خوشبودار پھول",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 6,
    significance: "The name of a granddaughter of the Prophet Mohammad (PBUH).",
    category: ["Modern", "Arabic"]
  },
  {
    id: "omar",
    name: "Omar",
    arabic: "عمر",
    meaning: "Long-lived, Flourishing",
    urduMeaning: "طويل العمر، خوشحال",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 1,
    significance: "The name of the second Caliph of Islam.",
    category: ["Trending", "Arabic"]
  },
  {
    id: "khadija",
    name: "Khadija",
    arabic: "خديجة",
    meaning: "Respected, Trustworthy",
    urduMeaning: "احترام کے قابل، معتبر",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 4,
    significance: "The name of the first wife of Prophet Mohammad (PBUH).",
    category: ["Modern", "Arabic"]
  },
  {
    id: "hamza",
    name: "Hamza",
    arabic: "حمزة",
    meaning: "Lion, Strong",
    urduMeaning: "شیر، طاقتور",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 6,
    significance: "The name of One of the Prophet's uncles.",
    category: ["Modern", "Arabic"]
  },
  {
    id: "maryam",
    name: "Maryam",
    arabic: "مريم",
    meaning: "Pious, Worshipper",
    urduMeaning: "متقی، عبادت گزار",
    gender: "Girl",
    origin: "Hebrew/Arabic",
    luckyNumber: 2,
    significance: "The name of the mother of Prophet Isa (AS).",
    category: ["Trending", "Quranic"]
  },
  {
    id: "hassan",
    name: "Hassan",
    arabic: "حسن",
    meaning: "Handsome, Good",
    urduMeaning: "خوبصورت، اچھا",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 1,
    significance: "The grandson of the Prophet Mohammad (PBUH).",
    category: ["Arabic"]
  },
  {
    id: "hussein",
    name: "Hussein",
    arabic: "حسين",
    meaning: "Little beauty, Handsome",
    urduMeaning: "خوبصورت، پیارا",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 2,
    significance: "The grandson of the Prophet Mohammad (PBUH).",
    category: ["Arabic"]
  },
  {
    id: "sara",
    name: "Sara",
    arabic: "سارة",
    meaning: "Pure, Happy",
    urduMeaning: "خالص، خوش",
    gender: "Girl",
    origin: "Hebrew/Arabic",
    luckyNumber: 6,
    significance: "The name of the wife of Prophet Ibrahim (AS).",
    category: ["Modern"]
  },
  {
    id: "bilal",
    name: "Bilal",
    arabic: "بلال",
    meaning: "Moisture, Refreshment",
    urduMeaning: "رطوبت، تراوٹ",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 9,
    significance: "The name of the first Muezzin of Islam.",
    category: ["Unique", "Arabic"]
  },
  {
    id: "amani",
    name: "Amani",
    arabic: "أماني",
    meaning: "Wishes, Aspirations",
    urduMeaning: "تمنائیں، آرزوئيں",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 8,
    significance: "Beautiful modern name meaning aspirations.",
    category: ["Modern", "Unique"]
  },
  {
    id: "rayan",
    name: "Rayan",
    arabic: "ريان",
    meaning: "Luxuriant, Gate of Heaven",
    urduMeaning: "سیراب، جنت کا دروازہ",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 4,
    significance: "Name of the door in heaven for fasting people.",
    category: ["Modern", "Trending"]
  },
  {
    id: "layla",
    name: "Layla",
    arabic: "ليلى",
    meaning: "Night Beauty",
    urduMeaning: "رات کی خوبصورتی",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 1,
    significance: "Popular literary name.",
    category: ["Modern", "Trending"]
  },
  {
    id: "idrees",
    name: "Idrees",
    arabic: "إدريس",
    meaning: "Studious, Instructor",
    urduMeaning: "پڑھنے والا، سکھانے والا",
    gender: "Boy",
    origin: "Arabic",
    luckyNumber: 1,
    significance: "The name of a Prophet mentioned in the Quran.",
    category: ["Quranic", "Unique"]
  },
  {
    id: "safiya",
    name: "Safiya",
    arabic: "صفية",
    meaning: "Pure, Sincere",
    urduMeaning: "خالص، مخلص",
    gender: "Girl",
    origin: "Arabic",
    luckyNumber: 8,
    significance: "The name of a wife of the Prophet (PBUH).",
    category: ["Modern", "Arabic"]
  },
  {
    id: "yusuf",
    name: "Yusuf",
    arabic: "يوسف",
    meaning: "God Increases",
    urduMeaning: "خدا بڑھاتا ہے",
    gender: "Boy",
    origin: "Hebrew/Arabic",
    luckyNumber: 4,
    significance: "The name of a Prophet known for his beauty.",
    category: ["Quranic", "Trending"]
  }
];

// For a scaleable DB, I would usually fetch from an API or a larger structured file.
// I'll add a few more to reach a decent number for the demo.
// (In a real scenario I would generate 200, for now I will add 20 significant ones and recommend the user how to expand)
