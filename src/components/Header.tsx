import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Heart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.mission, path: '/mission' },
    { name: t.nav.work, path: '/work' },
    { name: t.nav.impact, path: '/impact' },
    { name: t.nav.transparency, path: '/transparency' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const categoryLinks = [
    { name: t.footer.categories.education, path: '/donate-for-education' },
    { name: t.footer.categories.children, path: '/donate-for-poor-children' },
    { name: t.footer.categories.medical, path: '/donate-for-medical-help' },
    { name: t.footer.categories.food, path: '/donate-for-food-for-poor' },
    { name: t.footer.categories.disaster, path: '/donate-for-disaster-relief' },
    { name: t.footer.categories.orphanage, path: '/donate-to-orphanage-india' },
    { name: t.footer.categories.girlChild, path: '/donate-for-girl-child-education' },
    { name: t.footer.categories.cancer, path: '/donate-for-cancer-patient-treatment' },
    { name: t.footer.categories.oldAge, path: '/donate-for-old-age-home' },
    { name: t.footer.categories.homeless, path: '/donate-for-homeless-people' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3"
    >
      <div className="max-w-full mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-soft rounded-xl px-6 py-2 flex items-center justify-between">
          <div className="logo">
            <Link to="/" className="flex items-center transition-transform hover:scale-105">
              <img 
                src="https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F" 
                alt="Dargah Saiyad Ali Shah Seva Sansthan Logo"
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-base font-semibold rounded-xl transition-all duration-300 hover:bg-slate-50',
                  location.pathname === link.path 
                    ? 'text-primary bg-slate-50' 
                    : 'text-slate-600 hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsCategoriesOpen(true)}
                className={cn(
                  'px-4 py-2 text-base font-semibold rounded-xl transition-all duration-300 hover:bg-slate-50 flex items-center gap-1',
                  categoryLinks.some(link => location.pathname === link.path)
                    ? 'text-primary bg-slate-50'
                    : 'text-slate-600 hover:text-primary'
                )}
              >
                {t.nav.categories}
                <ChevronDown size={16} className={cn("transition-transform duration-300", isCategoriesOpen && "rotate-180")} />
              </button>
              
              <div 
                onMouseLeave={() => setIsCategoriesOpen(false)}
                className={cn(
                  "absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 transition-all duration-300 origin-top",
                  isCategoriesOpen ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                {categoryLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsCategoriesOpen(false)}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                      location.pathname === link.path
                        ? "bg-primary/5 text-primary"
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-base font-semibold rounded-xl transition-all duration-300 hover:bg-slate-50',
                  location.pathname === link.path 
                    ? 'text-primary bg-slate-50' 
                    : 'text-slate-600 hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 ml-4 mr-2 bg-slate-100/50 p-1 rounded-xl">
              <button 
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-lg transition-all",
                  language === 'en' 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-400 hover:text-primary"
                )}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('hi')}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-lg transition-all",
                  language === 'hi' 
                    ? "bg-white text-primary shadow-sm" 
                    : "text-slate-400 hover:text-primary"
                )}
              >
                हिन्दी
              </button>
            </div>

            <Link
              to="/donate"
              className="btn-primary btn-sm ml-2 group"
            >
              <Heart size={16} className="fill-white group-hover:scale-110 transition-transform" />
              {t.nav.donate}
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-primary transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl border border-slate-100 p-6 rounded-2xl flex flex-col gap-2 md:hidden max-h-[80vh] overflow-y-auto mt-2"
          >
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-slate-50',
                  location.pathname === link.path ? 'text-accent' : 'text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Categories */}
            <div className="py-2 border-b border-slate-50">
              <button 
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center justify-between w-full text-lg font-medium text-primary"
              >
                {t.nav.categories}
                <ChevronDown size={20} className={cn("transition-transform", isCategoriesOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col gap-2 mt-2 pl-4"
                  >
                    {categoryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => { setIsOpen(false); setIsCategoriesOpen(false); }}
                        className={cn(
                          "text-base py-2",
                          location.pathname === link.path ? "text-accent" : "text-slate-600"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(4).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium py-2 border-b border-slate-50',
                  location.pathname === link.path ? 'text-accent' : 'text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 py-2 border-b border-slate-50">
              <span className="text-sm font-bold text-slate-400 flex items-center gap-2">
                <Globe size={16} /> Language:
              </span>
              <button 
                onClick={() => { setLanguage('en'); setIsOpen(false); }}
                className={cn("text-sm font-bold", language === 'en' ? "text-accent" : "text-primary")}
              >
                English
              </button>
              <button 
                onClick={() => { setLanguage('hi'); setIsOpen(false); }}
                className={cn("text-sm font-bold", language === 'hi' ? "text-accent" : "text-primary")}
              >
                हिन्दी
              </button>
            </div>

            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full mt-2"
            >
              <Heart size={20} fill="currentColor" />
              {t.nav.donate}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
