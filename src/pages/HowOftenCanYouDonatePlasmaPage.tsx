import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Tag, User, Share2, 
  ShieldCheck, CheckCircle2, Sparkles, BookOpen, 
  AlertTriangle, ExternalLink, ChevronDown, Check, X, ArrowRight,
  Droplets, Activity
} from 'lucide-react';
import SEO from '../components/SEO';

export default function HowOftenCanYouDonatePlasmaPage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How often can you donate plasma in a week?",
      answer: "Under U.S. FDA regulations for commercial source plasma, you can donate up to two times in any rolling seven-day period. Crucially, you must always allow at least 48 hours of rest between donations so your body can naturally restore blood volume and circulating proteins."
    },
    {
      question: "How often can you donate plasma in a month?",
      answer: "Depending on your specific schedule and calendar layout, you can safely donate between 8 to 10 times in a calendar month at private plasma collection centers, provided you maintain the mandatory 48-hour gap and consistently pass pre-donation protein, hematocrit, and blood pressure screenings."
    },
    {
      question: "How often can you donate blood plasma through the American Red Cross?",
      answer: "If you donate plasma through the American Red Cross (often as part of an AB Elite plasma donation), you can donate once every 28 days, up to a maximum of 13 times per year. This lower frequency protects long-term immunoglobulins and differs from commercial collection centers."
    },
    {
      question: "How often can you donate plasma at BioLife?",
      answer: "BioLife Plasma Services allows eligible donors to donate up to twice within a rolling seven-day period with at least 48 hours between appointments. Your hydration, vitals, total serum protein, and vein health are evaluated before every visit to confirm safe eligibility."
    },
    {
      question: "How often can you donate CSL plasma?",
      answer: "At CSL Plasma centers across the United States, qualified donors may donate up to two times in a seven-day period with at least two calendar days between donations. You must pass a health history questionnaire, fingerstick hematocrit test, and vitals check at each visit."
    },
    {
      question: "Why do you have to wait 48 hours between plasma donations?",
      answer: "The 48-hour resting window gives your cardiovascular system adequate time to replenish the fluid volume lost during apheresis and allows your liver to synthesize essential plasma proteins like albumin and clotting factors. Donating earlier can trigger severe dehydration, dizziness, and chronic protein depletion."
    },
    {
      question: "Can donating plasma twice a week make you tired?",
      answer: "Yes, temporary fatigue can occur, particularly if you do not drink enough fluids or skimp on dietary protein before and after your session. Staying well-hydrated, eating a balanced protein-rich meal within two hours of donating, and getting a full night of sleep prevents most donor exhaustion."
    },
    {
      question: "What happens if you try to donate more than twice in 7 days?",
      answer: "Collection centers utilize cross-referenced national donor registries (such as the Cross Donation Management System). If you attempt to donate more than twice in seven days or visit multiple centers simultaneously, the system immediately flags your profile, resulting in temporary or permanent deferral."
    }
  ];

  // Article, FAQPage, and BreadcrumbList structured data for rich snippet indexing
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma"
        },
        "headline": "How Often Can You Donate Plasma? Safe Limits, Schedules & Rules",
        "description": "Wondering how often can you donate plasma? Learn FDA frequency limits, weekly & monthly schedules, BioLife vs CSL rules, recovery tips, and safety guidelines.",
        "image": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000",
        "datePublished": "2026-11-09T08:00:00+05:30",
        "dateModified": "2026-11-09T08:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Shah Seva Editorial & Medical Review Board",
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
          "@id": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://shahseva.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://shahseva.vercel.app/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How Often Can You Donate Plasma",
            "item": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma#faq",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
      <SEO 
        title="How Often Can You Donate Plasma? Safe Limits & Rules"
        description="Wondering how often can you donate plasma? Learn FDA frequency limits, weekly & monthly schedules, BioLife vs CSL rules, recovery tips, and safety guidelines."
        keywords="how often can you donate plasma, how often can you donate blood plasma, how often can you donate plasma in a month, how often can you safely donate plasma, how often can you donate plasma at BioLife, how often can you donate CSL plasma"
        canonical="https://shahseva.vercel.app/blog/how-often-can-you-donate-plasma"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000"
        schema={articleSchema}
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Top navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} /> Back to Blog &amp; Guides
            </Link>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck size={14} className="text-emerald-600" /> Medically Verified Guide
            </span>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
              <Calendar size={14} />
              Last updated: November 9, 2026
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full">
              <Tag size={14} />
              Health &amp; Donor Guidelines
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              <BookOpen size={14} />
              FDA &amp; Red Cross Rules
            </div>
          </div>

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
            How Often Can You Donate Plasma? Safe Limits, Schedules &amp; Rules
          </h1>

          {/* Editorial Author Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary shrink-0" />
              <span>
                <strong>Author:</strong> Shah Seva Editorial &amp; Health Content Team
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 size={16} />
              <span>Reviewed against FDA, Red Cross, BioLife &amp; CSL Standards</span>
            </div>
          </div>

          {/* Featured Image with Descriptive Alt Text */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-strong mb-10 aspect-video bg-slate-100 border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Comfortable donor chair and apheresis machine showing safe blood plasma donation process" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Direct Answer Paragraph (First 40 to 60 words for AI Overviews and Snippets) */}
          <p className="text-lg md:text-xl text-slate-800 font-semibold mb-8 leading-relaxed">
            You can donate plasma up to <strong>two times in any seven-day period</strong>, with at least <strong>48 hours of rest between donations</strong>, according to U.S. Food and Drug Administration (FDA) safety guidelines for commercial centers. If donating through the American Red Cross, the limit is once every 28 days, up to 13 times per year.
          </p>

          {/* Quick Answer / Key Takeaways Callout Box */}
          <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-emerald-950">
                Quick Answer: Key Takeaways
              </h2>
            </div>
            <ul className="space-y-2.5 text-slate-700 text-base md:text-lg">
              <li className="flex items-start gap-2.5">
                <Check className="text-emerald-600 mt-1 shrink-0" size={18} />
                <span><strong>FDA Commercial Limit:</strong> Up to twice in a rolling 7-day period, with a mandatory 48-hour gap between sessions.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="text-emerald-600 mt-1 shrink-0" size={18} />
                <span><strong>Red Cross Volunteer Limit:</strong> Once every 28 days (up to 13 times in a calendar year).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="text-emerald-600 mt-1 shrink-0" size={18} />
                <span><strong>Monthly Frequency:</strong> 8 to 10 donations per month maximum at private centers like BioLife and CSL Plasma.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="text-emerald-600 mt-1 shrink-0" size={18} />
                <span><strong>Recovery Window:</strong> Water volume returns within 24 to 48 hours; key proteins take about 48 hours to regenerate.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="text-emerald-600 mt-1 shrink-0" size={18} />
                <span><strong>Donor Priority:</strong> Drink plenty of water and eat lean protein before each appointment to avoid dizziness and deferrals.</span>
              </li>
            </ul>
          </div>

          {/* Medical Disclaimer Banner */}
          <div className="mb-10 p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-amber-950">
            <div className="flex items-start gap-3">
              <AlertTriangle size={22} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 mb-1 text-sm md:text-base">
                  Medical Information Notice
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-amber-900/90">
                  This article provides educational guidance on donation frequency and is not personalized medical advice. Donation eligibility, weight requirements, and health checks can vary by center and location. Always consult your personal physician or your local donation center&apos;s medical staff before starting or altering a donation routine.
                </p>
              </div>
            </div>
          </div>

          {/* Main Article Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed italic border-l-4 border-accent pl-6 bg-slate-50/50 py-3 rounded-r-xl">
              Donating plasma saves lives every day by providing raw materials for critical therapies, burn treatments, and immune deficiency medications. Because the apheresis machine returns your red blood cells and platelets while collecting only plasma, your body bounces back much faster than it does after a standard whole blood donation. Still, strict limits exist to keep you healthy, energized, and safe.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                What is Plasma Donation and Why is Frequency Limited?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Plasma is the clear, pale-yellow liquid portion of your blood that makes up about 55% of your total blood volume. It consists of roughly 90% water, along with vital proteins like albumin, globulins, and clotting factors. These proteins maintain your blood pressure, fight off infections, and stop severe bleeding after injuries.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                During a plasma donation, an automated medical device performs a process called <strong>apheresis</strong> (also known as <em>plasmapheresis</em>). The machine draws whole blood from your arm, separates the liquid plasma into a collection bottle using a centrifuge, and gently returns your red blood cells, white blood cells, and platelets along with a saline solution.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Because your cellular blood stays in your body, your fluid volume starts recovering within hours. However, rebuilding the complex proteins takes longer. Donation frequency is strictly capped by health regulators to prevent you from developing hypoproteinemia (dangerously low protein levels), chronic fatigue, dehydration, or a weakened immune defense.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                The Official Rules: FDA Limits Explained Simply
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                In the United States, the Food and Drug Administration (FDA) establishes federal safety standards under Title 21 of the Code of Federal Regulations (21 CFR 640.65). The FDA divides plasma donation into two distinct pathways: commercial source plasma and volunteer whole blood plasma.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                Under FDA source plasma regulations, you may donate up to <strong>two times in any rolling seven-day period</strong>. In addition, there must be at least <strong>48 hours of separation</strong> between your two sessions. This means you can never donate on two consecutive days under any circumstances.
              </p>

              {/* Table 1: Frequency Limits Comparison */}
              <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200 mb-6">
                <table className="min-w-full text-left text-sm md:text-base border-collapse">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Organization / Pathway
                      </th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Max Weekly Frequency
                      </th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Mandatory Rest Gap
                      </th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Annual Maximum
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">FDA Source Plasma (BioLife, CSL, etc.)</td>
                      <td className="py-3.5 px-5 text-slate-700 font-semibold text-emerald-700">2 times per 7 days</td>
                      <td className="py-3.5 px-5 text-slate-700">48 hours minimum</td>
                      <td className="py-3.5 px-5 text-slate-700">Approx. 100 donations/year</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">American Red Cross (AB Elite)</td>
                      <td className="py-3.5 px-5 text-slate-700">Once every 28 days</td>
                      <td className="py-3.5 px-5 text-slate-700">28 full days</td>
                      <td className="py-3.5 px-5 text-slate-700">13 donations/year</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">European &amp; International Standards</td>
                      <td className="py-3.5 px-5 text-slate-700">Once every 1 to 2 weeks</td>
                      <td className="py-3.5 px-5 text-slate-700">7 to 14 days</td>
                      <td className="py-3.5 px-5 text-slate-700">25 to 45 donations/year (varies by country)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Whole Blood Donation (Comparison)</td>
                      <td className="py-3.5 px-5 text-slate-700">Once every 8 weeks (56 days)</td>
                      <td className="py-3.5 px-5 text-slate-700">56 full days</td>
                      <td className="py-3.5 px-5 text-slate-700">6 donations/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                Note: Frequency rules can vary by center, state jurisdiction, and individual medical screening results. Always confirm exact parameters with your local staff.
              </p>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                How Often Can You Donate in a Week, Month, or Year?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                Depending on your personal calendar and energy levels, here is how the numbers break down across different time horizons:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <Droplets className="text-primary" size={20} />
                    In a Single Week: Up to 2 Times
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Under the seven-day rolling rule, you may donate twice in seven consecutive days. For example, if your first session is on Monday afternoon, your second appointment can take place on Wednesday afternoon or later. Once you complete that second visit, you cannot donate again until the following Monday.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <Calendar className="text-primary" size={20} />
                    In a Month: Between 8 to 10 Times
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    If you stick strictly to a twice-per-week schedule, you will donate 8 times during a typical 4-week month, and up to 10 times in a month with 31 days. Most centers require periodic blood lab work every 4 months to confirm that your total serum protein and immunoglobulin levels stay within healthy benchmarks.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                    <Activity className="text-primary" size={20} />
                    In a Year: Up to Approximately 100 Times
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Donors who participate throughout the year can theoretically donate up to 104 times under the FDA framework. In real life, occasional minor illness, seasonal allergies, travel, hydration dips, or low protein readings naturally space visits out. Listening to your body is always more important than hitting a numerical target.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                How Often Can You Safely Donate Plasma? Recovery &amp; Health Risks
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Donating twice a week is considered safe for healthy adults who meet weight, hemoglobin, and protein thresholds. Because modern apheresis returns your red blood cells, you do not face the same rapid iron depletion seen in traditional whole blood donation.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Your recovery occurs in two stages:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base md:text-lg mb-4">
                <li><strong>Fluid replenishment (24 to 48 hours):</strong> Your bloodstream draws fluids from your tissues and what you drink, restoring total blood volume quickly.</li>
                <li><strong>Protein synthesis (48 hours to several days):</strong> Your liver works around the clock to synthesize albumin and clotting proteins back to baseline concentrations.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                However, donating at maximum frequency without proper nutrition carries potential side effects. These include temporary lightheadedness, fatigue, localized bruising or vein scarring, and over time, lowered serum protein levels. That is why professional centers run mandatory pre-donation checks every single visit.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Differences Between Centers: BioLife vs. CSL Plasma vs. Red Cross
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                If you are comparing donation programs, you might notice that frequency rules look nearly identical across commercial centers, but differ markedly from hospital blood banks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">How Often Can You Donate Plasma at BioLife?</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    BioLife follows standard FDA parameters: you can donate up to <strong>twice in a rolling 7-day period</strong>, with at least 48 hours between visits. BioLife monitors your vital signs, weight, hematocrit, and total protein at every check-in. Learn more about <Link to="/blog/how-much-for-donating-plasma" className="text-primary font-semibold hover:underline">how much do you get for donating plasma</Link> in our compensation guide.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-2">How Often Can You Donate CSL Plasma?</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    CSL Plasma also adheres to the FDA maximum of <strong>twice in seven days with a 48-hour separation</strong>. CSL verifies donor identification, address, and pre-screening biometrics at every appointment to safeguard donor welfare. You can explore appointment lengths in our guide on <Link to="/blog/how-long-to-donate-plasma" className="text-primary font-semibold hover:underline">how long does it take to donate plasma</Link>.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Why does the American Red Cross allow donations only once every 28 days? The Red Cross collects volunteer plasma primarily for direct hospital patient transfusions, whereas commercial centers collect plasma for manufacturing fractional pharmaceutical therapies. Different regulatory guidelines govern these end uses.
              </p>
            </section>

            {/* Section 6: Sample Donation Schedule Table */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Sample Plasma Donation Schedule (2-Week Plan)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                To stay well within the rolling 7-day window and keep your recovery smooth, building a consistent routine helps. Here is a practical, donor-tested schedule example:
              </p>

              {/* Table 2: Sample Donation Schedule */}
              <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200 mb-6">
                <table className="min-w-full text-left text-sm md:text-base border-collapse">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">Day of Week</th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">Activity</th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">Action &amp; Hydration Focus</th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">Rest Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Monday</td>
                      <td className="py-3 px-5 text-emerald-700 font-semibold">Donation Day #1</td>
                      <td className="py-3 px-5 text-slate-600">Drink 16–20 oz water before visit; eat a protein-rich meal.</td>
                      <td className="py-3 px-5 text-slate-700">Light activity after session</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Tuesday</td>
                      <td className="py-3 px-5 text-slate-500 font-medium">Rest Day (24 hrs)</td>
                      <td className="py-3 px-5 text-slate-600">Continue steady water intake; eat lean meats, beans, or eggs.</td>
                      <td className="py-3 px-5 text-emerald-600 font-semibold">Mandatory rest window</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Wednesday</td>
                      <td className="py-3 px-5 text-emerald-700 font-semibold">Donation Day #2</td>
                      <td className="py-3 px-5 text-slate-600">48 hours completed since Monday; second weekly session.</td>
                      <td className="py-3 px-5 text-slate-700">Weekly quota completed</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Thursday</td>
                      <td className="py-3 px-5 text-slate-500 font-medium">Rest &amp; Recovery</td>
                      <td className="py-3 px-5 text-slate-600">Replenish electrolytes; resume normal exercise.</td>
                      <td className="py-3 px-5 text-emerald-600 font-semibold">Deep recovery</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Friday</td>
                      <td className="py-3 px-5 text-slate-500 font-medium">Rest Day</td>
                      <td className="py-3 px-5 text-slate-600">Balanced nutrition with adequate iron and Vitamin C.</td>
                      <td className="py-3 px-5 text-slate-700">Weekend off</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-5 font-bold text-slate-900 bg-slate-50/50">Saturday / Sunday</td>
                      <td className="py-3 px-5 text-slate-500 font-medium">Weekend Off</td>
                      <td className="py-3 px-5 text-slate-600">Stay hydrated; prepare for Monday&apos;s new rolling cycle.</td>
                      <td className="py-3 px-5 text-slate-700">Full system recharge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                How to Stay Healthy Between Plasma Donations
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Frequent donors who report feeling energized and never failing pre-donation screenings follow simple, foundational habits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 text-base mb-1">1. Hydrate Early, Not Just 10 Minutes Before</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Drink an extra 16 to 32 ounces of water or electrolyte-balanced fluids throughout the day before your appointment, and another 16 ounces a few hours prior. Well-hydrated veins are plumper, making needle insertion easier and collection faster.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 text-base mb-1">2. Prioritize Dietary Protein</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Because plasma is packed with protein, eating lean chicken, turkey, eggs, tofu, Greek yogurt, or lentils helps your liver rapidly synthesize replacement albumin. Most centers require a minimum total protein reading of 6.0 g/dL.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 text-base mb-1">3. Skip Fatty Foods and Alcohol</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Heavy, greasy meals shortly before a visit cause lipemic (cloudy, fat-saturated) plasma, which can clog filtration equipment and trigger deferral. Avoid alcohol for at least 24 hours, as it causes systemic dehydration.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-900 text-base mb-1">4. Protect Your Vein Health</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Alternate between arms if you have suitable veins on both sides. Keep the bandage on for at least 2 to 4 hours post-donation to avoid bleeding, and moisturize your puncture site with vitamin E or gentle lotion after the wound seals.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Who Should NOT Donate Plasma or Should Wait?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Safety always comes first. You should pause your schedule or avoid donating if you fall into any of these categories:
              </p>
              <ul className="list-disc pl-6 space-y-2.5 text-slate-600 text-base md:text-lg mb-4">
                <li><strong>Current illness or infection:</strong> If you have a fever, active cold, cough, sore throat, or are taking prescription antibiotics, wait until you are fully symptom-free for at least 48 to 72 hours.</li>
                <li><strong>Pregnancy or recent childbirth:</strong> Pregnant women cannot donate plasma due to elevated fetal circulatory demands. A waiting period of at least 6 months after delivery is required.</li>
                <li><strong>Recent tattoos or piercings:</strong> Depending on state regulations and whether the shop used sterile, state-regulated practices, a 3-month waiting window may apply.</li>
                <li><strong>Body weight under 110 pounds (50 kg):</strong> Minimum weight limits ensure that removing standard plasma volumes does not dangerously disrupt blood pressure.</li>
                <li><strong>Major recent surgery:</strong> Postponing donations allows your cardiovascular and healing systems to focus on tissue repair.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Common Mistakes Donors Make With Frequency
              </h2>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 text-red-600 flex items-center gap-1.5">
                    <X size={18} /> Mistake 1: Trying to &ldquo;Double Up&rdquo; Across Two Different Companies
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Some donors mistakenly think they can visit BioLife on Monday and CSL Plasma on Tuesday. In reality, all accredited centers participate in national registries that immediately cross-check your donor ID. Doing this will get you deferred from all centers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 text-red-600 flex items-center gap-1.5">
                    <X size={18} /> Mistake 2: Donating on an Empty Stomach
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Skipping breakfast or lunch before your appointment is the number one cause of donor fainting, nausea, and vasovagal reactions during collection. Always eat a wholesome meal within 2 to 3 hours of your appointment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-base mb-1 text-red-600 flex items-center gap-1.5">
                    <X size={18} /> Mistake 3: Heavy Weightlifting Immediately After Donation
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lifting heavy weights or engaging in vigorous arm workouts right after an apheresis appointment can reopen your puncture wound and lead to large hematomas. Take it easy for the rest of donation day.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: FAQ Accordion */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Frequently Asked Questions (FAQ)
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-8">
                Clear, concise answers to the eight most common questions donors ask about safe donation frequency:
              </p>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-50/70 rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base md:text-lg hover:bg-slate-100/70 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-accent font-serif font-bold text-xl">Q:</span>
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 md:px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Section 11: Conclusion */}
            <section className="mb-12 p-8 rounded-3xl bg-primary/5 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Conclusion: Finding Your Ideal Donation Rhythm
              </h2>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
                Knowing <strong>how often can you donate plasma</strong> gives you the confidence to support patients in need while keeping your own health protected. The golden rule is simple: never donate more than twice in any seven-day window, always honor the 48-hour resting gap, and fuel your body with clean hydration and rich proteins.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
                At <Link to="/" className="text-primary font-bold hover:underline">Shah Seva (Dargah Saiyad Ali Shah Seva Sansthan)</Link>, we witness the tremendous difference that life-saving healthcare and medical relief make for vulnerable families every single day. Whether you donate biological plasma or choose to support emergency treatments through charitable giving, your generosity changes lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  to="/donate" 
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm md:text-base font-bold shadow-md"
                >
                  Support Medical Relief at Shah Seva <ArrowRight size={16} />
                </Link>
                <Link 
                  to="/blog/how-much-for-donating-plasma" 
                  className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1"
                >
                  Read Plasma Pay Rates &amp; Compensation Guide &rarr;
                </Link>
              </div>
            </section>

            {/* Section 12: Sources Section */}
            <section className="mb-12 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" /> Authoritative Sources &amp; Guidelines
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                All frequency parameters, apheresis timelines, and health criteria cited in this guide reflect standards from official health agencies and accredited blood establishments:
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <a 
                    href="https://www.fda.gov/vaccines-blood-biologics/blood-blood-products" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    U.S. Food and Drug Administration (FDA) &ndash; Blood &amp; Plasma Regulatory Guidance (21 CFR 640.65) <ExternalLink size={11} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <a 
                    href="https://www.redcrossblood.org/donate-blood/how-to-donate/types-of-blood-donations/plasma-donation.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    American Red Cross &ndash; AB Elite Plasma Donation Intervals &amp; Eligibility <ExternalLink size={11} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <a 
                    href="https://www.biolifeplasma.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    BioLife Plasma Services &ndash; Official Donor Safety &amp; Scheduling Parameters <ExternalLink size={11} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  <a 
                    href="https://www.cslplasma.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    CSL Plasma &ndash; Donor Frequency Requirements &amp; Health Checks <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </section>
          </article>

          {/* Social share & Educational Support CTA */}
          <div className="mt-16 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => {
                if (typeof navigator !== 'undefined' && navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={16} className="text-emerald-500" /> Link Copied!
                </>
              ) : (
                <>
                  <Share2 size={16} /> Share Guide
                </>
              )}
            </button>

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
