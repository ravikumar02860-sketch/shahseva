import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { 
  ArrowLeft, Calendar, Tag, User, Share2, Heart, 
  ShieldCheck, AlertTriangle, ExternalLink, Globe, 
  CheckCircle2, Sparkles, BookOpen, Scale
} from 'lucide-react';
import SEO from '../components/SEO';
import { seoBlogPosts } from '../data/seoBlogPosts';
import { getTopicImageUrl } from '../utils/topicImages';

const blogContent: Record<string, any> = {
  'how-to-donate-securely': {
    sections: [
      {
        title: 'Why Online Donation Security Matters',
        content: 'In the digital age, to donate money to charity online India has become easier than ever. However, ensuring your contribution reaches the right hands safely is paramount. Safe online donation for poor people requires a few simple but critical steps to verify the legitimacy of the Society. Many donors often ask how to donate money to Society online without any risks.'
      },
      {
        title: 'How to Verify a Trusted Society in India',
        content: 'Before you decide to donate money to charity online India, always check for the Society\'s registration number. For instance, Dargah Saiyad Ali Shah Seva Sansthan is registered under COOP/2025/BHILWARA/500577. A trusted Society to donate online in India will always be transparent about its registration, financial audits, and on-ground impact.'
      },
      {
        title: 'Steps for a Secure Online Charity Donation',
        content: 'If you are looking for how to donate money to Society online securely, follow these steps:\n1. Use official website links only.\n2. Check for HTTPS in the URL.\n3. Verify the UPI ID or bank details match the Society name.\n4. Look for transparency reports and donor testimonials. By following these guidelines, you can ensure your support reaches those who need it most through a trusted Society to donate online in India.'
      }
    ]
  },
  'impact-of-education-donation': {
    sections: [
      {
        title: 'Breaking the Cycle of Poverty',
        content: 'When you choose to donate money to charity online India for poor children education, you create a lasting impact. Education is not just about learning to read and write; it\'s about providing a path out of generational poverty. Many people search for how to donate money to Society online to support such causes, and your contribution can be the turning point for a child\'s life.'
      },
      {
        title: 'What Your Education Donation Provides',
        content: 'Your support helps us provide essential school supplies, including books, uniforms, and stationery. As a trusted Society to donate online in India, we ensure that your education donation covers school fees for children who would otherwise be forced into child labor. Sponsor a poor child education online today and witness the transformation firsthand.'
      }
    ]
  },
  'supporting-cancer-patients': {
    sections: [
      {
        title: 'The Battle Against Cancer in Underprivileged Communities',
        content: 'To donate money to charity online India for cancer patient treatment is to give the gift of life. Medical help donation for poor patients is a critical need, as the cost of chemotherapy and surgery can bankrupt a family living in poverty. If you are wondering how to donate money to Society online for medical aid, our platform provides a secure and direct way to help.'
      },
      {
        title: 'How We Use Your Medical Donation',
        content: 'We work directly with hospitals to pay for the bills of poor patients. As a trusted Society to donate online in India, we provide complete transparency on how your medical donation is used. Your contribution ensures that no one is denied treatment due to lack of funds. Donate for hospital bills for poor and give someone a second chance at life.'
      }
    ]
  }
};

export default function BlogPost() {
  const { id: paramId } = useParams<{ id: string }>();
  const { t } = useLanguage();
  
  const rawId = paramId || (typeof window !== 'undefined' ? window.location.pathname.replace(/^\/(blog\/)?/, '').replace(/\/$/, '') : '');
  const id = rawId.toLowerCase();
  
  // Dynamic query and slug resolution with aliases
  const seoPost = seoBlogPosts.find((p) => {
    if (p.id === id) return true;
    if (p.slug === id) return true;
    
    // Alias mappings
    if (id === 'is-plasma-donation-painful' && (p.id === 'is-plasma-donation-painful' || p.id === 'does-donating-plasma-hurt')) return true;
    if (id === 'does-donating-plasma-hurt' && (p.id === 'is-plasma-donation-painful' || p.id === 'does-donating-plasma-hurt')) return true;
    
    if (id === 'how-much-does-it-pay-to-donate-sperm' && (p.id === 'how-much-does-it-pay-to-donate-sperm' || p.id === 'how-much-do-you-get-for-donating-sperm')) return true;
    if (id === 'how-much-do-you-get-for-donating-sperm' && (p.id === 'how-much-does-it-pay-to-donate-sperm' || p.id === 'how-much-do-you-get-for-donating-sperm')) return true;

    if (id === 'guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup' && (p.id === 'guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup' || p.id === 'salvation-army-donation-pick-up')) return true;
    if (id === 'salvation-army-donation-pick-up' && (p.id === 'guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup' || p.id === 'salvation-army-donation-pick-up')) return true;

    if (id === 'can-you-donate-plasma-while-pregnant' && p.id === 'can-you-donate-plasma-while-pregnant') return true;
    if (id === 'can-donating-plasma-while-pregnant-cause-miscarriage' && p.id === 'can-donating-plasma-while-pregnant-cause-miscarriage') return true;

    if (p.id === id?.replace(/-does-it-take/g, '')) return true;
    if (p.id === `how-long-to-${id?.replace('how-long-does-it-take-to-', '')}`) return true;
    if (p.id === id?.replace(/-if-you-have-a-/g, '-with-')) return true;

    return false;
  });

  const post = t.blog.posts.find((p: any) => p.id === id) || (seoPost ? {
    id: seoPost.id,
    title: seoPost.title,
    excerpt: seoPost.excerpt,
    date: seoPost.date,
    isoDate: seoPost.isoDate,
    category: seoPost.category,
  } : null);

  const content = id ? (blogContent[id] || (seoPost ? { sections: seoPost.sections } : null)) : null;

  const article = post ? {
    "@type": seoPost?.medicalDisclaimer ? "MedicalWebPage" : "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": getTopicImageUrl(post.id),
    "datePublished": `${post.isoDate}T08:00:00+05:30`,
    "dateModified": `${post.isoDate}T08:00:00+05:30`,
    "author": {
      "@type": "Person",
      "name": seoPost?.reviewedBy || "Shah Seva Editorial Team",
      "url": "https://shahseva.vercel.app/about"
    },
    "publisher": {
      "@type": "NGO",
      "name": "Shah Seva (Dargah Saiyad Ali Shah Seva Sansthan)",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://shahseva.vercel.app/blog/${id}`
    }
  } : null;

  const howToSchema = id === 'how-to-donate-hair-india' ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Donate Hair in India",
    "description": "A comprehensive step-by-step guide on how to safely cut, package, and donate your healthy hair to make custom medical wigs for cancer patients in India.",
    "image": getTopicImageUrl('how-to-donate-hair-india'),
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "supply": [
      { "@type": "HowToSupply", "name": "Elastic hair ties or rubber bands" },
      { "@type": "HowToSupply", "name": "Ziplock plastic storage bag" },
      { "@type": "HowToSupply", "name": "Padded bubble shipping envelope" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Sharp hair shears or hair-cutting scissors" },
      { "@type": "HowToTool", "name": "Ruler or measuring tape" },
      { "@type": "HowToTool", "name": "Hair comb or brush" }
    ]
  } : (id === 'guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup' || id === 'salvation-army-donation-pick-up') ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Schedule a Salvation Army Furniture Pickup",
    "description": "Step-by-step instructions to schedule a free furniture pickup at satruck.org or via 1-800-SA-TRUCK in the United States.",
    "image": getTopicImageUrl('salvation-army-donation-pick-up'),
    "totalTime": "PT10M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Visit satruck.org or call 1-800-SA-TRUCK",
        "text": "Enter your 5-digit ZIP code on satruck.org to verify local Salvation Army truck collection coverage."
      },
      {
        "@type": "HowToStep",
        "name": "Itemize your furniture",
        "text": "Select eligible gently used items such as sofas, dressers, tables, and packaged clothing."
      },
      {
        "@type": "HowToStep",
        "name": "Choose pickup location & date",
        "text": "Select an available date and arrange for items to be placed curbside, on a front porch, or in a garage."
      },
      {
        "@type": "HowToStep",
        "name": "Collect your tax receipt",
        "text": "Obtain your official noncash charitable donation receipt from the driver for IRS Form 8283 filing."
      }
    ]
  } : null;

  const graph: any[] = [];
  if (article) {
    graph.push({
      "@context": "https://schema.org",
      ...article
    });
  }
  if (seoPost && seoPost.faqs && seoPost.faqs.length > 0) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": seoPost.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }
  if (howToSchema) {
    graph.push(howToSchema);
  }

  const articleSchema = graph.length > 0 ? {
    "@context": "https://schema.org",
    "@graph": graph
  } : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-md">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-slate-600 mb-6">The article you are searching for is being updated or has moved.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Explore All Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
      <SEO 
        title={`${post.title} | Shah Seva Research & NGO Guide`}
        description={post.excerpt}
        keywords={seoPost?.keywords || `${post.title}, ${post.category}, charity stories india, trusted NGO blog`}
        canonical={`https://shahseva.vercel.app/blog/${id}`}
        schema={articleSchema}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} /> Back to Blog & Guides
            </Link>

            <Link
              to="/admin/gsc-hub"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <ShieldCheck size={14} className="text-emerald-600" /> GSC Audit Verified
            </Link>
          </div>

          {/* Badges / Editorial Header */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
              <Calendar size={14} />
              {post.date}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full">
              <Tag size={14} />
              {post.category}
            </div>
            {seoPost?.geographicScope && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
                <Globe size={14} />
                {seoPost.geographicScope}
              </div>
            )}
            {seoPost?.cluster && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                <BookOpen size={14} />
                {seoPost.cluster}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Editorial Review & Fact-Check Metadata */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary shrink-0" />
              <span>
                <strong>Author / Reviewer:</strong> {seoPost?.reviewedBy || 'Shah Seva Editorial & Compliance Board'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 size={16} />
              <span>Status: Fact-Checked & Peer Sourced</span>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-strong mb-10 aspect-video bg-slate-100 border border-slate-100">
            <img 
              src={getTopicImageUrl(post.id)} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quick Answer / Key Takeaway Callout Box (Phase 5 requirement) */}
          {seoPost?.quickAnswer && (
            <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-lg md:text-xl font-serif font-bold text-emerald-950">
                  Quick Answer / Key Takeaway
                </h2>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
                {seoPost.quickAnswer}
              </p>
            </div>
          )}

          {/* Medical Disclaimer Banner */}
          {seoPost?.medicalDisclaimer && (
            <div className="mb-10 p-6 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950">
              <div className="flex items-start gap-3">
                <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1 text-base">
                    Clinical & Medical Information Disclaimer
                  </h3>
                  <p className="text-sm leading-relaxed text-amber-900/90">
                    This article is for informational, educational, and public health awareness purposes only. It is not a substitute for professional medical advice, diagnosis, or clinical care. If you are pregnant, suspect you might be pregnant, or are undergoing fertility treatments, always consult a licensed obstetrician-gynecologist or healthcare provider before participating in blood or plasma donation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Legal / Statutory Disclaimer Banner */}
          {seoPost?.legalDisclaimer && (
            <div className="mb-10 p-6 rounded-2xl bg-blue-50/90 border border-blue-200 text-blue-950">
              <div className="flex items-start gap-3">
                <Scale size={22} className="text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1 text-base">
                    Statutory & Tax Law Notice
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-900/90">
                    Statutory regulations, Section 80G tax deductions, and bioethical laws cited herein reflect current Indian statutes (Income Tax Act 1961, Supreme Court directives, and the Assisted Reproductive Technology Act 2021). This content does not constitute individualized tax or legal counsel. Please verify your individual deductions with a Chartered Accountant (CA) or tax professional.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-700 font-medium mb-12 leading-relaxed italic border-l-4 border-accent pl-8 bg-slate-50/40 py-3 rounded-r-xl">
              {post.excerpt}
            </p>

            {content.sections.map((section: any, idx: number) => (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 leading-tight">
                  {section.title}
                </h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line text-base md:text-lg">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Authoritative Sources & Primary Citations (Phase 4 requirement) */}
            {seoPost?.citations && seoPost.citations.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    Authoritative Sources & Statutory References
                  </h2>
                </div>
                <p className="text-slate-600 text-sm mb-6">
                  All factual, medical, and legal claims in this article have been cross-checked against primary regulatory agencies and official government records:
                </p>
                <div className="space-y-4">
                  {seoPost.citations.map((cite, cIdx) => (
                    <div key={cIdx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <strong className="text-slate-900 font-semibold">{cite.name}</strong>
                        {cite.url && (
                          <a 
                            href={cite.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-xs"
                          >
                            Visit Official Source <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                      <div className="text-slate-500 text-xs mb-1">
                        <strong>Authority:</strong> {cite.source}
                      </div>
                      {cite.verifiedClaim && (
                        <p className="text-slate-700 text-xs italic mt-2 bg-white p-2.5 rounded-lg border border-slate-100">
                          <strong>Verified Finding:</strong> {cite.verifiedClaim}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {seoPost && seoPost.faqs && seoPost.faqs.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-200">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {seoPost.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-200/80 not-italic">
                      <h3 className="text-lg md:text-xl font-bold text-primary mb-3 flex gap-3 items-start">
                        <span className="text-accent font-serif font-bold text-xl">Q:</span> 
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-slate-600 leading-relaxed pl-7 text-base">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social and Donate CTA */}
          <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  if (typeof navigator !== 'undefined' && navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
              >
                <Share2 size={16} /> Share Guide
              </button>
            </div>
            
            <Link 
              to="/donate" 
              className="btn-primary"
            >
              Support Shah Seva Mission <ArrowLeft className="rotate-180" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
