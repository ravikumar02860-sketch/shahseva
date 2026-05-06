import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { islamicNames, IslamicName } from '../data/islamicNames';
import { 
  Search, 
  Heart, 
  Share2, 
  Info, 
  ArrowRight, 
  X, 
  Bookmark, 
  TrendingUp, 
  Filter, 
  Volume2, 
  Copy,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function NamesFinder() {
  const { language } = useLanguage();
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedName, setSelectedName] = useState<IslamicName | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('favorite_names');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id) 
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('favorite_names', JSON.stringify(newFavs));
  };

  const filteredNames = useMemo(() => {
    return islamicNames.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.arabic.includes(searchQuery);
      
      const matchesCategory = 
        activeFilter === 'all' || 
        (activeFilter === 'boy' && item.gender === 'Boy') ||
        (activeFilter === 'girl' && item.gender === 'Girl') ||
        item.category.some(c => c.toLowerCase() === activeFilter.toLowerCase());

      const matchesFavorites = !showFavoritesOnly || favorites.includes(item.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [searchQuery, activeFilter, showFavoritesOnly, favorites]);

  const trendingNames = useMemo(() => {
    return islamicNames.filter(n => n.trending).slice(0, 5);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast here
  };

  const shareOnWhatsApp = (name: IslamicName) => {
    const text = `Islamic Name: ${name.name} (${name.arabic})\nMeaning: ${name.meaning}\nGender: ${name.gender}\nOrigin: ${name.origin}\nFind more at Shah Seva Names Finder!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <SEO 
        title={t.names.seo.title}
        description={t.names.seo.description}
        keywords="islamic names, muslim baby names, mohammad meaning, fatima meaning, islamic name finder, muslim names for boys, muslim names for girls, arabic name meanings"
      />

      {/* Hero Section */}
      <section className="bg-primary-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none islamic-pattern"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent font-bold rounded-full text-xs uppercase tracking-widest mb-8 border border-accent/20"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            {t.names.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
          >
            {t.names.title}
          </motion.h1>
          <p className="text-primary-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-90">
            {t.names.subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent transition-colors">
              <Search size={24} />
            </div>
            <input 
              type="text"
              placeholder={t.names.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-6 bg-white rounded-[2.5rem] shadow-2xl text-slate-900 focus:ring-4 focus:ring-accent/20 outline-none transition-all text-lg"
            />
          </div>

          {/* Trending Chips */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
             <span className="text-primary-light text-sm font-bold uppercase tracking-wider">{t.names.trendingChip}</span>
             {trendingNames.map(name => (
               <button 
                 key={name.id}
                 onClick={() => setSelectedName(name)}
                 className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full border border-white/10 transition-all flex items-center gap-2"
               >
                 {name.name} <TrendingUp size={14} className="text-accent" />
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 space-y-8">
             <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Filter size={18} className="text-accent" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {Object.entries(t.names.filters).map(([key, label]) => (
                    <button 
                      key={key}
                      onClick={() => setActiveFilter(key)}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-medium transition-all flex justify-between items-center ${activeFilter === key ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}`}
                    >
                      {label as string}
                      {activeFilter === key && <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <button 
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${showFavoritesOnly ? 'bg-accent/10 text-accent-dark' : 'bg-slate-50 text-slate-600'}`}
                  >
                    <Bookmark size={18} className={showFavoritesOnly ? 'fill-accent' : ''} />
                    {t.names.favorites} ({favorites.length})
                  </button>
                </div>
             </div>

             {/* Ad/NGO Info Promo */}
             <div className="bg-primary-dark p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.1] islamic-pattern"></div>
                <div className="relative z-10">
                  <Bookmark className="text-accent mb-4" size={32} />
                  <h4 className="text-xl font-serif font-bold mb-3">Sponsor a Child</h4>
                  <p className="text-xs text-primary-light/70 leading-relaxed mb-6 font-light">
                    Your contribution can change the future of an underprivileged child in Bhilwara.
                  </p>
                  <a href="/donation" className="inline-flex items-center gap-2 text-accent text-sm font-bold group">
                    Donate Education <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
             </div>
          </aside>

          {/* Results Grid */}
          <main className="flex-1">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-serif font-bold text-primary-dark">
                 {searchQuery ? `Results for "${searchQuery}"` : t.names.filters[activeFilter as keyof typeof t.names.filters]}
                 <span className="ml-3 text-sm font-sans font-normal text-slate-400">({filteredNames.length} names)</span>
               </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               <AnimatePresence mode="popLayout">
                 {filteredNames.length > 0 ? filteredNames.map((item) => (
                   <motion.div
                     layout
                     key={item.id}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     whileHover={{ y: -5 }}
                     onClick={() => setSelectedName(item)}
                     className="bg-white p-6 rounded-[2rem] shadow-soft border border-slate-100 hover:border-accent transition-all cursor-pointer group relative overflow-hidden"
                   >
                     <div className="flex justify-between items-start mb-4">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.gender === 'Boy' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                         {item.gender}
                       </span>
                       <button 
                         onClick={(e) => toggleFavorite(item.id, e)}
                         className="p-2 rounded-full hover:bg-slate-50 transition-colors"
                       >
                         <Bookmark size={20} className={`${favorites.includes(item.id) ? 'fill-accent text-accent' : 'text-slate-300'}`} />
                       </button>
                     </div>
                     
                     <div className="mb-4">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-2xl font-arabic text-accent-dark opacity-80 mt-1">{item.arabic}</p>
                     </div>
                     
                     <p className="text-sm text-slate-600 line-clamp-2 mb-6 font-light">{item.meaning}</p>
                     
                     <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.origin}</span>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                     </div>
                   </motion.div>
                 )) : (
                   <div className="col-span-full py-20 text-center">
                      <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search size={32} className="text-slate-300" />
                      </div>
                      <p className="text-slate-500 font-medium">{t.names.noResults}</p>
                   </div>
                 )}
               </AnimatePresence>
             </div>
          </main>
        </div>
      </section>

      {/* Name Details Modal */}
      <AnimatePresence>
        {selectedName && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedName(null)}
               className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md"
             ></motion.div>
             
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-3xl overflow-hidden"
             >
                {/* Modal Header */}
                <div className="bg-primary-dark p-12 text-center relative">
                   <div className="absolute inset-0 opacity-[0.2] islamic-pattern"></div>
                   <button 
                     onClick={() => setSelectedName(null)}
                     className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors"
                   >
                     <X size={24} />
                   </button>
                   
                   <div className="relative z-10">
                     <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${selectedName.gender === 'Boy' ? 'bg-blue-500/20 text-blue-300' : 'bg-pink-500/20 text-pink-300'}`}>
                       {selectedName.gender}
                     </span>
                     <h2 className="text-5xl font-serif font-bold text-white mb-2">{selectedName.name}</h2>
                     <p className="text-5xl font-arabic text-accent mt-4">{selectedName.arabic}</p>
                   </div>
                </div>

                {/* Modal Body */}
                <div className="p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-6">
                         <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.names.details.meaning}</span>
                            <p className="text-slate-900 font-medium">{selectedName.meaning}</p>
                         </div>
                         <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.names.details.urduMeaning}</span>
                            <p className="text-slate-900 font-medium">{selectedName.urduMeaning}</p>
                         </div>
                         <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.names.details.origin}</span>
                            <p className="text-slate-900 font-medium">{selectedName.origin}</p>
                         </div>
                      </div>
                      <div className="space-y-6">
                         <div className="flex gap-10">
                           <div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.names.details.luckyNumber}</span>
                              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent font-bold">
                                {selectedName.luckyNumber}
                              </div>
                           </div>
                           <div className="flex-1">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Authenticity</span>
                              <div className="flex items-center gap-1 text-green-500">
                                 <CheckBadge /> Verified
                              </div>
                           </div>
                         </div>
                         <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.names.details.significance}</span>
                            <p className="text-slate-600 text-sm leading-relaxed italic border-l-4 border-accent/20 pl-4">{selectedName.significance}</p>
                         </div>
                      </div>
                   </div>

                   {/* Similar Names */}
                   <div className="mb-10">
                      <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <TrendingUp size={16} className="text-accent" />
                        {t.names.details.similar}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                         {islamicNames.filter(n => n.gender === selectedName.gender && n.id !== selectedName.id).slice(0, 4).map(similar => (
                           <button 
                             key={similar.id}
                             onClick={() => setSelectedName(similar)}
                             className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs rounded-xl border border-slate-100 transition-colors"
                           >
                             {similar.name}
                           </button>
                         ))}
                      </div>
                   </div>

                   {/* Action Footer */}
                   <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-100">
                      <button 
                        onClick={() => toggleFavorite(selectedName.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold transition-all ${favorites.includes(selectedName.id) ? 'bg-accent text-accent-dark' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                      >
                        <Bookmark size={18} className={favorites.includes(selectedName.id) ? 'fill-accent-dark' : ''} />
                        {favorites.includes(selectedName.id) ? 'Saved' : 'Save Name'}
                      </button>
                      <button 
                        onClick={() => shareOnWhatsApp(selectedName)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-bold transition-all"
                      >
                        <Share2 size={18} /> Share
                      </button>
                       <button 
                        onClick={() => copyToClipboard(`${selectedName.name} (${selectedName.arabic}): ${selectedName.meaning}`)}
                        className="p-4 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-primary rounded-2xl transition-all"
                      >
                        <Copy size={20} />
                      </button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Content Section for SEO */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
           <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center underline decoration-accent/30 underline-offset-8">Naming Your Baby in Islam</h2>
           <p className="text-slate-600 leading-loose font-light">
             In Islam, naming a child is a sacred responsibility given to parents. The Prophet Mohammad (PBUH) emphasized the importance of choosing names with good meanings, as a person's name is part of their identity and character. 
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
              <div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <CheckBadge className="text-accent" />
                   The Prophet's Advice
                 </h3>
                 <p className="text-sm text-slate-500 leading-relaxed font-light">
                   The Prophet (PBUH) once said: "On the Day of Resurrection, you will be called by your names and by your fathers' names, so give yourselves good names." This reminds us that our names carry spiritual weight.
                 </p>
              </div>
              <div>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <TrendingUp className="text-accent" />
                   Modern & Traditional
                 </h3>
                 <p className="text-sm text-slate-500 leading-relaxed font-light">
                   While traditional names like Mohammad, Ahmed, and Fatima remain evergreen and highly blessed, many Muslim parents today also look for modern Arabic names that are unique yet rooted in Islamic values.
                 </p>
              </div>
           </div>

           <h3 className="text-2xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h3>
           <div className="space-y-6">
              <FaqItem 
                 q="What are the best Islamic names?"
                 a="The most beloved names to Allah are Abdullah and Abdur-Rahman. Additionally, names of the Prophets (Anbiya) and their companions (Sahaba) are considered highly auspicious."
              />
              <FaqItem 
                 q="Can I use names from the Quran?"
                 a="Yes, Quranic names (like Maryam, Yusuf, Idrees) are very popular and carry deep spiritual significance."
              />
              <FaqItem 
                q="How do I find unique Muslim names?"
                a="Our dictionary includes a 'Unique' filter that highlights rare but meaningful Arabic names for both boys and girls."
              />
           </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-bold text-slate-900 group-hover:text-primary transition-colors">{q}</span>
        <ChevronRight className={`transition-transform ${isOpen ? 'rotate-90' : ''} text-slate-300`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-500 pb-4 leading-relaxed font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CheckBadge({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.713 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.713 3.066 3.066 0 012.812 2.812 3.066 3.066 0 00.713 1.745 3.066 3.066 0 010 3.976 3.066 3.066 0 00-.713 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.713 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.713 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.713-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.713-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
