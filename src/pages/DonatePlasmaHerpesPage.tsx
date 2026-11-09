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
  Shield, 
  Sparkles, 
  AlertTriangle,
  Droplet
} from 'lucide-react';
import SEO from '../components/SEO';

export const DonatePlasmaHerpesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Can You Donate Plasma If You Have Herpes? HSV-1, HSV-2 & Cold Sore Rules',
        text: 'The medical reality of donating plasma with herpes: HSV-1, HSV-2, active cold sore deferrals, antiviral medications (Valtrex, Acyclovir), and patient safety.',
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
      q: "Can you donate plasma if you have herpes?",
      a: "Yes, you can donate plasma if you have herpes (either HSV-1 oral herpes/cold sores or HSV-2 genital herpes), provided you do not have an active breakout, open sore, or systemic flu-like symptoms on the day of donation. Over 50% to 80% of adult donors carry antibodies to HSV-1 or HSV-2, and neither strain causes a permanent donor ban."
    },
    {
      q: "Can you donate plasma if you currently have an active cold sore?",
      a: "No. If you have an active, oozing, or unhealed cold sore, oral blister, or genital lesion on the day of your appointment, you will receive a temporary medical deferral. You must wait until the sore is completely dry, scabbed over, and completely resolved before donating."
    },
    {
      q: "Can you donate plasma while taking antiviral medications like Valtrex or Acyclovir?",
      a: "Yes. In the vast majority of commercial centers and blood banks (including BioLife, CSL Plasma, and the American Red Cross), daily suppressive or episodic therapy with valacyclovir (Valtrex), acyclovir, or famciclovir is completely acceptable and does NOT trigger a deferral, provided you are asymptomatic."
    },
    {
      q: "Do plasma centers test for herpes (HSV)?",
      a: "No. Blood and plasma centers do not test donation units for Herpes Simplex Virus (HSV-1 or HSV-2). Standard mandatory viral screening tests exclusively for HIV-1/2, Hepatitis B, Hepatitis C, and Syphilis."
    },
    {
      q: "Can herpes be transmitted through plasma transfusions?",
      a: "No. The Herpes Simplex Virus resides in sensory nerve ganglia (neurons), not freely floating in plasma fluid. Furthermore, source plasma undergoes extensive industrial viral inactivation processes—including solvent-detergent treatment, low pH incubation, and nanofiltration—which completely destroy lipid-enveloped viruses like HSV."
    },
    {
      q: "What other infections cause permanent vs temporary plasma deferral?",
      a: "HIV, Hepatitis B, Hepatitis C, and Chagas disease cause permanent deferral. By contrast, Herpes Simplex (HSV), common colds, treated UTIs, and resolved acne cause only temporary deferrals during acute symptomatic phases."
    },
    {
      q: "How long after a herpes breakout can you donate plasma?",
      a: "You can donate as soon as the blister is 100% healed and dry with no underlying inflammation or systemic symptoms (fever, swollen lymph nodes). For most cold sores, this takes between 7 and 10 days."
    },
    {
      q: "Do you have to disclose herpes on the donor health questionnaire?",
      a: "You must honestly answer all general questions regarding whether you currently feel well, have any active lesions or unhealed sores, or have had recent unexplained fevers. You do not need to volunteer an asymptomatic, dormant herpes diagnosis unless asked specifically by the medical screener."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: 'https://shahseva.vercel.app/' },
    { name: 'Blog', item: 'https://shahseva.vercel.app/blog' },
    { name: 'Donate Plasma If You Have Herpes', item: 'https://shahseva.vercel.app/blog/can-you-donate-plasma-if-you-have-herpes' }
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
    "headline": "Can You Donate Plasma If You Have Herpes? HSV-1, Cold Sores & Antiviral Rules (2026)",
    "description": "Learn if you can donate plasma if you have herpes (HSV-1 or HSV-2). Discover cold sore deferral rules, Valtrex/Acyclovir medication policies, and viral safety facts.",
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
    "datePublished": "2026-11-09T10:00:00+05:30",
    "dateModified": "2026-11-09T10:00:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://shahseva.vercel.app/blog/can-you-donate-plasma-if-you-have-herpes"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Can You Donate Plasma If You Have Herpes? Cold Sores & HSV (2026)"
        description="Can you donate plasma if you have herpes? Yes, as long as you have no active outbreak. Learn rules for cold sores, HSV-1, HSV-2, and Valtrex/Acyclovir."
        canonical="https://shahseva.vercel.app/blog/can-you-donate-plasma-if-you-have-herpes"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&w=1200&h=630&q=80"
        keywords="can you donate plasma if you have herpes, cold sores plasma donation, HSV plasma donation, plasma donation eligibility infections"
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
                Donate Plasma If You Have Herpes
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5 text-emerald-300" />
            Infectious Disease & Donor Screening Guide
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Can You Donate Plasma If You Have Herpes? Cold Sores, HSV-1, HSV-2 & Medication Rules
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            The factual clinical reality: why having dormant herpes does not disqualify you, active cold sore deferral timelines, Valtrex/Acyclovir usage, and recipient safety.
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
            <span>Quick Answer: Can You Donate Plasma If You Have Herpes?</span>
          </div>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-4">
            <strong>Yes, you can donate plasma if you have herpes (HSV-1 or HSV-2).</strong> Having the herpes virus does NOT cause a permanent deferral or ban. However, <strong>you must be completely free of active outbreaks, open blisters, or cold sores on the day of donation</strong>. Once any lesion is fully healed and scabbed over, and you have no systemic symptoms (fever or swollen glands), you are fully eligible. Taking daily antiviral medications like Valtrex (valacyclovir) or acyclovir is also permitted.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-200/60 text-xs">
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Dormant / Asymptomatic</span>
              <strong className="text-emerald-900 text-sm font-semibold">100% Eligible to Donate</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Active Cold Sore / Lesion</span>
              <strong className="text-rose-700 text-sm font-semibold">Temporary Deferral</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Antivirals (Valtrex)</span>
              <strong className="text-emerald-900 text-sm font-semibold">Permitted at Most Centers</strong>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700">
          
          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-900 flex items-center gap-2">
            <Droplet className="w-6 h-6 text-emerald-600 inline" />
            1. The Prevalence of Herpes Simplex Virus (HSV) Among Donors
          </h2>
          <p>
            Herpes Simplex Virus is extraordinarily prevalent in the global population. According to the World Health Organization (WHO) and the Centers for Disease Control and Prevention (CDC):
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Approximately <strong>67% of the global population under age 50</strong> carries Herpes Simplex Virus Type 1 (HSV-1), which primarily manifests as oral cold sores or fever blisters.</li>
            <li>Approximately <strong>13% of adults aged 15 to 49</strong> carry Herpes Simplex Virus Type 2 (HSV-2), which typically causes genital lesions.</li>
          </ul>
          <p>
            Because the majority of healthy adults carry antibodies to one or both HSV strains, disqualifying individuals with herpes would decimate the global blood and plasma supply. Consequently, <strong>herpes has never been a disqualifying condition for blood or plasma donation</strong>, provided the donor is currently asymptomatic.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            2. Active Outbreak Rules: Why Cold Sores Cause Temporary Deferral
          </h2>
          <p>
            While having dormant herpes is completely fine, <strong>attempting to donate during an active outbreak will result in a temporary deferral</strong>.
          </p>
          <p>
            The reason for deferral during an acute outbreak is twofold:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700">
            <li><strong>Bacterial Superinfection Risk:</strong> An active cold sore or lesion is an open skin wound that harbors bacteria (such as <em>Staphylococcus aureus</em>). During venipuncture, there is a risk of secondary bacterial inoculation into the bloodstream.</li>
            <li><strong>Systemic Immune Response:</strong> An active outbreak can trigger low-grade fever, regional lymphadenopathy (swollen lymph nodes), and elevated inflammatory markers. Centers mandate that donors feel in good general health on donation day.</li>
          </ol>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            3. Taking Valtrex (Valacyclovir) or Acyclovir: Does It Disqualify You?
          </h2>
          <p>
            Many individuals take daily oral antivirals (such as valacyclovir / Valtrex or acyclovir) for chronic suppressive therapy to prevent recurring outbreaks.
          </p>
          <p>
            <strong>Antiviral medications do NOT disqualify you from donating plasma.</strong>
          </p>
          <p>
            Neither the FDA nor commercial centers like BioLife, CSL Plasma, or Octapharma maintain antivirals on their prohibited medication deferral lists. As long as you are taking the medication for suppression and have no active sores, you are fully cleared to donate.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            4. Why Plasma From HSV-Positive Donors Is 100% Safe for Patients
          </h2>
          <p>
            Donors often wonder: <em>"Can a patient contract herpes from my donated plasma?"</em>
          </p>
          <p>
            The clinical answer is <strong>an absolute NO</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>HSV Is Not Bloodborne:</strong> Herpes simplex is a neurotropic virus that resides in the nerve ganglia (such as the trigeminal ganglion for oral herpes). It does not replicate in or circulate through blood plasma.</li>
            <li><strong>Rigorous Industrial Viral Inactivation:</strong> Source plasma is pooled and manufactured through specialized pharmaceutical processes that include heat inactivation (pasteurization), solvent-detergent treatment, and nanofiltration. These processes completely destroy all lipid-enveloped viral particles.</li>
          </ul>

        </article>

        {/* Interactive FAQ Accordion */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
              Top Donor Health Questions
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Frequently Asked Questions: Herpes & Plasma Donation
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
                Medical Aid & Healthcare Outreach
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Help Needy Patients Receive Crucial Medical Treatment
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                Shah Seva provides free diagnostic medicines, critical care subsidies, and emergency relief to marginalized families facing debilitating illness in Bhilwara, Rajasthan.
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
              Researched and validated against donor eligibility standards from the US Food and Drug Administration (FDA), the American Red Cross Infectious Disease guidelines, and PPTA International Quality Plasma Program criteria.
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

export default DonatePlasmaHerpesPage;
