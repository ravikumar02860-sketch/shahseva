import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
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

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LanguageProvider>
          <Router>
            <SEO />
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
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
                    <Route path="/csr-partnership" element={<CSRPage />} />
                    <Route path="/donate-zakat-online" element={<ZakatPage />} />
                    <Route path="/zakat-calculator" element={<ZakatCalculatorPage />} />
                    <Route path="/hijri-converter" element={<IslamicConverterPage />} />
                    <Route path="/tasbeeh-counter" element={<TasbeehCounterPage />} />
                    <Route path="/qurbani-2026" element={<QurbaniPage />} />
                    <Route path="/success-stories" element={<StoriesPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
