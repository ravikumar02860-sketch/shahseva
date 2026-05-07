import React from 'react';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import SEO from './SEO';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <SEO 
        title="404 - Page Not Found | Shah Seva Trust" 
        description="The page you are looking for might have been removed or is temporarily unavailable."
      />
      
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-9xl font-serif font-bold text-primary/10 select-none">404</div>
          <div className="relative -mt-16">
            <h1 className="text-4xl font-serif font-bold text-primary mb-4">
              {t.common?.notFoundTitle || "Page Not Found"}
            </h1>
            <p className="text-slate-600 text-lg mb-10">
              {t.common?.notFoundDesc || "The path you follow has led to a dead end. Perhaps the content has moved or the link is broken."}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20"
            >
              <Home size={20} />
              Return Home
            </motion.button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-full font-bold hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
