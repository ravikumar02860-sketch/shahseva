/**
 * Topic Image Provider Utility
 * 
 * Maps campaign, blog, and category IDs to highly relevant, high-quality,
 * and contextually appropriate Unsplash images to ensure visual resonance.
 * Avoids raw random picsum placeholders.
 */

// Comprehensive exact-match map
const exactImageMap: Record<string, string> = {
  // Category Page Topics
  "education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  "children": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  "medical": "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000",
  "food": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000",
  "disaster": "https://images.unsplash.com/photo-1469571486117-7a57be3c57ab?auto=format&fit=crop&q=80&w=1000",
  "orphanage": "https://images.unsplash.com/photo-1482066001826-622e1e0670a4?auto=format&fit=crop&q=80&w=1000",
  "girlChild": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000",
  "cancer": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1000",
  "oldAge": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
  "homeless": "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1000",

  // Medical & Surgery Campaigns
  "donate-for-child-surgery": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "urgent-medical-help-donation": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
  "help-cancer-patient-donate": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
  "donate-for-accident-victim": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
  "donate-hospital-bills": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000",
  "child-heart-surgery-donation": "https://images.unsplash.com/photo-1538108149393-fdfd81d1334f?auto=format&fit=crop&q=80&w=1000",
  "emergency-fundraiser-for-child": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "online-donation-for-surgery": "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
  "crowdfunding-medical-emergency": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000",
  "donate-for-life-saving-treatment": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
  "save-life-donate-now": "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
  "donate-for-poor-child-emergency": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "donate-for-blood-cancer-treatment": "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1000",
  "donate-for-kidney-treatment": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000",
  "donate-for-liver-transplant": "https://images.unsplash.com/photo-1538108149393-fdfd81d1334f?auto=format&fit=crop&q=80&w=1000",
  "donate-for-icu-patient": "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000",
  "urgent-blood-donation-help": "https://images.unsplash.com/photo-1615461066841-6116ecd12cfc?auto=format&fit=crop&q=80&w=1000",
  "donate-for-oxygen-cylinder": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  "donate-for-baby-treatment": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "urgent-child-treatment-donation": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
  "donate-for-disabled-child": "https://images.unsplash.com/photo-1508847154043-be12a2653b4b?auto=format&fit=crop&q=80&w=1000",
  "donate-for-ambulance-support": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000",

  // Islamic Charities
  "zakat-donation-online": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000",
  "donate-sadaqah-online": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000",
  "masjid-donation-online": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000",
  "donate-food-in-ramadan": "https://images.unsplash.com/photo-1580974928064-f0caef708902?auto=format&fit=crop&q=80&w=1000",
  "fidya-donation-online": "https://images.unsplash.com/photo-1580974928064-f0caef708902?auto=format&fit=crop&q=80&w=1000",
  "kaffara-donation": "https://images.unsplash.com/photo-1580974928064-f0caef708902?auto=format&fit=crop&q=80&w=1000",
  "donate-food-in-ramadan-general": "https://images.unsplash.com/photo-1580974928064-f0caef708902?auto=format&fit=crop&q=80&w=1000",
  "donate-to-poor-muslim-family": "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=1000",

  // Food & Hunger Programs
  "feed-hungry-children-donate": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  "food-donation-for-poor": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000",
  "sponsor-a-meal": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000",
  "donate-for-village-poor-families": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",

  // Education & Children
  "donate-for-education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  "donate-for-girl-child-education": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000",
  "sponsor-a-child-education": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  "donate-school-supplies": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000",
  "help-poor-students-donate": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  "school-fee-donation": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
  "donate-for-orphan-education": "https://images.unsplash.com/photo-1482066001826-622e1e0670a4?auto=format&fit=crop&q=80&w=1000",
  "donate-for-poor-girls-education": "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000",
  "help-orphan-kids-donation": "https://images.unsplash.com/photo-1482066001826-622e1e0670a4?auto=format&fit=crop&q=80&w=1000",
  "donate-to-orphanage-india": "https://images.unsplash.com/photo-1482066001826-622e1e0670a4?auto=format&fit=crop&q=80&w=1000",
  "donate-for-poor-children": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",

  // Animal Welfare
  "donate-for-injured-dog": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000",
  "animal-rescue-donation": "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1000",
  "feed-street-dogs-donate": "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1000",
  "rescue-injured-animals-donate": "https://images.unsplash.com/photo-1608096293090-b550b1293c6b?auto=format&fit=crop&q=80&w=1000",

  // Social Causes, Weather, Emergencies
  "donate-for-flood-victims": "https://images.unsplash.com/photo-1469571486117-7a57be3c57ab?auto=format&fit=crop&q=80&w=1000",
  "earthquake-relief-donation": "https://images.unsplash.com/photo-1504150559411-2ef3fd93cb7d?auto=format&fit=crop&q=80&w=1000",
  "donate-clothes-for-poor": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000",
  "help-elderly-people-donation": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
  "donate-for-old-age-home": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000",
  "donate-for-homeless-people": "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1000",
  "charity-donation-online": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000",
  "online-charity-fundraiser": "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000",

  // Blog Topics
  "how-long-to-donate-plasma": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
  "how-much-for-donating-plasma": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
  "how-often-can-you-donate-blood": "https://images.unsplash.com/photo-1615461066841-6116ecd12cfc?auto=format&fit=crop&q=80&w=1000",
  "does-donating-plasma-hurt": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
  "how-long-to-donate-blood": "https://images.unsplash.com/photo-1615461066841-6116ecd12cfc?auto=format&fit=crop&q=80&w=1000",
  "can-you-donate-blood-with-tattoo": "https://images.unsplash.com/photo-1615461066841-6116ecd12cfc?auto=format&fit=crop&q=80&w=1000",
  "why-not-to-donate-plasma": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
  "is-plasma-donation-safe": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
  "how-to-donate-hair-india": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
  "how-much-is-kidney-transplant": "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=1000",
  "blood-cancer-treatment-cost-india": "https://images.unsplash.com/photo-1579153138244-3917a00b01d7?auto=format&fit=crop&q=80&w=1000"
};

/**
 * Returns a high-quality, highly relevant Unsplash image URL for any dynamic topic ID.
 * Employs lookups and rich keyphrase match rules to resolve beautiful images dynamically.
 * 
 * @param id The topic ID, slug, or search term.
 * @returns The optimized Unsplash image URL.
 */
export function getTopicImageUrl(id: string): string {
  if (!id) {
    return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000";
  }

  const cleanId = id.trim().toLowerCase();

  // Try exact lookup
  if (exactImageMap[cleanId]) {
    return exactImageMap[cleanId];
  }

  // Matching heuristics based on sub-strings/terms
  if (cleanId.includes("plasma")) {
    return "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("blood") || cleanId.includes("transfusion") || cleanId.includes("leukemia")) {
    return "https://images.unsplash.com/photo-1615461066841-6116ecd12cfc?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("cancer") || cleanId.includes("chemo") || cleanId.includes("tumor")) {
    return "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("kidney") || cleanId.includes("renal") || cleanId.includes("dialysis")) {
    return "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("liver") || cleanId.includes("transplant") || cleanId.includes("icu")) {
    return "https://images.unsplash.com/photo-1538108149393-fdfd81d1334f?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("baby") || cleanId.includes("neonatal") || cleanId.includes("pediatric")) {
    return "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("surgery") || cleanId.includes("medical") || cleanId.includes("clinic") || cleanId.includes("treatment") || cleanId.includes("accident") || cleanId.includes("hospital")) {
    return "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("ambulance")) {
    return "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("oxygen")) {
    return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("dates") || cleanId.includes("ramadan") || cleanId.includes("iftar") || cleanId.includes("muslim") || cleanId.includes("sehar") || cleanId.includes("zakat") || cleanId.includes("sadaqah") || cleanId.includes("fidya") || cleanId.includes("kaffara")) {
    return "https://images.unsplash.com/photo-1580974928064-f0caef708902?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("masjid") || cleanId.includes("mosque")) {
    return "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("food") || cleanId.includes("feed") || cleanId.includes("hunger") || cleanId.includes("hungry") || cleanId.includes("ration") || cleanId.includes("meal")) {
    return "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("girl") || cleanId.includes("female") || cleanId.includes("women")) {
    return "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("education") || cleanId.includes("school") || cleanId.includes("student") || cleanId.includes("teacher") || cleanId.includes("study") || cleanId.includes("class")) {
    return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("orphan") || cleanId.includes("children") || cleanId.includes("child") || cleanId.includes("kids")) {
    return "https://images.unsplash.com/photo-1482066001826-622e1e0670a4?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("dog") || cleanId.includes("animal") || cleanId.includes("stray") || cleanId.includes("injured") || cleanId.includes("rescue")) {
    return "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("elderly") || cleanId.includes("old") || cleanId.includes("senior") || cleanId.includes("age") || cleanId.includes("grandparents")) {
    return "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("flood") || cleanId.includes("earthquake") || cleanId.includes("disaster") || cleanId.includes("cyclone") || cleanId.includes("tsunami")) {
    return "https://images.unsplash.com/photo-1469571486117-7a57be3c57ab?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("clothes") || cleanId.includes("blanket") || cleanId.includes("winter") || cleanId.includes("warm")) {
    return "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("homeless") || cleanId.includes("destitute") || cleanId.includes("shelter")) {
    return "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1000";
  }
  if (cleanId.includes("hair")) {
    return "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000";
  }

  // General fallback
  return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000";
}
