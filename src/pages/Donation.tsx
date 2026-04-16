import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CreditCard, Smartphone, QrCode, CheckCircle2, Copy, Heart } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { cn } from '../utils/cn';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';
import { db, collection, addDoc, getDocs, query, where, orderBy, Timestamp, auth } from '../firebase';

const amounts = [500, 1000, 5000];

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export default function DonationPage() {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number | string>(1000);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [campaignId, setCampaignId] = useState<string>('');
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [showQR, setShowQR] = useState(false);
  const [paymentFinished, setPaymentFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const path = 'campaigns';
      try {
        const q = query(collection(db, path), where('active', '==', true), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const campaignsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCampaigns(campaignsData);
      } catch (err) {
        console.error('Failed to fetch campaigns', err);
        // handleFirestoreError(err, OperationType.LIST, path); // Don't crash on initial load if possible
      }
    };
    fetchCampaigns();
  }, []);

  const upiId = "6350489219.eazypay@icici";
  const upiUri = `upi://pay?pa=${upiId}&pn=Dargah%20Saiyad%20Ali%20Shah%20Seva%20Sansthan&cu=INR&am=${amount}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !amount) {
      alert("Please fill in all details");
      return;
    }

    setLoading(true);
    const path = 'donors';
    try {
      // Record donation in Firestore
      await addDoc(collection(db, path), {
        name,
        phone,
        email: email || null,
        amount: Number(amount),
        campaignId: campaignId || null,
        timestamp: Timestamp.now(),
        emailedInBatch: false
      });

      setShowQR(true);
    } catch (error) {
      console.error("Error submitting donation:", error);
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmPayment = async () => {
    setVerifying(true);
    
    // Simulate a verification delay to make it feel more real
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real app, we might trigger a serverless function here to send SMS/Email
    // For now, we just mark it as finished on the client side
    setPaymentFinished(true);
    setVerifying(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      <SEO 
        title={t.seo.donate.title} 
        description={t.seo.donate.description}
      />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6"
          >
            <Heart size={16} className="fill-current" />
            {t.donation.title}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight"
          >
            {t.donation.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            {paymentFinished 
              ? t.donation.successMsg
              : t.donation.instructionMsg}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Donation Form / Thank You */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            {paymentFinished ? (
              <div className="text-center py-12 relative z-10">
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12 }}
                  className="w-28 h-28 bg-primary text-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20 rotate-3"
                >
                  <Heart fill="currentColor" size={56} />
                </motion.div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">{t.donation.thankYou}, {name}!</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                  {t.donation.amount} <span className="font-bold text-primary text-2xl block my-2">₹{amount}</span> {t.donation.initiated} 
                  <br />
                  {t.donation.confirmationSent} <span className="font-bold text-primary">{phone}</span> {t.donation.shortly}
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="btn-primary btn-lg mx-auto"
                >
                  <span className="relative z-10">{t.donation.backHome}</span>
                </button>
              </div>
            ) : !showQR ? (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <CreditCard size={24} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-primary">{t.donation.donorDetails}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.donation.fullName}</label>
                    <input 
                      type="text" 
                      required
                      placeholder={t.donation.fullName}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.donation.phone}</label>
                    <input 
                      type="tel" 
                      required
                      placeholder={t.donation.phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.donation.email}</label>
                    <input 
                      type="email" 
                      placeholder={t.donation.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800"
                    />
                  </div>
                  {campaigns.length > 0 && (
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.donation.campaign}</label>
                      <select 
                        value={campaignId}
                        onChange={(e) => setCampaignId(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-slate-800 appearance-none"
                      >
                        <option value="">{t.donation.general}</option>
                        {campaigns.map(c => (
                          <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="space-y-4 md:col-span-2">
                    <label className="text-sm font-bold text-slate-500 ml-1 uppercase tracking-wider">{t.donation.amount}</label>
                    <div className="grid grid-cols-3 gap-3">
                      {amounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt)}
                          className={cn(
                            "py-3 rounded-xl font-bold transition-all border-2",
                            amount === amt 
                              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]" 
                              : "bg-white text-slate-600 border-slate-100 hover:border-primary/30"
                          )}
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-primary">₹</span>
                      <input 
                        type="number" 
                        required
                        placeholder={t.donation.amount}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-primary/5 border-2 border-primary/10 rounded-2xl pl-12 pr-6 py-5 text-3xl font-bold text-primary focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="btn-primary btn-lg w-full"
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      {t.donation.processing}
                    </>
                  ) : (
                    <>
                      <QrCode size={24} />
                      {t.donation.generateQR}
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 relative z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner"
                >
                  <CheckCircle2 size={56} strokeWidth={1.5} />
                </motion.div>
                <h2 className="text-4xl font-serif font-bold text-primary mb-6">{t.donation.detailsRecorded}</h2>
                <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  {t.donation.thankYou}, <span className="font-bold text-primary">{name}</span>. {t.donation.qrInstruction} <span className="font-bold text-primary text-xl">₹{amount}</span>.
                </p>
                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <button 
                    onClick={handleConfirmPayment}
                    disabled={verifying}
                    className="btn-accent btn-lg w-full"
                  >
                    {verifying ? (
                      <>
                        <div className="w-6 h-6 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                        {t.donation.verifying}
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={24} />
                        {t.donation.completed}
                      </>
                    )}
                  </button>
                  <button 
                    onClick={() => setShowQR(false)}
                    disabled={verifying}
                    className="text-slate-400 font-bold text-sm hover:text-primary transition-colors disabled:opacity-50 py-2"
                  >
                    {t.donation.edit}
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                <Smartphone size={14} />
                {t.donation.confidential}
              </p>
            </div>
          </motion.div>

          {/* UPI & QR Details */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-all duration-700",
                !showQR ? "bg-slate-100 text-slate-400" : "bg-primary text-white shadow-primary/20",
                paymentFinished && "bg-emerald-900"
              )}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full -ml-20 -mb-20 blur-3xl" />
              
              {paymentFinished ? (
                <div className="text-center py-10 relative z-10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/20">
                    <CheckCircle2 size={56} className="text-accent" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-6 text-accent">{t.donation.initiated}</h2>
                  <p className="text-slate-200 text-lg leading-relaxed">
                    {t.donation.qrInstructionText}
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  <h2 className={cn(
                    "text-3xl font-serif font-bold mb-6",
                    showQR ? "text-accent" : "text-slate-400"
                  )}>
                    {t.donation.scanToDonate}
                  </h2>
                  <p className={cn(
                    "text-lg mb-10 leading-relaxed",
                    showQR ? "text-slate-200" : "text-slate-400"
                  )}>
                    {!showQR 
                      ? t.donation.qrPlaceholder 
                      : t.donation.qrInstructionText}
                  </p>
                  
                  <div className="flex justify-center mb-10">
                    <div className="bg-white p-6 rounded-[2rem] shadow-2xl relative group">
                      {showQR ? (
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="w-56 h-56 flex items-center justify-center bg-white"
                        >
                          <QRCodeSVG 
                            value={upiUri} 
                            size={224}
                            level="H"
                            includeMargin={true}
                          />
                        </motion.div>
                      ) : (
                        <div className="w-56 h-56 bg-slate-50 flex items-center justify-center text-slate-200 border-2 border-dashed border-slate-200 rounded-3xl">
                          <QrCode size={80} strokeWidth={1} />
                        </div>
                      )}
                      {showQR && (
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-[10px] uppercase font-black tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                          {t.donation.scanWithAny}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={cn(
                    "backdrop-blur-md border rounded-2xl p-5 flex items-center justify-between mb-10 transition-all",
                    showQR ? "bg-white/10 border-white/20" : "bg-slate-200/50 border-slate-200"
                  )}>
                    <div>
                      <p className={cn(
                        "text-[10px] uppercase tracking-[0.2em] font-black mb-1",
                        showQR ? "text-accent" : "text-slate-400"
                      )}>{t.donation.upiId}</p>
                      <p className="font-mono font-bold text-lg">{upiId}</p>
                    </div>
                    <button 
                      onClick={handleCopy}
                      disabled={!showQR}
                      className={cn(
                        "p-3 rounded-xl transition-all",
                        showQR ? "bg-white/10 hover:bg-white/20 text-accent" : "text-slate-300"
                      )}
                    >
                      {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                    </button>
                  </div>

                  {/* Direct Payment App Buttons */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={cn("h-px flex-1", showQR ? "bg-white/20" : "bg-slate-200")} />
                      <p className={cn(
                        "text-[10px] uppercase tracking-[0.2em] font-black",
                        showQR ? "text-accent" : "text-slate-400"
                      )}>{t.donation.payDirectly}</p>
                      <div className={cn("h-px flex-1", showQR ? "bg-white/20" : "bg-slate-200")} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={upiUri}
                        className={cn(
                          "flex items-center justify-center gap-3 py-4 rounded-2xl transition-all font-bold text-sm border",
                          showQR 
                            ? "bg-white/10 hover:bg-white/20 border-white/20" 
                            : "bg-slate-200/50 border-slate-200 pointer-events-none"
                        )}
                      >
                        <Smartphone size={20} />
                        Any UPI
                      </a>
                      <a 
                        href={upiUri.replace('upi://', 'phonepe://')}
                        className={cn(
                          "flex items-center justify-center gap-3 py-4 rounded-2xl transition-all font-bold text-sm border",
                          showQR 
                            ? "bg-[#5f259f] hover:bg-[#4d1e82] border-white/10" 
                            : "bg-slate-200/50 border-slate-200 pointer-events-none"
                        )}
                      >
                        PhonePe
                      </a>
                      <a 
                        href={upiUri.replace('upi://', 'tez://upi/')}
                        className={cn(
                          "flex items-center justify-center gap-3 py-4 rounded-2xl transition-all font-bold text-sm border",
                          showQR 
                            ? "bg-[#4285F4] hover:bg-[#3367D6] border-white/10" 
                            : "bg-slate-200/50 border-slate-200 pointer-events-none"
                        )}
                      >
                        Google Pay
                      </a>
                      <a 
                        href={upiUri.replace('upi://', 'paytmmp://')}
                        className={cn(
                          "flex items-center justify-center gap-3 py-4 rounded-2xl transition-all font-bold text-sm border",
                          showQR 
                            ? "bg-[#00baf2] hover:bg-[#0099cc] border-white/10" 
                            : "bg-slate-200/50 border-slate-200 pointer-events-none"
                        )}
                      >
                        Paytm
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 backdrop-blur-md p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white shadow-xl"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-8">{t.donation.impactSection.title}</h3>
              <div className="space-y-8">
                {t.donation.impactSection.items.map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="bg-primary text-accent font-bold px-4 py-2 rounded-xl text-sm shrink-0 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform">
                      {item.amount}
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary text-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl shadow-primary/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <h3 className="text-2xl font-serif font-bold text-accent mb-8 relative z-10">{t.donation.whyDonate}</h3>
              <ul className="space-y-5 relative z-10">
                {t.donation.reasons.map((item: string, i: number) => (
                  <li key={i} className="flex gap-4 text-slate-200 text-base group">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/40 transition-colors">
                      <CheckCircle2 size={16} className="text-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

  );
}
