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
  Baby, 
  Sparkles, 
  AlertTriangle, 
  ShieldAlert,
  Droplet
} from 'lucide-react';
import SEO from '../components/SEO';

export const DonatePlasmaPregnantPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Can You Donate Plasma While Pregnant? Risks, Rules & Postpartum Timeline',
        text: 'The medical truth about donating plasma during pregnancy, risks to mother and fetus, HLA antibodies (TRALI), and how long to wait after giving birth.',
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
      q: "Can you donate plasma while pregnant?",
      a: "No. You cannot donate plasma while pregnant under any circumstances. Both the US FDA and the American Red Cross enforce a strict, non-negotiable deferral for pregnant women due to severe health risks to both the developing fetus (hypovolemia, placental hypoperfusion) and the pregnant mother (extreme anemia, fainting, electrolyte depletion)."
    },
    {
      q: "Why is donating plasma dangerous during pregnancy?",
      a: "During pregnancy, maternal blood volume expands by 40% to 50% to support fetal growth. Withdrawing 600–880 mL of liquid plasma can cause sudden maternal hypotension, reduce critical blood flow to the placenta, trigger uterine cramping, and deplete maternal protein stores needed for fetal organ synthesis."
    },
    {
      q: "How long after giving birth do you have to wait to donate plasma?",
      a: "The standard waiting period is 6 weeks (42 days) following a full-term vaginal delivery or Cesarean birth, provided you have fully healed, ceased postpartum bleeding (lochia), and are not exclusively breastfeeding."
    },
    {
      q: "Can you donate plasma while breastfeeding?",
      a: "Most medical directors and commercial centers defer breastfeeding mothers. Producing breast milk requires massive quantities of maternal fluid, proteins (casein, lactalbumin), and immunoglobulins. Donating plasma can cause severe dehydration, precipitate fatigue, and significantly diminish breast milk supply."
    },
    {
      q: "What is HLA antibody testing after pregnancy (TRALI risk)?",
      a: "During pregnancy, a mother is exposed to fetal antigens inherited from the biological father, prompting her immune system to develop Human Leukocyte Antigen (HLA) antibodies. If plasma containing HLA antibodies is transfused into a patient, it can cause Transfusion-Related Acute Lung Injury (TRALI)—a life-threatening pulmonary reaction. Centers test previously pregnant donors for HLA antibodies before approving plasma for transfusion."
    },
    {
      q: "How long do you have to wait to donate plasma after a miscarriage or abortion?",
      a: "If a pregnancy ends prior to the third trimester (before 20 weeks), the deferral period is typically 6 weeks. If pregnancy ends after 20 weeks (stillbirth), a 6-month deferral is enforced to allow full maternal iron, hormonal, and hemodynamic normalization."
    },
    {
      q: "Can donating plasma while pregnant cause a miscarriage?",
      a: "Yes. Donating plasma during early pregnancy poses severe risks of hemodynamic instability, transient hypovolemia, and diminished placental perfusion, which can trigger uterine hypoxia, cramping, and pregnancy loss."
    },
    {
      q: "Do plasma centers perform pregnancy tests at intake?",
      a: "Centers do not routinely administer urine pregnancy tests to every female donor on every visit, but you must complete a legally binding medical history questionnaire declaring whether you are or could be pregnant. Concealing a pregnancy violates federal medical consent laws."
    }
  ];

  const breadcrumbs = [
    { name: 'Home', item: 'https://shahseva.vercel.app/' },
    { name: 'Blog', item: 'https://shahseva.vercel.app/blog' },
    { name: 'Donate Plasma While Pregnant', item: 'https://shahseva.vercel.app/blog/can-you-donate-plasma-while-pregnant' }
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
    "headline": "Can You Donate Plasma While Pregnant? Medical Risks, Postpartum Rules & Safety (2026)",
    "description": "Find out why you cannot donate plasma while pregnant. Learn about fetal hypoxia risks, HLA antibodies (TRALI), breastfeeding rules, and postpartum recovery timelines.",
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
    "datePublished": "2026-11-09T09:45:00+05:30",
    "dateModified": "2026-11-09T09:45:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://shahseva.vercel.app/blog/can-you-donate-plasma-while-pregnant"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <SEO
        title="Can You Donate Plasma While Pregnant? Risks & Postpartum Rules"
        description="Can you donate plasma while pregnant? No. Discover fetal risks, FDA & Red Cross deferrals, HLA antibodies (TRALI), breastfeeding rules, and when it's safe."
        canonical="https://shahseva.vercel.app/blog/can-you-donate-plasma-while-pregnant"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1536856788636-e875147be4ef?auto=format&fit=crop&w=1200&h=630&q=80"
        keywords="can you donate plasma while pregnant, donate plasma after pregnancy, breastfeeding plasma donation, how long to wait after giving birth"
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
                Donate Plasma While Pregnant
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-4">
            <Baby className="w-3.5 h-3.5 text-emerald-300" />
            Maternal Health & Clinical Safety
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Can You Donate Plasma While Pregnant? Medical Risks, Postpartum Rules & Safety
          </h1>

          <p className="text-emerald-100 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
            The definitive medical and regulatory breakdown explaining why pregnant women are strictly deferred, maternal-fetal physiological risks, TRALI antibody testing, and postpartum recovery timelines.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-emerald-200/80 pt-4 border-t border-emerald-800/60">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Published: November 9, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-300" />
              <span>9 min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>Medically Reviewed (OB/GYN Guidelines)</span>
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
        {/* Critical Alert */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-rose-50 border-2 border-rose-300 flex items-start gap-3.5 text-rose-950 text-xs sm:text-sm leading-relaxed shadow-xs">
          <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-rose-900 block mb-0.5">Absolute Medical Contraindication:</strong>
            You cannot donate plasma while pregnant. Every medical regulatory agency worldwide (including the FDA, Red Cross, and WHO) mandates an immediate deferral for the entire duration of pregnancy to prevent life-threatening maternal hypotension and fetal distress.
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200/90 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3 text-emerald-800 font-bold text-base sm:text-lg">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Quick Answer: Can You Donate Plasma While Pregnant?</span>
          </div>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed mb-4">
            <strong>No, you cannot donate plasma while pregnant.</strong> Pregnancy demands a 50% expansion in maternal blood volume to nourish the placenta and developing fetus. Donating plasma causes acute fluid drops, placental hypoperfusion, severe maternal iron/protein exhaustion, and risk of miscarriage. After giving birth, you must wait at least <strong>6 weeks (42 days)</strong>, complete postpartum healing, and finish breastfeeding before you can safely resume donating.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-emerald-200/60 text-xs">
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">During Pregnancy</span>
              <strong className="text-rose-700 text-sm font-semibold">Strictly Prohibited</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Wait After Delivery</span>
              <strong className="text-emerald-900 text-sm font-semibold">Minimum 6 Weeks</strong>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-emerald-100">
              <span className="text-slate-500 block">Breastfeeding</span>
              <strong className="text-amber-800 text-sm font-semibold">Deferred Until Weaned</strong>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-700">
          
          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4 text-slate-900 flex items-center gap-2">
            <Droplet className="w-6 h-6 text-emerald-600 inline" />
            1. Why Plasma Donation Is Prohibited During Pregnancy
          </h2>
          <p>
            During human gestation, the female cardiovascular system undergoes monumental adaptations. Blood plasma volume increases by approximately <strong>1,200 to 1,500 milliliters (a 40% to 50% surge)</strong> to nourish the placenta, deliver oxygen to the developing fetus, and cushion the mother against hemorrhage during childbirth.
          </p>
          <p>
            When an individual undergoes plasmapheresis, an apheresis machine extracts between <strong>625 mL and 880 mL of liquid plasma</strong> (depending on donor weight). In a pregnant individual, this sudden extraction triggers severe physiological disruptions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li><strong>Placental Hypoperfusion:</strong> A sudden reduction in circulating intravascular fluid causes maternal blood pressure to plunge, starving the uterine arteries of vital oxygenated blood flow.</li>
            <li><strong>Nutritional & Protein Depletion:</strong> Plasma contains critical building blocks—serum albumin, clotting factors, immunoglobulins, and minerals. Stripping these reserves compromises fetal organ development.</li>
            <li><strong>Severe Vasovagal Syncope & Fainting:</strong> Pregnant women have altered vascular resistance. Sudden fluid shifts frequently induce dizziness, nausea, and fainting, potentially resulting in abdominal trauma from falls.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            2. The Transfusion Danger: HLA Antibodies and TRALI
          </h2>
          <p>
            The prohibition on pregnancy plasma donation protects not only the mother and baby, but also <strong>the critically ill patient who receives the plasma transfusion</strong>.
          </p>
          <p>
            During pregnancy, fetal red cells and platelets enter the maternal circulation during micro-placental tears. Because the fetus inherits half its genetic antigens from the father, the mother's immune system frequently recognizes these foreign markers and produces <strong>Human Leukocyte Antigen (HLA) antibodies</strong> or <strong>Human Neutrophil Antigen (HNA) antibodies</strong>.
          </p>
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 my-4 text-xs sm:text-sm text-amber-900">
            <strong className="font-semibold block mb-1">What is TRALI?</strong>
            Transfusion-Related Acute Lung Injury (TRALI) is the leading cause of transfusion-related mortality. When plasma containing anti-HLA antibodies is transfused into an emergency patient, those antibodies bind to the recipient's white blood cells, causing them to aggregate in the lung capillaries. This triggers severe pulmonary edema, respiratory arrest, and high mortality. Because pregnancy is the primary trigger of HLA antibodies, commercial and non-profit centers test all previously pregnant female donors.
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            3. Postpartum Timelines: When Can You Donate After Giving Birth?
          </h2>
          <p>
            Following childbirth, your body requires extensive time to rebuild iron reserves, normalize hormonal balances, and close the uterine placental wound:
          </p>
          
          <div className="overflow-x-auto my-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 sm:p-4">Postpartum Circumstance</th>
                  <th className="p-3 sm:p-4">Mandatory Waiting Period</th>
                  <th className="p-3 sm:p-4">Physiological Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Full-term vaginal birth (bottle feeding)</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">6 weeks (42 days)</td>
                  <td className="p-3 sm:p-4 text-slate-600">Allows lochia to resolve, hematocrit to stabilize, and pelvic tissues to heal.</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Cesarean Section birth</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">6 to 8 weeks</td>
                  <td className="p-3 sm:p-4 text-slate-600">Major surgical recovery requires complete abdominal muscle and uterine scar healing.</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Active Breastfeeding / Nursing</td>
                  <td className="p-3 sm:p-4 font-medium text-rose-700">Deferred until weaned</td>
                  <td className="p-3 sm:p-4 text-slate-600">Milk production consumes high maternal protein and fluid; donating causes dehydration and drops milk supply.</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3 sm:p-4 font-semibold text-slate-900">Early Miscarriage (&lt;20 weeks)</td>
                  <td className="p-3 sm:p-4 font-medium text-emerald-700">6 weeks</td>
                  <td className="p-3 sm:p-4 text-slate-600">Enables hemoglobin replenishment and emotional recovery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold mt-10 mb-4 text-slate-900">
            4. Breastfeeding and Plasma Donation
          </h2>
          <p>
            Many postpartum mothers who are nursing ask whether they can donate plasma. The vast majority of plasma centers (including BioLife and CSL Plasma) enforce a <strong>strict deferral for actively breastfeeding mothers</strong>.
          </p>
          <p>
            Synthesizing breast milk requires up to 500–700 extra calories per day and massive quantities of water, calcium, maternal immunoglobulins, and proteins. If a nursing mother donates 800 mL of plasma twice a week, her body cannot support both lactation and plasma protein regeneration. Her milk volume drops precipitously, and she risks severe exhaustion.
          </p>

        </article>

        {/* Interactive FAQ Accordion */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 block mb-1">
              Top Medical Questions Answered
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Frequently Asked Questions: Pregnancy & Plasma Donation
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
                Maternal & Infant Health Support
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Support Impoverished Mothers & Newborns in Rajasthan
              </h3>
              <p className="text-emerald-100 text-xs sm:text-sm max-w-xl">
                Shah Seva provides newborn delivery kits, maternal nutritional rations, and clinical medical support to vulnerable mothers and infants across underprivileged rural communities.
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
              Researched and vetted in accordance with clinical obstetrics guidelines, American Red Cross TRALI prevention protocols, and US Food and Drug Administration (FDA) donor eligibility mandates.
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

export default DonatePlasmaPregnantPage;
