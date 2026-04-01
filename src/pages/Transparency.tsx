import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, PieChart, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function TransparencyPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title={t.transparency.title} 
        description={t.transparency.desc}
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
            Accountability
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.transparency.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.transparency.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10">
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">{t.transparency.reportTitle}</h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10">{t.transparency.reportDesc}</p>
            
            <div className="space-y-8">
              {t.transparency.usage.map((item: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>{item.label}</span>
                    <span className="text-accent-dark">{item.value}</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: idx * 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/20 relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-accent mb-10">
              <FileText size={40} strokeWidth={1.5} />
            </div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent">{t.transparency.auditTitle}</h2>
            <p className="text-slate-200 text-xl leading-relaxed mb-12">{t.transparency.auditDesc}</p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-accent font-serif font-bold text-4xl mb-2">100%</div>
                <div className="text-slate-300 text-sm uppercase tracking-widest">Accountability</div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-accent font-serif font-bold text-4xl mb-2">Annual</div>
                <div className="text-slate-300 text-sm uppercase tracking-widest">Audits</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-slate-50/50 backdrop-blur-sm rounded-[5rem] p-16 md:p-24 border border-slate-100 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-primary text-accent rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20"
          >
            <PieChart size={48} strokeWidth={1.5} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 tracking-tight">Your Impact is Measurable</h2>
          <p className="text-slate-600 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-16 opacity-90">
            We provide regular updates to our donors, including photos, videos, and reports on the specific projects they support.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <span className="text-lg font-bold text-slate-700">Real-time Tracking</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <span className="text-lg font-bold text-slate-700">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
