import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-20">
      <SEO 
        title={t.blog.title} 
        description={t.blog.desc}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6"
          >
            {t.blog.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            {t.blog.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.blog.posts.map((post: any, idx: number) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-soft border border-slate-100 hover:shadow-strong transition-all duration-500 group"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={`https://picsum.photos/seed/${post.id}/800/600`} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary font-bold rounded-full text-[10px] uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </div>
                </div>
                
                <h2 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group-hover:text-accent"
                >
                  {t.blog.readMore} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
