import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { cn } from '../utils/cn';
import SEO from '../components/SEO';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Dargah Saiyad Ali Shah Seva Sansthan. Contact us for volunteering, donations, or any inquiries about our social work in Bhilwara, Rajasthan."
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary font-bold tracking-widest uppercase text-[10px] mb-10 border border-primary/10 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            {t.contact.badge || "Get In Touch"}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif font-bold text-primary mb-12 tracking-tight leading-[1.1]"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-4xl mx-auto opacity-90"
          >
            {t.contact.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-primary text-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-[2s]"></div>
              
              <h2 className="text-4xl font-serif font-bold mb-16 text-accent relative z-10 tracking-tight">{t.contact.detailsTitle}</h2>
              <div className="space-y-12 relative z-10">
                <div className="flex gap-8 group/item">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-accent shrink-0 border border-white/10 group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-700 shadow-xl">
                    <MapPin size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">{t.contact.address}</p>
                    <p className="text-lg leading-relaxed font-medium opacity-90">
                      {t.contact.addressText}
                    </p>
                  </div>
                </div>
                <div className="flex gap-8 group/item">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-accent shrink-0 border border-white/10 group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-700 shadow-xl">
                    <Phone size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">{t.contact.phone}</p>
                    <p className="text-2xl font-serif font-bold text-white tracking-tight">+91 6350489219</p>
                    <p className="text-2xl font-serif font-bold text-white opacity-60 tracking-tight">+91 8949917549</p>
                  </div>
                </div>
                <div className="flex gap-8 group/item">
                  <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-accent shrink-0 border border-white/10 group-hover/item:bg-accent group-hover/item:text-primary transition-all duration-700 shadow-xl">
                    <Mail size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-3">{t.contact.email}</p>
                    <p className="text-lg font-medium opacity-90 break-all tracking-tight">darveshwelfares@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 relative z-10">
                <p className="text-slate-300 text-lg mb-8 font-medium leading-relaxed">{t.contact.whatsappText}</p>
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/916350489219" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white font-bold py-6 px-10 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#20bd5b] transition-all shadow-2xl shadow-emerald-500/20 group/wa"
                >
                  <MessageCircle size={28} className="group-hover/wa:rotate-12 transition-transform" /> 
                  <span className="text-lg">{t.contact.whatsappBtn}</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-accent via-primary to-accent"></div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-16 tracking-tight">{t.contact.formTitle}</h2>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50/30 border border-emerald-100 p-12 md:p-20 rounded-[3rem] text-center space-y-8"
                  >
                    <div className="w-28 h-28 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20 rotate-6">
                      <CheckCircle2 size={56} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl md:text-5xl font-serif font-bold text-emerald-900 tracking-tight">Message Sent!</h3>
                      <p className="text-emerald-700 text-xl font-medium max-w-md mx-auto opacity-90">{t.contact.success}</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-3 text-emerald-600 font-bold hover:text-emerald-700 transition-all group pt-4"
                    >
                      <div className="w-10 h-[2px] bg-emerald-600 transform scale-x-50 group-hover:scale-x-100 transition-transform origin-right"></div>
                      <span className="text-lg">Send another message</span>
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    {status === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl flex items-center gap-4 text-rose-700 font-medium"
                      >
                        <AlertCircle size={24} className="shrink-0" />
                        {t.contact.error}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 ml-2">{t.contact.fullName}</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={cn(
                            "w-full bg-slate-50/50 border-2 rounded-3xl px-8 py-6 focus:outline-none transition-all font-medium text-primary placeholder:text-slate-300 text-lg",
                            errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-transparent focus:border-primary focus:bg-white shadow-inner"
                          )}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 ml-2">{t.contact.emailAddr}</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={cn(
                            "w-full bg-slate-50/50 border-2 rounded-3xl px-8 py-6 focus:outline-none transition-all font-medium text-primary placeholder:text-slate-300 text-lg",
                            errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-transparent focus:border-primary focus:bg-white shadow-inner"
                          )}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 ml-2">{t.contact.subject}</label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full bg-slate-50/50 border-2 border-transparent rounded-3xl px-8 py-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium text-primary placeholder:text-slate-300 text-lg shadow-inner"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 ml-2">{t.contact.message}</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Your message here..."
                        className={cn(
                          "w-full bg-slate-50/50 border-2 rounded-3xl px-8 py-6 focus:outline-none transition-all resize-none font-medium text-primary placeholder:text-slate-300 text-lg shadow-inner",
                          errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-transparent focus:border-primary focus:bg-white"
                        )}
                      ></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary btn-lg w-full md:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 size={28} className="animate-spin" />
                          <span className="text-lg">{t.contact.sending}</span>
                        </>
                      ) : (
                        <>
                          <span className="text-lg">{t.contact.sendBtn}</span> 
                          <Send size={28} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 h-[40rem] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/5 border border-slate-200 flex items-center justify-center text-slate-400 relative group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale opacity-20 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-[2s]"></div>
          <div className="text-center relative z-10 bg-white/80 backdrop-blur-xl p-16 md:p-24 rounded-[3rem] shadow-2xl shadow-primary/10 border border-white/50 max-w-2xl mx-6">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 bg-primary text-accent rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20"
            >
              <MapPin size={48} strokeWidth={1.5} />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 tracking-tight">{t.contact.mapPlaceholder}</h3>
            <p className="text-accent-dark font-bold uppercase tracking-[0.4em] text-sm">Bhilwara, Rajasthan, India</p>
          </div>
        </motion.div>
      </div>
    </div>

  );
}
