import React from 'react';
import { motion } from 'motion/react';
import { Utensils, BookOpen, HeartPulse, Home, Users, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function WorkPage() {
  const { t } = useLanguage();

  const activities = [
    {
      title: t.work.activities.food.title,
      desc: t.work.activities.food.desc,
      icon: Utensils,
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-emerald-500'
    },
    {
      title: t.work.activities.education.title,
      desc: t.work.activities.education.desc,
      icon: BookOpen,
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-blue-500'
    },
    {
      title: t.work.activities.medical.title,
      desc: t.work.activities.medical.desc,
      icon: HeartPulse,
      img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-red-500'
    },
    {
      title: t.work.activities.families.title,
      desc: t.work.activities.families.desc,
      icon: Home,
      img: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-amber-500'
    },
    {
      title: t.work.activities.welfare.title,
      desc: t.work.activities.welfare.desc,
      icon: Users,
      img: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-indigo-500'
    },
    {
      title: t.work.activities.relief.title,
      desc: t.work.activities.relief.desc,
      icon: Heart,
      img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000',
      color: 'bg-rose-500'
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title={t.seo.work.title} 
        description={t.seo.work.description}
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
            {t.work.badge || "Our Mission"}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.work.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.work.desc}
          </motion.p>
        </div>

        {/* How It Works Section */}
        <section className="mb-48">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">{t.work.howItWorksTitle}</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">{t.work.howItWorksDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: t.work.step1Title, desc: t.work.step1Desc, step: "01" },
              { title: t.work.step2Title, desc: t.work.step2Desc, step: "02" },
              { title: t.work.step3Title, desc: t.work.step3Desc, step: "03" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 bg-white rounded-[3rem] shadow-strong border border-slate-50"
              >
                <span className="absolute -top-6 -left-6 w-16 h-16 bg-accent text-primary font-serif font-bold text-2xl flex items-center justify-center rounded-2xl shadow-lg">
                  {step.step}
                </span>
                <h3 className="text-2xl font-bold text-primary mb-4 mt-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 border border-white group transition-all duration-700 hover:shadow-primary/10 relative"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={act.img} 
                  alt={act.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                
                {/* Floating Icon */}
                <div className={`absolute top-8 right-8 w-16 h-16 ${act.color} text-white rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border border-white/20 backdrop-blur-md`}>
                  <act.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-serif font-bold text-white mb-3 tracking-tight drop-shadow-lg">{act.title}</h3>
                  <div className="w-16 h-1 bg-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 shadow-sm shadow-accent/50"></div>
                </div>
              </div>
              <div className="p-12">
                <p className="text-slate-600 text-lg leading-relaxed font-medium opacity-90">
                  {act.desc}
                </p>
                <div className="mt-10 flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-[0.2em] group-hover:text-accent transition-colors cursor-pointer">
                  <span>Learn More</span>
                  <div className="w-10 h-[2px] bg-current transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
}
