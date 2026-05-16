import { Helmet } from 'react-helmet-async';

function SEO({ title, description, keywords, image }) {
  const siteName = 'Pixer Marketplace';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDesc = 'Buy & sell premium digital products — templates, source codes, UI kits & more.';
  const defaultImage = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6';

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywords || 'digital marketplace, templates, UI kits, source code, react'} />
      <meta name="author" content="Pixer Marketplace" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4F46E5" />
    </Helmet>
  );
}

export default SEO;