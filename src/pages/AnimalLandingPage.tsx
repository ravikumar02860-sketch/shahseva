import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart,
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Compass,
  Sparkles,
  HeartHandshake,
  Activity,
  Plus
} from 'lucide-react';
import SEO from '../components/SEO';
import { animalLandingPages } from '../data/animalLandingPages';

interface AnimalLandingPageProps {
  pageId?: string;
}

export default function AnimalLandingPage({ pageId: propPageId }: AnimalLandingPageProps) {
  const { id } = useParams<{ id: string }>();
  const slug = propPageId || id;
  
  // Find the matching Animal landing page data
  const page = animalLandingPages.find(p => p.id === slug);

  // FAQ Accordion local state to expand independently
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-24" id="animal-page-not-found">
        <div className="text-center p-8 bg-white rounded-[2.5rem] shadow-xl max-w-md border border-slate-100" id="animal-not-found-card">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6" id="animal-not-found-icon-wrap">
            <Heart size={40} className="animate-pulse text-amber-500" id="animal-not-found-pulse-heart" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4" id="animal-not-found-title">Page Not Found</h1>
          <p className="text-slate-600 mb-8 leading-relaxed" id="animal-not-found-desc">
            The requested animal welfare campaign page could not be located.
          </p>
          <Link to="/donate" className="btn-primary w-full justify-center bg-amber-600 hover:bg-amber-700 border-amber-600" id="animal-not-found-btn">
            Go to Donation Panel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 font-sans" id={`animal-landing-${page.id}`}>
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

      {/* Styled Hero Section for Nature & Animal Empathy */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-amber-950 via-amber-900 to-emerald-950 overflow-hidden text-white border-b-4 border-amber-500" id="animal-hero-section">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center" id="animal-hero-content">
          {/* Glowing Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-8 shadow-inner"
            id="animal-glowing-badge"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Street Animal Coexistence & Care
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white mb-8 leading-tight tracking-tight max-w-3xl mx-auto"
            id="animal-hero-title"
          >
            {page.title}
          </motion.h1>

          <p className="text-amber-100/90 leading-relaxed text-base sm:text-lg max-w-3xl mx-auto font-sans font-light" id="animal-hero-intro">
            Providing emergency medicine, daily food, and shelter for sick, injured, and neglected stray animals in Rajasthan. Fulfilling sacred duties of universal compassion.
          </p>
        </div>
      </section>

      {/* Affiliation Callout */}
      <div className="max-w-4xl mx-auto px-4 -translate-y-6 relative z-10" id="animal-heritage-banner">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-amber-100/50 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0" id="animal-h-icon">
            <HeartHandshake className="w-6 h-6 text-amber-600" />
          </div>
          <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-2xl" id="animal-h-text">
            <span className="font-bold text-amber-900">Universal Mercy:</span> Shah Seva is affiliated with <span className="text-emerald-800 font-bold">Dargah Saiyad Ali Shah</span> — serving rural and street communities with absolute empathy for all living creatures.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12" id="animal-main-grid">
        {/* Main Content Info */}
        <div className="lg:col-span-8 space-y-12" id="animal-content-wrapper">
          
          {/* Emotional Story Panel */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 relative overflow-hidden"
            id="animal-story-section"
          >
            <div className="absolute right-4 top-4 text-emerald-600/5 select-none font-bold text-7xl pointer-events-none font-serif">
              Story
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-amber-500 rounded-full inline-block shrink-0" />
              {page.storyTitle}
            </h2>
            <div className="text-slate-600 leading-relaxed text-base font-sans whitespace-pre-line bg-gradient-to-r from-amber-50/30 to-emerald-50/10 p-6 sm:p-8 rounded-3xl border border-slate-50">
              {page.storyContent}
            </div>
          </motion.section>

          {/* Spiritual Perspectives Panel */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6" id="animal-perspectives-section">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-emerald-600 rounded-full inline-block shrink-0" />
              {page.perspectivesTitle}
            </h2>
            <div className="text-slate-600 leading-relaxed text-base font-sans whitespace-pre-line space-y-4">
              {page.perspectivesContent}
            </div>
          </section>

          {/* Why Emergency Treatment Matters */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6" id="animal-details-section">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-amber-500 rounded-full inline-block shrink-0" />
              {page.whyItMattersTitle}
            </h2>
            <div className="text-slate-600 leading-relaxed text-base font-sans whitespace-pre-line space-y-4">
              {page.whyItMattersContent}
            </div>
          </section>

          {/* How Shah Seva Deploys Animal Welfare Contributions */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6 animate-fade-in" id="animal-work-section">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-emerald-600 rounded-full inline-block shrink-0" />
              {page.shahSevaWorkTitle}
            </h2>
            <div className="text-slate-600 leading-relaxed text-base font-sans whitespace-pre-line space-y-4">
              {page.shahSevaWorkContent}
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm" id="animal-faq-section">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Compass className="w-6 h-6 text-amber-500 shrink-0" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4" id="animal-faq-accordion">
              {page.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div 
                    key={fIdx} 
                    className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                      isOpen ? 'border-amber-600 bg-amber-50/10' : 'border-slate-100 bg-slate-50/50'
                    }`}
                    id={`faq-item-${fIdx}`}
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-emerald-950 font-bold text-base sm:text-lg"
                      id={`faq-button-${fIdx}`}
                    >
                      <span className="flex gap-3">
                        <span className="text-amber-500 font-serif font-bold">Q:</span>
                        {faq.question}
                      </span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-amber-500 shrink-0" />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          id={`faq-answer-wrap-${fIdx}`}
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-600 border-t border-slate-100 leading-relaxed text-sm sm:text-base" id={`faq-answer-${fIdx}`}>
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

          {/* Legal Non-profit disclaimer */}
          <section className="bg-slate-100/50 p-8 rounded-3xl border border-slate-100 text-center space-y-2" id="animal-disclaimer">
            <p className="text-xs text-slate-400 font-mono tracking-wider uppercase">
              GOVERNMENT LICENSING STATEMENT // STRAY WELFARE
            </p>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              Shah Seva runs stray animal operations alongside our clinical networks. Under Registration COOP/2025/BHILWARA/500577, all public donations are monitored to guarantee direct utility on raw food, ambulance fuel, and specialist vet fees.
            </p>
          </section>

        </div>

        {/* Action Sidebar for Animal Welfare */}
        <div className="lg:col-span-4 space-y-8" id="animal-sidebar-col">
          <div className="sticky top-28 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl relative overflow-hidden" id="animal-sidebar-card">
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-amber-600 to-emerald-600" />
            
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6" id="sidebar-heart-icon">
              <Heart className="w-7 h-7 text-amber-500" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3" id="sidebar-title">Be Their Voice</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6" id="sidebar-desc">
              Stray animals have no words to express pain or beg for meals. Fulfill the divine calling of mercy and fund emergency recovery.
            </p>

            <div className="space-y-4 mb-8" id="sidebar-list">
              <div className="p-4 rounded-2xl bg-amber-50/30 border border-amber-100/50 flex items-center gap-3" id="sidebar-listItem-1">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                <span className="text-xs text-slate-600 font-medium">100% On-Ground Medicine Utility</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/30 border border-emerald-100/30 flex items-center gap-3" id="sidebar-listItem-2">
                <Activity className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs text-slate-600 font-medium font-sans">Ahimsa & Jiva Daya</span>
              </div>
            </div>

            {/* Direct CTA leading to the custom fundraiser path */}
            <Link
              to="/donate"
              className="btn-primary w-full justify-center group py-4 text-base tracking-wide font-bold rounded-2xl shadow-lg shadow-amber-600/10 bg-amber-600 hover:bg-amber-700 border-amber-600 text-white flex items-center gap-2"
              id="sidebar-cta-btn"
            >
              <span>Donate to save an animal today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="mt-6 text-center" id="sidebar-footer">
              <p className="text-xs text-slate-400">
                Official charity: <span className="font-mono text-xs select-all text-slate-600 font-semibold underline">shahseva.vercel.app</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
