import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Quote, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Stories() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="pt-24 pb-20">
      <SEO 
        title={t.seo.stories.title}
        description={t.seo.stories.description}
        keywords={t.seo.stories.keywords}
      />

      {/* Hero */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            {t.stories.badge}
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            {t.stories.title}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            {t.stories.desc}
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.stories.items.map((story: any, i: number) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-primary">
                  {story.category}
                </div>
              </div>
              <div className="p-8 md:p-12 flex-grow">
                <Quote className="w-10 h-10 text-accent/20 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{story.name}</h3>
                <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">
                  "{story.excerpt}"
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8 text-sm text-slate-700 leading-relaxed">
                  {story.full}
                </div>
                <div className="mt-auto">
                   <Link to="/donate" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Support Similar Lives <ArrowRight size={18} />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Stats Highlight */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 text-center text-white">
           <Heart className="w-12 h-12 text-accent mx-auto mb-6" />
           <h2 className="text-3xl font-serif font-bold mb-4">Be the Reason Behind a Success Story</h2>
           <p className="text-primary-light text-lg mb-10 max-w-xl mx-auto">
             Your contribution today could be the turning point in someone's life tomorrow.
           </p>
           <Link to="/donate" className="btn-accent btn-lg">Donate Now</Link>
        </div>
      </section>
    </div>
  );
}
