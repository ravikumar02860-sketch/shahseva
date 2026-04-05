import React from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
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
            <FileText size={32} strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            {t.footer.terms}
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">Last updated: March 31, 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none bg-white/80 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16 blur-2xl" />
          
          <div className="relative z-10">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">1. Acceptance of Terms</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                By accessing or using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">2. Use of Website</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our website is intended for informational purposes and to facilitate donations. You agree to use the website only for lawful purposes and in a manner that does not infringe upon the rights of others.
              </p>
              <ul className="grid grid-cols-1 gap-4 list-none pl-0">
                {[
                  "You must not use the website to transmit any harmful or malicious content.",
                  "You must not attempt to gain unauthorized access to our systems."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-base bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">3. Donations</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                All donations made through our website are voluntary and non-refundable. We use secure third-party payment processors to handle transactions.
              </p>
              <ul className="grid grid-cols-1 gap-4 list-none pl-0">
                {[
                  "You agree to provide accurate information when making a donation.",
                  "Donations are used to support our mission of helping poor families, education, and medical aid."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-base bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">4. Intellectual Property</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                All content on this website, including text, images, and logos, is the property of Dargah Saiyad Ali Shah Seva Sansthan and is protected by intellectual property laws. You may not use our content without prior written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">5. Limitation of Liability</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We strive to provide accurate information, but we make no guarantees regarding the completeness or accuracy of the content on our website. We are not liable for any damages arising from your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">6. Changes to Terms</h2>
              <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <p className="text-slate-200 text-lg leading-relaxed relative z-10">
                  We reserve the right to modify these Terms of Service at any time. Your continued use of the website after changes are posted constitutes your acceptance of the new terms.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
