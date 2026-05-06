import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Calculator, Wallet, Coins, Briefcase, MinusCircle, AlertCircle, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NISAB_SILVER = 48000; // Approximate Silver Nisab in INR

export default function ZakatCalculator() {
  const { language } = useLanguage();
  const t = translations[language];

  const [assets, setAssets] = useState({
    cash: '',
    gold: '',
    silver: '',
    investments: '',
    business: '',
    moneyOwed: '',
  });
  const [liabilities, setLiabilities] = useState('');
  const [result, setResult] = useState<{
    totalAssets: number;
    finalNet: number;
    zakatDue: number;
    isEligible: boolean;
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    if (field === 'liabilities') {
      setLiabilities(value);
    } else {
      setAssets({ ...assets, [field]: value });
    }
  };

  const calculateZakat = (e: React.FormEvent) => {
    e.preventDefault();
    const assetsArray = Object.values(assets) as string[];
    const sumAssets = assetsArray.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
    const debt = parseFloat(liabilities) || 0;
    const net = sumAssets - debt;
    
    // Zakat is 2.5% of net assets if net > Nisab
    const isEligible = net >= NISAB_SILVER;
    const due = isEligible ? net * 0.025 : 0;

    setResult({
      totalAssets: sumAssets,
      finalNet: net,
      zakatDue: due,
      isEligible
    });
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={t.seo.zakat.title}
        description={t.seo.zakat.description}
        keywords="zakat calculator india, online zakat calculator, shariah compliant zakat, calculate zakat on gold, zakat on cash, charity NGO bhilwara, Shah Seva zakat"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Shah Seva Zakat Calculator",
          "description": t.zakat.calculatorDesc,
          "applicationCategory": "FinancialApplication",
          "operatingSystem": "All",
          "url": "https://shahseva.vercel.app/zakat-calculator",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "author": {
            "@type": "Organization",
            "name": "Shah Seva"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary-dark py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1920" 
            alt="Islamic Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            {t.zakat.calculatorTitle}
          </motion.h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t.zakat.calculatorDesc}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="md:col-span-2">
            <form onSubmit={calculateZakat} className="space-y-8">
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Wallet className="text-primary" /> Assets
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {Object.entries(t.zakat.labels).slice(0, 6).map(([key, label]) => (
                    <div key={key}>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{label as string}</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input 
                          type="number"
                          placeholder="0"
                          value={assets[key as keyof typeof assets]}
                          onChange={(e) => handleInputChange(key, e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <MinusCircle className="text-red-500" /> Liabilities
                </h2>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t.zakat.labels.liabilities as string}</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input 
                      type="number"
                      placeholder="0"
                      value={liabilities}
                      onChange={(e) => handleInputChange('liabilities', e.target.value)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full btn-lg flex items-center justify-center gap-2 group"
              >
                <Calculator className="group-hover:rotate-12 transition-transform" />
                {t.zakat.labels.calculate as string}
              </button>
            </form>
          </div>

          {/* Results Side */}
          <div className="sticky top-24 h-fit">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/20 shadow-strong text-center overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                  
                  {result.isEligible ? (
                    <>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-primary w-8 h-8" />
                      </div>
                      <h3 className="text-green-600 font-bold mb-2">{t.zakat.labels.isEligible as string}</h3>
                      <div className="text-4xl font-serif font-bold text-primary mb-6">
                        {formatCurrency(result.zakatDue)}
                      </div>
                      
                      <div className="space-y-4 text-sm text-slate-600 border-t border-slate-100 pt-6 mb-8 text-left">
                        <div className="flex justify-between">
                          <span>{t.zakat.labels.totalAssets as string}</span>
                          <span className="font-bold">{formatCurrency(result.totalAssets)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t.zakat.labels.netAssets as string}</span>
                          <span className="font-bold">{formatCurrency(result.finalNet)}</span>
                        </div>
                      </div>

                      <Link 
                        to="/donate" 
                        className="btn-accent w-full flex items-center justify-center gap-2 group"
                      >
                        Donate This Zakat
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="text-slate-400 w-8 h-8" />
                      </div>
                      <h3 className="text-slate-900 font-bold mb-4">{t.zakat.labels.notEligible as string}</h3>
                      <p className="text-slate-600 text-sm mb-6">
                         Net assets ({formatCurrency(result.finalNet)}) is below Nisab threshold.
                      </p>
                      <Link to="/donate" className="text-primary font-bold hover:underline">
                        You can still give Sadaqah
                      </Link>
                    </>
                  )}
                </motion.div>
              ) : (
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-dashed border-slate-300 text-center text-slate-500">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>Calculate your Zakat to see the results here</p>
                </div>
              )}
            </AnimatePresence>

            <div className="mt-8 p-6 bg-accent/5 rounded-[1.5rem] border border-accent/10">
              <div className="flex gap-3 mb-3">
                <HelpCircle className="text-accent flex-shrink-0" size={20} />
                <h4 className="font-bold text-slate-900 text-sm">{t.zakat.nisabDetails.title}</h4>
              </div>
              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <p>• {t.zakat.nisabDetails.gold}</p>
                <p>• {t.zakat.nisabDetails.silver}</p>
                <p className="font-bold text-slate-900 mt-2">{t.zakat.nisabDetails.desc}</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-primary/5 rounded-[1.5rem] border border-primary/10">
              <div className="flex gap-3 mb-4">
                <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                <h4 className="font-bold text-slate-900 text-sm">{t.zakat.utilization.title}</h4>
              </div>
              <p className="text-xs text-slate-600 mb-4">{t.zakat.utilization.desc}</p>
              <ul className="space-y-2">
                {t.zakat.utilization.points.map((point: string, i: number) => (
                  <li key={i} className="text-xs text-slate-600 flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Zakat Calculator India",
          "description": "Accurate Online Zakat Calculator for India. Calculate Zakat on gold, silver, cash and assets.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "All",
          "provider": {
            "@type": "NGO",
            "name": "Shah Seva",
            "url": "https://shahseva.vercel.app"
          }
        })}
      </script>
    </div>
  );
}
