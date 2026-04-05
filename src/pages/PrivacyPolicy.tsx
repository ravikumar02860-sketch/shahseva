import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
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
            <Shield size={32} strokeWidth={1.5} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            {t.footer.privacy}
          </h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">Last updated: March 31, 2026</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none bg-white/80 backdrop-blur-xl p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <div className="relative z-10">
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">1. Introduction</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Dargah Saiyad Ali Shah Seva Sansthan ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or donate to our cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">2. Information We Collect</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We may collect personal information that you provide to us, including:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {[
                  "Name and contact information (email address, phone number, mailing address).",
                  "Donation details and history.",
                  "Information provided in contact forms or volunteer applications."
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">3. How We Use Your Information</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We use the collected information for the following purposes:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                {[
                  "To process and acknowledge your donations.",
                  "To send you updates about our activities and impact (if you subscribe to our newsletter).",
                  "To respond to your inquiries and provide support.",
                  "To maintain records for legal and financial compliance."
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
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">4. Data Security</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">5. Third-Party Sharing</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share information with trusted service providers (e.g., payment processors) solely for the purpose of facilitating our operations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">6. Contact Us</h2>
              <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <p className="text-slate-200 text-lg leading-relaxed relative z-10">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <span className="font-serif font-bold text-2xl text-accent block mt-2">darveshwelfares@gmail.com</span>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
