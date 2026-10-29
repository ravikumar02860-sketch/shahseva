import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-dark text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand */}
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-36 h-36 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500 p-4">
              <img 
                src="https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F" 
                alt="Dargah Saiyad Ali Shah Seva Sansthan Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-3xl leading-tight text-white tracking-tight">
                Dargah Saiyad Ali Shah Seva Sansthan
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            {t.footer.desc}
          </p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-white relative inline-block">
            {t.footer.quickLinks}
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></div>
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {[
              { to: "/about", label: t.footer.links.about },
              { to: "/mission", label: t.footer.links.mission },
              { to: "/work", label: t.footer.links.work },
              { to: "/impact", label: t.footer.links.impact },
              { to: "/transparency", label: t.footer.links.transparency },
              { to: "/gallery", label: t.footer.links.gallery },
              { to: "/success-stories", label: t.stories.badge },
              { to: "/blog", label: t.nav.blog },
              { to: "/volunteer", label: t.footer.volunteer },
              { to: "/faq", label: t.footer.faq },
              { to: "/donate", label: t.footer.links.donate }
            ].map((link, i) => (
              <li key={i}>
                <Link to={link.to} className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></div>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Donation Categories */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-white relative inline-block">
            {t.footer.categories.title}
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></div>
          </h4>
          <ul className="space-y-4 text-slate-400 text-sm font-medium">
            {[
              { to: "/donate-for-education", label: t.footer.categories.education },
              { to: "/donate-for-poor-children", label: t.footer.categories.children },
              { to: "/donate-for-medical-help", label: t.footer.categories.medical },
              { to: "/donate-for-food-for-poor", label: t.footer.categories.food },
              { to: "/donate-for-disaster-relief", label: t.footer.categories.disaster },
              { to: "/donate-to-orphanage-india", label: t.footer.categories.orphanage },
              { to: "/donate-for-girl-child-education", label: t.footer.categories.girlChild },
              { to: "/donate-for-cancer-patient-treatment", label: t.footer.categories.cancer },
              { to: "/donate-for-old-age-home", label: t.footer.categories.oldAge },
              { to: "/donate-for-homeless-people", label: t.footer.categories.homeless },
              { to: "/csr-partnership", label: t.csr.badge },
              { to: "/donate-zakat-online", label: t.zakat.badge },
              { to: "/zakat-calculator", label: t.zakat.calculatorTitle },
              { to: "/hijri-converter", label: t.hijri.title },
              { to: "/tasbeeh-counter", label: t.tasbeeh.title },
              { to: "/qurbani-2026", label: t.qurbani.title }
            ].map((link, i) => (
              <li key={i}>
                <Link to={link.to} className="hover:text-accent transition-colors flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/30 group-hover:bg-accent transition-colors"></div>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-white relative inline-block">
            {t.footer.contact}
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></div>
          </h4>
          <ul className="space-y-6 text-slate-400 text-sm">
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                <MapPin size={20} />
              </div>
              <span className="leading-relaxed">{t.footer.address}</span>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                <Phone size={20} />
              </div>
              <span className="font-bold text-white">+91 6350489219</span>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                <Mail size={20} />
              </div>
              <span className="break-all">darveshwelfares@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl font-bold mb-8 text-white relative inline-block">
            {t.footer.newsletter.title}
            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></div>
          </h4>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">{t.footer.newsletter.desc}</p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder={t.footer.newsletter.placeholder}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-white placeholder:text-slate-600"
            />
            <button className="btn-accent w-full">
              {t.footer.newsletter.button}
            </button>
          </form>
        </div>
      </div>

      {/* Comprehensive Donation Guides SEO Links */}
      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/10 relative z-10">
        <h4 className="font-serif text-lg font-bold text-accent mb-6">
          Explore Donation Guides &amp; Community Resources
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-xs text-slate-400">
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Charity in India</h5>
            <ul className="space-y-2">
              <li><Link to="/how-to-send-money-to-charity-in-india" className="font-semibold text-accent hover:text-white transition-colors">How to Send Money in India</Link></li>
              <li><Link to="/best-way-to-donate-money-in-india" className="hover:text-accent transition-colors">Best Way to Donate in India</Link></li>
              <li><Link to="/what-about-in-india-charity-guide" className="hover:text-accent transition-colors">What About in India? Legal Rules</Link></li>
              <li><Link to="/donate-money-to-charity" className="hover:text-accent transition-colors">Donate Money to Charity</Link></li>
              <li><Link to="/donate" className="hover:text-accent transition-colors">Direct UPI Donation (80G)</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Blood Donation Rules</h5>
            <ul className="space-y-2">
              <li><Link to="/how-much-money-for-blood-donation" className="font-semibold text-accent hover:text-white transition-colors">How Much for Blood Donation</Link></li>
              <li><Link to="/blog/how-often-can-you-donate-blood" className="hover:text-accent transition-colors">How Often to Donate Blood</Link></li>
              <li><Link to="/blog/can-you-donate-blood-if-you-smoke" className="hover:text-accent transition-colors">Donate Blood If You Smoke</Link></li>
              <li><Link to="/blog/can-you-donate-blood-if-you-have-a-tattoo" className="hover:text-accent transition-colors">Donate Blood With Tattoo</Link></li>
              <li><Link to="/urgent-blood-donation-help" className="hover:text-accent transition-colors">Emergency Blood Network</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Plasma &amp; Pregnancy</h5>
            <ul className="space-y-2">
              <li><Link to="/blog/can-you-donate-plasma-while-pregnant" className="hover:text-accent transition-colors">Donate Plasma While Pregnant</Link></li>
              <li><Link to="/can-donating-plasma-while-pregnant-cause-miscarriage" className="hover:text-accent transition-colors">Plasma &amp; Miscarriage Risks</Link></li>
              <li><Link to="/can-plasma-donation-affect-fertility" className="hover:text-accent transition-colors">Plasma &amp; Fertility Facts</Link></li>
              <li><Link to="/is-plasma-donation-painful" className="hover:text-accent transition-colors">Is Plasma Donation Painful?</Link></li>
              <li><Link to="/blog/how-long-does-it-take-to-donate-plasma" className="hover:text-accent transition-colors">How Long Does Plasma Take?</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Fertility &amp; ART Act</h5>
            <ul className="space-y-2">
              <li><Link to="/how-much-does-it-pay-to-donate-sperm" className="font-semibold text-accent hover:text-white transition-colors">How Much to Donate Sperm</Link></li>
              <li><Link to="/blog/sperm-donation-payment" className="hover:text-accent transition-colors">Sperm Donation Payouts (US)</Link></li>
              <li><Link to="/blog/egg-donation-near-me" className="hover:text-accent transition-colors">Egg Donation Centers</Link></li>
              <li><Link to="/blog/donate-eggs" className="hover:text-accent transition-colors">Donate Eggs Guide</Link></li>
              <li><Link to="/admin/gsc-hub" className="text-emerald-400 font-semibold hover:text-white transition-colors">GSC Editorial Audit Hub</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Pickups &amp; Property</h5>
            <ul className="space-y-2">
              <li><Link to="/guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup" className="font-semibold text-accent hover:text-white transition-colors">Salvation Army Furniture Pickup</Link></li>
              <li><Link to="/blog/goodwill-donation-pick-up" className="hover:text-accent transition-colors">Goodwill Home Pickup</Link></li>
              <li><Link to="/blog/donating-property-to-a-nonprofit" className="hover:text-accent transition-colors">Donating Property to Charity</Link></li>
              <li><Link to="/blog/donating-real-estate-to-charity" className="hover:text-accent transition-colors">Real Estate Tax Write-Off</Link></li>
              <li><Link to="/blog/car-donation-to-charity" className="hover:text-accent transition-colors">Car Donation Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2026 Dargah Saiyad Ali Shah Seva Sansthan. {t.footer.rights}</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-accent transition-colors">{t.footer.privacy}</Link>
          <Link to="/terms" className="hover:text-accent transition-colors">{t.footer.terms}</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 text-center">
        <p className="text-slate-600 text-[9px] uppercase tracking-[0.2em] font-medium">
          Website developed by <span className="text-slate-500">Murtaza Darvesh</span>
        </p>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/916350489219" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-strong hover:scale-110 active:scale-90 transition-all z-50 group"
      >
        <MessageCircle size={36} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      </a>
    </footer>
  );
}
