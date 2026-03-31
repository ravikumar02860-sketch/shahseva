import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils/cn';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.work, path: '/work' },
    { name: t.nav.impact, path: '/impact' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-soft rounded-2xl px-8 py-5 flex items-center justify-between">
          <div className="logo">
            <Link to="/" className="flex items-center transition-transform hover:scale-105">
              <img 
                src="https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F" 
                alt="Dargah Saiyad Ali Shah Seva Sansthan Logo"
                className="h-28 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
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
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
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
