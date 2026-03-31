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
  title = "Dargah Saiyad Ali Shah Seva Sansthan - NGO in Bhilwara, Rajasthan",
  description = "Dargah Saiyad Ali Shah Seva Sansthan is a leading NGO in Bhilwara, Rajasthan, providing food, education, and medical aid to poor families. Join us in serving humanity.",
  keywords = "NGO in Bhilwara, Charity in Rajasthan, Help poor families Bhilwara, Education support NGO India, Medical aid for poor Rajasthan, Dargah Saiyad Ali Shah Seva Sansthan",
  canonical = "https://dargahsaiyadali.org",
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
          "url": "https://dargahsaiyadali.org",
          "logo": "https://lh3.googleusercontent.com/d/1tkQ_k0ElpNrVeVF5psmj_OjufAA2Ur4F",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilwara",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service"
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
