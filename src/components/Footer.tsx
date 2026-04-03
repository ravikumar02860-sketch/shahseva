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
                Dargah Saiyad Ali Shah
              </span>
              <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-accent">
                Seva Sansthan
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
              { to: "/donate-for-homeless-people", label: t.footer.categories.homeless }
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

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
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
