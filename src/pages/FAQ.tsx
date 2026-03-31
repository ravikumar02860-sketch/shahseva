import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { cn } from '../utils/cn';
import SEO from '../components/SEO';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      q: "What is Dargah Saiyad Ali Shah Seva Sansthan?",
      a: "Dargah Saiyad Ali Shah Seva Sansthan is a non-profit organization dedicated to serving humanity through food distribution, education support, and medical aid for the poor and needy."
    },
    {
      q: "How can I donate to the organization?",
      a: "You can donate directly through our website using the 'Donate Now' button. We accept UPI payments and other online methods. Your contributions go directly towards our charity projects."
    },
    {
      q: "Is my donation tax-deductible?",
      a: "We are a registered non-profit organization. Please contact us at darveshwelfares@gmail.com for specific details regarding tax-deductible receipts under Section 80G (if applicable)."
    },
    {
      q: "How is my donation used?",
      a: "100% of your donation is used for our charity activities, such as providing monthly rations to poor families, paying school fees for students, and organizing free medical camps."
    },
    {
      q: "Can I volunteer for the organization?",
      a: "Yes! We welcome volunteers who are passionate about serving humanity. You can reach out to us through our contact page or visit our office in Bhilwara, Rajasthan."
    },
    {
      q: "Where is the organization located?",
      a: "Our main office is located near Murad Ali Dargah, Khel Mohalla, Pur, Bhilwara, Rajasthan, India."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about Dargah Saiyad Ali Shah Seva Sansthan, our mission, how to donate, and how to get involved in our charity work in Bhilwara."
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 shadow-inner shadow-primary/5"
          >
            <HelpCircle size={32} strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            Frequently Asked <span className="text-accent italic">Questions</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our mission, activities, and how you can get involved.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group bg-white/80 backdrop-blur-xl rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5",
                activeIndex === idx ? "border-primary/20 ring-1 ring-primary/5" : "border-slate-100"
              )}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
              >
                <span className={cn(
                  "font-serif font-bold text-xl transition-colors",
                  activeIndex === idx ? "text-primary" : "text-slate-700 group-hover:text-primary"
                )}>
                  {faq.q}
                </span>
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                  activeIndex === idx ? "bg-primary text-accent rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                  {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 bg-primary text-white p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl shadow-primary/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-accent">Still have questions?</h2>
            <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              If you couldn't find the answer you were looking for, please feel free to reach out to us directly.
            </p>
            <a
              href="mailto:darveshwelfares@gmail.com"
              className="btn-accent btn-lg mx-auto"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
