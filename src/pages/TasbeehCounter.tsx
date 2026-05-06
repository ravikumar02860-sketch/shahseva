import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { RefreshCw, History, Target, Volume2, VolumeX, Moon, LayoutGrid } from 'lucide-react';

export default function TasbeehCounter() {
  const { language } = useLanguage();
  const t = translations[language];

  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [totalCount, setTotalCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [history, setHistory] = useState<{ count: number, date: string }[]>([]);
  
  // Audio for feedback
  const clickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Load from local storage
    const saved = localStorage.getItem('tasbeeh_count');
    if (saved) setTotalCount(parseInt(saved));
    
    const savedHistory = localStorage.getItem('tasbeeh_history');
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  const handleIncrement = () => {
    setCount(prev => {
      const next = prev + 1;
      if (next === target) {
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        // Target reached effect
      }
      return next;
    });
    setTotalCount(prev => {
      const next = prev + 1;
      localStorage.setItem('tasbeeh_count', next.toString());
      return next;
    });

    if (soundEnabled && clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play().catch(() => {});
    }
  };

  const resetSession = () => {
    if (count > 0) {
      const newHistory = [{ count, date: new Date().toLocaleDateString() }, ...history].slice(0, 5);
      setHistory(newHistory);
      localStorage.setItem('tasbeeh_history', JSON.stringify(newHistory));
    }
    setCount(0);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title={t.tasbeeh.seo.title}
        description={t.tasbeeh.seo.description}
        keywords="digital tasbeeh counter, online dhikr counter, prayer beads online, tasbeeh counter web app, tasbih tool, muslim dhikr"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Digital Tasbeeh Counter",
          "description": t.tasbeeh.seo.description,
          "applicationCategory": "SpiritualApplication",
          "operatingSystem": "All",
          "url": "https://shahseva.vercel.app/tasbeeh-counter"
        }}
      />
      
      <audio ref={clickSound} src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" />

      {/* Hero Section */}
      <section className="bg-primary-dark py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none islamic-pattern"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest mb-8 border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            {t.tasbeeh.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 relative inline-block"
          >
            <span className="block text-accent text-3xl mb-4 font-arabic opacity-90 select-none tracking-normal">سبحة رقمية</span>
            {t.tasbeeh.title}
          </motion.h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto leading-relaxed font-light opacity-90">
            {t.tasbeeh.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Counter UI */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-slate-100 decorative-border relative overflow-hidden">
               {/* Controls Top */}
               <div className="flex justify-between items-center mb-12">
                  <button 
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className="p-3 rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-colors"
                  >
                    {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-500">
                    <Target size={14} className="text-accent" />
                    Target: {target}
                  </div>
                  <button 
                    onClick={() => {
                      const newTarget = target === 33 ? 99 : target === 99 ? 100 : 33;
                      setTarget(newTarget);
                    }}
                    className="p-3 rounded-full bg-slate-50 text-slate-400 hover:text-primary transition-colors"
                  >
                    <RefreshCw size={20} />
                  </button>
               </div>

               {/* Counter Circle */}
               <div className="relative inline-block">
                 <motion.button
                   whileTap={{ scale: 0.95 }}
                   onClick={handleIncrement}
                   className="w-64 h-64 rounded-full bg-slate-50 border-[12px] border-primary-dark/5 flex flex-col items-center justify-center relative z-10 group shadow-inner"
                 >
                   <AnimatePresence mode="wait">
                     <motion.span 
                        key={count}
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.8 }}
                        className="text-7xl font-serif font-black text-primary-dark"
                     >
                       {count}
                     </motion.span>
                   </AnimatePresence>
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">{t.tasbeeh.start}</span>
                   
                   {/* Ripple Effect */}
                   <div className="absolute inset-0 rounded-full bg-primary/2 opacity-0 group-active:animate-ping"></div>
                 </motion.button>
                 
                 {/* Decorative background circle */}
                 <div className="absolute inset-0 -m-4 rounded-full border-2 border-dashed border-accent/20 animate-spin-slow"></div>
               </div>

               {/* Stats and Reset */}
               <div className="mt-12 flex flex-wrap justify-between items-center bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.tasbeeh.total}</span>
                    <span className="text-xl font-bold text-primary-dark">{totalCount}</span>
                  </div>
                  <button 
                    onClick={resetSession}
                    className="btn-accent px-6 py-3 text-sm flex items-center gap-2"
                  >
                    <RefreshCw size={18} /> {t.tasbeeh.reset}
                  </button>
               </div>
            </div>
          </div>

          {/* Sidebar / Info */}
          <div className="space-y-6">
            {/* History Widget */}
            <div className="bg-primary-dark p-8 rounded-[2.5rem] text-white">
              <h3 className="text-primary-light font-bold text-xs uppercase tracking-widest mb-6 flex items-center gap-2">
                <History size={16} /> {t.tasbeeh.history}
              </h3>
              <div className="space-y-4">
                {history.length > 0 ? history.map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-sm font-bold">{item.count}</span>
                    <span className="text-[10px] opacity-60 uppercase">{item.date}</span>
                  </div>
                )) : (
                  <p className="text-xs opacity-40 italic">No recent sessions</p>
                )}
              </div>
            </div>

            {/* Dhikr Suggestions */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <LayoutGrid size={18} className="text-accent" />
                Popular Dhikr
              </h3>
              <div className="space-y-2">
                {t.tasbeeh.dhikr.map((item: string, i: number) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs font-medium text-slate-600 hover:text-primary transition-colors flex justify-between items-center border border-transparent hover:border-primary/20">
                    {item}
                    <span className="text-accent">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none islamic-pattern"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="prose prose-slate prose-lg max-w-none">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">What is a Digital Tasbeeh Counter?</h2>
            <p className="text-slate-600 mb-6 font-light leading-relaxed">
              A **Digital Tasbeeh Counter** is a modern, electronic version of traditional prayer beads (Misbaha) used by Muslims to perform Dhikr—the remembrance of Allah. Our online tool is designed for daily users in India and around the world who want a convenient way to keep track of their spiritual practices on their smartphone or computer.
            </p>
            <p className="text-slate-600 mb-6 font-light leading-relaxed">
              Whether you are performing **SubhanAllah (33 times)**, **Alhamdulillah (33 times)**, or **Allahu Akbar (34 times)** after your daily prayers (Salah), this tool helps you stay focused without needing a physical counter.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Benefits of Using an Online Tasbeeh Counter</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 mb-12 list-none p-0">
               <li className="p-4 bg-white rounded-xl border border-slate-100 shadow-soft flex items-start gap-3">
                 <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent text-[10px] font-bold mt-1">1</span>
                 <span> **Accessibility:** Available anywhere, anytime on your mobile browser.</span>
               </li>
               <li className="p-4 bg-white rounded-xl border border-slate-100 shadow-soft flex items-start gap-3">
                 <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent text-[10px] font-bold mt-1">2</span>
                 <span> **Vibration Feedback:** Haptic feedback on mobile when reaching targets.</span>
               </li>
               <li className="p-4 bg-white rounded-xl border border-slate-100 shadow-soft flex items-start gap-3">
                 <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent text-[10px] font-bold mt-1">3</span>
                 <span> **Progress Tracking:** Automatically saves your total count and history.</span>
               </li>
               <li className="p-4 bg-white rounded-xl border border-slate-100 shadow-soft flex items-start gap-3">
                 <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent text-[10px] font-bold mt-1">4</span>
                 <span> **User-Friendly Interface:** Elegant, dark-mode ready, and optimized for low data usage.</span>
               </li>
            </ul>

            <div className="bg-primary-dark p-8 rounded-[3rem] text-white text-center">
               <Moon className="mx-auto text-accent mb-4" size={40} />
               <h3 className="text-2xl font-serif font-bold mb-4">Start Your Dhikr Today</h3>
               <p className="text-sm opacity-80 mb-6 font-light">"The best and most superior form of Dhikr is 'La ilaha illallah'." — Prophet Muhammad (S.A.W)</p>
               <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="btn-accent px-8 py-4">Click to Start Counting</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
