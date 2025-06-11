import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout = ({ 
  children, 
  title = 'PrimeEdge by Involv',
  description = 'The science behind high-performance gaming venues. AI-powered EGM optimisation for Australian pubs and clubs.',
  keywords = 'EGM optimisation, gaming venue performance, AI recommendations, pub gaming, club gaming, Australia',
  ogImage = '/images/og-primeedge.jpg'
}: LayoutProps) => {
  const fullTitle = title === 'PrimeEdge by Involv' ? title : `${title} | PrimeEdge by Involv`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="PrimeEdge by Involv" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Involv Pty Ltd" />
        <link rel="canonical" href="https://primeedge.involv.com.au" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className="min-h-screen bg-[#0f1115] text-white">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;