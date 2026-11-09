import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Calendar, Tag, User, Share2, 
  ShieldCheck, CheckCircle2, Sparkles, BookOpen, 
  HelpCircle, ChevronDown, Check, X, ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

export default function FeeVsFeesPage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is it fee or fees?",
      answer: "Both are correct English words, but they are used in different contexts. Use 'fee' when speaking about one singular, distinct charge (e.g., 'an application fee of $50'). Use 'fees' when referring to multiple individual charges, or when using the word collectively for institutional or professional bills (e.g., 'school fees', 'legal fees', 'university tuition fees')."
    },
    {
      question: "Is fees singular or plural?",
      answer: "Grammatically, 'fees' is a plural noun and takes a plural verb in standard English (e.g., 'The legal fees are higher than expected'). However, in everyday conversation and institutional contexts, 'fees' is frequently treated as a collective plural noun referring to an aggregated package of costs (such as a school's term fee structure)."
    },
    {
      question: "What is the difference between fee and charge?",
      answer: "A 'fee' typically refers to a fixed or standardized price paid for professional services, bureaucratic privileges, licenses, or institutional memberships (such as doctor fees, school fees, or registration fees). A 'charge' is a broader commercial term referring to any cost, price, or financial debit demanded for goods, services, or maintenance (e.g., delivery charge, room charge, electricity charge)."
    },
    {
      question: "Is 'fees' a countable noun?",
      answer: "Yes, 'fee' is a countable noun. You can have one fee (singular) or multiple fees (plural). For example: 'The bank waives two monthly fees for student accounts.' However, when used institutionally as 'school fees' or 'tuition fees', it functions as a plural collective noun that encompasses multiple combined overheads (tuition, laboratory, library, and examination expenses)."
    },
    {
      question: "What is a processing fee?",
      answer: "A processing fee is a specific one-time administrative surcharge levied by a bank, institution, or merchant to cover the operational, paperwork, or digital verification costs of executing a transaction, loan application, or service request."
    },
    {
      question: "What is the difference between fees and fare?",
      answer: "A 'fee' is paid for professional advice, institutional services, or regulatory administrative procedures (e.g., lawyer fees, tuition fees). A 'fare' refers specifically to the price of transportation or travel on public conveyances like buses, trains, airplanes, taxis, or ferries (e.g., bus fare, train fare, airfare)."
    }
  ];

  // Article structured data for rich snippet indexing
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://shahseva.vercel.app/blog/fee-vs-fees-meaning-difference-examples#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://shahseva.vercel.app/blog/fee-vs-fees-meaning-difference-examples"
        },
        "headline": "Fee vs Fees: Meaning, Difference & Examples (Simple Guide)",
        "description": "Confused between fee and fees? Learn the meaning, difference, when to use each, plus easy examples and Hindi meaning in this simple guide.",
        "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000",
        "datePublished": "2026-11-09T08:00:00+05:30",
        "dateModified": "2026-11-09T08:00:00+05:30",
        "author": {
          "@type": "Person",
          "name": "Shah Seva Editorial Team",
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
          "@id": "https://shahseva.vercel.app/blog/fee-vs-fees-meaning-difference-examples"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://shahseva.vercel.app/blog/fee-vs-fees-meaning-difference-examples#faq",
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
        title="Fee vs Fees: Meaning, Difference & Examples (Simple Guide)"
        description="Confused between fee and fees? Learn the meaning, difference, when to use each, plus easy examples and Hindi meaning in this simple guide."
        keywords="fees, fee vs fees, difference between fee and fees, fees meaning, fee or fees which is correct, fees meaning in hindi, fees vs fee examples, school fees, college fees, processing fees, service fees"
        canonical="https://shahseva.vercel.app/blog/fee-vs-fees-meaning-difference-examples"
        ogType="article"
        ogImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000"
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
              <ShieldCheck size={14} className="text-emerald-600" /> Grammatically Verified
            </span>
          </div>

          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
              <Calendar size={14} />
              November 9, 2026
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full">
              <Tag size={14} />
              Grammar &amp; Vocabulary Guide
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              <BookOpen size={14} />
              English &amp; Hindi Usage
            </div>
          </div>

          {/* EXACTLY ONE H1 */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
            Fee vs Fees: What&apos;s the Difference and When to Use Each?
          </h1>

          {/* Editorial Author Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs md:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User size={16} className="text-primary shrink-0" />
              <span>
                <strong>Author / Reviewer:</strong> Shah Seva Editorial &amp; Linguistic Research Board
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-medium">
              <CheckCircle2 size={16} />
              <span>Fact-Checked &amp; Educational Standard</span>
            </div>
          </div>

          {/* Featured Image with Descriptive Alt Text */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-strong mb-10 aspect-video bg-slate-100 border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000" 
              alt="Students in a classroom illustrating educational school fees and grammar differences between fee and fees" 
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quick Answer / Key Takeaway Callout Box (Direct answer in first 2 sentences) */}
          <div className="mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-white border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <h2 className="text-lg md:text-xl font-serif font-bold text-emerald-950">
                Quick Answer: Fee or Fees?
              </h2>
            </div>
            <p className="text-slate-800 text-base md:text-lg leading-relaxed font-medium">
              <strong>Fee</strong> is singular (referring to a single specific charge for a service), while <strong>fees</strong> is plural (referring to multiple charges or charges across different categories). However, <strong>fees</strong> is also very commonly used as a collective or institutional noun to describe the total amount payable for ongoing services, such as <em>school fees</em>, <em>college fees</em>, or <em>legal fees</em>.
            </p>
          </div>

          {/* Main Article Content */}
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-700 font-medium mb-10 leading-relaxed italic border-l-4 border-accent pl-6 bg-slate-50/50 py-3 rounded-r-xl">
              Whether you are paying an entrance examination surcharge, filling out an official visa petition, or calculating annual school charges, knowing whether to write &ldquo;fee&rdquo; or &ldquo;fees&rdquo; is a common linguistic doubt. This evidence-based guide breaks down dictionary definitions, grammatical nuances, comparative tables, and authentic real-world examples.
            </p>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                What Does &ldquo;Fee&rdquo; Mean?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                The noun <strong>fee</strong> (singular) denotes a fixed sum of money charged or paid for a specific service, privilege, transaction, or professional advice. Historically derived from the Anglo-Norman word <em>fee</em> and Old French <em>fieu</em> (a feudal estate or fief granted in return for loyal service), the modern term signifies remuneration for non-commercial or specialized services.
              </p>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                According to leading lexicons including Oxford and Merriam-Webster, a &ldquo;fee&rdquo; is typically a countable singular noun. It refers to one distinct price or tariff applied to a particular action.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base md:text-lg mb-4">
                <li><strong>An admission fee:</strong> The solitary price charged to enter an exhibition, museum, or zoological garden.</li>
                <li><strong>A cancellation fee:</strong> The single penalty charged when you void a reservation or contractual commitment.</li>
                <li><strong>A membership fee:</strong> The single cost required to join a sports club or library for a set term.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Because it is grammatically singular, it takes singular determiners (<em>a, an, the, this, each, every, one</em>) and requires a singular verb (<em>is, was, has</em>):
                <br />
                <span className="inline-block mt-2 font-medium text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                  &ldquo;The processing fee <strong>is</strong> non-refundable.&rdquo;
                </span>
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                What Does &ldquo;Fees&rdquo; Mean?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                The word <strong>fees</strong> serves two distinct linguistic functions in the English language:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-base md:text-lg mb-4">
                <li>
                  <strong>Standard Countable Plural:</strong> More than one fee. When an individual or company incurs several separate charges across distinct categories, the plural &ldquo;fees&rdquo; is mandatory (e.g., &ldquo;He had to pay both application and examination fees&rdquo;).
                </li>
                <li>
                  <strong>Collective / Institutional Plural Noun:</strong> In institutional finance, law, healthcare, and education, &ldquo;fees&rdquo; is frequently used as an overarching collective term representing an aggregate bundle of ongoing costs. For instance, &ldquo;school fees&rdquo; is not just one transaction; it usually bundles together classroom instruction, library access, laboratory costs, and athletic facilities.
                </li>
              </ol>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                When functioning as a plural noun, &ldquo;fees&rdquo; takes plural determiners (<em>these, those, many, several, all</em>) and plural verbs (<em>are, were, have</em>):
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-slate-800 font-medium text-sm md:text-base">
                <p>&ldquo;College tuition fees <strong>have</strong> increased significantly this semester.&rdquo;</p>
                <p>&ldquo;All bank service fees <strong>are</strong> clearly itemized on page two of your statement.&rdquo;</p>
              </div>
            </section>

            {/* Section 3: Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                Fee vs Fees: Main Difference (Comparison Table)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                To help you make the right choice instantly, here is an authoritative side-by-side comparison table analyzing grammatical classification, verb agreement, countability, and contexts:
              </p>

              {/* Responsive comparison table */}
              <div className="overflow-x-auto shadow-sm rounded-2xl border border-slate-200 mb-6">
                <table className="min-w-full text-left text-sm md:text-base border-collapse">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Feature / Aspect
                      </th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Fee (Singular)
                      </th>
                      <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs border-b border-primary-dark">
                        Fees (Plural / Collective)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Grammatical Form</td>
                      <td className="py-3.5 px-5 text-slate-700">Singular countable noun</td>
                      <td className="py-3.5 px-5 text-slate-700">Plural countable noun / Collective institutional noun</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Primary Meaning</td>
                      <td className="py-3.5 px-5 text-slate-700">One individual charge or tariff for a single service</td>
                      <td className="py-3.5 px-5 text-slate-700">Multiple charges OR an aggregate sum paid to an institution</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Verb Agreement</td>
                      <td className="py-3.5 px-5 text-slate-700 font-semibold text-emerald-700">Singular verb (is / was / has)</td>
                      <td className="py-3.5 px-5 text-slate-700 font-semibold text-emerald-700">Plural verb (are / were / have)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Determiners Used</td>
                      <td className="py-3.5 px-5 text-slate-700">a, an, the, this, that, one, each, every</td>
                      <td className="py-3.5 px-5 text-slate-700">these, those, many, all, several, your, total</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Frequent Collocations</td>
                      <td className="py-3.5 px-5 text-slate-700">registration fee, entry fee, flat fee, late fee, license fee</td>
                      <td className="py-3.5 px-5 text-slate-700">school fees, legal fees, university fees, tuition fees, doctor&apos;s fees</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">Representative Example</td>
                      <td className="py-3.5 px-5 text-slate-700 italic">&ldquo;The consultation fee is ₹500.&rdquo;</td>
                      <td className="py-3.5 px-5 text-slate-700 italic">&ldquo;His annual school fees are paid quarterly.&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                When to Use &ldquo;Fee&rdquo; (With 5+ Example Sentences)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Use the singular <strong>fee</strong> when your sentence focuses on one specific price point, flat-rate surcharge, or individual transaction. Here are clear situational examples:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">1. Professional Consultation:</p>
                  <p className="text-slate-700 italic">&ldquo;The specialist charges an initial consultation <strong>fee</strong> of $150.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Refers to one single appointment rate.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">2. Statutory License or Permit:</p>
                  <p className="text-slate-700 italic">&ldquo;Applicants must submit a non-refundable passport renewal <strong>fee</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: One government-stipulated filing charge.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">3. Venue Entry / Museum Admission:</p>
                  <p className="text-slate-700 italic">&ldquo;Children under twelve enter without paying an entrance <strong>fee</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: An individual ticket or gate charge.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">4. Penalty or Late Surcharge:</p>
                  <p className="text-slate-700 italic">&ldquo;If your electricity bill is paid after the 15th, a late <strong>fee</strong> of ₹100 will apply.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: One single penalty amount.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">5. Transaction Processing Charge:</p>
                  <p className="text-slate-700 italic">&ldquo;The payment gateway deducts a convenience <strong>fee</strong> of 1.5% on international credit cards.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: A distinct line-item digital processing charge.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">6. Contractual Retainer / Fixed Rate:</p>
                  <p className="text-slate-700 italic">&ldquo;The architect agreed to complete the residential blueprint for a flat <strong>fee</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: An agreed, single lump-sum figure.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                When to Use &ldquo;Fees&rdquo; (With 5+ Example Sentences)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Use the plural <strong>fees</strong> when discussing a collective institutional cost structure, multiple combined tariffs, or ongoing academic charges. Here are practical examples:
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">1. School &amp; College Tuition:</p>
                  <p className="text-slate-700 italic">&ldquo;Underprivileged families in Rajasthan often struggle to afford private school <strong>fees</strong> for their daughters.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Aggregate bundle of tuition, exams, uniforms, and books.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">2. Itemized Bank Deductions:</p>
                  <p className="text-slate-700 italic">&ldquo;Check your bank passbook carefully to avoid unnecessary overdraft and maintenance <strong>fees</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Multiple distinct bank charges added together.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">3. Legal Representation Costs:</p>
                  <p className="text-slate-700 italic">&ldquo;The litigation lasted two years, resulting in tens of thousands of dollars in attorney <strong>fees</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Collective bill of court filings, hourly lawyer rates, and administrative costs.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">4. University Semester Installments:</p>
                  <p className="text-slate-700 italic">&ldquo;The university requires semester <strong>fees</strong> to be cleared before examination admit cards are issued.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: The entire tuition bill for an academic term.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">5. Clinical / Healthcare Inpatient Charges:</p>
                  <p className="text-slate-700 italic">&ldquo;The hospital waived the ICU doctor <strong>fees</strong> for the low-income accident victim.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Multiple visits and physician round fees.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">6. Brokerage &amp; Platform Expenses:</p>
                  <p className="text-slate-700 italic">&ldquo;Cryptocurrency exchanges often charge hidden trading and withdrawal <strong>fees</strong>.&rdquo;</p>
                  <p className="text-xs text-slate-500 mt-1">Context: Recurring varied percentage deductions.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Common Types of Fees */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                Common Types of Fees Explained
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                In modern financial, academic, and consumer environments, fees appear under several specific descriptors. Below are the most common variations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">1. School Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The recurring institutional amount parents pay for elementary or secondary schooling, including classroom instruction, physical facilities, and administrative maintenance.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">2. Tuition Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    The specific cost assessed by colleges, universities, or coaching institutes exclusively for teaching, academic credits, and professorial guidance.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">3. Admission Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A one-time initiation amount levied upon securing a seat or enrollment in an academic institution or vocational course.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">4. Processing Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A flat or percentage-based administrative charge imposed by financial lenders or service providers to verify paperwork, KYC, and background credentials.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">5. Service Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A surcharge added to an invoice or consumer ticket to cover customer assistance, maintenance, delivery handling, or tech support.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">6. Legal Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Remuneration billed by advocates, attorneys, or legal advisers for counseling, court appearances, document drafting, and statutory filings.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">7. Bank Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Routine deductions by commercial banking institutions for maintaining minimum balance shortfalls, wire transfers, SMS alerts, or ATM card issuance.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">8. Late Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A punitive financial charge levied when an invoice, loan EMI, credit card balance, or utility bill is settled past its official due date.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">9. Registration Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    An upfront payment made to record official membership, register for a conference, or file legal property deeds with governmental authorities.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-1">10. Membership Fees</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Recurring monthly or annual dues contributed by individuals to retain active status and privileges in a professional association, club, or fitness facility.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Hindi Meaning & Bilingual Usage */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                Fee vs Fees in Hindi (शुल्क / फीस का अर्थ और सही प्रयोग)
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                भारतीय संदर्भ में अंग्रेजी सीखते समय अक्सर छात्र और पेशेवर <strong>Fee</strong> और <strong>Fees</strong> के प्रयोग में भ्रमित हो जाते हैं। आइए इसे सरल हिंदी में समझें:
              </p>
              
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 mb-6">
                <h3 className="font-serif font-bold text-amber-950 text-xl mb-3">
                  हिन्दी अर्थ (Hindi Meaning):
                </h3>
                <ul className="space-y-3 text-slate-800 text-base">
                  <li>
                    <strong>Fee (फी/शुल्क):</strong> एकवचन (Singular)। इसका अर्थ होता है किसी एक विशेष कार्य, सेवा या लाइसेंस के लिए तय किया गया एकमुश्त शुल्क या मेहनताना।
                    <br />
                    <em>उदाहरण:</em> &ldquo;आवेदन शुल्क ₹200 है।&rdquo; &rarr; <em>&ldquo;The application fee is ₹200.&rdquo;</em>
                  </li>
                  <li>
                    <strong>Fees (फीस/शुल्क):</strong> बहुवचन (Plural) अथवा सामूहिक संज्ञा (Collective Noun)। इसका अर्थ होता है कई प्रकार के शुल्कों का जोड़ अथवा किसी संस्थान (जैसे स्कूल या कॉलेज) की कुल वार्षिक/मासिक फीस।
                    <br />
                    <em>उदाहरण:</em> &ldquo;रमेश ने अपने बच्चों की स्कूल फीस जमा कर दी है।&rdquo; &rarr; <em>&ldquo;Ramesh has paid his children&apos;s school fees.&rdquo;</em>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 text-slate-700 text-base">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-primary">✓ सही प्रयोग:</span>
                  <span>&ldquo;डॉक्टर की फीस ₹500 है।&rdquo; &rarr; <strong>&ldquo;The doctor&apos;s consultation fee is ₹500.&rdquo;</strong> (यहाँ एक विशिष्ट मुलाकात का शुल्क है, इसलिए &lsquo;fee&rsquo; सही है)</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-2">
                  <span className="font-bold text-primary">✓ सही प्रयोग:</span>
                  <span>&ldquo;कॉलेज की फीस काफी अधिक है।&rdquo; &rarr; <strong>&ldquo;The college fees are quite high.&rdquo;</strong> (यहाँ शिक्षा, खेल, पुस्तकालय आदि का कुल जोड़ है, इसलिए &lsquo;fees&rsquo; सही है)</span>
                </div>
              </div>
            </section>

            {/* Section 8: Common Mistakes */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-5">
                Common Mistakes to Avoid
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                Even fluent speakers frequently stumble on subject-verb agreements and terminology mix-ups involving fees. Here are the top five errors and how to fix them:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Mistake 1</span>
                    <h3 className="font-bold text-slate-900 text-base">Using singular verbs with collective &ldquo;fees&rdquo;</h3>
                  </div>
                  <p className="text-sm text-red-600 line-through mb-1 flex items-center gap-1.5">
                    <X size={16} /> &ldquo;The legal fees is too high for this litigation.&rdquo;
                  </p>
                  <p className="text-sm text-emerald-700 font-semibold flex items-center gap-1.5">
                    <Check size={16} /> &ldquo;The legal fees <strong>are</strong> too high for this litigation.&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Explanation: Because &lsquo;fees&rsquo; is grammatically plural, it demands the plural auxiliary verb &lsquo;are&rsquo;.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Mistake 2</span>
                    <h3 className="font-bold text-slate-900 text-base">Saying &ldquo;school fee&rdquo; when referring to the full term bill</h3>
                  </div>
                  <p className="text-sm text-red-600 line-through mb-1 flex items-center gap-1.5">
                    <X size={16} /> &ldquo;I went to the counter to pay my quarterly school fee.&rdquo;
                  </p>
                  <p className="text-sm text-emerald-700 font-semibold flex items-center gap-1.5">
                    <Check size={16} /> &ldquo;I went to the counter to pay my quarterly school <strong>fees</strong>.&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Explanation: Institutional school charges comprise multiple aggregated items (tuition, computer lab, sports), making the plural collective &lsquo;fees&rsquo; conventional.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Mistake 3</span>
                    <h3 className="font-bold text-slate-900 text-base">Confusing &ldquo;fee&rdquo; with &ldquo;fare&rdquo; or &ldquo;fine&rdquo;</h3>
                  </div>
                  <p className="text-sm text-red-600 line-through mb-1 flex items-center gap-1.5">
                    <X size={16} /> &ldquo;How much is the taxi fee from the airport to the hotel?&rdquo;
                  </p>
                  <p className="text-sm text-emerald-700 font-semibold flex items-center gap-1.5">
                    <Check size={16} /> &ldquo;How much is the taxi <strong>fare</strong> from the airport to the hotel?&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Explanation: Transportation by vehicle, train, boat, or aircraft is always called a &lsquo;fare&rsquo;, whereas punitive charges for traffic violations are &lsquo;fines&rsquo;.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase">Mistake 4</span>
                    <h3 className="font-bold text-slate-900 text-base">Adding an erroneous apostrophe in plural &ldquo;fees&rdquo;</h3>
                  </div>
                  <p className="text-sm text-red-600 line-through mb-1 flex items-center gap-1.5">
                    <X size={16} /> &ldquo;All admission fee&apos;s must be cleared by Friday.&rdquo;
                  </p>
                  <p className="text-sm text-emerald-700 font-semibold flex items-center gap-1.5">
                    <Check size={16} /> &ldquo;All admission <strong>fees</strong> must be cleared by Friday.&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 mt-2">Explanation: An apostrophe indicates possession (e.g., &ldquo;the fee&apos;s amount&rdquo;) rather than a simple plural.</p>
                </div>
              </div>
            </section>

            {/* Section 9: Contextual Connection to Education Support */}
            <section className="mb-12 p-8 rounded-3xl bg-primary/5 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Why School Fees Matter in the Fight Against Poverty
              </h2>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4">
                While understanding the grammatical distinction between <em>fee</em> and <em>fees</em> elevates your communication, in impoverished communities across India, the inability to pay modest <strong>school fees</strong> remains the single greatest barrier preventing bright young children from staying in classrooms.
              </p>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
                When daily wage laborers or destitute widows cannot pay recurring admission or tuition fees, young girls and boys are often forced into hazardous child labor. At <Link to="/" className="text-primary font-bold hover:underline">Shah Seva (Dargah Saiyad Ali Shah Seva Sansthan)</Link>, our grassroot educational mission steps in to cover tuition, examination fees, uniforms, and books for hundreds of underprivileged students in Bhilwara, Rajasthan. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  to="/donate-for-education" 
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm md:text-base font-bold shadow-md"
                >
                  Sponsor a Child&apos;s School Fees <ArrowRight size={16} />
                </Link>
                <Link 
                  to="/how-to-send-money-to-charity-in-india" 
                  className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1"
                >
                  Learn How to Donate Safely in India &rarr;
                </Link>
              </div>
            </section>

            {/* Section 10: Frequently Asked Questions (All 6 exact user questions) */}
            <section className="mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm md:text-base mb-8">
                Here are the most common questions English learners and professionals ask regarding the usage of fee and fees:
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
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
                Conclusion: A Simple Rule of Thumb
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-4">
                Mastering the difference between <strong>fee</strong> and <strong>fees</strong> comes down to a straightforward mental checklist:
              </p>
              <div className="bg-slate-100/80 p-5 rounded-2xl border border-slate-200 space-y-2 text-slate-800 font-medium text-base mb-6">
                <p>• If referring to a <strong>single, specific charge</strong> (e.g., an entry fee, processing fee, cancellation fee), write <strong>fee</strong>.</p>
                <p>• If referring to <strong>multiple different charges</strong> or a <strong>bundled institutional bill</strong> (e.g., school fees, university fees, legal fees), write <strong>fees</strong>.</p>
                <p>• When in doubt with academic and institutional payments, the collective plural <strong>fees</strong> is almost universally preferred.</p>
              </div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                By applying these linguistic principles, you can ensure flawless grammatical precision across all your academic, professional, and financial communications.
              </p>
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
