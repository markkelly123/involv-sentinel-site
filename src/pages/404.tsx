import Link from 'next/link';
import Layout from '../components/Layout';

const Custom404 = () => {
  return (
    <Layout
      title="Page Not Found - PrimeEdge by Involv"
      description="The page you're looking for could not be found."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="lni lni-question-circle text-5xl text-emerald-400"></i>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;