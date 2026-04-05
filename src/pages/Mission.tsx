import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Shield, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function MissionPage() {
  const { t } = useLanguage();

  const icons = [Target, Eye, Shield, Heart];

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      <SEO 
        title={t.seo.mission.title} 
        description={t.seo.mission.description}
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary font-bold tracking-widest uppercase text-[10px] mb-10 border border-primary/10 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            Our Purpose
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.mission.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.mission.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10">
              <Target size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">{t.mission.missionTitle}</h2>
            <p className="text-slate-600 text-xl leading-relaxed">{t.mission.missionDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-accent mb-10">
              <Eye size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent">{t.mission.visionTitle}</h2>
            <p className="text-slate-200 text-xl leading-relaxed">{t.mission.visionDesc}</p>
          </motion.div>
        </div>

        <div className="bg-slate-50/50 backdrop-blur-sm rounded-[5rem] p-16 md:p-24 border border-slate-100">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 text-center">{t.mission.goalsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[t.mission.goal1, t.mission.goal2, t.mission.goal3, t.mission.goal4].map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-8 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-accent transition-all duration-500">
                  {React.createElement(icons[idx], { size: 28, strokeWidth: 1.5 })}
                </div>
                <p className="text-xl text-slate-600 leading-relaxed pt-2">{goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
