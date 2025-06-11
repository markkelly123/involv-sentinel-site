import Link from 'next/link';
import Layout from '../../components/Layout';

const FAQsPage = () => {
  const faqCategories = [
    {
      title: 'Platform Basics',
      icon: 'lni lni-question-mark-circle',
      description: 'Understanding PrimeEdge fundamentals',
      comingSoon: [
        'What is PrimeEdge and how does it work?',
        'How does the AI recommendation engine function?',
        'What data do I need to get started?',
        'How long does implementation take?',
        'What gaming systems are compatible?'
      ]
    },
    {
      title: 'Features & Functionality',
      icon: 'lni lni-cms-monitor-1',
      description: 'Detailed feature explanations',
      comingSoon: [
        'How accurate are the revenue predictions?',
        'Can I customise the recommendation criteria?',
        'How often are recommendations updated?',
        'What types of floor changes does PrimeEdge suggest?',
        'How do I interpret the performance analytics?'
      ]
    },
    {
      title: 'Setup & Integration',
      icon: 'lni lni-plug-1',
      description: 'Getting PrimeEdge connected',
      comingSoon: [
        'What technical requirements are needed?',
        'How do I upload my floor plan?',
        'Can PrimeEdge integrate with my LMO?',
        'What security measures are in place?',
        'How is my venue data protected?'
      ]
    },
    {
      title: 'Billing & Support',
      icon: 'lni lni-heart',
      description: 'Subscription and assistance',
      comingSoon: [
        'What pricing plans are available?',
        'Is there a free trial period?',
        'What support options do I have?',
        'How do I cancel my subscription?',
        'Can I get training for my team?'
      ]
    }
  ];

  const quickAnswers = [
    {
      question: 'When will the FAQ section be available?',
      answer: 'We\'re currently compiling the most comprehensive FAQ database based on real customer questions. The full FAQ section will be available soon.',
      icon: 'lni lni-alarm-2'
    },
    {
      question: 'Can I ask questions now?',
      answer: 'Absolutely! Our support team is ready to answer any questions you have. Contact us directly for immediate assistance.',
      icon: 'lni lni-envelope-1'
    },
    {
      question: 'What will be covered in the FAQs?',
      answer: 'Everything from basic platform usage to advanced AI features, technical integrations, billing, and troubleshooting guides.',
      icon: 'lni lni-book-1'
    }
  ];

  return (
    <Layout
      title="FAQs - PrimeEdge by Involv"
      description="Frequently asked questions about PrimeEdge EGM optimisation platform. Get answers to common questions about features, setup, and support."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="lni lni-question-mark-circle text-5xl text-emerald-400"></i>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-emerald-400">FAQs</span> Coming Soon
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re building a comprehensive FAQ section to answer all your questions about PrimeEdge. 
              Real questions from real customers, with detailed, helpful answers.
            </p>
            <div className="inline-block bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-lg font-medium border border-emerald-500/30">
              <i className="lni lni-hammer-3 mr-2"></i>
              Under Construction
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quick answers while we build
            </h2>
            <p className="text-xl text-gray-400">
              Here are some immediate answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickAnswers.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-2xl text-emerald-400`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What we&apos;re preparing for you
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our FAQ section will be organised into clear categories, making it easy to find exactly what you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${category.icon} text-2xl text-emerald-400`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium text-emerald-400 mb-3">Sample questions:</p>
                  {category.comingSoon.map((question, questionIndex) => (
                    <div key={questionIndex} className="flex items-start">
                      <i className="lni lni-hospital-plus text-emerald-400 mr-3 mt-1 text-sm"></i>
                      <span className="text-gray-300 text-sm">{question}</span>
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
            Have a question that can&apos;t wait?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to provide immediate answers and personalised guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Ask a Question
            </Link>
            <Link
              href="/support"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              All Support Options
            </Link>
          </div>

          {/* Direct Contact Info */}
          <div className="mt-12 bg-gray-900/50 border border-white/10 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <i className="lni lni-envelope-1 text-2xl text-emerald-400 mb-2"></i>
                <p className="text-gray-300 text-sm">Email us directly</p>
                <a href="mailto:support@involv.com.au" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  support@involv.com.au
                </a>
              </div>
              <div className="text-center">
                <i className="lni lni-calendar text-2xl text-emerald-400 mb-2"></i>
                <p className="text-gray-300 text-sm">Schedule a call</p>
                <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 font-medium">
                  Book consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQsPage;