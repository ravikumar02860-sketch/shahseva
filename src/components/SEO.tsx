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
  noindex?: boolean;
}

export default function SEO({
  title = "Donate Money to Charity in India | Shah Seva NGO | Best NGO in Rajasthan for Poor Families",
  description = "Learn how to donate money to support the best old age home in Bhilwara, sponsor children's education, and help poor families online. Shah Seva is a trusted NGO in Rajasthan since 2010.",
  keywords = "old age home bhilwara, old age home in bhilwara, best old age home in bhilwara, how to donate money to help poor families in India online, donate to help homeless people in India, best NGO in Rajasthan for homeless support, trusted charity for food distribution in Bhilwara, donate for medical treatment of poor patients in Rajasthan, homeless shelter aid Rajasthan, safe online donation for homeless in India, Shah Seva Sansthan",
  canonical,
  ogImage = "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
  ogType = "website",
  twitterHandle = "@shahseva",
  schema,
  noindex = false
}: SEOProps) {
  const siteName = "Dargah Saiyad Ali Shah Seva Sansthan";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : "https://shahseva.vercel.app";
  const finalCanonical = canonical || currentUrl;

  const robotsContent = noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": siteName,
    "alternateName": ["Shah Seva", "Dargah Saiyad Ali Shah Seva Sansthan NGO"],
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
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Murad Ali Dargah Ke Pass, Khel Mohalla, Pur",
      "addressLocality": "Bhilwara",
      "addressRegion": "Rajasthan",
      "postalCode": "311001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6350489219",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "nonprofitStatus": "Nonprofit501c3",
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
        "@type": "NGO",
        "name": siteName
      }
    },
    "sameAs": [
      "https://facebook.com/shahseva",
      "https://twitter.com/shahseva",
      "https://instagram.com/shahseva"
    ]
  };

  const breadcrumbSchema = schema?.breadcrumb || {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shahseva.vercel.app/"
      },
      title !== "Home" ? {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": finalCanonical
      } : null
    ].filter(Boolean)
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />
      <meta name="robots" content={robotsContent} />
      <link rel="icon" type="image/png" href="https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F" />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
}
