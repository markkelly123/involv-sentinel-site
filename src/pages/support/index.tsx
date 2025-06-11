import Link from 'next/link';
import Layout from '../../components/Layout';

const SupportPage = () => {
  const supportOptions = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      icon: 'lni lni-book-1',
      href: '/support/documentation',
      status: 'Coming Soon'
    },
    {
      title: 'FAQs',
      description: 'Frequently asked questions and quick answers',
      icon: 'lni lni-question-mark-circle',
      href: '/support/faqs',
      status: 'Coming Soon'
    },
    {
      title: 'Contact Support',
      description: 'Get in touch with our expert team',
      icon: 'lni lni-headphone-1-mic',
      href: '/contact',
      status: 'Available Now'
    }
  ];

  return (
    <Layout
      title="Support - PrimeEdge by Involv"
      description="Get help and support for PrimeEdge EGM optimisation platform. Documentation, FAQs, and expert assistance."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We&apos;re here to <span className="text-emerald-400">help</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get the support you need to maximise your success with PrimeEdge. 
              Our comprehensive resources and expert team are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-8 text-center hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${option.icon} text-3xl text-emerald-400`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>
                
                {option.status === 'Coming Soon' ? (
                  <div className="space-y-3">
                    <span className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                      Coming Soon
                    </span>
                    <p className="text-gray-400 text-sm">
                      We&apos;re working hard to bring you comprehensive {option.title.toLowerCase()}
                    </p>
                  </div>
                ) : (
                  <Link
                    href={option.href}
                    className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Get Support
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interim Support */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need help right now?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            While we&apos;re building our comprehensive support resources, our expert team is ready to assist you directly.
          </p>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-8 border border-emerald-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <i className="lni lni-envelope-1 text-4xl text-emerald-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <a
                  href="mailto:support@involv.com.au"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  support@involv.com.au
                </a>
              </div>
              <div className="text-center">
                <i className="lni lni-phone text-4xl text-emerald-400 mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2">Schedule a Call</h3>
                <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                <Link
                  href="/contact"
                  className="text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to know when our documentation and FAQ sections go live
          </p>
          <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Notify Me
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We&apos;ll only send updates about new support resources. No spam, ever.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportPage;