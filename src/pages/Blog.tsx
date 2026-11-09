import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight, Calendar, Tag, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getTopicImageUrl } from '../utils/topicImages';
import { prefetchBlogPost } from '../utils/prefetch';

export default function BlogPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(12);

  const allPosts = useMemo(() => {
    return Array.isArray(t?.blog?.posts) ? t.blog.posts : [];
  }, [t]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allPosts.forEach((p: any) => {
      if (p.category) cats.add(p.category);
    });
    return ['All', ...Array.from(cats)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post: any) => {
      const matchesCategory = selectedCategory === 'All' || post.category?.toLowerCase() === selectedCategory.toLowerCase();
      const matchesQuery = !searchQuery.trim() || 
        post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-20">
      <SEO 
        title={t.blog.title} 
        description={t.blog.desc}
        keywords="charity blog india, donate money to charity, NGO research, blood donation india, plasma donation eligibility, Shah Seva articles"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4"
          >
            {t.blog.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-slate-600 text-lg"
          >
            {t.blog.desc}
          </motion.p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search articles, guides, blood & plasma donation, charity tips..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 text-slate-800 text-sm md:text-base placeholder:text-slate-400"
            />
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(12);
                  }}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts Grid */}
        {visiblePosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 max-w-md mx-auto p-8">
            <p className="text-slate-600 text-lg mb-4">No matching articles found.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn-primary text-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post: any, idx: number) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.12) }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-soft border border-slate-100 hover:shadow-strong transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-slate-100">
                    <img 
                      src={getTopicImageUrl(post.id, 600)} 
                      alt={post.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1 bg-white/95 backdrop-blur-md text-primary font-bold rounded-full text-[10px] uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={13} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag size={13} />
                        {post.category}
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-serif font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                      <Link 
                        to={`/blog/${post.id}`}
                        onMouseEnter={prefetchBlogPost}
                        onFocus={prefetchBlogPost}
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link 
                    to={`/blog/${post.id}`} 
                    onMouseEnter={prefetchBlogPost}
                    onFocus={prefetchBlogPost}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all group-hover:text-accent"
                  >
                    {t.blog.readMore || 'Read Full Guide'} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-3.5 bg-white text-primary font-bold text-sm rounded-full border border-primary/20 shadow-sm hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2"
            >
              <Sparkles size={16} /> Load More Articles ({filteredPosts.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
