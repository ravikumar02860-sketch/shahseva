import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Calendar, RefreshCw, Copy, Check, ChevronDown, HelpCircle, Moon, Sun, ArrowRightLeft } from 'lucide-react';

// Hijri Conversion logic (Kuwaiti Algorithm)
const g2h = (date: Date) => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let m = month + 1;
  let y = year;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  let a = Math.floor(y / 100);
  let b = 2 - a + Math.floor(a / 4);
  if (y < 1583) b = 0;
  if (y === 1582) {
    if (m > 10) b = 2 - a + Math.floor(a / 4);
    if (m === 10 && day >= 15) b = 2 - a + Math.floor(a / 4);
  }

  let jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;
  
  let b1 = 0;
  if (jd > 2299160) {
    let a1 = Math.floor((jd - 1867216.25) / 36524.25);
    b1 = 1 + a1 - Math.floor(a1 / 4);
  }
  let bb = jd + b1 + 1524;
  let cc = Math.floor((bb - 122.1) / 365.25);
  let dd = Math.floor(365.25 * cc);
  let ee = Math.floor((bb - dd) / 30.6001);
  day = bb - dd - Math.floor(30.6001 * ee);
  month = ee - 1;
  if (ee > 13) {
    cc += 1;
    month = ee - 13;
  }
  year = cc - 4716;

  let ijd = jd - 1948440 + 10632;
  let n = Math.floor((ijd - 1) / 10631);
  ijd = ijd - 10631 * n;
  let j = Math.floor((ijd - 1) / 354.36667);
  ijd = ijd - Math.floor(j * 354.36667 + 0.85);
  let hy = n * 30 + j;
  let hm = Math.floor((ijd - 1) / 29.5);
  ijd = ijd - Math.floor(hm * 29.5 + 0.5);
  let hd = ijd;

  return { d: hd, m: hm + 1, y: hy };
};

const h2g = (hd: number, hm: number, hy: number) => {
  let jd = Math.floor((11 * hy + 3) / 30) + 354 * hy + 30 * hm - Math.floor((hm - 1) / 2) + hd + 1948440 - 385;
  
  if (jd > 2299160) {
    let l = jd + 68569;
    let n = Math.floor((4 * l) / 146097);
    l = l - Math.floor((146097 * n + 3) / 4);
    let i = Math.floor((4000 * (l + 1)) / 1461001);
    l = l - Math.floor((1461 * i) / 4) + 31;
    let j = Math.floor((80 * l) / 2447);
    let k = l - Math.floor((2447 * j) / 80);
    l = Math.floor(j / 11);
    j = j + 2 - 12 * l;
    i = 100 * (n - 49) + i + l;
    return new Date(i, j - 1, k);
  } else {
    // Julian Calendar handling if needed, but modern use is enough
    return new Date();
  }
};

export default function IslamicConverter() {
  const { language } = useLanguage();
  const t = translations[language];

  const [mode, setMode] = useState<'G2H' | 'H2G'>('G2H');
  const [gDate, setGDate] = useState({ d: new Date().getDate(), m: new Date().getMonth() + 1, y: new Date().getFullYear() });
  const [hDate, setHDate] = useState({ d: 1, m: 1, y: 1445 });
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [todayHijri, setTodayHijri] = useState<{ d: number, m: number, y: number } | null>(null);

  useEffect(() => {
    const today = new Date();
    setTodayHijri(g2h(today));
    // Set initial hDate based on today
    const currentH = g2h(today);
    setHDate(currentH);
  }, []);

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'G2H') {
      const date = new Date(gDate.y, gDate.m - 1, gDate.d);
      const res = g2h(date);
      setResult(`${res.d} ${t.hijri.months[res.m - 1]} ${res.y} AH`);
    } else {
      const date = h2g(hDate.d, hDate.m, hDate.y);
      setResult(date.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }));
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const resetTool = () => {
    const today = new Date();
    setGDate({ d: today.getDate(), m: today.getMonth() + 1, y: today.getFullYear() });
    const currentH = g2h(today);
    setHDate(currentH);
    setResult(null);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title={t.hijri.seo.title}
        description={t.hijri.seo.description}
        keywords="islamic date converter, hijri date converter, gregorian to hijri, hijri to gregorian, today islamic date, hijri calendar online"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Islamic Date Converter",
          "description": t.hijri.seo.description,
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "All",
          "url": "https://shahseva.vercel.app/hijri-converter"
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary-dark py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <img 
            src="https://images.unsplash.com/photo-1590076215667-873d31481e13?auto=format&fit=crop&q=80&w=1920" 
            alt="Islamic Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest mb-6"
          >
            {t.hijri.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            {t.hijri.title}
          </motion.h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto leading-relaxed">
            {t.hijri.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Converter Tool */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2.5rem] shadow-strong overflow-hidden border border-slate-100 h-full">
              {/* Tab Switcher */}
              <div className="flex bg-slate-50 p-2 m-4 rounded-[2rem] border border-slate-200">
                <button 
                  onClick={() => { setMode('G2H'); setResult(null); }}
                  className={`flex-1 py-3 text-sm font-bold rounded-[1.5rem] transition-all flex items-center justify-center gap-2 ${mode === 'G2H' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-primary'}`}
                >
                  <Sun size={18} /> {t.hijri.gToH}
                </button>
                <button 
                  onClick={() => { setMode('H2G'); setResult(null); }}
                  className={`flex-1 py-3 text-sm font-bold rounded-[1.5rem] transition-all flex items-center justify-center gap-2 ${mode === 'H2G' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-primary'}`}
                >
                  <Moon size={18} /> {t.hijri.hToG}
                </button>
              </div>

              {/* Form Area */}
              <div className="p-8 md:p-12">
                <form onSubmit={handleConvert} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.hijri.labels.day}</label>
                      <input 
                        type="number" 
                        min="1" max="31"
                        value={mode === 'G2H' ? gDate.d : hDate.d}
                        onChange={(e) => mode === 'G2H' ? setGDate({...gDate, d: +e.target.value}) : setHDate({...hDate, d: +e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.hijri.labels.month}</label>
                      <select 
                        value={mode === 'G2H' ? gDate.m : hDate.m}
                        onChange={(e) => mode === 'G2H' ? setGDate({...gDate, m: +e.target.value}) : setHDate({...hDate, m: +e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                      >
                        {mode === 'G2H' ? (
                          [
                            'January', 'February', 'March', 'April', 'May', 'June', 
                            'July', 'August', 'September', 'October', 'November', 'December'
                          ].map((m, i) => <option key={i} value={i+1}>{m}</option>)
                        ) : (
                          t.hijri.months.map((m: string, i: number) => <option key={i} value={i+1}>{m}</option>)
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">{t.hijri.labels.year}</label>
                      <input 
                        type="number" 
                        value={mode === 'G2H' ? gDate.y : hDate.y}
                        onChange={(e) => mode === 'G2H' ? setGDate({...gDate, y: +e.target.value}) : setHDate({...hDate, y: +e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="flex-1 btn-primary py-4 flex items-center justify-center gap-2 group">
                      <ArrowRightLeft size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                      {t.hijri.labels.convert}
                    </button>
                    <button type="button" onClick={resetTool} className="px-6 py-4 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                      <RefreshCw size={18} /> {t.hijri.labels.reset}
                    </button>
                  </div>
                </form>

                {/* Result Area */}
                <AnimatePresence>
                  {result && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-12 p-8 rounded-[2rem] bg-accent/5 border-2 border-dashed border-accent/20 text-center relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Calendar size={80} className="text-accent" />
                      </div>
                      <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2 block">
                        {t.hijri.labels.result}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                        {result}
                      </h2>
                      <button 
                        onClick={copyToClipboard}
                        className="btn-accent px-6 py-3 text-sm flex items-center gap-2 mx-auto"
                      >
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                        {copied ? 'Copied!' : t.hijri.labels.copy}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="space-y-8">
            {/* Current Hijri Date Widget */}
            <div className="bg-primary-dark p-8 rounded-[2.5rem] text-white overflow-hidden relative group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-primary-light font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <Calendar size={16} /> {t.hijri.labels.today}
              </h3>
              {todayHijri && (
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-white">
                    {todayHijri.d} {t.hijri.months[todayHijri.m - 1]}
                  </div>
                  <div className="text-xl text-accent font-bold">
                    {todayHijri.y} AH
                  </div>
                  <div className="pt-4 text-primary-light text-sm italic">
                    {new Date().toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Info Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="text-accent" size={24} />
                <h4 className="font-bold text-slate-900">Why Use This?</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Plan Ramadan & Eid dates',
                  'Convert historical records',
                  'Verify birth dates',
                  'Accurate calculations'
                ].map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Understanding the Hijri Calendar</h2>
            <p className="text-slate-600 mb-6">
              The Hijri calendar (Arabic: التقويم الهجري), also known as the Lunar Hijri calendar, is a lunar calendar consisting of 12 lunar months in a year of 354 or 355 days. It is used by Muslims around the world to determine the proper days of Islamic holidays and rituals, such as the annual period of fasting and the proper time for the Hajj.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Hijri Calendar</h3>
                <p className="text-sm text-slate-500">Based on the moon's cycle (lunar). Approximately 11 days shorter than the Gregorian calendar each year.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Gregorian Calendar</h3>
                <p className="text-sm text-slate-500">Based on the sun's cycle (solar). Used internationally for civil purposes.</p>
              </div>
            </div>

            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Names of Islamic Months</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              {t.hijri.months.map((month: string, i: number) => (
                <div key={i} className="bg-slate-100 p-4 rounded-xl text-center">
                  <span className="block text-xs text-slate-400 font-bold mb-1">Month {i+1}</span>
                  <span className="font-bold text-slate-900">{month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 border-t border-slate-200 pt-20">
            <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is today's Islamic date?",
                  a: `As of today, the Hijri date is ${todayHijri ? `${todayHijri.d} ${t.hijri.months[todayHijri.m - 1]} ${todayHijri.y} AH` : 'loading...'}.`
                },
                {
                  q: "How accurate is this Hijri converter?",
                  a: "Our tool uses the standard Kuwaiti algorithm for conversion. However, for religious observances, the actual moon sighting is the final authority."
                },
                {
                  q: "Why does the Islamic calendar date change every year?",
                  a: "Because the lunar year is about 11 days shorter than the solar year, Islamic festivals rotate through the seasons over a 33-year cycle."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100">
                  <h4 className="flex items-center gap-3 font-bold text-slate-900 mb-3">
                    <HelpCircle size={20} className="text-accent" />
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is today's Islamic date?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The today's Islamic date varies based on the lunar cycle but can be accurately calculated using our Hijri converter tool."
              }
            },
            {
              "@type": "Question",
              "name": "How to convert Hijri to Gregorian?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use our two-way converter card, select 'Hijri to Gregorian' tab, enter the Hijri day, month, and year, and click convert."
              }
            }
          ]
        })}
      </script>
    </div>
  );
}
