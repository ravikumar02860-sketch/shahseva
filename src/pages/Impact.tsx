import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Heart, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function ImpactPage() {
  const { t } = useLanguage();

  const stats = [
    { label: t.impact.stats.lives, value: '12,500+', icon: Users, color: 'text-blue-600' },
    { label: t.impact.stats.villages, value: '25+', icon: TrendingUp, color: 'text-emerald-600' },
    { label: t.impact.stats.volunteers, value: '200+', icon: Heart, color: 'text-rose-600' },
    { label: t.impact.stats.years, value: '15+', icon: Award, color: 'text-amber-600' },
  ];

  const stories = [
    {
      name: t.impact.stories[0].name,
      text: t.impact.stories[0].text,
      img: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: t.impact.stories[1].name,
      text: t.impact.stories[1].text,
      img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title="Our Impact" 
        description="See the real-world impact of Dargah Saiyad Ali Shah Seva Sansthan. We have helped over 12,500 people across 25 villages with food, education, and healthcare."
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
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 text-accent font-bold tracking-widest uppercase text-[10px] mb-10 border border-accent/20 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            {t.impact.badge || "Our Success"}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.impact.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.impact.desc}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-48">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] shadow-2xl shadow-primary/5 border border-white text-center group transition-all duration-500 hover:shadow-strong"
            >
              <div className={`w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center ${stat.color} mx-auto mb-10 group-hover:scale-110 transition-transform duration-500 shadow-inner border border-slate-100`}>
                <stat.icon size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-6xl font-bold text-primary mb-4 tracking-tight">{stat.value}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="space-y-48">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight">{t.impact.storiesTitle}</h2>
            <div className="w-32 h-2 bg-accent mx-auto mt-8 rounded-full shadow-lg shadow-accent/20"></div>
          </div>
          
          {stories.map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2 group">
                <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/10 relative">
                  <img 
                    src={story.img} 
                    alt={story.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute bottom-12 left-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                    <p className="text-xs uppercase tracking-[0.4em] font-bold mb-2 text-accent">Impact Location</p>
                    <p className="text-2xl font-serif font-bold">Rajasthan, India</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="w-20 h-2.5 bg-accent rounded-full shadow-lg shadow-accent/20"></div>
                <h3 className="text-5xl md:text-6xl font-serif font-bold text-primary tracking-tight leading-[1.1]">{story.name}</h3>
                <div className="relative">
                  <div className="absolute -top-12 -left-12 text-accent/10 text-[12rem] font-serif opacity-50 select-none pointer-events-none">“</div>
                  <p className="text-slate-600 text-2xl md:text-3xl leading-relaxed italic font-medium relative z-10 opacity-90">
                    {story.text}
                  </p>
                  <div className="absolute -bottom-20 -right-12 text-accent/10 text-[12rem] font-serif opacity-50 select-none pointer-events-none">”</div>
                </div>
                <div className="flex items-center gap-8 pt-8">
                  <div className="w-20 h-20 bg-primary text-accent rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-primary/20 rotate-3">
                    <Heart size={36} strokeWidth={1.5} fill="currentColor" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-primary text-2xl tracking-tight">{t.impact.storyLabel} #{idx + 1}</span>
                    <span className="text-accent-dark text-[10px] uppercase tracking-[0.4em] font-bold">Verified Impact Story</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
}
