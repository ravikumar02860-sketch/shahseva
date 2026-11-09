import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import HomePage from './pages/Home';

// Lazy load secondary pages to reduce initial bundle size
const AboutPage = lazy(() => import('./pages/About'));
const WorkPage = lazy(() => import('./pages/OurWork'));
const DonationPage = lazy(() => import('./pages/Donation'));
const ImpactPage = lazy(() => import('./pages/Impact'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const ContactPage = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const MissionPage = lazy(() => import('./pages/Mission'));
const TransparencyPage = lazy(() => import('./pages/Transparency'));
const AdminCampaigns = lazy(() => import('./pages/AdminCampaigns'));
const ImageGenerator = lazy(() => import('./pages/ImageGenerator'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const CampaignLandingPage = lazy(() => import('./pages/CampaignLandingPage'));
const IslamicLandingPage = lazy(() => import('./pages/IslamicLandingPage'));
const AnimalLandingPage = lazy(() => import('./pages/AnimalLandingPage'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const CSRPage = lazy(() => import('./pages/CSR'));
const ZakatPage = lazy(() => import('./pages/Zakat'));
const StoriesPage = lazy(() => import('./pages/Stories'));
const ZakatCalculatorPage = lazy(() => import('./pages/ZakatCalculator'));
const IslamicConverterPage = lazy(() => import('./pages/IslamicConverter'));
const TasbeehCounterPage = lazy(() => import('./pages/TasbeehCounter'));
const QurbaniPage = lazy(() => import('./pages/Qurbani'));
const GSCEditorialHub = lazy(() => import('./pages/GSCEditorialHub'));
const FeeVsFeesPage = lazy(() => import('./pages/FeeVsFeesPage'));
const HowOftenCanYouDonatePlasmaPage = lazy(() => import('./pages/HowOftenCanYouDonatePlasmaPage'));
const BioLifeVsCSLPlasmaPage = lazy(() => import('./pages/BioLifeVsCSLPlasmaPage'));
const BioLifeAnotherStatePage = lazy(() => import('./pages/BioLifeAnotherStatePage'));
const DonatePlasmaSmokeWeedPage = lazy(() => import('./pages/DonatePlasmaSmokeWeedPage'));
const DonatePlasmaPregnantPage = lazy(() => import('./pages/DonatePlasmaPregnantPage'));
const DonatePlasmaHerpesPage = lazy(() => import('./pages/DonatePlasmaHerpesPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// High-performance loading fallback
const PageLoader = () => (
  <div className="max-w-4xl mx-auto px-6 py-20 animate-pulse">
    <div className="h-6 w-32 bg-slate-200 rounded-full mb-6"></div>
    <div className="h-10 md:h-12 w-3/4 bg-slate-200 rounded-2xl mb-6"></div>
    <div className="h-4 w-1/2 bg-slate-100 rounded-lg mb-8"></div>
    <div className="aspect-video w-full bg-slate-200 rounded-3xl mb-8"></div>
    <div className="space-y-3">
      <div className="h-4 bg-slate-100 rounded w-full"></div>
      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
      <div className="h-4 bg-slate-100 rounded w-4/6"></div>
    </div>
  </div>
);

import ErrorBoundary from './components/ErrorBoundary';
import { prefetchBlogPost, prefetchBlogPage } from './utils/prefetch';

// Fast, non-blocking page transition wrapper (removes 400ms delay)
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  useEffect(() => {
    // Prefetch blog bundles in background when browser is idle
    const timer = setTimeout(() => {
      prefetchBlogPage();
      prefetchBlogPost();
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col overflow-x-hidden">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <PageWrapper>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/work" element={<WorkPage />} />
                      <Route path="/donate" element={<DonationPage />} />
                      <Route path="/impact" element={<ImpactPage />} />
                      <Route path="/gallery" element={<GalleryPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/privacy" element={<PrivacyPolicy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/fee-vs-fees-meaning-difference-examples" element={<FeeVsFeesPage />} />
                      <Route path="/blog/how-often-can-you-donate-plasma" element={<HowOftenCanYouDonatePlasmaPage />} />
                      <Route path="/blog/how-often-can-you-donate-plasma-at-biolife-csl-plasma" element={<BioLifeVsCSLPlasmaPage />} />
                      <Route path="/blog/can-i-donate-at-biolife-in-another-state" element={<BioLifeAnotherStatePage />} />
                      <Route path="/blog/can-i-donate-plasma-if-i-smoke-weed" element={<DonatePlasmaSmokeWeedPage />} />
                      <Route path="/blog/can-you-donate-plasma-while-pregnant" element={<DonatePlasmaPregnantPage />} />
                      <Route path="/blog/can-you-donate-plasma-if-you-have-herpes" element={<DonatePlasmaHerpesPage />} />
                      <Route path="/blog/:id" element={<BlogPost />} />
                      <Route path="/donate-money-to-charity" element={<BlogPost />} />
                      
                      {/* Search Console Pillar & Query Routes (Direct Crawlability) */}
                      <Route path="/how-to-send-money-to-charity-in-india" element={<BlogPost />} />
                      <Route path="/best-way-to-donate-money-in-india" element={<BlogPost />} />
                      <Route path="/what-about-in-india-charity-guide" element={<BlogPost />} />
                      <Route path="/how-much-money-for-blood-donation" element={<BlogPost />} />
                      <Route path="/can-donating-plasma-while-pregnant-cause-miscarriage" element={<BlogPost />} />
                      <Route path="/can-plasma-donation-affect-fertility" element={<BlogPost />} />
                      <Route path="/is-plasma-donation-painful" element={<BlogPost />} />
                      <Route path="/how-much-does-it-pay-to-donate-sperm" element={<BlogPost />} />
                      <Route path="/guide-me-through-the-process-of-scheduling-a-salvation-army-furniture-pickup" element={<BlogPost />} />

                      <Route path="/volunteer" element={<Volunteer />} />
                      <Route path="/mission" element={<MissionPage />} />
                      <Route path="/transparency" element={<TransparencyPage />} />
                      <Route path="/admin/campaigns" element={<AdminCampaigns />} />
                      <Route path="/admin/generate-images" element={<ImageGenerator />} />
                      <Route path="/admin/gsc-hub" element={<GSCEditorialHub />} />
                      <Route path="/admin/editorial-hub" element={<GSCEditorialHub />} />
                      <Route path="/admin/content-review" element={<GSCEditorialHub />} />
                      <Route path="/donate-for-education" element={<CategoryPage categoryId="education" />} />
                      <Route path="/donate-for-poor-children" element={<CategoryPage categoryId="children" />} />
                      <Route path="/donate-for-medical-help" element={<CategoryPage categoryId="medical" />} />
                      <Route path="/donate-for-food-for-poor" element={<CategoryPage categoryId="food" />} />
                      <Route path="/donate-for-disaster-relief" element={<CategoryPage categoryId="disaster" />} />
                      <Route path="/donate-to-orphanage-india" element={<CategoryPage categoryId="orphanage" />} />
                      <Route path="/donate-for-girl-child-education" element={<CategoryPage categoryId="girlChild" />} />
                      <Route path="/donate-for-cancer-patient-treatment" element={<CategoryPage categoryId="cancer" />} />
                      <Route path="/donate-for-old-age-home" element={<CategoryPage categoryId="oldAge" />} />
                      <Route path="/donate-for-homeless-people" element={<CategoryPage categoryId="homeless" />} />
                      
                      {/* Dynamic campaign route */}
                      <Route path="/campaign/:id" element={<CampaignLandingPage />} />
                      
                      {/* 10 special donation landing pages mapped directly */}
                      <Route path="/donate-for-child-surgery" element={<CampaignLandingPage campaignId="donate-for-child-surgery" />} />
                      <Route path="/urgent-medical-help-donation" element={<CampaignLandingPage campaignId="urgent-medical-help-donation" />} />
                      <Route path="/help-cancer-patient-donate" element={<CampaignLandingPage campaignId="help-cancer-patient-donate" />} />
                      <Route path="/donate-for-accident-victim" element={<CampaignLandingPage campaignId="donate-for-accident-victim" />} />
                      <Route path="/donate-hospital-bills" element={<CampaignLandingPage campaignId="donate-hospital-bills" />} />
                      <Route path="/child-heart-surgery-donation" element={<CampaignLandingPage campaignId="child-heart-surgery-donation" />} />
                      <Route path="/emergency-fundraiser-for-child" element={<CampaignLandingPage campaignId="emergency-fundraiser-for-child" />} />
                      <Route path="/online-donation-for-surgery" element={<CampaignLandingPage campaignId="online-donation-for-surgery" />} />
                      <Route path="/crowdfunding-medical-emergency" element={<CampaignLandingPage campaignId="crowdfunding-medical-emergency" />} />
                      <Route path="/donate-for-life-saving-treatment" element={<CampaignLandingPage campaignId="donate-for-life-saving-treatment" />} />

                      {/* Food distribution pages (Task 7) */}
                      <Route path="/feed-hungry-children-donate" element={<CampaignLandingPage campaignId="feed-hungry-children-donate" />} />
                      <Route path="/food-donation-for-poor" element={<CampaignLandingPage campaignId="food-donation-for-poor" />} />
                      <Route path="/sponsor-a-meal" element={<CampaignLandingPage campaignId="sponsor-a-meal" />} />
                      <Route path="/donate-for-village-poor-families" element={<CampaignLandingPage campaignId="donate-for-village-poor-families" />} />
                      <Route path="/donate-food-in-ramadan-general" element={<CampaignLandingPage campaignId="donate-food-in-ramadan-general" />} />

                      {/* Education support pages (Task 8) */}
                      <Route path="/sponsor-a-child-education" element={<CampaignLandingPage campaignId="sponsor-a-child-education" />} />
                      <Route path="/donate-school-supplies" element={<CampaignLandingPage campaignId="donate-school-supplies" />} />
                      <Route path="/help-poor-students-donate" element={<CampaignLandingPage campaignId="help-poor-students-donate" />} />
                      <Route path="/school-fee-donation" element={<CampaignLandingPage campaignId="school-fee-donation" />} />
                      <Route path="/donate-for-orphan-education" element={<CampaignLandingPage campaignId="donate-for-orphan-education" />} />
                      <Route path="/donate-for-poor-girls-education" element={<CampaignLandingPage campaignId="donate-for-poor-girls-education" />} />

                      {/* Urgent donation / Emergency pages (Task 9) */}
                      <Route path="/donate-now-urgent" element={<CampaignLandingPage campaignId="donate-now-urgent" />} />
                      <Route path="/urgent-help-needed-donation" element={<CampaignLandingPage campaignId="urgent-help-needed-donation" />} />
                      <Route path="/emergency-fundraiser" element={<CampaignLandingPage campaignId="emergency-fundraiser" />} />
                      <Route path="/donate-immediately" element={<CampaignLandingPage campaignId="donate-immediately" />} />
                      <Route path="/save-life-donate-now" element={<CampaignLandingPage campaignId="save-life-donate-now" />} />
                      <Route path="/donate-for-poor-child-emergency" element={<CampaignLandingPage campaignId="donate-for-poor-child-emergency" />} />
                      <Route path="/help-orphan-kids-donation" element={<CampaignLandingPage campaignId="help-orphan-kids-donation" />} />
                      <Route path="/emergency-donation-needed" element={<CampaignLandingPage campaignId="emergency-donation-needed" />} />

                      {/* Medical conditions pages (Task 10) */}
                      <Route path="/donate-for-blood-cancer-treatment" element={<CampaignLandingPage campaignId="donate-for-blood-cancer-treatment" />} />
                      <Route path="/donate-for-kidney-treatment" element={<CampaignLandingPage campaignId="donate-for-kidney-treatment" />} />
                      <Route path="/donate-for-liver-transplant" element={<CampaignLandingPage campaignId="donate-for-liver-transplant" />} />
                      <Route path="/donate-for-icu-patient" element={<CampaignLandingPage campaignId="donate-for-icu-patient" />} />
                      <Route path="/urgent-blood-donation-help" element={<CampaignLandingPage campaignId="urgent-blood-donation-help" />} />
                      <Route path="/donate-for-oxygen-cylinder" element={<CampaignLandingPage campaignId="donate-for-oxygen-cylinder" />} />
                      <Route path="/donate-for-baby-treatment" element={<CampaignLandingPage campaignId="donate-for-baby-treatment" />} />
                      <Route path="/urgent-child-treatment-donation" element={<CampaignLandingPage campaignId="urgent-child-treatment-donation" />} />

                      {/* Disaster relief & Social Cause pages (Task 11) */}
                      <Route path="/donate-for-flood-victims" element={<CampaignLandingPage campaignId="donate-for-flood-victims" />} />
                      <Route path="/earthquake-relief-donation" element={<CampaignLandingPage campaignId="earthquake-relief-donation" />} />
                      <Route path="/donate-clothes-for-poor" element={<CampaignLandingPage campaignId="donate-clothes-for-poor" />} />
                      <Route path="/help-elderly-people-donation" element={<CampaignLandingPage campaignId="help-elderly-people-donation" />} />
                      <Route path="/donate-to-homeless-people" element={<CampaignLandingPage campaignId="donate-for-homeless-people" />} />

                      {/* General charity pages (Task 12) */}
                      <Route path="/charity-donation-online" element={<CampaignLandingPage campaignId="charity-donation-online" />} />
                      <Route path="/online-charity-fundraiser" element={<CampaignLandingPage campaignId="online-charity-fundraiser" />} />
                      <Route path="/donate-to-poor-muslim-family" element={<CampaignLandingPage campaignId="donate-to-poor-muslim-family" />} />

                      {/* Additional high-intent pages (Task 13) */}
                      <Route path="/donate-for-ambulance-support" element={<CampaignLandingPage campaignId="donate-for-ambulance-support" />} />
                      <Route path="/donate-for-disabled-child" element={<CampaignLandingPage campaignId="donate-for-disabled-child" />} />

                      {/* Dynamic Islamic landing page route */}
                      <Route path="/islamic/:id" element={<IslamicLandingPage />} />
                      
                      {/* 6 special Islamic donation landing pages mapped directly */}
                      <Route path="/zakat-donation-online" element={<IslamicLandingPage pageId="zakat-donation-online" />} />
                      <Route path="/donate-sadaqah-online" element={<IslamicLandingPage pageId="donate-sadaqah-online" />} />
                      <Route path="/masjid-donation-online" element={<IslamicLandingPage pageId="masjid-donation-online" />} />
                      <Route path="/donate-food-in-ramadan" element={<IslamicLandingPage pageId="donate-food-in-ramadan" />} />
                      <Route path="/fidya-donation-online" element={<IslamicLandingPage pageId="fidya-donation-online" />} />
                      <Route path="/kaffara-donation" element={<IslamicLandingPage pageId="kaffara-donation" />} />

                      {/* Dynamic Animal welfare landing page route */}
                      <Route path="/animal/:id" element={<AnimalLandingPage />} />
                      
                      {/* 4 special Animal welfare landing pages mapped directly */}
                      <Route path="/donate-for-injured-dog" element={<AnimalLandingPage pageId="donate-for-injured-dog" />} />
                      <Route path="/animal-rescue-donation" element={<AnimalLandingPage pageId="animal-rescue-donation" />} />
                      <Route path="/feed-street-dogs-donate" element={<AnimalLandingPage pageId="feed-street-dogs-donate" />} />
                      <Route path="/rescue-injured-animals-donate" element={<AnimalLandingPage pageId="rescue-injured-animals-donate" />} />

                      <Route path="/csr-partnership" element={<CSRPage />} />
                      <Route path="/donate-zakat-online" element={<ZakatPage />} />
                      <Route path="/zakat-calculator" element={<ZakatCalculatorPage />} />
                      <Route path="/hijri-converter" element={<IslamicConverterPage />} />
                      <Route path="/tasbeeh-counter" element={<TasbeehCounterPage />} />
                      <Route path="/qurbani-2026" element={<QurbaniPage />} />
                      <Route path="/success-stories" element={<StoriesPage />} />
                      <Route path="*" element={<HomePage />} />
                    </Routes>
                  </PageWrapper>
                </Suspense>
              </main>
              <Footer />
              <ScrollToTopButton />
            </div>
          </Router>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
