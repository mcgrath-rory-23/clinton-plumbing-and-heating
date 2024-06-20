import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/path/to/social-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/path/to/social-image.jpg" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Plumber",
            "name": "Clinton Plumbing & Heating",
            "description": "${description}",
            "url": "${window.location.href}",
            "telephone": "+1234567890",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main St",
              "addressLocality": "Belfast",
              "addressRegion": "NI",
              "postalCode": "BT1 1AA",
              "addressCountry": "GB"
            },
            "image": "/path/to/social-image.jpg",
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/YourBusinessPage",
              "https://twitter.com/YourBusinessPage",
              "https://www.instagram.com/YourBusinessPage"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
