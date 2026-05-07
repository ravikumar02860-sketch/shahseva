import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Building2, FileText, Users, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CSR() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={t.seo.csr.title}
        description={t.seo.csr.description}
        keywords={t.seo.csr.keywords}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" 
            alt="Corporate Buildings"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-medium mb-6 backdrop-blur-md"
          >
            {t.csr.badge}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-[1.1]"
          >
            {t.csr.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t.csr.desc}
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t.csr.title2}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t.csr.desc2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.csr.points.map((point: any, i: number) => {
            const icons = [Building2, FileText, Users];
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-soft hover:shadow-strong transition-all duration-500 card-hover"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                  <Icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <HeartHandshake className="w-16 h-16 text-accent mx-auto mb-8 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Let's Build a Sustainable Future Together
          </h2>
          <Link 
            to="/contact" 
            className="btn-accent btn-lg inline-flex items-center gap-2 group"
          >
            {t.csr.cta}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
