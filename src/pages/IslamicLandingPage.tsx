import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart,
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import SEO from '../components/SEO';
import { islamicLandingPages } from '../data/islamicLandingPages';

interface IslamicLandingPageProps {
  pageId?: string;
}

export default function IslamicLandingPage({ pageId: propPageId }: IslamicLandingPageProps) {
  const { id } = useParams<{ id: string }>();
  const slug = propPageId || id;
  const { language } = useLanguage();
  
  // Find the matching Islamic landing page data
  const page = islamicLandingPages.find(p => p.id === slug);

  // FAQ Accordion local state to expand independently
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24">
        <div className="text-center p-8 bg-white rounded-[2.5rem] shadow-xl max-w-md border border-slate-100">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <Heart size={40} className="animate-pulse text-accent" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Page Not Found</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The requested Shariah-compliant charity page could not be located.
          </p>
          <Link to="/donate" className="btn-primary w-full justify-center">
            Go to Donation Panel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 font-sans">
      <SEO 
        title={page.title}
        description={page.metaDescription}
        keywords={page.keyword}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": page.title,
              "description": page.metaDescription,
              "publisher": {
                "@type": "NGO",
                "name": "Dargah Saiyad Ali Shah Seva Sansthan",
                "nonprofitStatus": "COOP/2025/BHILWARA/500577"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": page.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        }}
      />

      {/* Islamic-styled Hero Section */}
      <section className="relative pt-32 pb-24 bg-primary-dark overflow-hidden text-white border-b-4 border-accent">
        {/* Repeating SVG geometric vector overlay */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none islamic-pattern" />
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest mb-8 shadow-inner"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Shariah-Compliant Charity
          </motion.div>

          {/* Elegant Arabic Calligraphy Accent */}
          <div className="mb-6 font-arabic text-4xl sm:text-5xl text-accent select-none drop-shadow-sm font-medium">
            {page.arabicPhrase}
          </div>
          <div className="text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-widest mb-6 block">
            — {page.arabicPhraseTranslit} —
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white mb-8 leading-tight tracking-tight max-w-3xl mx-auto font-style-normal"
          >
            {page.title}
          </motion.h1>

          <p className="text-slate-200 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto font-sans font-light">
            {page.introduction}
          </p>
        </div>
      </section>

      {/* Trust & Affiliation Banner */}
      <div className="max-w-4xl mx-auto px-4 -translate-y-6 relative z-10">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Award className="w-6 h-6 text-accent-dark" />
          </div>
          <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-2xl">
            <span className="font-bold text-primary">Islamic Heritage:</span> Shah Seva is proudly affiliated with <span className="text-primary-light font-bold">Dargah Saiyad Ali Shah</span> — serving the community with sincere Islamic values, compassion, and absolute financial transparency.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Columns */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Quranic Ayah Callout Block */}
          {page.quranVerse.arabic && (
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-primary/5 border border-primary/10 p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute right-4 bottom-4 text-primary/5 select-none font-arabic text-8xl pointer-events-none">
                القرآن
              </div>
              <div className="flex gap-4 items-start">
                <BookOpen className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div className="space-y-4">
                  <p className="text-right font-arabic text-2xl text-primary font-bold leading-loose select-all">
                    {page.quranVerse.arabic}
                  </p>
                  <p className="text-slate-700 italic leading-relaxed text-base font-serif">
                    {page.quranVerse.translation}
                  </p>
                  <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#006b3d] font-semibold">
                    — {page.quranVerse.reference}
                  </span>
                </div>
              </div>
            </motion.section>
          )}

          {/* Core Content Sections */}
          <div className="space-y-12">
            {page.sections.map((sec, sIdx) => (
              <section key={sIdx} className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-accent rounded-full inline-block shrink-0" />
                  {sec.title}
                </h2>
                <div className="text-slate-600 leading-relaxed text-base whitespace-pre-line font-sans space-y-4">
                  {sec.content}
                </div>
              </section>
            ))}
          </div>

          {/* Rich Frequently Asked Questions Accordion */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-8">Islamic Jurisprudence FAQs</h3>
            <div className="space-y-4">
              {page.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div 
                    key={fIdx} 
                    className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-primary bg-primary/5' : 'border-slate-100 bg-slate-50/50'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-bold text-base sm:text-lg"
                    >
                      <span className="flex gap-3">
                        <span className="text-accent font-serif font-bold">Q:</span>
                        {faq.question}
                      </span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-accent shrink-0" /> : <ChevronDown className="w-5 h-5 text-accent shrink-0" />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-600 border-t border-slate-100 leading-relaxed text-sm sm:text-base">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Affiliation Callout */}
          <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-100 text-center space-y-2">
            <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
              Shariah Verification Statement // Dargah Saiyad Ali Shah
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              Our collection accounts are audited periodically by Islamic financial scholars to confirm that no funds are co-mingled and that charity allocations comply strictly with Classical Fiqh guidelines.
            </p>
          </section>

        </div>

        {/* Sidebar Quick-Donate Card */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-28 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-primary to-accent" />
            
            <div className="w-14 h-14 bg-accent/10 text-accent-dark rounded-full flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-primary mb-3">Earn Eternal Rewards</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Establish your Sadaqah Jariyah or fulfill your Fardh obligations today. 100% of your contributions go to verified hospital care and food support.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#006b3d] shrink-0" />
                <span className="text-xs text-slate-600 font-medium">100% Direct Transfer Guarantee</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs text-slate-600 font-medium font-arabic">فريضة شرعية صحيحة</span>
              </div>
            </div>

            {/* Direct CTA button linking to action calculator or support panel */}
            <Link
              to={page.ctaUrl}
              className="btn-primary w-full justify-center group py-4 text-base tracking-wide font-bold rounded-2xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/95 text-white flex items-center gap-2"
            >
              <span>{page.ctaText}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 text-center">
              <Link to="/donate" className="text-xs text-accent-dark hover:underline font-semibold tracking-wide uppercase">
                Donate for general causes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
