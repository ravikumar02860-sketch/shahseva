/**
 * Pure Zakat Calculation and Helper Logic
 * Strictly pure functions with zero UI logic inside calcZakat().
 */

export type NisabStandard = 'classical' | 'aaoifi';
export type NisabMetal = 'silver' | 'gold';
export type MetalUnit = 'grams' | 'tola' | 'inr';
export type GoldPurity = '24k' | '22k' | '18k' | '14k';

export interface MetalAssetInput {
  unit: MetalUnit;
  weight: number; // in grams or tola
  purity: GoldPurity;
  valueOverride: number; // direct INR value if known
}

export interface ZakatFormState {
  // Assets
  cashInHand: number;
  bankSavings: number;
  gold: MetalAssetInput;
  silver: MetalAssetInput;
  includeJewelleryForPersonalUse: boolean;
  sharesInvestments: number;
  businessStock: number;
  moneyOwedToYou: number;
  fixedDepositsCertificates: number;
  crypto: number;
  otherAssets: number;

  // Liabilities
  debtsDueNow: number;
  unpaidBillsRentTax: number;
  loanInstallmentsYear: number;
  otherLiabilities: number;

  // Nisab configuration
  nisabMetal: NisabMetal;
  nisabStandard: NisabStandard;
}

export interface LiveMetalPrices {
  goldPricePerGram24k: number;
  silverPricePerGram: number;
  usdToInr: number;
  lastUpdated: string;
  isFallback: boolean;
}

export interface AssetBreakdownItem {
  id: string;
  nameKey: string;
  amount: number;
}

export interface LiabilityBreakdownItem {
  id: string;
  nameKey: string;
  amount: number;
}

export interface ZakatCalculationResult {
  totalAssets: number;
  totalLiabilities: number;
  netAssets: number;
  nisabThreshold: number;
  nisabMetal: NisabMetal;
  nisabStandard: NisabStandard;
  isEligible: boolean; // netAssets >= nisabThreshold
  zakatDue: number; // 2.5% of net if isEligible, else 0
  assetBreakdown: AssetBreakdownItem[];
  liabilityBreakdown: LiabilityBreakdownItem[];
}

// 1 Troy Ounce = 31.1035 grams
export const TROY_OUNCE_TO_GRAMS = 31.1035;
// 1 Tola = 11.664 grams (standard Indian subcontinent convention)
export const TOLA_TO_GRAMS = 11.664;

// Classical / Hanafi weights
export const HANAFI_GOLD_GRAMS = 87.48; // 7.5 tola
export const HANAFI_SILVER_GRAMS = 612.36; // 52.5 tola

// AAOIFI / Modern international weights
export const AAOIFI_GOLD_GRAMS = 85.0;
export const AAOIFI_SILVER_GRAMS = 595.0;

// Purity multipliers relative to 24k
export const PURITY_MULTIPLIERS: Record<GoldPurity, number> = {
  '24k': 1.0,
  '22k': 22 / 24, // 0.9167
  '18k': 18 / 24, // 0.75
  '14k': 14 / 24, // 0.5833
};

/**
 * Computes the value in INR for a gold asset
 */
export function calculateGoldValue(
  input: MetalAssetInput,
  goldPricePerGram24k: number,
  includeJewellery: boolean
): number {
  if (!includeJewellery) return 0;
  if (input.unit === 'inr') {
    return Math.max(0, input.valueOverride || 0);
  }
  const weightInGrams =
    input.unit === 'tola' ? (input.weight || 0) * TOLA_TO_GRAMS : input.weight || 0;
  if (weightInGrams <= 0) return 0;
  const purityMultiplier = PURITY_MULTIPLIERS[input.purity] || 1.0;
  return Math.round(weightInGrams * goldPricePerGram24k * purityMultiplier);
}

/**
 * Computes the value in INR for a silver asset
 */
export function calculateSilverValue(
  input: MetalAssetInput,
  silverPricePerGram: number,
  includeJewellery: boolean
): number {
  if (!includeJewellery) return 0;
  if (input.unit === 'inr') {
    return Math.max(0, input.valueOverride || 0);
  }
  const weightInGrams =
    input.unit === 'tola' ? (input.weight || 0) * TOLA_TO_GRAMS : input.weight || 0;
  if (weightInGrams <= 0) return 0;
  return Math.round(weightInGrams * silverPricePerGram);
}

/**
 * Pure calculation function calcZakat.
 * No UI side-effects, no react state, no DOM manipulation.
 */
export function calcZakat(
  inputs: ZakatFormState,
  prices: LiveMetalPrices
): ZakatCalculationResult {
  const goldVal = calculateGoldValue(
    inputs.gold,
    prices.goldPricePerGram24k,
    inputs.includeJewelleryForPersonalUse
  );
  const silverVal = calculateSilverValue(
    inputs.silver,
    prices.silverPricePerGram,
    inputs.includeJewelleryForPersonalUse
  );

  const cashInHand = Math.max(0, inputs.cashInHand || 0);
  const bankSavings = Math.max(0, inputs.bankSavings || 0);
  const sharesInvestments = Math.max(0, inputs.sharesInvestments || 0);
  const businessStock = Math.max(0, inputs.businessStock || 0);
  const moneyOwedToYou = Math.max(0, inputs.moneyOwedToYou || 0);
  const fixedDepositsCertificates = Math.max(0, inputs.fixedDepositsCertificates || 0);
  const crypto = Math.max(0, inputs.crypto || 0);
  const otherAssets = Math.max(0, inputs.otherAssets || 0);

  const assetBreakdown: AssetBreakdownItem[] = [
    { id: 'cashInHand', nameKey: 'cashInHand', amount: cashInHand },
    { id: 'bankSavings', nameKey: 'bankSavings', amount: bankSavings },
    { id: 'gold', nameKey: 'gold', amount: goldVal },
    { id: 'silver', nameKey: 'silver', amount: silverVal },
    { id: 'sharesInvestments', nameKey: 'sharesInvestments', amount: sharesInvestments },
    { id: 'businessStock', nameKey: 'businessStock', amount: businessStock },
    { id: 'moneyOwedToYou', nameKey: 'moneyOwedToYou', amount: moneyOwedToYou },
    { id: 'fixedDepositsCertificates', nameKey: 'fixedDepositsCertificates', amount: fixedDepositsCertificates },
    { id: 'crypto', nameKey: 'crypto', amount: crypto },
    { id: 'otherAssets', nameKey: 'otherAssets', amount: otherAssets },
  ];

  const totalAssets = assetBreakdown.reduce((sum, item) => sum + item.amount, 0);

  const debtsDueNow = Math.max(0, inputs.debtsDueNow || 0);
  const unpaidBillsRentTax = Math.max(0, inputs.unpaidBillsRentTax || 0);
  const loanInstallmentsYear = Math.max(0, inputs.loanInstallmentsYear || 0);
  const otherLiabilities = Math.max(0, inputs.otherLiabilities || 0);

  const liabilityBreakdown: LiabilityBreakdownItem[] = [
    { id: 'debtsDueNow', nameKey: 'debtsDueNow', amount: debtsDueNow },
    { id: 'unpaidBillsRentTax', nameKey: 'unpaidBillsRentTax', amount: unpaidBillsRentTax },
    { id: 'loanInstallmentsYear', nameKey: 'loanInstallmentsYear', amount: loanInstallmentsYear },
    { id: 'otherLiabilities', nameKey: 'otherLiabilities', amount: otherLiabilities },
  ];

  const totalLiabilities = liabilityBreakdown.reduce((sum, item) => sum + item.amount, 0);

  // Net Zakatable Wealth
  const netAssets = totalAssets - totalLiabilities;

  // Determine Nisab threshold in INR
  let nisabGrams = 0;
  let pricePerGram = 0;

  if (inputs.nisabMetal === 'silver') {
    nisabGrams = inputs.nisabStandard === 'classical' ? HANAFI_SILVER_GRAMS : AAOIFI_SILVER_GRAMS;
    pricePerGram = prices.silverPricePerGram;
  } else {
    nisabGrams = inputs.nisabStandard === 'classical' ? HANAFI_GOLD_GRAMS : AAOIFI_GOLD_GRAMS;
    pricePerGram = prices.goldPricePerGram24k;
  }

  const nisabThreshold = Math.round(nisabGrams * pricePerGram);

  // Zakat is 2.5% (1/40th) of net wealth if net >= Nisab threshold
  // Edge cases:
  // - exactly at nisab: eligible
  // - liabilities > assets (net < 0): not eligible, zakatDue = 0
  // - all zeros: not eligible, zakatDue = 0
  const isEligible = netAssets >= nisabThreshold && netAssets > 0;
  const zakatDue = isEligible ? Math.round(netAssets * 0.025) : 0;

  return {
    totalAssets,
    totalLiabilities,
    netAssets,
    nisabThreshold,
    nisabMetal: inputs.nisabMetal,
    nisabStandard: inputs.nisabStandard,
    isEligible,
    zakatDue,
    assetBreakdown: assetBreakdown.filter((i) => i.amount > 0),
    liabilityBreakdown: liabilityBreakdown.filter((i) => i.amount > 0),
  };
}

/**
 * Format Indian currency with ₹ symbol: e.g. ₹1,00,000
 */
export function formatINR(val: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

/**
 * Analytics and interaction tracking helper
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  try {
    if (typeof window !== 'undefined') {
      const customEvent = new CustomEvent('zakat_analytics_event', {
        detail: { event: eventName, params, timestamp: new Date().toISOString() },
      });
      window.dispatchEvent(customEvent);

      // Support Google Analytics / gtag if present in host page
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', eventName, params);
      }
    }
  } catch (err) {
    // Non-blocking telemetry
    console.debug('trackEvent error', err);
  }
}
