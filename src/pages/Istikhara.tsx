import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Heart, 
  RefreshCw, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Loader2, 
  Copy, 
  Share2, 
  ArrowLeft,
  Moon,
  Star
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { cn } from '../utils/cn';
import { GoogleGenAI } from "@google/genai";

type Step = 'intro' | 'askName' | 'askDecision' | 'askAlreadyPrayed' | 'guidance';

export default function IstikharaPage() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>('intro');
  const [name, setName] = useState('');
  const [decision, setDecision] = useState('');
  const [alreadyPrayed, setAlreadyPrayed] = useState<boolean | null>(null);
  const [personalizedDua, setPersonalizedDua] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const reset = () => {
    setStep('intro');
    setName('');
    setDecision('');
    setAlreadyPrayed(null);
    setPersonalizedDua(null);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePersonalizedDua = async () => {
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `You are an Islamic guidance assistant. Generate a short, sincere, and beautiful dua (supplication) in ${language === 'hi' ? 'Hindi' : 'English'} for a person named ${name || 'servant of Allah'} who is seeking guidance regarding: "${decision}". 
      The dua should ask Allah for clarity, ease, and what is best for their Deen (faith), Dunya (worldly life), and Akhirah (hereafter). 
      Keep it respectful, humble, and spiritually uplifting. 
      Do not include any fortune-telling or predictions. 
      Format: Just the text of the dua.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });

      setPersonalizedDua(response.text || null);
    } catch (error) {
      console.error("Error generating dua:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const stepProgress = {
    intro: 0,
    askName: 25,
    askDecision: 50,
    askAlreadyPrayed: 75,
    guidance: 100
  };

  return (
    <div className="pt-24 pb-24 px-6 bg-[#fdfcf8] min-h-screen font-sans">
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5 z-0">
        <Moon className="absolute top-20 left-10 w-64 h-64 text-primary rotate-12" />
        <Star className="absolute bottom-20 right-10 w-48 h-48 text-primary -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <div className="w-20 h-20 bg-primary text-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl relative">
              <BookOpen size={40} />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary"
              >
                <Sparkles size={12} />
              </motion.div>
            </div>
          </motion.div>
          <h1 className="text-5xl font-serif font-bold text-primary mb-4 tracking-tight">{t.istikhara.title}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg italic font-serif">
            {t.istikhara.desc}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-12 px-4">
          <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${stepProgress[step]}%` }}
              className="h-full bg-primary transition-all duration-500"
            />
          </div>
          <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <span>Start</span>
            <span>Guidance</span>
          </div>
        </div>

        {/* Main Interaction Card */}
        <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden min-h-[550px] flex flex-col relative">
          {/* Card Header */}
          <div className="bg-primary p-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                <Moon size={24} className="text-accent" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg tracking-wide">Islamic Guidance</p>
                <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Authentic Prophetic Method</p>
              </div>
            </div>
            {step !== 'intro' && (
              <button 
                onClick={reset}
                className="p-2 hover:bg-white/10 rounded-full transition-all text-accent"
                title="Reset"
              >
                <RefreshCw size={20} />
              </button>
            )}
          </div>

          {/* Card Content */}
          <div className="flex-grow p-10 overflow-y-auto">
            <AnimatePresence mode="wait">
              {step === 'intro' && (
                <motion.div 
                  key="intro"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-8"
                >
                  <div className="max-w-lg">
                    <p className="text-2xl font-serif text-slate-700 leading-relaxed italic">
                      "{t.istikhara.intro}"
                    </p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStep('askName')}
                    className="bg-primary text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-primary-light transition-all flex items-center gap-3 shadow-xl group"
                  >
                    {t.istikhara.startBtn} 
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              )}

              {step === 'askName' && (
                <motion.div 
                  key="askName"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-bold text-primary">{t.istikhara.askName}</h3>
                    <p className="text-slate-500">Knowing your name helps us personalize your guidance experience.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Abdullah"
                      className="flex-grow bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-xl focus:outline-none focus:border-primary transition-all font-serif"
                      autoFocus
                    />
                    <button 
                      onClick={() => setStep('askDecision')}
                      className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-primary-light transition-all shadow-lg"
                    >
                      {t.istikhara.next}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 'askDecision' && (
                <motion.div 
                  key="askDecision"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif font-bold text-primary">
                      {name ? `Assalamu Alaikum, ${name}. ` : ''}
                      {t.istikhara.askDecision}
                    </h3>
                    <p className="text-slate-500">Be as specific as you can. For example: "Should I accept the job offer from X company?"</p>
                  </div>
                  <div className="space-y-6">
                    <textarea 
                      value={decision}
                      onChange={(e) => setDecision(e.target.value)}
                      placeholder="Describe your decision here..."
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-3xl px-6 py-6 text-xl focus:outline-none focus:border-primary transition-all h-48 resize-none font-serif leading-relaxed"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-6">
                        <button 
                          onClick={() => setStep('askName')}
                          className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 font-bold"
                        >
                          <ArrowLeft size={18} /> Back
                        </button>
                        <button 
                          onClick={reset}
                          className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 font-bold text-sm"
                        >
                          <RefreshCw size={16} /> {t.istikhara.resetBtn}
                        </button>
                      </div>
                      <button 
                        onClick={() => setStep('askAlreadyPrayed')}
                        disabled={!decision.trim()}
                        className="bg-primary text-white px-12 py-4 rounded-2xl font-bold text-lg hover:bg-primary-light transition-all disabled:opacity-50 shadow-lg"
                      >
                        {t.istikhara.continue}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 'askAlreadyPrayed' && (
                <motion.div 
                  key="askAlreadyPrayed"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-10"
                >
                  <h3 className="text-3xl font-serif font-bold text-primary max-w-md">
                    {t.istikhara.askAlreadyPrayed}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm">
                    <button 
                      onClick={() => { setAlreadyPrayed(true); setStep('guidance'); }}
                      className="flex-1 bg-white border-2 border-primary text-primary px-8 py-5 rounded-2xl font-bold text-xl hover:bg-primary hover:text-white transition-all shadow-md"
                    >
                      {t.istikhara.yes}
                    </button>
                    <button 
                      onClick={() => { setAlreadyPrayed(false); setStep('guidance'); }}
                      className="flex-1 bg-primary text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-primary-light transition-all shadow-xl"
                    >
                      {t.istikhara.no}
                    </button>
                  </div>
                  <button 
                    onClick={reset}
                    className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 font-bold text-sm"
                  >
                    <RefreshCw size={16} /> {t.istikhara.resetBtn}
                  </button>
                </motion.div>
              )}

              {step === 'guidance' && (
                <motion.div 
                  key="guidance"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  {/* Top Reset Button */}
                  <div className="flex justify-end -mb-8 relative z-20">
                    <button 
                      onClick={reset}
                      className="flex items-center gap-2 text-primary hover:text-primary-light font-bold text-sm bg-white px-4 py-2 rounded-full shadow-md border border-slate-100 transition-all"
                    >
                      <RefreshCw size={16} />
                      {t.istikhara.resetBtn}
                    </button>
                  </div>

                  {/* Process if not prayed */}
                  {!alreadyPrayed && (
                    <div className="space-y-10">
                      <div className="bg-[#fdfcf8] p-10 rounded-[32px] border border-primary/10 shadow-inner">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                          <Moon size={24} className="text-accent" /> {t.istikhara.processTitle}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {[t.istikhara.step1, t.istikhara.step2, t.istikhara.step3, t.istikhara.step4, t.istikhara.step5].map((stepText, idx) => (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              key={idx} 
                              className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-50"
                            >
                              <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm shadow-md">{idx + 1}</span>
                              <p className="text-slate-600 text-sm leading-relaxed">{stepText}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10 space-y-10">
                          <div className="text-center">
                            <h4 className="text-accent font-bold mb-6 uppercase tracking-widest text-xs">{t.istikhara.duaTitle}</h4>
                            <p className="text-3xl md:text-4xl font-serif leading-[1.8] text-white mb-8 text-center" dir="rtl">
                              {t.istikhara.duaArabic}
                            </p>
                            <div className="flex justify-center gap-4">
                              <button 
                                onClick={() => handleCopy(t.istikhara.duaArabic)}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-xs font-bold transition-all border border-white/10"
                              >
                                {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                                {copied ? t.istikhara.copied : t.istikhara.copyDua}
                              </button>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                            <div className="space-y-3">
                              <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-1">{t.istikhara.transliteration}</p>
                              <p className="text-sm italic text-slate-200 leading-relaxed">{t.istikhara.duaTransliteration}</p>
                            </div>
                            <div className="space-y-3">
                              <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-1">{t.istikhara.meaning}</p>
                              <p className="text-sm text-slate-100 leading-relaxed">{t.istikhara.duaMeaning}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Reflection Guidance */}
                  <div className="space-y-8">
                    <div className="bg-accent/5 p-8 rounded-3xl border border-accent/20 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                      <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <AlertCircle size={32} />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl font-serif font-bold text-primary">{t.istikhara.signsTitle}</h4>
                        <p className="text-slate-700 leading-relaxed">{t.istikhara.dreamNote}</p>
                        <p className="text-lg text-primary font-bold italic">{t.istikhara.guidanceNote}</p>
                      </div>
                    </div>

                    {/* Personalized Dua Section */}
                    <div className="bg-white border-2 border-slate-100 rounded-[32px] overflow-hidden shadow-xl">
                      <div className="p-10 space-y-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                              <Sparkles size={20} />
                            </div>
                            <h4 className="text-2xl font-serif font-bold text-primary">
                              {t.istikhara.personalizedTitle}
                            </h4>
                          </div>
                          {!personalizedDua && !isGenerating && (
                            <button 
                              onClick={generatePersonalizedDua}
                              className="bg-accent text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-accent-light transition-all shadow-md uppercase tracking-widest"
                            >
                              {t.istikhara.generateNow}
                            </button>
                          )}
                        </div>
                        
                        {isGenerating ? (
                          <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-4">
                            <Loader2 size={40} className="animate-spin text-primary" />
                            <p className="text-sm font-bold uppercase tracking-widest animate-pulse">{t.istikhara.seekingGuidance}</p>
                          </div>
                        ) : personalizedDua ? (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-[#fdfcf8] p-10 rounded-3xl border border-primary/5 italic text-slate-700 text-center relative shadow-inner"
                          >
                            <span className="absolute top-4 left-6 text-6xl text-primary/10 font-serif">"</span>
                            <p className="text-xl font-serif leading-relaxed relative z-10">{personalizedDua}</p>
                            <span className="absolute bottom-4 right-6 text-6xl text-primary/10 font-serif">"</span>
                            <div className="mt-8 flex justify-center gap-4">
                              <button 
                                onClick={() => handleCopy(personalizedDua)}
                                className="p-3 bg-white text-slate-400 hover:text-primary rounded-full shadow-sm border border-slate-100 transition-all"
                                title={t.istikhara.copyDua}
                              >
                                {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                              </button>
                              <button 
                                className="p-3 bg-white text-slate-400 hover:text-primary rounded-full shadow-sm border border-slate-100 transition-all"
                                title={t.istikhara.share}
                              >
                                <Share2 size={20} />
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            <p className="text-slate-500 italic">
                              {t.istikhara.duaPrompt}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-primary/5 p-10 rounded-[32px] border border-primary/10 text-center space-y-4">
                      <p className="text-2xl font-serif text-primary font-bold italic leading-relaxed">"{t.istikhara.trustRemind}"</p>
                      <div className="flex items-center justify-center gap-2 text-slate-400">
                        <div className="h-px w-8 bg-slate-200"></div>
                        <p className="text-[10px] uppercase tracking-widest font-bold">{t.istikhara.reference}</p>
                        <div className="h-px w-8 bg-slate-200"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-8">
                    <button 
                      onClick={reset}
                      className="group flex items-center gap-3 text-slate-400 hover:text-primary transition-all font-bold text-sm"
                    >
                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                        <RefreshCw size={18} />
                      </div>
                      {t.istikhara.resetBtn}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
              <Moon size={12} className="text-primary/30" />
              Islamic Guidance Assistant — Not a predictor of destiny
              <Star size={12} className="text-primary/30" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

