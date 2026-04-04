import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function GalleryPage() {
  const { t } = useLanguage();

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.food
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.education
    },
    {
      url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.medical
    },
    {
      url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.families
    },
    {
      url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.welfare
    },
    {
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.relief
    },
    {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.smiles
    },
    {
      url: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.success
    },
    {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000',
      title: t.gallery.images.hope
    }
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title="Photo Gallery" 
        description="Explore the visual journey of Shah Seva Sansthan Society. See our social impact, community service, and charity events in Bhilwara through our photo gallery."
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
            {t.gallery.badge || "Visual Journey"}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.gallery.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.gallery.desc}
          </motion.p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -15 }}
              className="relative group overflow-hidden rounded-[3.5rem] shadow-2xl shadow-primary/5 break-inside-avoid border border-white transition-all duration-700 hover:shadow-strong"
            >
              <div className="overflow-hidden aspect-auto">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Featured Moment</p>
                  <h3 className="text-white font-serif font-bold text-4xl tracking-tight leading-tight">{img.title}</h3>
                  <div className="w-16 h-1.5 bg-accent mt-6 rounded-full shadow-lg shadow-accent/20"></div>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/40 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

  );
}
