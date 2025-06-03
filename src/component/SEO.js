
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoConfig from './seoConfig';

const SEO = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const seoData = seoConfig[currentPath] || seoConfig['/'];
  const baseUrl = 'https://sustylo.com'; 
console.log(seoData.title,"sdkfjsdpjfs")
  useEffect(() => {
    // Update title
    document.title = seoData.title;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, property) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);
      
      if (!tag) {
        tag = document.createElement('meta');
        if (property) {
          tag.setAttribute('property', property);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', seoData.description);
    if (seoData.keywords) {
      updateMetaTag('keywords', seoData.keywords);
    }
    
    // OpenGraph meta tags
    updateMetaTag(null, seoData.ogTitle || seoData.title, 'og:title');
    updateMetaTag(null, seoData.ogDescription || seoData.description, 'og:description');
    updateMetaTag(null, seoData.ogImage || 'https://sustylo.com/images/stylo_Logo.png', 'og:image');
    updateMetaTag(null, 'website', 'og:type');
    updateMetaTag(null, seoData.canonical || `${baseUrl}${currentPath}`, 'og:url');
    
    // Twitter meta tags
    updateMetaTag(null, seoData.twitter?.card || 'summary_large_image', 'twitter:card');
    updateMetaTag(null, seoData.twitter?.title || seoData.og?.title || seoData.title, 'twitter:title');
    updateMetaTag(null, seoData.twitter?.description || seoData.og?.description || seoData.description, 'twitter:description');
    updateMetaTag(null, seoData.twitter?.image || seoData.og?.image || 'https://sustylo.com/images/stylo_Logo.png', 'twitter:image');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.canonical || `${baseUrl}${currentPath}`);
  }, [location, seoData, currentPath, baseUrl]);

  return null;
};

export default SEO;
























// import { Helmet } from "react-helmet-async";

// const SEO = ({ title, description, keywords, canonical, og, twitter }) => {
//   return (
//     <Helmet>
//       {/* Primary Meta Tags */}
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <link rel="canonical" href={canonical} />

//       {/* Open Graph / Facebook */}
//       <meta property="og:type" content={og.type} />
//       <meta property="og:title" content={og.title} />
//       <meta property="og:description" content={og.description} />
//       <meta property="og:url" content={og.url} />
//       <meta property="og:image" content={og.image} />

//       {/* Twitter */}
//       <meta name="twitter:card" content={twitter.card} />
//       <meta name="twitter:title" content={twitter.title} />
//       <meta name="twitter:description" content={twitter.description} />
//       <meta name="twitter:image" content={twitter.image} />
//     </Helmet>
//   );
// };

// export default SEO ;