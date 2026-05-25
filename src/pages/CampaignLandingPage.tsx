import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  CircleDollarSign,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import { seoLandingPages } from '../data/seoLandingPages';
import { AdditionalSEOPage, seoAdditionalPages } from '../data/seoAdditionalPages';
import { seoAdditionalPagesPart2 } from '../data/seoAdditionalPagesPart2';
import { seoAdditionalPagesPart3 } from '../data/seoAdditionalPagesPart3';
import { getTopicImageUrl } from '../utils/topicImages';

// Aggregate all SEO landing pages from standard, parts 1, 2, and 3, typecasted to AdditionalSEOPage
const allCampaignPages: AdditionalSEOPage[] = [
  ...seoLandingPages as AdditionalSEOPage[],
  ...seoAdditionalPages,
  ...seoAdditionalPagesPart2,
  ...seoAdditionalPagesPart3
];

interface CampaignLandingPageProps {
  campaignId?: string;
}

export default function CampaignLandingPage({ campaignId: propCampaignId }: CampaignLandingPageProps) {
  const { id } = useParams<{ id: string }>();
  const campaignSlug = propCampaignId || id;
  const { t } = useLanguage();
  
  // Find the campaign data from our aggregated SEO Landing Pages datasets
  const campaign = allCampaignPages.find(p => p.id === campaignSlug);
  
  // Local state for interactive donation selector
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-[2.5rem] shadow-xl max-w-md border border-slate-100">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
            <Heart size={40} className="animate-pulse text-accent" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">Campaign Not Found</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We couldn't find the urgent campaign page you're looking for. Please support our other active causes.
          </p>
          <Link to="/donate" className="btn-primary w-full justify-center">
            Support General Fund
          </Link>
        </div>
      </div>
    );
  }

  // Find corresponding Lucide icon based on keyword topics
  const getIcon = () => {
    if (campaignSlug?.includes('child') || campaignSlug?.includes('heart')) {
      return Heart;
    }
    return CircleDollarSign;
  };
  const CampaignIcon = getIcon();

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <SEO 
        title={campaign.title}
        description={campaign.metaDescription}
        keywords={campaign.keyword}
        schema={{
          "@context": "https://schema.org",
          "@type": "DonateAction",
          "name": campaign.title,
          "description": campaign.metaDescription,
          "recipient": {
            "@type": "NGO",
            "name": "Dargah Saiyad Ali Shah Seva Sansthan",
            "address": "Bhilwara, Rajasthan, India",
            "nonprofitStatus": "COOP/2025/BHILWARA/500577"
          },
          "target": "https://shahseva.vercel.app/donate"
        }}
      />

      {/* Hero Header */}
      <section className="relative pt-24 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            <CampaignIcon className="w-4 h-4" />
            Urgent Appeal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-6 leading-tight tracking-tight"
          >
            {campaign.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto"
          >
            {campaign.heroParagraph}
          </motion.p>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="max-w-5xl mx-auto px-4 -translate-y-6 relative z-10">
        <div className="bg-primary text-white py-6 px-8 rounded-3xl shadow-xl border border-primary/20 flex flex-col md:flex-row items-center justify-around gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-serif font-bold text-accent">{campaign.stats.families}</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-serif font-bold text-accent">{campaign.stats.beneficiaries}</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-serif font-bold text-accent">{campaign.stats.ngo}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left main content columns */}
        <div className="lg:col-span-7 space-y-12">
          {/* Heartwarming Story Card */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-style-normal font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full inline-block" />
              {campaign.storyTitle}
            </h2>
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-8 relative">
              <img 
                src={getTopicImageUrl(campaign.id)} 
                alt={campaign.storyTitle} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white text-xs font-mono">
                {campaign.id.includes('zakat') || campaign.id.includes('sadaqah') || campaign.id.includes('masjid') || campaign.id.includes('ramadan') || campaign.id.includes('fidya') ? 'Verified Islamic Charity Initiative // Field Operations' : 
                 campaign.id.includes('dog') || campaign.id.includes('animal') ? 'Verified Animal Welfare Rescue // Rajasthan Shelter' : 
                 'Verified Medical Aid Campaign Case Study // Rajasthan Office'}
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
              {campaign.storyContent}
            </p>
          </section>

          {/* Core Urgent Reasons Section */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h2 className="text-3xl font-serif font-bold text-primary">Why Support Shah Seva?</h2>
            <div className="grid grid-cols-1 gap-6">
              {campaign.whyShahSeva.map((reason, index) => {
                const [title, body] = reason.split(': ');
                return (
                  <div key={index} className="flex gap-4 items-start bg-slate-50/50 p-6 rounded-2xl border border-slate-100/50">
                    <div className="p-3 bg-primary/5 text-primary rounded-xl shrink-0 mt-1">
                      {index === 0 && <ShieldCheck className="w-5 h-5 text-accent" />}
                      {index === 1 && <Users className="w-5 h-5 text-accent" />}
                      {index === 2 && <CheckCircle2 className="w-5 h-5 text-accent" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Urgency Details Section */}
          <section className="bg-accent/5 p-8 sm:p-10 rounded-[2.5rem] border border-accent/10 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary flex items-center gap-2">
              <Info className="w-6 h-6 text-accent" />
              {campaign.urgencyTitle}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {campaign.urgencyContent}
            </p>
          </section>

          {/* Absolute Transparency Section */}
          <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">
              {campaign.transparencyTitle}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {campaign.transparencyContent}
            </p>
          </section>

          {/* Optional Emergency Bullet Points Section */}
          {(campaign.negativeBullets || campaign.positiveBullets) && (
            <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
              {campaign.bulletPointsLabel && (
                <h3 className="text-2xl font-serif font-bold text-primary">{campaign.bulletPointsLabel}</h3>
              )}
              {campaign.negativeBullets && (
                <div className="space-y-3">
                  <h4 className="font-bold text-rose-600 text-sm tracking-wide uppercase">What Happens If We Fail To Act</h4>
                  <ul className="space-y-3">
                    {campaign.negativeBullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-slate-600 text-sm">
                        <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {campaign.positiveBullets && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-emerald-600 text-sm tracking-wide uppercase">Your Donation's Direct Impact</h4>
                  <ul className="space-y-3">
                    {campaign.positiveBullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-slate-600 text-sm">
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>NGO Verified</span>
                <span>●</span>
                <span>100% Transparent</span>
                <span>●</span>
                <span>Instant Receipt</span>
              </div>
            </section>
          )}

          {/* FAQ Schema Accordion Section */}
          {campaign.faqs && campaign.faqs.length > 0 && (
            <section className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-2.5xl font-serif font-bold text-primary mb-2 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full inline-block" />
                Frequently Asked Questions
              </h3>
              <div className="divide-y divide-slate-100">
                {campaign.faqs.map((faq, idx) => (
                  <div key={idx} className="py-5 first:pt-0 last:pb-0">
                    <h4 className="text-base font-bold text-primary mb-2 leading-snug">{faq.question}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right side checkout columns */}
        <div className="lg:col-span-5 space-y-8">
          <div className="sticky top-28 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent" />
            
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Choose Your Donation Impact</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              100% of your contribution goes directly to the hospitals and medical stores for matched patient bills.
            </p>

            <div className="space-y-4 mb-8">
              {campaign.donationTiers.map((tier) => {
                const isSelected = selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    onClick={() => setSelectedAmount(tier.amount)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col gap-2 ${
                      isSelected 
                        ? 'bg-primary/5 border-primary shadow-inner scale-[1.01]' 
                        : 'bg-slate-50 border-slate-100 hover:bg-slate-50/20 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">₹ {tier.amount}</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-accent bg-accent' : 'border-slate-300 bg-white'
                      }`}>
                        {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-600 font-sans font-medium">
                      {tier.benefit.split(' = ')[1] || tier.benefit}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom donation button linking to actual domain */}
            <a
              href="https://shahseva.vercel.app/donate"
              className="btn-primary w-full justify-center group py-4 text-base tracking-wide font-bold rounded-2xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/95 text-white flex items-center gap-2"
            >
              <span>{campaign.ctaText.split(' — ')[0]}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-6 flex justify-center items-center gap-2 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Secured SSL Checkout // verified.app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
