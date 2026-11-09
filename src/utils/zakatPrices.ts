/**
 * Live Nisab and Precious Metals Price Service
 * Fetches real-time Gold (XAU), Silver (XAG), and USD->INR rates with 1-hour localStorage caching.
 * Fallback values are provided if the network or external API is unavailable.
 */

import { LiveMetalPrices, TROY_OUNCE_TO_GRAMS } from './zakatCalculation';

const CACHE_KEY = 'zakat_live_metal_rates_cache_v1';
const CACHE_EXPIRY_MS = 60 * 60 * 1000; // 1 Hour

// Authoritative Indian market fallbacks (2025/2026 realistic baseline)
export const DEFAULT_METAL_PRICES: LiveMetalPrices = {
  goldPricePerGram24k: 8150, // Approx ~₹8,150 / gram for 24k gold
  silverPricePerGram: 98,   // Approx ~₹98 / gram for fine silver
  usdToInr: 86.8,
  lastUpdated: 'Fallback / Offline Baseline',
  isFallback: true,
};

interface CachedRates {
  timestamp: number;
  prices: LiveMetalPrices;
}

export function getCachedRates(): LiveMetalPrices | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed: CachedRates = JSON.parse(raw);
    if (Date.now() - parsed.timestamp < CACHE_EXPIRY_MS) {
      return parsed.prices;
    }
  } catch (e) {
    console.warn('Error reading metal price cache', e);
  }
  return null;
}

export function saveRatesToCache(prices: LiveMetalPrices): void {
  if (typeof window === 'undefined') return;
  try {
    const cacheData: CachedRates = {
      timestamp: Date.now(),
      prices,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (e) {
    console.warn('Error saving metal price cache', e);
  }
}

/**
 * Fetch live prices from gold-api.com and open.er-api.com
 */
export async function fetchLiveMetalPrices(): Promise<LiveMetalPrices> {
  // Check cache first
  const cached = getCachedRates();
  if (cached) {
    return cached;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000); // 7s timeout

    const [goldRes, silverRes, fxRes] = await Promise.all([
      fetch('https://api.gold-api.com/price/XAU', { signal: controller.signal }),
      fetch('https://api.gold-api.com/price/XAG', { signal: controller.signal }),
      fetch('https://open.er-api.com/v6/latest/USD', { signal: controller.signal }),
    ]);

    clearTimeout(timeoutId);

    if (!goldRes.ok || !silverRes.ok || !fxRes.ok) {
      throw new Error('One or more pricing APIs failed to respond successfully');
    }

    const goldData = await goldRes.json();
    const silverData = await silverRes.json();
    const fxData = await fxRes.json();

    const usdToInr = Number(fxData?.rates?.INR) || DEFAULT_METAL_PRICES.usdToInr;
    const goldUsdPerOz = Number(goldData?.price);
    const silverUsdPerOz = Number(silverData?.price);

    if (!goldUsdPerOz || !silverUsdPerOz || isNaN(goldUsdPerOz) || isNaN(silverUsdPerOz)) {
      throw new Error('Invalid numeric price values received from metals API');
    }

    // 1 Troy Ounce = 31.1035 grams
    const goldPricePerGram24k = Math.round((goldUsdPerOz / TROY_OUNCE_TO_GRAMS) * usdToInr);
    const silverPricePerGram = Math.round((silverUsdPerOz / TROY_OUNCE_TO_GRAMS) * usdToInr);

    const livePrices: LiveMetalPrices = {
      goldPricePerGram24k,
      silverPricePerGram,
      usdToInr,
      lastUpdated: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        day: 'numeric',
        month: 'short',
      }),
      isFallback: false,
    };

    saveRatesToCache(livePrices);
    return livePrices;
  } catch (err) {
    console.warn('Failed to fetch live metals rates, using cached or fallback baseline:', err);
    // If existing cached rates exist (even if expired), prefer them over hardcoded fallbacks
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        const parsed: CachedRates = JSON.parse(raw);
        if (parsed.prices) {
          return { ...parsed.prices, isFallback: true };
        }
      }
    } catch {
      // pass
    }
    return DEFAULT_METAL_PRICES;
  }
}
