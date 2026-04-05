import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Shield } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function AboutPage() {
  const { t } = useLanguage();

  const coreValues = [
    { title: t.about.values.compassion.title, icon: Heart, desc: t.about.values.compassion.desc },
    { title: t.about.values.transparency.title, icon: Eye, desc: t.about.values.transparency.desc },
    { title: t.about.values.integrity.title, icon: ShieldCheck, desc: t.about.values.integrity.desc },
    { title: t.about.values.service.title, icon: Target, desc: t.about.values.service.desc },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      <SEO 
        title={t.seo.about.title} 
        description={t.seo.about.description}
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Hero */}
      <section className="px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary font-bold tracking-widest uppercase text-[10px] mb-10 border border-primary/10 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            {t.about.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.about.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium opacity-90 mb-8"
          >
            {t.about.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-500 font-bold text-sm border border-slate-100"
          >
            <Shield size={16} className="text-primary" />
            {t.aboutSummary.regNo}
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">
                {t.about.historyTitle}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t.about.historyDesc}
              </p>
              <div className="mb-10">
                <Link to="/donate" className="btn-primary btn-lg inline-flex">
                  Support Our Mission
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-3xl font-bold text-accent mb-2">15+</p>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Years of Service</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-3xl font-bold text-accent mb-2">25+</p>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Villages Reached</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-strong">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our History" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent rounded-full -z-10 blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-40 bg-primary/5 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white group transition-all duration-700 hover:shadow-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-accent mb-12 shadow-xl shadow-primary/20 group-hover:rotate-6 transition-transform duration-700">
              <Target size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">{t.about.missionTitle}</h2>
            <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium opacity-80">
              {t.about.missionDesc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white group transition-all duration-700 hover:shadow-primary/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-accent/10 transition-colors" />
            
            <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center text-primary mb-12 shadow-xl shadow-accent/20 group-hover:-rotate-6 transition-transform duration-700">
              <Eye size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">{t.about.visionTitle}</h2>
            <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium opacity-80">
              {t.about.visionDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
            >
              Our Foundation
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary tracking-tight">{t.about.valuesTitle}</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mt-10 rounded-full shadow-sm shadow-accent/20"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-12 rounded-[3rem] bg-white/50 backdrop-blur-sm border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary/5 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-10 group-hover:bg-primary group-hover:text-accent transition-all duration-700 shadow-inner shadow-primary/5">
                    <val.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">{val.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium opacity-90">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
