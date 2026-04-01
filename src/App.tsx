import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import WorkPage from './pages/OurWork';
import DonationPage from './pages/Donation';
import ImpactPage from './pages/Impact';
import GalleryPage from './pages/Gallery';
import ContactPage from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Volunteer from './pages/Volunteer';
import MissionPage from './pages/Mission';
import TransparencyPage from './pages/Transparency';
import AdminCampaigns from './pages/AdminCampaigns';
import ImageGenerator from './pages/ImageGenerator';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
                  <Route path="/volunteer" element={<Volunteer />} />
                  <Route path="/mission" element={<MissionPage />} />
                  <Route path="/transparency" element={<TransparencyPage />} />
                  <Route path="/admin/campaigns" element={<AdminCampaigns />} />
                  <Route path="/admin/generate-images" element={<ImageGenerator />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </LanguageProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
