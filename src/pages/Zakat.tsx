import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Calculator, Heart, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Zakat() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={t.seo.zakat.title}
        description={t.seo.zakat.description}
        keywords={t.seo.zakat.keywords}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-primary-dark overflow-hidden">
        {/* Intricate Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none islamic-pattern"></div>

        {/* Floating Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.7
            }}
            className="absolute text-accent/30 pointer-events-none"
            style={{
              top: `${15 + i * 18}%`,
              left: `${15 + (i % 3) * 30}%`
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-dark text-xs font-bold uppercase tracking-widest mb-8 border border-accent/20 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent-dark animate-pulse"></span>
            {t.zakat.badge}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]"
          >
            <span className="block text-accent text-3xl mb-6 font-arabic opacity-90 select-none tracking-normal">فريضة الزكاة</span>
            {t.zakat.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t.zakat.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-3 text-primary font-bold mb-6">
            <ShieldCheck className="w-6 h-6" />
            <span>Shariah Compliant & Transparent</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
            How Your Zakat Changes Lives
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            {t.zakat.desc}
          </p>
          <div className="space-y-4 mb-12">
            {t.zakat.items.map((item: string, i: number) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Heart className="text-primary w-5 h-5" />
              {t.zakat.utilization.title}
            </h3>
            <p className="text-slate-600 text-sm mb-4">{t.zakat.utilization.desc}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {t.zakat.utilization.points.map((point: string, i: number) => (
                <li key={i} className="text-xs text-slate-600 flex gap-2 items-start">
                  <span className="text-primary font-bold">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-[3rem] blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>
          <div className="relative p-10 md:p-16 rounded-[3rem] bg-white border border-slate-100 shadow-strong text-center">
            <div className="w-20 h-20 rounded-[2rem] bg-primary/5 flex items-center justify-center mb-8 mx-auto">
              <Calculator className="text-primary w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.zakat.calculatorTitle}</h3>
            <p className="text-slate-600 mb-10">
              {t.zakat.calculatorDesc}
            </p>
            <Link 
              to="/zakat-calculator" 
              className="btn-primary w-full btn-lg flex items-center justify-center gap-2 group"
            >
              {t.zakat.cta}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
