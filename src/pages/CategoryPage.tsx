import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Heart, 
  Stethoscope, 
  Utensils, 
  AlertTriangle, 
  Home as HomeIcon,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const iconMap: Record<string, any> = {
  education: BookOpen,
  children: Heart,
  medical: Stethoscope,
  food: Utensils,
  disaster: AlertTriangle,
  orphanage: HomeIcon,
};

interface CategoryPageProps {
  categoryId?: string;
}

export default function CategoryPage({ categoryId: propCategoryId }: CategoryPageProps) {
  const params = useParams<{ categoryId: string }>();
  const categoryId = propCategoryId || params.categoryId;
  const { t } = useLanguage();
  
  const category = categoryId ? t.categories[categoryId as keyof typeof t.categories] : null;
  const Icon = categoryId ? iconMap[categoryId] : Heart;

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <SEO 
        title={category.title}
        description={category.metaDescription}
        schema={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://shahseva.vercel.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": category.title,
              "item": `https://shahseva.vercel.app/donate-for-${categoryId}`
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              {category.h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              {category.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="/donate"
                className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 group"
              >
                {category.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {category.section1Title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {category.section1Text}
              </p>
              <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: t.donation.reasons[0] },
                  { icon: Users, text: t.donation.reasons[2] },
                  { icon: CheckCircle2, text: t.donation.reasons[3] }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-primary/10 rounded-lg mr-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={`https://picsum.photos/seed/${categoryId}/800/800`}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-primary font-bold text-lg mb-1">100% Transparent</p>
                <p className="text-gray-600 text-sm">{t.footer.desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.impactSection.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t.impact.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.donation.impactSection.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-primary mb-2">{item.amount}</div>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                {t.cta.desc}
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center px-10 py-5 bg-white text-primary rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl group"
              >
                {t.nav.donate}
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
