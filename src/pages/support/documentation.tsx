import Link from 'next/link';
import Layout from '../../components/Layout';

const DocumentationPage = () => {
  const upcomingDocSections = [
    {
      title: 'Getting Started',
      description: 'Quick start guide and initial setup',
      icon: 'lni lni-rocket-6',
      topics: ['Platform overview', 'First-time setup', 'Account configuration', 'Basic navigation']
    },
    {
      title: 'AI Recommendations',
      description: 'Understanding and implementing AI-powered insights',
      icon: 'lni lni-chip-ai',
      topics: ['How recommendations work', 'Reading AI insights', 'Implementation guides', 'Best practices']
    },
    {
      title: 'Floor Mapping',
      description: 'Creating and managing interactive venue maps',
      icon: 'lni lni-map',
      topics: ['Upload floor plans', 'Map customisation', 'Data visualisation', 'Real-time updates']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive guides to data analysis features',
      icon: 'lni lni-trend-up-2',
      topics: ['Performance metrics', 'Custom reports', 'Data export', 'Revenue tracking']
    },
    {
      title: 'Integrations',
      description: 'Connecting PrimeEdge with your existing systems',
      icon: 'lni lni-plug-1',
      topics: ['LMO connections', 'Gaming system APIs', 'Data synchronisation', 'Troubleshooting']
    },
    {
      title: 'API Reference',
      description: 'Technical documentation for developers',
      icon: 'lni lni-code-1',
      topics: ['API endpoints', 'Authentication', 'Request examples', 'Response formats']
    }
  ];

  return (
    <Layout
      title="Documentation - PrimeEdge by Involv"
      description="Comprehensive documentation for PrimeEdge EGM optimisation platform. Setup guides, API reference, and best practices."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="lni lni-book-open text-4xl text-emerald-400"></i>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-emerald-400">Documentation</span> Coming Soon
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re crafting comprehensive documentation to help you get the most out of PrimeEdge. 
              Detailed guides, tutorials, and API references are on their way.
            </p>
            <div className="inline-block bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-lg font-medium border border-emerald-500/30">
              <i className="lni lni-timer-1 mr-2"></i>
              Coming Very Soon
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What&apos;s in the works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our documentation will cover everything you need to know about using PrimeEdge effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingDocSections.map((section, index) => (
              <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${section.icon} text-2xl text-emerald-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <p className="text-gray-300 mb-4">{section.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-emerald-400 mb-2">Will include:</p>
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-gray-400">
                      <i className="lni lni-check-circle-1 text-emerald-400 mr-2"></i>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need help before the docs are ready?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to provide personalised guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Contact Support
            </Link>
            <Link
              href="/support"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              All Support Options
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentationPage;