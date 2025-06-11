import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'AI-Powered Game Recommendations',
      description: 'Our machine learning algorithms analyse player behaviour and game performance to recommend optimal EGM changes that drive revenue growth.',
      icon: 'lni lni-chip-ai',
      benefit: 'Up to 15% revenue uplift'
    },
    {
      title: 'Interactive Venue Floor Maps',
      description: 'Visualise your entire gaming floor with real-time performance data overlaid on interactive maps. See exactly which machines need attention.',
      icon: 'lni lni-map',
      benefit: 'Instant performance insights'
    },
    {
      title: 'Smart Link Optimisation',
      description: 'Automatically identify underperforming linked jackpot configurations and receive recommendations for link variations, additions, and removals.',
      icon: 'lni lni-link-3-angular-right',
      benefit: 'Optimised jackpot performance'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast the impact of proposed changes before implementation. Make data-driven decisions with confidence in the outcome.',
      icon: 'lni lni-trend-up-2',
      benefit: 'Risk-free decision making'
    }
  ];

  const stats = [
    { value: '2,000+', label: 'EGMs Optimised' },
    { value: '94%', label: 'Recommendation Accuracy' },
    { value: '$2.3M', label: 'Additional Revenue Generated' },
    { value: '10+', label: 'Venues Using EGM Optimisation' }
  ];

  const testimonials = [
    {
      quote: "PrimeEdge is transforming our gaming operations. The AI recommendations helped us increase revenue by 9% in just three months.",
      author: "Isabelle Chen",
      role: "Gaming Manager",
      company: "NSW Club"
    },
    {
      quote: "A tool that understands the complexity of Australian gaming venues. The floor mapping feature is a game-changer.",
      author: "Michael O'Brien",
      role: "Operations Director",
      company: "VIC Hotel"
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Connect Your Data',
      description: 'Uses your existing gaming machine data directly or via your LMO. We handle the technical setup.',
      icon: 'lni lni-plug-1'
    },
    {
      step: '02',
      title: 'AI Analysis',
      description: 'Our algorithms analyse machine performance, player behaviour (if you have it), incorporating venue-specific factors/constraints.',
      icon: 'lni lni-search-2'
    },
    {
      step: '03',
      title: 'Actionable Insights',
      description: 'Receive prioritised recommendations with projected revenue impact and implementation guidance.',
      icon: 'lni lni-bulb-beat'
    }
  ];

  return (
    <Layout
      title="PrimeEdge by Involv - The Science Behind High-Performance Gaming Venues"
      description="AI-powered EGM optimisation for Australian pubs and clubs. Data-driven recommendations to enhance gaming revenue and improve venue performance."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The <span className="text-emerald-400">science</span> behind high-performance gaming venues
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your EGM performance with AI-powered recommendations. Make data-driven decisions that maximise revenue while simplifying operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/features"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 text-center"
                >
                  Explore Features
                </Link>
                <Link
                  href="/contact"
                  className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 text-center"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Interactive Dashboard Preview */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400">PrimeEdge Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm font-medium text-emerald-400">High Priority Recommendation</span>
                    </div>
                    <p className="text-sm text-gray-300">EGM #047: Replace Bull Rush with Lightning Cash for +$2,140/month revenue uplift</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-700/50 rounded p-2 text-center">
                      <div className="text-lg font-bold text-emerald-400">94%</div>
                      <div className="text-xs text-gray-400">Occupancy</div>
                    </div>
                    <div className="bg-gray-700/50 rounded p-2 text-center">
                      <div className="text-lg font-bold text-emerald-400">$18.2k</div>
                      <div className="text-xs text-gray-400">Daily Rev</div>
                    </div>
                    <div className="bg-gray-700/50 rounded p-2 text-center">
                      <div className="text-lg font-bold text-emerald-400">12</div>
                      <div className="text-xs text-gray-400">Actions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Everything you need to optimise your gaming floor
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              PrimeEdge combines advanced AI with deep industry expertise to deliver actionable insights for the Australian pub and club market that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeFeature === index
                      ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/20'
                      : 'bg-gray-900/30 border border-white/10 hover:bg-emerald-500/5 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/10'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <i className={`${feature.icon} text-2xl text-emerald-400 transition-transform duration-300 ${
                        activeFeature === index ? 'scale-110' : 'group-hover:scale-110'
                      }`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-3 transition-colors duration-300">
                        {feature.description}
                      </p>
                      <div className="text-emerald-400 font-medium flex items-center">
                        {feature.benefit}
                        <i className="lni lni-arrow-right text-sm ml-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="mb-6">
                    <i className={`${features[activeFeature].icon} text-6xl text-emerald-400`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{features[activeFeature].title}</h3>
                  <p className="text-gray-400">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple process, powerful results
            </h2>
            <p className="text-xl text-gray-400">
              Get started in minutes, see results in days
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {item.step}
                </div>
                <div className="mb-4">
                  <i className={`${item.icon} text-3xl text-emerald-400`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by gaming professionals across Australia
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
                <div className="mb-6">
                  <i className="lni lni-double-quotes-start-1 text-3xl text-emerald-400"></i>
                </div>
                <p className="text-lg text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to optimise your gaming performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the Australian venues using PrimeEdge to optimise their gaming revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/features"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;