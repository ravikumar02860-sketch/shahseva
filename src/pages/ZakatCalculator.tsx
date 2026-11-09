import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  calcZakat,
  formatINR,
  trackEvent,
  ZakatFormState,
  ZakatCalculationResult,
  NisabMetal,
  NisabStandard,
  MetalUnit,
  GoldPurity,
  HANAFI_GOLD_GRAMS,
  HANAFI_SILVER_GRAMS,
  AAOIFI_GOLD_GRAMS,
  AAOIFI_SILVER_GRAMS,
  TOLA_TO_GRAMS,
  PURITY_MULTIPLIERS,
} from '../utils/zakatCalculation';
import { fetchLiveMetalPrices, DEFAULT_METAL_PRICES } from '../utils/zakatPrices';
import { zakatTranslations, ZakatLanguage } from '../utils/zakatTranslations';
import { generateZakatPdf, downloadZakatIcsReminder, getWhatsAppShareUrl } from '../utils/zakatExport';
import {
  Calculator,
  Wallet,
  Coins,
  Briefcase,
  MinusCircle,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Calendar,
  Share2,
  Download,
  Bell,
  RefreshCw,
  Edit3,
  ShieldCheck,
  ChevronDown,
  Info,
  RotateCcw,
  Heart,
  Globe,
} from 'lucide-react';

const STORAGE_KEY = 'zakat_calculator_saved_inputs_v2';

const initialFormState: ZakatFormState = {
  cashInHand: 0,
  bankSavings: 0,
  gold: {
    unit: 'grams',
    weight: 0,
    purity: '22k',
    valueOverride: 0,
  },
  silver: {
    unit: 'grams',
    weight: 0,
    purity: '24k',
    valueOverride: 0,
  },
  includeJewelleryForPersonalUse: true,
  sharesInvestments: 0,
  businessStock: 0,
  moneyOwedToYou: 0,
  fixedDepositsCertificates: 0,
  crypto: 0,
  otherAssets: 0,

  debtsDueNow: 0,
  unpaidBillsRentTax: 0,
  loanInstallmentsYear: 0,
  otherLiabilities: 0,

  nisabMetal: 'silver',
  nisabStandard: 'classical',
};

// Accessible tooltip component with touch support
const FieldTooltip: React.FC<{ text: string }> = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-flex items-center ml-1.5 align-middle">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="text-slate-400 hover:text-primary transition-colors focus:outline-none p-1 -m-1 rounded-full cursor-help"
        aria-label="More information"
      >
        <HelpCircle size={15} />
      </button>
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs leading-relaxed rounded-xl shadow-xl z-50 pointer-events-none transition-all animate-in fade-in zoom-in-95">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
        </div>
      )}
    </div>
  );
};

export default function ZakatCalculatorPage() {
  const navigate = useNavigate();

  // Language state: English ('en'), Hindi ('hi'), or Urdu ('ur')
  const [lang, setLang] = useState<ZakatLanguage>('en');
  const t = zakatTranslations[lang] || zakatTranslations.en;
  const isRtl = lang === 'ur';

  // Live metal prices state
  const [metalPrices, setMetalPrices] = useState(DEFAULT_METAL_PRICES);
  const [isRefreshingRates, setIsRefreshingRates] = useState(false);
  const [customRatesOpen, setCustomRatesOpen] = useState(false);
  const [customGoldRate, setCustomGoldRate] = useState<string>('');
  const [customSilverRate, setCustomSilverRate] = useState<string>('');

  // Form input state
  const [form, setForm] = useState<ZakatFormState>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        console.warn('Error restoring zakat form state', e);
      }
    }
    return initialFormState;
  });

  // Pure calculation result: null until user clicks "Calculate My Zakat"
  const [result, setResult] = useState<ZakatCalculationResult | null>(null);

  // Selected donation cause
  const [selectedCause, setSelectedCause] = useState<string>('general');

  // FAQ accordion active state
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // PDF generation loading indicator
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Load live precious metal prices on mount
  useEffect(() => {
    let mounted = true;
    async function loadRates() {
      setIsRefreshingRates(true);
      try {
        const rates = await fetchLiveMetalPrices();
        if (mounted) {
          setMetalPrices(rates);
          setCustomGoldRate(String(rates.goldPricePerGram24k));
          setCustomSilverRate(String(rates.silverPricePerGram));
        }
      } catch (err) {
        console.warn('Failed to load live rates', err);
      } finally {
        if (mounted) setIsRefreshingRates(false);
      }
    }
    loadRates();
    return () => {
      mounted = false;
    };
  }, []);

  // Save form inputs to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch (e) {
      console.warn('Error saving zakat form inputs', e);
    }
  }, [form]);

  // Compute live running preview values (Assets, Liabilities, Net wealth) as user types
  const runningPreview = useMemo(() => {
    return calcZakat(form, metalPrices);
  }, [form, metalPrices]);

  // Form field helpers
  const handleNumericChange = (field: keyof ZakatFormState, val: string) => {
    const num = Math.max(0, parseFloat(val) || 0);
    setForm((prev) => ({ ...prev, [field]: num }));
    trackEvent('calc_started', { field });
  };

  const handleGoldChange = (updates: Partial<ZakatFormState['gold']>) => {
    setForm((prev) => ({ ...prev, gold: { ...prev.gold, ...updates } }));
    trackEvent('calc_started', { section: 'gold' });
  };

  const handleSilverChange = (updates: Partial<ZakatFormState['silver']>) => {
    setForm((prev) => ({ ...prev, silver: { ...prev.silver, ...updates } }));
    trackEvent('calc_started', { section: 'silver' });
  };

  const handleClearAll = () => {
    setForm(initialFormState);
    setResult(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // pass
    }
  };

  // User submits calculation
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const finalResult = calcZakat(form, metalPrices);
    setResult(finalResult);
    trackEvent('calc_completed', {
      isEligible: finalResult.isEligible,
      zakatDue: finalResult.zakatDue,
      netAssets: finalResult.netAssets,
      nisabMetal: form.nisabMetal,
    });

    // Smoothly scroll down to results panel on mobile devices
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById('zakat-results-card')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Manual rate save handler
  const handleSaveCustomRates = () => {
    const gRate = parseFloat(customGoldRate) || metalPrices.goldPricePerGram24k;
    const sRate = parseFloat(customSilverRate) || metalPrices.silverPricePerGram;
    setMetalPrices((prev) => ({
      ...prev,
      goldPricePerGram24k: gRate,
      silverPricePerGram: sRate,
      isFallback: true,
      lastUpdated: 'User Custom Override',
    }));
    setCustomRatesOpen(false);
  };

  // Pay Zakat Now: Opens existing donation route with prefilled amount and category
  const handlePayZakatNow = () => {
    const amountToDonate = result?.zakatDue && result.zakatDue > 0 ? result.zakatDue : runningPreview.zakatDue;
    trackEvent('pay_zakat_clicked', {
      amount: amountToDonate,
      cause: selectedCause,
    });
    // Navigate to existing /donate page with query params
    navigate(`/donate?amount=${Math.round(amountToDonate)}&category=zakat&campaign=${selectedCause}`);
  };

  // Download PDF summary handler
  const handleDownloadPdf = async () => {
    if (!result) return;
    setIsGeneratingPdf(true);
    trackEvent('pdf_downloaded', { zakatDue: result.zakatDue });
    try {
      await generateZakatPdf(result, metalPrices, lang);
    } catch (err) {
      console.error('PDF generation error', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Download calendar reminder
  const handleDownloadReminder = () => {
    trackEvent('reminder_downloaded', { lang });
    downloadZakatIcsReminder();
  };

  // Current Nisab values in INR for display
  const currentSilverNisabGrams =
    form.nisabStandard === 'classical' ? HANAFI_SILVER_GRAMS : AAOIFI_SILVER_GRAMS;
  const currentGoldNisabGrams =
    form.nisabStandard === 'classical' ? HANAFI_GOLD_GRAMS : AAOIFI_GOLD_GRAMS;

  const currentSilverNisabINR = Math.round(currentSilverNisabGrams * metalPrices.silverPricePerGram);
  const currentGoldNisabINR = Math.round(currentGoldNisabGrams * metalPrices.goldPricePerGram24k);

  // SEO schemas
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Online Zakat Calculator India - Shah Seva',
    description: t.heroSubtitle,
    url: 'https://shahseva.vercel.app/zakat-calculator',
    applicationCategory: 'FinancialApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    provider: {
      '@type': 'NGO',
      name: 'Shah Seva (Dargah Saiyad Ali Shah Seva Sansthan)',
      url: 'https://shahseva.vercel.app',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <div className={`pt-24 pb-20 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Route-Specific SEO with canonical pointing strictly to its own URL */}
      <SEO
        title="Online Zakat Calculator India 2026 | Real-Time Gold & Silver Nisab | Shah Seva"
        description="Calculate your obligatory 2.5% Zakat in India with live gold and silver Nisab rates (Hanafi & AAOIFI). Detailed asset breakdowns, Hawl rules, and 100% verified donation."
        canonical="https://shahseva.vercel.app/zakat-calculator"
        keywords="online zakat calculator india, zakat on gold calculator, silver nisab rate today india, hanafi zakat calculator, zakat on shares mutual funds india, zakat calculation 2.5 percent, shah seva zakat"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [webAppSchema, faqSchema],
        }}
      />

      {/* Language Switcher Floating Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-4 flex justify-end items-center gap-2">
        <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
          <Globe size={14} className="text-primary" /> Language / भाषा / زبان:
        </span>
        <div className="inline-flex rounded-xl bg-white border border-slate-200 p-1 shadow-sm text-xs font-bold">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 rounded-lg transition-all min-h-[44px] sm:min-h-0 ${
              lang === 'en' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang('hi')}
            className={`px-3 py-1.5 rounded-lg transition-all min-h-[44px] sm:min-h-0 ${
              lang === 'hi' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            हिन्दी
          </button>
          <button
            type="button"
            onClick={() => setLang('ur')}
            className={`px-3 py-1.5 rounded-lg transition-all min-h-[44px] sm:min-h-0 ${
              lang === 'ur' ? 'bg-primary text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            اردو
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-primary-dark py-16 md:py-20 px-6 relative overflow-hidden">
        {/* Intricate Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none islamic-pattern"></div>

        {/* Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Centered Badge strictly centered above H1 */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest border border-accent/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              {t.badge}
            </span>
          </div>

          {/* Exactly one H1 with high-contrast Arabic and title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 relative">
            <span className="block text-accent text-3xl md:text-4xl mb-3 font-arabic opacity-95 select-none tracking-normal">
              {t.heroArabic}
            </span>
            {t.heroTitle}
          </h1>

          {/* High contrast WCAG AA light text (~85-90% opacity white) */}
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {t.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Calculator Workspace */}
      <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-start">
          {/* LEFT 2 COLUMNS: Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Nisab Selector Card (Above Form) */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Coins className="text-primary w-5 h-5" />
                    {t.nisabSelectLabel}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">{t.nisabRecommendedTag}</p>
                </div>

                {/* Standard selector (Classical/Hanafi vs AAOIFI) */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-600 font-medium">{t.standardSelectorLabel}:</span>
                  <select
                    value={form.nisabStandard}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        nisabStandard: e.target.value as NisabStandard,
                      }))
                    }
                    className="bg-slate-50 border border-slate-300 text-slate-800 text-xs rounded-lg px-2.5 py-1.5 focus:ring-2 focus:ring-primary focus:outline-none min-h-[44px] sm:min-h-0"
                    aria-label="Jurisprudential standard"
                  >
                    <option value="classical">Classical / Hanafi</option>
                    <option value="aaoifi">AAOIFI (International)</option>
                  </select>
                </div>
              </div>

              {/* Toggle Buttons: Silver (Default) vs Gold */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, nisabMetal: 'silver' }))}
                  className={`p-4 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between min-h-[74px] ${
                    form.nisabMetal === 'silver'
                      ? 'border-primary bg-primary/5 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{t.nisabSilverLabel}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                      Recommended
                    </span>
                  </div>
                  <div className="mt-2 text-slate-600 text-xs">
                    {currentSilverNisabGrams}g ({form.nisabStandard === 'classical' ? '52.5 tola' : '51 tola'}) ={' '}
                    <span className="font-bold text-slate-900 text-sm">{formatINR(currentSilverNisabINR)}</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, nisabMetal: 'gold' }))}
                  className={`p-4 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between min-h-[74px] ${
                    form.nisabMetal === 'gold'
                      ? 'border-accent bg-accent/5 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">{t.nisabGoldLabel}</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                      Alternative
                    </span>
                  </div>
                  <div className="mt-2 text-slate-600 text-xs">
                    {currentGoldNisabGrams}g ({form.nisabStandard === 'classical' ? '7.5 tola' : '7.28 tola'}) ={' '}
                    <span className="font-bold text-slate-900 text-sm">{formatINR(currentGoldNisabINR)}</span>
                  </div>
                </button>
              </div>

              {/* Live Price Strip & Manual Override Option */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>
                    Live Rates: Gold 24k: <strong>₹{metalPrices.goldPricePerGram24k}/g</strong> | Silver:{' '}
                    <strong>₹{metalPrices.silverPricePerGram}/g</strong>
                  </span>
                  <span className="text-[11px] text-slate-400">({metalPrices.lastUpdated})</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCustomRatesOpen(!customRatesOpen)}
                  className="text-primary hover:underline font-bold inline-flex items-center gap-1 min-h-[44px] sm:min-h-0"
                >
                  <Edit3 size={13} />
                  {t.manualOverrideBtn}
                </button>
              </div>

              {/* Expandable Manual Rate Override Form */}
              {customRatesOpen && (
                <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 animate-in fade-in">
                  <p className="text-xs text-slate-600 mb-3">{t.customPricePrompt}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Gold 24k (₹ per gram)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={customGoldRate}
                        onChange={(e) => setCustomGoldRate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Silver (₹ per gram)
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={customSilverRate}
                        onChange={(e) => setCustomSilverRate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setCustomRatesOpen(false)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-800 min-h-[44px] sm:min-h-0"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCustomRates}
                      className="px-4 py-1.5 text-xs font-bold bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors min-h-[44px] sm:min-h-0"
                    >
                      {t.saveRatesBtn}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* FORM */}
            <form onSubmit={handleCalculate} className="space-y-8">
              {/* Card 1: Assets */}
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 shadow-soft">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-3">
                    <Wallet className="text-primary" />
                    {t.assetsTitle}
                  </h2>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-xs text-slate-500 hover:text-red-600 font-bold flex items-center gap-1 transition-colors min-h-[44px] sm:min-h-0"
                  >
                    <RotateCcw size={13} />
                    {t.clearAllBtn}
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Row 1: Cash in hand & Bank Savings */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="cashInHand" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.cashInHandLabel}
                        <FieldTooltip text={t.cashInHandTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="cashInHand"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.cashInHand || ''}
                          onChange={(e) => handleNumericChange('cashInHand', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bankSavings" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.bankSavingsLabel}
                        <FieldTooltip text={t.bankSavingsTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="bankSavings"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.bankSavings || ''}
                          onChange={(e) => handleNumericChange('bankSavings', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Gold Asset Unit Switcher */}
                  <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <label className="text-sm font-bold text-slate-900 flex items-center">
                        <Coins className="text-amber-600 mr-2" size={18} />
                        {t.goldLabel}
                        <FieldTooltip text={t.goldTooltip} />
                      </label>
                      <div className="inline-flex rounded-lg bg-white border border-amber-200 p-0.5 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => handleGoldChange({ unit: 'grams' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.gold.unit === 'grams' ? 'bg-amber-600 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitGrams}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGoldChange({ unit: 'tola' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.gold.unit === 'tola' ? 'bg-amber-600 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitTola}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGoldChange({ unit: 'inr' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.gold.unit === 'inr' ? 'bg-amber-600 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitInrValue}
                        </button>
                      </div>
                    </div>

                    {form.gold.unit === 'inr' ? (
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="Direct ₹ value of gold"
                          value={form.gold.valueOverride || ''}
                          onChange={(e) =>
                            handleGoldChange({ valueOverride: Math.max(0, parseFloat(e.target.value) || 0) })
                          }
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none min-h-[44px]"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">
                            Quantity ({form.gold.unit === 'tola' ? 'Tola' : 'Grams'})
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="0"
                            value={form.gold.weight || ''}
                            onChange={(e) =>
                              handleGoldChange({ weight: Math.max(0, parseFloat(e.target.value) || 0) })
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none min-h-[44px]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1">{t.purityLabel}</label>
                          <select
                            value={form.gold.purity}
                            onChange={(e) => handleGoldChange({ purity: e.target.value as GoldPurity })}
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none min-h-[44px]"
                          >
                            <option value="24k">24K (99.9% pure)</option>
                            <option value="22k">22K (91.6% standard jewellery)</option>
                            <option value="18k">18K (75.0% pure)</option>
                            <option value="14k">14K (58.3% pure)</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Silver Asset Unit Switcher */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <label className="text-sm font-bold text-slate-900 flex items-center">
                        <Coins className="text-slate-500 mr-2" size={18} />
                        {t.silverLabel}
                        <FieldTooltip text={t.silverTooltip} />
                      </label>
                      <div className="inline-flex rounded-lg bg-white border border-slate-300 p-0.5 text-xs font-semibold">
                        <button
                          type="button"
                          onClick={() => handleSilverChange({ unit: 'grams' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.silver.unit === 'grams' ? 'bg-slate-700 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitGrams}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSilverChange({ unit: 'tola' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.silver.unit === 'tola' ? 'bg-slate-700 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitTola}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSilverChange({ unit: 'inr' })}
                          className={`px-2.5 py-1 rounded-md transition-colors min-h-[44px] sm:min-h-0 ${
                            form.silver.unit === 'inr' ? 'bg-slate-700 text-white' : 'text-slate-600'
                          }`}
                        >
                          {t.unitInrValue}
                        </button>
                      </div>
                    </div>

                    {form.silver.unit === 'inr' ? (
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          type="number"
                          min="0"
                          placeholder="Direct ₹ value of silver"
                          value={form.silver.valueOverride || ''}
                          onChange={(e) =>
                            handleSilverChange({ valueOverride: Math.max(0, parseFloat(e.target.value) || 0) })
                          }
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-slate-500 focus:outline-none min-h-[44px]"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1">
                          Quantity ({form.silver.unit === 'tola' ? 'Tola' : 'Grams'})
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="0"
                          value={form.silver.weight || ''}
                          onChange={(e) =>
                            handleSilverChange({ weight: Math.max(0, parseFloat(e.target.value) || 0) })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-slate-500 focus:outline-none min-h-[44px]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Jewellery Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/15">
                    <input
                      id="jewelleryWorn"
                      type="checkbox"
                      checked={form.includeJewelleryForPersonalUse}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          includeJewelleryForPersonalUse: e.target.checked,
                        }))
                      }
                      className="mt-1 w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer min-h-[24px]"
                    />
                    <label htmlFor="jewelleryWorn" className="text-xs sm:text-sm text-slate-700 cursor-pointer">
                      <span className="font-bold text-slate-900 block sm:inline">
                        {t.jewelleryCheckboxLabel}
                      </span>
                      <FieldTooltip text={t.jewelleryCheckboxTooltip} />
                      <span className="block text-xs text-slate-500 mt-0.5">
                        (Hanafi school includes all jewellery; Shafi‘i, Maliki & Hanbali generally exempt normal personal wear).
                      </span>
                    </label>
                  </div>

                  {/* Other standard assets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sharesInvestments" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.sharesLabel}
                        <FieldTooltip text={t.sharesTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="sharesInvestments"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.sharesInvestments || ''}
                          onChange={(e) => handleNumericChange('sharesInvestments', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessStock" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.businessStockLabel}
                        <FieldTooltip text={t.businessStockTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="businessStock"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.businessStock || ''}
                          onChange={(e) => handleNumericChange('businessStock', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="moneyOwedToYou" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.moneyOwedLabel}
                        <FieldTooltip text={t.moneyOwedTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="moneyOwedToYou"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.moneyOwedToYou || ''}
                          onChange={(e) => handleNumericChange('moneyOwedToYou', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="fixedDeposits" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.fdLabel}
                        <FieldTooltip text={t.fdTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="fixedDeposits"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.fixedDepositsCertificates || ''}
                          onChange={(e) => handleNumericChange('fixedDepositsCertificates', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="crypto" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.cryptoLabel}
                        <FieldTooltip text={t.cryptoTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="crypto"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.crypto || ''}
                          onChange={(e) => handleNumericChange('crypto', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="otherAssets" className="block text-sm font-bold text-slate-700 mb-1.5">
                        {t.otherAssetsLabel}
                        <FieldTooltip text={t.otherAssetsTooltip} />
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                          id="otherAssets"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={form.otherAssets || ''}
                          onChange={(e) => handleNumericChange('otherAssets', e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Liabilities (Deductions) */}
              <div className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 shadow-soft">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
                  <MinusCircle className="text-red-500" />
                  {t.liabilitiesTitle}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="debtsDueNow" className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t.debtsDueNowLabel}
                      <FieldTooltip text={t.debtsDueNowTooltip} />
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                      <input
                        id="debtsDueNow"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={form.debtsDueNow || ''}
                        onChange={(e) => handleNumericChange('debtsDueNow', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="unpaidBills" className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t.unpaidBillsLabel}
                      <FieldTooltip text={t.unpaidBillsTooltip} />
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                      <input
                        id="unpaidBills"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={form.unpaidBillsRentTax || ''}
                        onChange={(e) => handleNumericChange('unpaidBillsRentTax', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="loanInstallments" className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t.loanInstallmentsLabel}
                      <FieldTooltip text={t.loanInstallmentsTooltip} />
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                      <input
                        id="loanInstallments"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={form.loanInstallmentsYear || ''}
                        onChange={(e) => handleNumericChange('loanInstallmentsYear', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="otherLiabilities" className="block text-sm font-bold text-slate-700 mb-1.5">
                      {t.otherLiabilitiesLabel}
                      <FieldTooltip text={t.otherLiabilitiesTooltip} />
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                      <input
                        id="otherLiabilities"
                        type="number"
                        min="0"
                        placeholder="0"
                        value={form.otherLiabilities || ''}
                        onChange={(e) => handleNumericChange('otherLiabilities', e.target.value)}
                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky / Running Net Wealth Strip */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white shadow-lg flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px]">{t.runningStripAssets}</span>
                    <span className="font-bold text-slate-200">{formatINR(runningPreview.totalAssets)}</span>
                  </div>
                  <span className="text-slate-600 font-bold text-lg">−</span>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{t.runningStripLiabilities}</span>
                    <span className="font-bold text-red-300">{formatINR(runningPreview.totalLiabilities)}</span>
                  </div>
                  <span className="text-slate-600 font-bold text-lg">=</span>
                  <div>
                    <span className="text-accent block text-[11px] font-bold">{t.runningStripNet}</span>
                    <span className="font-bold text-white text-base sm:text-lg">
                      {formatINR(runningPreview.netAssets)}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  Target Nisab: <strong className="text-white">{formatINR(runningPreview.nisabThreshold)}</strong>
                </div>
              </div>

              {/* Calculate My Zakat Main Submit Button */}
              <button
                type="submit"
                className="btn-primary w-full btn-lg flex items-center justify-center gap-3 group text-lg font-bold shadow-strong min-h-[52px]"
              >
                <Calculator className="group-hover:rotate-12 transition-transform" />
                {t.calculateBtn}
              </button>
            </form>
          </div>

          {/* RIGHT SIDEBAR: Results & Educational Cards */}
          <div className="space-y-6 lg:sticky lg:top-24 h-fit">
            {/* Dynamic Results Card */}
            <div
              id="zakat-results-card"
              className="bg-white p-6 sm:p-8 rounded-[2rem] border-2 border-primary/20 shadow-strong text-center overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>

              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="calculated-result"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {result.isEligible ? (
                      <>
                        {/* Green Zakat Due Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                          <CheckCircle2 size={14} className="text-emerald-600" />
                          {t.statusDueBadge}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900">{t.eligibleHeading}</h3>

                        {/* Large Zakat Amount */}
                        <div className="py-2">
                          <span className="text-xs text-slate-500 font-medium block mb-1">
                            {t.breakdownFinalAmount} (2.5%)
                          </span>
                          <span className="text-4xl sm:text-5xl font-serif font-bold text-primary tracking-tight">
                            {formatINR(result.zakatDue)}
                          </span>
                        </div>

                        {/* Step-by-Step Breakdown Table */}
                        <div className="text-left text-xs text-slate-600 space-y-2.5 pt-4 border-t border-slate-100">
                          <div className="flex justify-between py-1">
                            <span>{t.breakdownTotalAssets}:</span>
                            <span className="font-bold text-slate-900">{formatINR(result.totalAssets)}</span>
                          </div>
                          <div className="flex justify-between py-1">
                            <span>{t.breakdownTotalLiabilities}:</span>
                            <span className="font-bold text-red-600">− {formatINR(result.totalLiabilities)}</span>
                          </div>
                          <div className="flex justify-between py-1 border-t border-slate-100 font-semibold text-slate-900">
                            <span>{t.breakdownNetAssets}:</span>
                            <span>{formatINR(result.netAssets)}</span>
                          </div>
                          <div className="flex justify-between py-1 text-slate-500">
                            <span>
                              {t.breakdownNisabUsed} ({result.nisabMetal.toUpperCase()}):
                            </span>
                            <span>{formatINR(result.nisabThreshold)}</span>
                          </div>
                          <div className="flex justify-between py-1 text-slate-500">
                            <span>{t.breakdownZakatRate}:</span>
                            <span className="font-bold text-primary">2.5%</span>
                          </div>
                        </div>

                        {/* Optional Cause Chooser */}
                        <div className="text-left pt-4 border-t border-slate-100">
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            {t.chooseCauseLabel}
                          </label>
                          <select
                            value={selectedCause}
                            onChange={(e) => setSelectedCause(e.target.value)}
                            className="w-full text-xs bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                          >
                            <option value="general">{t.causes.general}</option>
                            <option value="needy">{t.causes.needy}</option>
                            <option value="widowsOrphans">{t.causes.widowsOrphans}</option>
                            <option value="medical">{t.causes.medical}</option>
                            <option value="education">{t.causes.education}</option>
                            <option value="food">{t.causes.food}</option>
                          </select>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-2">
                          {/* 1) Pay Zakat Now -> Opens existing donation flow */}
                          <button
                            type="button"
                            onClick={handlePayZakatNow}
                            className="btn-accent w-full flex items-center justify-center gap-2 group font-bold shadow-md min-h-[48px]"
                          >
                            <Heart size={18} fill="currentColor" />
                            {t.payZakatNowBtn}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </button>

                          {/* 2) Share on WhatsApp */}
                          <a
                            href={getWhatsAppShareUrl(result, lang)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('whatsapp_shared', { amount: result.zakatDue })}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-bold text-xs transition-colors min-h-[44px]"
                          >
                            <Share2 size={16} />
                            {t.shareWhatsAppBtn}
                          </a>

                          {/* 3) Download PDF Summary (Lazy-loaded jsPDF) */}
                          <button
                            type="button"
                            onClick={handleDownloadPdf}
                            disabled={isGeneratingPdf}
                            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors disabled:opacity-50 min-h-[44px]"
                          >
                            <Download size={16} />
                            {isGeneratingPdf ? 'Generating PDF...' : t.downloadPdfBtn}
                          </button>

                          {/* 4) Remind me before Ramadan / Hijri year-end (.ics) */}
                          <button
                            type="button"
                            onClick={handleDownloadReminder}
                            className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors min-h-[44px]"
                          >
                            <Bell size={15} />
                            {t.remindMeBtn}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Neutral Below Nisab Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                          <Info size={14} className="text-slate-500" />
                          {t.statusBelowBadge}
                        </div>

                        <h3 className="text-lg font-bold text-slate-900">{t.notEligibleHeading}</h3>
                        <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto">
                          {t.notEligibleMessage}
                        </p>

                        <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 space-y-1 text-left">
                          <div className="flex justify-between">
                            <span>Your Net Wealth:</span>
                            <span className="font-bold text-slate-800">{formatINR(result.netAssets)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Required Nisab:</span>
                            <span className="font-bold text-slate-800">{formatINR(result.nisabThreshold)}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Link
                            to="/donate"
                            className="btn-primary w-full inline-flex items-center justify-center gap-2 text-xs font-bold min-h-[44px]"
                          >
                            <Heart size={16} />
                            {t.sadaqahWelcomeText}
                          </Link>
                        </div>
                      </>
                    )}

                    {/* Hawl Reminder Note */}
                    <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-left">
                      <strong className="text-slate-700 block mb-0.5">{t.hawlReminderTitle}:</strong>
                      {t.hawlReminderDesc}
                    </div>
                  </motion.div>
                ) : (
                  <div key="placeholder" className="py-8 text-center text-slate-500 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
                      <Calculator size={32} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{t.resultsTitle}</h3>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                      {t.resultsPlaceholder}
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Understanding Nisab Values Card */}
            <div className="p-6 bg-accent/5 rounded-[1.5rem] border border-accent/15">
              <div className="flex items-center gap-2.5 mb-3">
                <HelpCircle className="text-accent shrink-0" size={20} />
                <h3 className="font-bold text-slate-900 text-sm">{t.nisabCardTitle}</h3>
              </div>
              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 bg-white rounded-xl border border-accent/10">
                  <div className="font-bold text-slate-900 mb-1">
                    Silver Nisab: {currentSilverNisabGrams}g (52.5 tola)
                  </div>
                  <div className="text-primary font-bold text-sm">{formatINR(currentSilverNisabINR)}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Rate: ₹{metalPrices.silverPricePerGram}/g • 1 tola = 11.664g
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-accent/10">
                  <div className="font-bold text-slate-900 mb-1">
                    Gold Nisab: {currentGoldNisabGrams}g (7.5 tola)
                  </div>
                  <div className="text-accent font-bold text-sm">{formatINR(currentGoldNisabINR)}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Rate: ₹{metalPrices.goldPricePerGram24k}/g (24K)
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">
                  <strong>Last updated:</strong> {metalPrices.lastUpdated}. Rates are synchronized with open market bullion benchmarks.
                </p>
              </div>
            </div>

            {/* Islamic Calendar Card */}
            <div className="p-6 bg-accent/5 rounded-[1.5rem] border border-accent/15">
              <div className="flex items-center gap-2.5 mb-3">
                <Calendar className="text-accent shrink-0" size={20} />
                <h3 className="font-bold text-slate-900 text-sm">Islamic Calendar &amp; Hijri Converter</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Calculate your exact Hawl date (354 lunar days) or check significant dates in the Islamic year.
              </p>
              <Link
                to="/hijri-converter"
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0"
              >
                Open Hijri Converter <ArrowRight size={13} />
              </Link>
            </div>

            {/* How We Utilize Your Zakat Card */}
            <div className="p-6 bg-primary/5 rounded-[1.5rem] border border-primary/15">
              <div className="flex items-center gap-2.5 mb-3">
                <CheckCircle2 className="text-primary shrink-0" size={20} />
                <h3 className="font-bold text-slate-900 text-sm">How We Utilize Your Zakat</h3>
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Shah Seva ensures 100% direct distribution in accordance with Quranic Asnaf (Surah At-Tawbah 9:60):
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Direct emergency medical &amp; surgery sponsorship for impoverished patients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Widow pensions, monthly ration kits, and winter relief for destitute families.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Orphan education fees and school supplies to break the cycle of generational poverty.</span>
                </li>
              </ul>

              <div className="mt-4 pt-3 border-t border-primary/10 flex flex-col gap-2">
                <Link
                  to="/impact"
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0"
                >
                  {t.viewImpactBtn} <ArrowRight size={12} />
                </Link>
                <Link
                  to="/transparency"
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 min-h-[44px] sm:min-h-0"
                >
                  {t.viewTransparencyBtn} <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Trust Strip & Editable Placeholders */}
            {/* TODO: Verify organizational Zakat policy statement with governing board */}
            {/* TODO: Verify official registration number with charity regulator */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-[11px] text-slate-500 space-y-1.5 text-left">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck size={14} className="text-primary" />
                {t.trustStripTitle}
              </div>
              <p>[Zakat policy statement]: {t.trustPolicyLabel}</p>
              <p>[Registration number]: {t.trustRegLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATIONAL GUIDE SECTION (Below Calculator) */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-200 mt-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            Islamic Jurisprudence
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 mt-3 mb-4">
            {t.guideTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{t.guideSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t.guideWhatIsZakatTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.guideWhatIsZakatBody}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{t.guideNisabHawlTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.guideNisabHawlBody}</p>
          </div>
        </div>

        {/* 8 Quranic Categories Banner (Surah At-Tawbah 9:60) */}
        <div className="bg-primary/5 border border-primary/15 rounded-3xl p-6 sm:p-8 mb-12">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-3">
            {t.guideCategoriesTitle}
          </h3>
          <p className="text-xs sm:text-sm italic text-slate-700 bg-white/70 p-4 rounded-xl border border-primary/10 mb-6 leading-relaxed">
            {t.guideCategoriesVerse}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            {t.guideCategoriesList.map((category, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-100">
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0 font-bold">
                  {idx + 1}
                </span>
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Asset Classes */}
        <div className="space-y-4 mb-16">
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 text-center">
            {t.guideAssetsTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.guideAssetsPoints.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 10-QUESTION FAQ ACCORDION */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
              {t.faqTitle}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">{t.faqSubtitle}</p>
          </div>

          <div className="space-y-3">
            {t.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors min-h-[48px]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Scholar Disclaimer */}
          <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-center text-xs text-amber-800 leading-relaxed">
            {t.faqDisclaimer}
          </div>
        </div>
      </section>
    </div>
  );
}
