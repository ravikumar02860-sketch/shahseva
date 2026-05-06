import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Heart, CheckCircle2, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Qurbani() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={t.qurbani.seo.title}
        description={t.qurbani.seo.description}
        keywords="qurbani 2026 india, donate qurbani online rajasthan, eid al adha sacrifice online, buy goat online charity, cow share qurbani india"
      />

      {/* Hero Section */}
      <section className="bg-primary-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none islamic-pattern"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest mb-8 border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            {t.qurbani.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 relative inline-block"
          >
            <span className="block text-accent text-3xl mb-4 font-arabic opacity-90 select-none tracking-normal">عيد الأضحى المبارक</span>
            {t.qurbani.title}
          </motion.h1>
          <p className="text-primary-light text-xl max-w-3xl mx-auto leading-relaxed font-light">
            {t.qurbani.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing/Donation Options */}
      <section className="py-20 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: t.qurbani.goat, price: '₹12,500', icon: '🐐', desc: 'Complete goat/sheep sacrifice' },
            { name: t.qurbani.cowShare, price: '₹3,500', icon: '🐄', desc: '1 share in a larger cow sacrifice' },
            { name: t.qurbani.cow, price: '₹24,500', icon: '🕌', desc: 'Complete cow sacrifice (7 shares)' }
          ].map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 text-center hover:border-accent transition-all group decorative-border"
            >
              <div className="text-5xl mb-6">{option.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{option.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{option.desc}</p>
              <div className="text-3xl font-black text-primary mb-8">{option.price}</div>
              <Link 
                to="/donation" 
                className="w-full btn-primary py-4 group"
              >
                {t.qurbani.cta} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none islamic-pattern"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-serif font-bold text-primary mb-8 tracking-tight">Your Sacrifice, Their Celebration</h2>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
              {t.qurbani.description}
            </p>
            <div className="space-y-6">
              {[
                'Strict adherence to Shariah guidelines for animal welfare and sacrifice.',
                'Freshly slaughtered meat distributed on the 1st, 2nd, and 3rd days of Eid.',
                'Full documentation and receipt provided for every Qurbani donation.',
                'Targeting the most vulnerable: widows, orphans, and daily wage earners.'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                    <CheckCircle2 size={16} />
                  </div>
                  <p className="text-slate-700 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative"
          >
            <div className="rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1540959733332-e94e270b4052?auto=format&fit=crop&q=80" 
                alt="Donation Distribution"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            {/* Overlay Stat */}
            <div className="absolute -bottom-10 -right-10 bg-accent p-8 rounded-3xl shadow-2xl text-accent-dark max-w-[240px]">
               <Heart className="mb-4" />
               <p className="text-2xl font-black mb-1">5,000+</p>
               <p className="text-xs font-bold uppercase tracking-widest opacity-80 leading-tight">Families Targeted for Distribution in 2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ / Info Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Info className="mx-auto text-accent mb-4" size={40} />
          <h2 className="text-3xl font-serif font-bold text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
           {[
             { q: 'Is the Qurbani performed on time?', a: 'Yes, all sacrifices are carried out during the prescribed Islamic days of Eid al-Adha (10th to 12th Dhul Hijjah).' },
             { q: 'Can I choose the name of the donor?', a: 'Certainly. During the donation process, you can specify the name of the individual on whose behalf the Qurbani is being performed.' },
             { q: 'Where do you sourcing the animals?', a: 'We source healthy, age-compliant livestock directly from local farmers in Rajasthan to support the rural economy.' }
           ].map((faq, i) => (
             <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-soft">
               <h4 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h4>
               <p className="text-slate-600 font-light leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}
