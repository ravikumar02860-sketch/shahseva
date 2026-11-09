import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ChevronDown, 
  Heart, 
  Share2, 
  Droplet,
  Sparkles,
  AlertTriangle,
  Flame,
  Activity
} from 'lucide-react';
import SEO from '../components/SEO';

export const DonatePlasmaSmokeWeedPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Can I Donate Plasma If I Smoke Weed? Cannabis, THC & Testing Rules',
        text: 'The definitive guide on smoking weed/cannabis and donating plasma: FDA drug testing policies, sobriety rules, and required waiting times.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const faqs = [
    {
      q: "Can I donate plasma if I smoke weed?",
      a: "Yes, you can donate plasma if you smoke weed or consume cannabis products, provided you are not visibly high or under the active influence at the time of your appointment. The FDA and major plasma centers (BioLife, CSL, Octapharma, Red Cross) do not disqualify donors simply for using marijuana or consuming THC edibles."
    },
    {
      q: "Do plasma centers drug test for weed (THC)?",
      a: "No. Plasma donation centers do not drug test for THC or marijuana metabolites. Standard lab testing focuses strictly on transmissible infectious pathogens: HIV-1/2, Hepatitis B, Hepatitis C, and Syphilis. They do not run toxicology screens for cannabis."
    },
    {
      q: "How long should you wait to donate plasma after smoking weed?",
      a: "Medical directors strongly recommend waiting at least 24 hours (and at absolute minimum 4 to 6 hours) after smoking or ingesting cannabis. This ensures THC's acute cardiovascular effects—such as elevated resting pulse and transient blood pressure spikes—have completely normalized so you pass mandatory intake screening."
    },
    {
      q: "What happens if you show up high to a plasma donation?",
      a: "If you show up visibly intoxicated or impaired (glassy/bloodshot eyes, sluggish responsiveness, smelling strongly of cannabis, or elevated heart rate >100 bpm), the intake staff will immediately defer you. Under federal law, an impaired person cannot legally provide informed medical consent."
    },
    {
      q: "Can you donate plasma if you use medical marijuana with a prescription card?",
      a: "Yes. Having a medical marijuana prescription or state MMJ card does not disqualify you from donating. What matters to center doctors is the underlying medical condition for which you were prescribed cannabis (e.g., active cancer, severe neurological conditions, or chronic immune disorders may cause deferral, but the cannabis itself does not)."
    },
    {
      q: "Does THC get into the recipient's plasma medications?",
      a: "No. Source plasma collected at commercial centers undergoes extensive fractionation, ethanol purification, viral inactivation, and ultrafiltration before turning into pharmaceutical proteins like albumin or immunoglobulin. Trace cannabinoids are eliminated in the chemical purification process."
    },
    {
      q: "Can you donate plasma if you take CBD oil or gummies?",
      a: "Yes. CBD (cannabidiol) is non-intoxicating and is fully permitted by all major plasma centers, provided it does not contain prohibited synthetic compounds and you feel completely alert during intake."
    },
    {
      q: "Why do regular weed smokers sometimes fail the plasma intake screening?",
      a: "Smokers frequently fail because cannabis can temporarily induce tachycardia (heart rate exceeding 100 beats per minute), cottonmouth/mild dehydration (which elevates hematocrit levels above 54%), or transient blood pressure changes, causing temporary deferral on vital signs."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: 'https://shahseva.vercel.app/' },
    { name: 'Blog', item: 'https://shahseva.vercel.app/blog' },
    { name: 'Can I Donate Plasma If I Smoke Weed', item: 'https://shahseva.vercel.app/blog/can-i-donate-plasma-if-i-smoke-weed' }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Can I Donate Plasma If I Smoke Weed? Cannabis, THC & Drug Testing Rules (2026)",
    "description": "Learn if you can donate plasma if you smoke weed. Understand FDA drug testing policies, THC screening, sobriety rules, and how long to wait after using cannabis.",
    "image": "https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&w=1200&h=630&q=80",
    "author": {
      "@type": "Organization",
      "name": "Shah Seva Editorial & Medical Review Board",
      "url": "https://shahseva.vercel.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dargah Saiyad Ali Shah Seva Sansthan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://shahseva.vercel.app/logo.png"
      }
    },
    "datePublished": "2026-11-09T09:30:00+05:30",
    "dateModified": "2026-11-09T09:30:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://shahseva.vercel.app/blog/can-i-donate-plasma-if-i-smoke-weed"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Can I Donate Plasma If I Smoke Weed? THC, Testing & Rules (2026)"
        description="Can I donate plasma if I smoke weed? Yes, but you must be 100% sober at intake. Learn FDA THC testing rules, vital signs checks, and waiting intervals."
        canonical="https://shahseva.vercel.app/blog/can-i-donate-plasma-if-i-smoke-weed"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&w=1200&h=630&q=80"
        keywords="can I donate plasma if I smoke weed, cannabis and plasma donation, THC plasma donation, plasma donation drug testing, how long to wait after smoking"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-emerald-200/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium truncate max-w-[240px] sm:max-w-none">
                Can I Donate Plasma If I Smoke Weed
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-emerald-300" />
            Cannabis, THC & Donor Eligibility Guide
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Can I Donate Plasma If I Smoke Weed? Cannabis, THC & Drug Testing Rules
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            The factual, clinical truth about marijuana and plasmapheresis: FDA drug testing policies, active sobriety rules, heart rate thresholds, and pre-donation preparation.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200/80 pt-4 border-t border-emerald-800/60">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Published: November 9, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-300" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Medically Reviewed</span>
            </div>
            <button
              onClick={handleShare}
              className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800/60 hover:bg-emerald-700/80 text-white text-xs font-medium transition-colors cursor-pointer border border-emerald-600/40"
              title="Share article"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        {/* Quick Answer Box */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200/90 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3 text-emerald-800 font-bold text-base sm:text-lg">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Quick Answer: Can I Donate Plasma If I Smoke Weed?</span>
          </div>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-4">
            <strong>Yes, you can donate plasma if you smoke weed or use cannabis products.</strong> Neither the US FDA, the American Red Cross, nor major commercial centers (BioLife, CSL Plasma, Octapharma) test for THC or disqualify donors for recreational or medical marijuana. However, <strong>you must be 100% sober and unimpaired at the time of donation</strong>. Medical experts recommend waiting at least <strong>24 hours (minimum 4 to 6 hours)</strong> after smoking so your resting heart rate and blood pressure stay within passing limits.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-200/60 text-xs">
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">THC Drug Testing</span>
              <strong className="text-emerald-900 text-sm font-semibold">NOT Tested (0 Toxicology)</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Intoxication Rule</span>
              <strong className="text-rose-700 text-sm font-semibold">Must Be Fully Sober</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Recommended Wait</span>
              <strong className="text-emerald-900 text-sm font-semibold">24 Hours Pre-Donation</strong>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700">
          
          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-900 flex items-center gap-2">
            <Droplet className="w-6 h-6 text-emerald-600 inline" />
            1. The Official FDA and Red Cross Stance on Cannabis
          </h2>
          <p>
            With the widespread decriminalization and legalization of cannabis across numerous US states and global territories, many prospective donors hesitate because they fear a routine toxicology drug test will bar them from donating or disqualify them from donor pay.
          </p>
          <p>
            The official guidance from the <strong>American Red Cross</strong> and the <strong>Food and Drug Administration (FDA)</strong> is remarkably clear:
          </p>
          <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 my-4 bg-emerald-50 text-emerald-900 text-sm italic">
            "The American Red Cross does not test donors for THC or marijuana metabolites. The use of cannabis does not disqualify an individual from donating blood or plasma, provided the donor is not under the active influence at the time of donation."
          </blockquote>
          <p>
            The reason commercial centers do not test for marijuana is straightforward: <strong>blood donation screening is designed to catch transmissible bloodborne infectious agents</strong>—such as HIV-1, HIV-2, Hepatitis B, Hepatitis C, and Syphilis—not recreational lifestyle choices.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            2. The Sobriety and Informed Consent Mandate
          </h2>
          <p>
            While having THC in your system will not cause a deferral, <strong>arriving high or visibly impaired will cause immediate rejection</strong>.
          </p>
          <p>
            Under US federal law (21 CFR 640.63), every plasma donor must complete an informed consent questionnaire and undergo a comprehensive health screening before each donation. Legally, an individual under the influence of cannabis, alcohol, or prescription narcotics cannot provide legally binding informed consent.
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-rose-50 border border-rose-200 my-4 text-xs sm:text-sm text-rose-900">
            <strong className="font-semibold block mb-1">What Center Phlebotomists Watch For:</strong>
            Intake nurses evaluate donor demeanor at reception. If a donor exhibits glassy or red eyes, heavy cannabis odor on clothes, delayed cognitive reaction times, slurred speech, or uncoordinated motor movements, staff are legally bound to defer the donor for 24 hours.
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            3. Why Weed Smokers Often Fail the Physical Intake Screen
          </h2>
          <p>
            Even when donors are not visibly high, recent cannabis use can cause indirect physiological changes that cause them to fail the mandatory pre-donation vitals check:
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 sm:p-4">Vital Check</th>
                  <th className="p-3 sm:p-4">Center Passing Range</th>
                  <th className="p-3 sm:p-4">How Recent Cannabis Use Can Trigger Deferral</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Pulse / Heart Rate</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">50 to 100 beats per minute</td>
                  <td className="p-3 sm:p-4 text-slate-600">THC causes vasodilation and compensatory tachycardia, pushing resting heart rate to 105–120 bpm for 2 to 4 hours post-smoking.</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Blood Pressure</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">90/50 to 180/100 mmHg</td>
                  <td className="p-3 sm:p-4 text-slate-600">Acute cannabis inhalation can cause initial systolic spikes, followed by postural orthostatic hypotension.</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Hematocrit Level</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">38% to 54%</td>
                  <td className="p-3 sm:p-4 text-slate-600">Cannabis causes dry mouth and systemic fluid shift. Severe dehydration concentrates red blood cells, pushing hematocrit above 54%.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            4. How Long to Wait After Smoking Before Donating Plasma
          </h2>
          <p>
            To guarantee that you pass your vital signs check and enjoy a comfortable, complication-free plasmapheresis session:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Ideal Window:</strong> Wait at least <strong>24 hours</strong> between consuming cannabis and donating plasma. This gives your resting cardiovascular system ample time to settle into a baseline resting pulse.</li>
            <li><strong>Minimum Acceptable Buffer:</strong> If 24 hours is not feasible, allow at least <strong>4 to 6 hours</strong> post-inhalation, and at least <strong>8 to 12 hours</strong> after consuming edible THC gummies or baked goods.</li>
            <li><strong>Hydrate Aggressively:</strong> Drink 32 to 48 ounces of water and electrolyte solutions after smoking to offset cannabis-induced dry mouth and dehydration.</li>
          </ul>

        </article>

        {/* Interactive FAQ Accordion */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
              Common Questions Answered
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Frequently Asked Questions: Cannabis & Plasma Donation
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-800 transition-colors cursor-pointer"
                  aria-expanded={openFaq === index}
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Charity Banner */}
        <section className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-medium mb-3">
                <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                Community Health & Healthcare Aid
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Help Impoverished Patients Access Critical Medical Care
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                Just as plasma donations provide life-saving therapies for critical conditions, your charitable gifts bring medicines, clean healthcare, and emergency surgeries to needy families in Rajasthan.
              </p>
            </div>
            <Link
              to="/donate"
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
            >
              Donate Now
            </Link>
          </div>
        </section>

        {/* Author Box */}
        <div className="mt-12 p-5 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg shrink-0">
            SS
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Shah Seva Editorial & Medical Review Board
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Researched and vetted in accordance with American Red Cross donor eligibility guidelines, US FDA 21 CFR regulations, and toxicology standards at major commercial collection centers.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-emerald-700 font-medium">
              <Link to="/blog" className="hover:underline">Explore All Blog Articles</Link>
              <span>•</span>
              <Link to="/blog/how-often-can-you-donate-plasma" className="hover:underline">Plasma Frequency Guide</Link>
              <span>•</span>
              <Link to="/faq" className="hover:underline">Charity FAQs</Link>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default DonatePlasmaSmokeWeedPage;
