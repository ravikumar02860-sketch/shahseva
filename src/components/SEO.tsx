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
}

export default function SEO({
  title = "NGO Donation India | Help Poor Families | Dargah Saiyad Ali Shah",
  description = "Donate to Dargah Saiyad Ali Shah Seva Sansthan, a trusted NGO in Bhilwara, India. Support education, medical aid, and food distribution for poor families. Join our mission today.",
  keywords = "NGO donation India, donate for poor, charity donation India, support education donation, help poor families donation, NGO support India, Dargah Saiyad Ali Shah Seva Sansthan, Bhilwara NGO, social welfare Rajasthan, food distribution charity, medical aid for poor",
  canonical = "https://shahseva.vercel.app",
  ogImage = "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
  ogType = "website",
  twitterHandle = "@dargahsaiyadali"
}: SEOProps) {
  const siteName = "Dargah Saiyad Ali Shah Seva Sansthan";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
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
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": siteName,
          "url": "https://shahseva.vercel.app",
          "logo": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
          "description": description,
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
          "sameAs": [
            "https://facebook.com/dargahsaiyadali",
            "https://twitter.com/dargahsaiyadali",
            "https://instagram.com/dargahsaiyadali"
          ]
        })}
      </script>
    </Helmet>
  );
}
