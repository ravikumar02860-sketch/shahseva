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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

import ErrorBoundary from './components/ErrorBoundary';

// Layout wrapper for 3D page transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
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
                      <Route path="/blog/:id" element={<BlogPost />} />
                      <Route path="/volunteer" element={<Volunteer />} />
                      <Route path="/mission" element={<MissionPage />} />
                      <Route path="/transparency" element={<TransparencyPage />} />
                      <Route path="/admin/campaigns" element={<AdminCampaigns />} />
                      <Route path="/admin/generate-images" element={<ImageGenerator />} />
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
