import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  schema?: any;
}

export default function SEO({
  title = "Donate Money to Charity in India | Shah Seva NGO | Help Poor Families Online",
  description = "Learn how to donate money to help poor families in India online. Shah Seva is the best NGO in Rajasthan for sponsoring child education, food distribution, and medical aid for underprivileged communities in Bhilwara.",
  keywords = "how to donate money to help poor families in India online, best NGO in Rajasthan for sponsoring child education, trusted charity for food distribution in Bhilwara, donate for medical treatment of poor patients in Rajasthan, help girl child education in Rajasthan with safe online donation, Shah Seva Sansthan, donate money to charity India, NGO donation Bhilwara",
  canonical = "https://shahseva.vercel.app",
  ogImage = "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
  ogType = "website",
  twitterHandle = "@shahseva",
  schema
}: SEOProps) {
  const siteName = "Dargah Saiyad Ali Shah Seva Sansthan";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "taxID": "COOP/2025/BHILWARA/500577",
    "url": "https://shahseva.vercel.app",
    "logo": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
    "image": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
    "description": description,
    "founder": {
      "@type": "Person",
      "name": "Rojib Khan (Bhaijaan)"
    },
    "foundingDate": "2010",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Rajasthan"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Murad Ali Dargah Ke Pass, Khel Mohalla, Pur",
        "addressLocality": "Bhilwara",
        "addressRegion": "Rajasthan",
        "postalCode": "311001",
        "addressCountry": "IN"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6350489219",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "potentialAction": {
      "@type": "DonateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://shahseva.vercel.app/donate",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "recipient": {
        "@type": "Organization",
        "name": siteName
      }
    },
    "sameAs": [
      "https://facebook.com/shahseva",
      "https://twitter.com/shahseva",
      "https://instagram.com/shahseva"
    ]
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/png" href="https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
