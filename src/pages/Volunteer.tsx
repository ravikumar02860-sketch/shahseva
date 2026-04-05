import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Heart, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function Volunteer() {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      <SEO 
        title={t.volunteer.title} 
        description={t.volunteer.desc}
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 shadow-inner shadow-primary/5"
            >
              <Users size={32} strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-[1.1]">
              {t.volunteer.title}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed max-w-xl">
              {t.volunteer.desc}
            </p>

            <div className="space-y-10 mb-12">
              {[
                {
                  title: t.volunteer.roles.outreach.title,
                  desc: t.volunteer.roles.outreach.desc,
                  icon: Heart
                },
                {
                  title: t.volunteer.roles.education.title,
                  desc: t.volunteer.roles.education.desc,
                  icon: CheckCircle
                },
                {
                  title: t.volunteer.roles.medical.title,
                  desc: t.volunteer.roles.medical.desc,
                  icon: CheckCircle
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-base leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            {formStatus === 'success' ? (
              <div className="text-center py-16 relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner"
                >
                  <CheckCircle size={56} strokeWidth={1.5} />
                </motion.div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">{t.volunteer.form.success.title}</h2>
                <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-sm mx-auto">
                  {t.volunteer.form.success.desc}
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="group relative inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors"
                >
                  {t.volunteer.form.success.button}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Send size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">{t.volunteer.formTitle}</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.volunteer.form.name}</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                        placeholder={t.volunteer.form.placeholder.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.volunteer.form.email}</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                        placeholder={t.volunteer.form.placeholder.email}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.volunteer.form.phone}</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                        placeholder={t.volunteer.form.placeholder.phone}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.volunteer.form.interest}</label>
                      <select className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800 appearance-none">
                        <option>{t.volunteer.form.options.outreach}</option>
                        <option>{t.volunteer.form.options.education}</option>
                        <option>{t.volunteer.form.options.medical}</option>
                        <option>{t.volunteer.form.options.fundraising}</option>
                        <option>{t.volunteer.form.options.other}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.volunteer.form.motivation}</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800 resize-none"
                      placeholder={t.volunteer.form.placeholder.motivation}
                    ></textarea>
                  </div>

                  <button
                    disabled={formStatus === 'sending'}
                    className="btn-primary btn-lg w-full"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                        {t.volunteer.form.sending}
                      </>
                    ) : (
                      <>
                        {t.volunteer.form.submit} <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>

  );
}
