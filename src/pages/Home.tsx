import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, BookOpen, HeartPulse, Utensils, Home, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import SEO from '../components/SEO';

export default function HomePage() {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.families, value: '5,000+', icon: Users },
    { label: t.stats.meals, value: '50,000+', icon: Utensils },
    { label: t.stats.students, value: '1,200+', icon: BookOpen },
    { label: t.stats.camps, value: '150+', icon: HeartPulse },
  ];

  const activities = [
    {
      title: t.activities.foodTitle,
      desc: t.activities.foodDesc,
      icon: Utensils,
      img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
      link: '/donate-for-food-for-poor'
    },
    {
      title: t.activities.eduTitle,
      desc: t.activities.eduDesc,
      icon: BookOpen,
      img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      link: '/donate-for-education'
    },
    {
      title: t.activities.medTitle,
      desc: t.activities.medDesc,
      icon: HeartPulse,
      img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
      link: '/donate-for-medical-help'
    },
  ];

  const featuredCauses = [
    { id: 'girlChild', icon: BookOpen, link: '/donate-for-girl-child-education' },
    { id: 'cancer', icon: HeartPulse, link: '/donate-for-cancer-patient-treatment' },
    { id: 'oldAge', icon: Users, link: '/donate-for-old-age-home' },
    { id: 'homeless', icon: Shield, link: '/donate-for-homeless-people' },
    { id: 'orphanage', icon: Home, link: '/donate-to-orphanage-india' },
    { id: 'children', icon: Heart, link: '/donate-for-poor-children' },
  ];

  return (
    <div className="overflow-hidden bg-slate-50/50">
      <SEO 
        title={t.seo.home.title} 
        description={t.seo.home.description}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1920" 
            alt="Charity Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-slate-50/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-accent-light font-bold rounded-full text-xs uppercase tracking-widest mb-8"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                {t.hero.badge}
              </motion.span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]">
                {t.hero.title} <br />
                <span className="text-gradient-gold">{t.hero.subtitle}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed max-w-xl">
                {t.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/donate" 
                  className="btn-accent btn-lg group"
                >
                  {t.nav.donate} 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/work" 
                  className="btn-outline btn-lg !text-white !border-white/20 hover:!bg-white/10 backdrop-blur-md"
                >
                  {t.hero.ctaWork}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-strong border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Hero Image" 
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -right-12 bg-white p-6 rounded-3xl shadow-strong max-w-[200px] animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent-dark">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-primary text-sm">Join Us</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Every small contribution makes a big difference.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <stat.icon size={28} />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-strong aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000" 
                alt="Helping People" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[2.5rem] shadow-strong hidden md:block max-w-xs border border-slate-100">
              <div className="text-accent mb-4">
                <Heart size={32} fill="currentColor" />
              </div>
              <p className="text-primary font-serif text-2xl font-bold leading-tight italic">
                "{t.aboutSummary.quote}"
              </p>
            </div>
            {/* Decorative background shape */}
            <div className="absolute top-10 -left-10 w-full h-full bg-primary/5 rounded-[3rem] -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              {t.aboutSummary.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-[1.1]">
              {t.aboutSummary.title}
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              {t.aboutSummary.desc}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-500 font-bold text-xs mb-10 border border-slate-100">
              <Shield size={14} className="text-primary" />
              {t.aboutSummary.regNo}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                t.aboutSummary.item1,
                t.aboutSummary.item2,
                t.aboutSummary.item3,
                t.aboutSummary.item4
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                  <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <HeartPulse size={20} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link 
              to="/about" 
              className="btn-primary group"
            >
              {t.aboutSummary.learnMore} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#064e3b 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              {t.founder.title}
            </span>
            
            <div className="relative mb-10">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-primary/5">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3H10.017V15C10.017 18.3137 7.33068 21 4.01697 21H3.01697Z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-relaxed italic relative z-10">
                "{t.founder.message}"
              </h3>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-0.5 bg-accent"></div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-primary">{t.founder.name}</h4>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{t.founder.role}</p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-slate-400 font-serif italic text-lg">{t.founder.signature}</p>
              <div className="mt-4 font-serif text-3xl text-primary/40 select-none">
                {t.founder.name}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
                Transparency & Trust
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                Where Your <span className="text-gradient-gold">Donations</span> Go
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                We believe in 100% transparency. Every rupee you donate to our Society is utilized efficiently to provide maximum impact for poor families in India.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Direct Aid (Food, Meds, Fees)", value: "85%" },
                  { label: "Logistics & Distribution", value: "10%" },
                  { label: "Administration", value: "5%" }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-primary">{item.label}</span>
                      <span className="text-accent-dark font-bold">{item.value}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-accent"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary p-12 rounded-[3rem] text-white relative overflow-hidden shadow-strong"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Transparency Report</h3>
                <p className="text-slate-300 mb-8">
                  Our annual reports are audited and available for public review. We are committed to maintaining the highest standards of accountability.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary">
                      <Heart size={14} fill="currentColor" />
                    </div>
                    <span>Audited Financial Statements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary">
                      <Heart size={14} fill="currentColor" />
                    </div>
                    <span>Monthly Impact Reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-primary">
                      <Heart size={14} fill="currentColor" />
                    </div>
                    <span>Donor Feedback Mechanism</span>
                  </li>
                </ul>
                <Link to="/impact" className="btn-accent w-full justify-center">
                  View Full Impact Report
                </Link>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-accent-light font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              {t.activities.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white">{t.activities.title}</h2>
            <p className="text-slate-300 text-lg">
              {t.activities.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {activities.map((act, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card !bg-white/5 !border-white/10 !rounded-[2.5rem] hover:!bg-white/10"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={act.img} 
                    alt={act.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <act.icon size={28} />
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-serif font-bold mb-4 text-white">{act.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{act.desc}</p>
                  <Link to={act.link} className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
                    {t.activities.readMore} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Causes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              Support a Cause
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Featured Donation Causes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose a specific cause to support and see the direct impact of your online charity donation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCauses.map((cause, idx) => {
              const category = t.categories[cause.id as keyof typeof t.categories];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-all">
                    <cause.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title.split('|')[0].trim()}</h3>
                  <p className="text-slate-500 group-hover:text-slate-200 text-sm mb-8 line-clamp-2">
                    {category.description}
                  </p>
                  <Link 
                    to={cause.link} 
                    className="inline-flex items-center gap-2 font-bold text-primary group-hover:text-accent transition-colors"
                  >
                    Donate Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              Our Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-10 leading-[1.1]">
              Why Support Our <span className="text-gradient-gold">Society in Bhilwara</span>, Rajasthan?
            </h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Dargah Saiyad Ali Shah Seva Sansthan is a trusted charity organization in India and a leading Society in Bhilwara, dedicated to uplifting marginalized communities. As a charity helping poor families and a Society helping children's education, our work in Rajasthan focuses on sustainable development through food, education, and healthcare.
            </p>
            <div className="space-y-8">
              {[
                {
                  title: "Help Poor Families Donation",
                  desc: "We provide direct financial and food aid to families living below the poverty line in Bhilwara and nearby villages, ensuring they have the basics for survival.",
                  icon: Heart
                },
                {
                  title: "Society Helping Children Education",
                  desc: "Our scholarship programs help bright students from underprivileged backgrounds pursue their dreams, providing a path out of poverty through education.",
                  icon: BookOpen
                },
                {
                  title: "Medical Aid for Poor Families",
                  desc: "We organize free medical camps and provide essential medicines to ensure healthcare is accessible to all in Rajasthan, regardless of their financial status.",
                  icon: HeartPulse
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent-dark shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <Link to="/impact" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                  See Our Full Impact <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600" 
                alt="Society Work Bhilwara" 
                className="rounded-[2rem] shadow-strong w-full h-80 object-cover card-hover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600" 
                alt="Medical Aid Society" 
                className="rounded-[2rem] shadow-strong w-full h-64 object-cover card-hover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-6 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600" 
                alt="Charity Rajasthan" 
                className="rounded-[2rem] shadow-strong w-full h-64 object-cover card-hover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=600" 
                alt="Help Poor Families" 
                className="rounded-[2rem] shadow-strong w-full h-80 object-cover card-hover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="relative rounded-[4rem] overflow-hidden bg-primary py-24 px-10 text-center shadow-strong">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1920" 
              alt="CTA Background" 
              className="w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight">
                {t.cta.title}
              </h2>
              <p className="text-slate-300 text-xl mb-12 leading-relaxed">
                {t.cta.desc}
              </p>
              <Link 
                to="/donate" 
                className="btn-accent !px-12 !py-6 !text-xl shadow-strong group"
              >
                {t.nav.donate} 
                <Heart fill="currentColor" size={24} className="group-hover:scale-125 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary font-bold rounded-full text-[10px] uppercase tracking-widest mb-6">
              Voices of Hope
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary">{t.testimonials.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              t.testimonials.t1,
              t.testimonials.t2,
              t.testimonials.t3
            ].map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 relative group hover:shadow-strong transition-all duration-500"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <Heart size={24} fill="currentColor" />
                </div>
                <div className="flex text-accent mb-8 mt-4">
                  {[...Array(5)].map((_, j) => <Heart key={j} size={14} fill="currentColor" className="mr-1" />)}
                </div>
                <p className="text-slate-600 italic mb-10 text-lg leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary font-bold">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{test.name}</h4>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
