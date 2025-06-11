import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const coreFeatures = [
    {
      icon: 'lni lni-chip-ai',
      title: 'Advanced AI Algorithms',
      description: 'Built on 20+ years of research and development, our AI uses non-linear models similar to those powering algorithmic trading strategies in finance.',
      details: [
        'Infers player preferences from historical EGM data',
        'Examines over 1 million possible floor configurations',
        'Accounts for complex machine interactions and cannibalisation',
        'Continuously learns and adapts to changing player behaviour'
      ]
    },
    {
      icon: 'lni lni-map',
      title: 'Interactive Floor Mapping',
      description: 'Visualise your entire gaming floor with real-time performance data overlaid directly on your floor map.',
      details: [
        'Upload existing floor plan PDFs or create new layouts',
        'Real-time KPI visualisation on floor maps',
        'Heat maps showing machine performance zones',
        'Intuitive drag-and-drop floor planning tools'
      ]
    },
    {
      icon: 'lni lni-trend-up-2',
      title: 'Predictive Revenue Modelling',
      description: 'Get precise revenue projections for proposed changes before implementation, eliminating guesswork from floor decisions.',
      details: [
        'Revenue impact forecasting for all recommendations',
        'Theoretical win uplift calculations',
        'ROI projections for new machine purchases',
        'Cannibalisation impact assessment'
      ]
    },
    {
      icon: 'lni lni-head-side-chip-1',
      title: 'Player Profiling & Segmentation',
      description: 'Understand your customers like never before with detailed player behaviour analysis and preference mapping.',
      details: [
        'Advanced player segmentation algorithms',
        'Preference mapping from transaction data',
        'Guest journey optimisation insights',
        'Personalised gaming floor experiences'
      ]
    }
  ];

  const technicalCapabilities = [
    {
      title: 'Ecosystem Modelling',
      description: 'Understanding that your gaming floor is a complex ecosystem where every change affects every other machine.',
      icon: 'lni lni-connected-nodes'
    },
    {
      title: 'Non-Linear Analysis',
      description: 'Advanced mathematical models that capture the true complexity of player-machine interactions.',
      icon: 'lni lni-android-2'
    },
    {
      title: 'Constraint Optimisation',
      description: 'Easily accommodate operational constraints while maximising revenue potential.',
      icon: 'lni lni-locked-2'
    },
    {
      title: 'Real-Time Processing',
      description: 'Lightning-fast analysis of millions of configurations to find optimal solutions.',
      icon: 'lni lni-timer-1'
    }
  ];

  const outcomes = [
    {
      metric: '15%',
      label: 'Average Revenue Uplift',
      description: 'Typical increase in gaming revenue within 90 days'
    },
    {
      metric: '1M+',
      label: 'Configurations Analysed',
      description: 'Possible floor layouts examined for each recommendation'
    },
    {
      metric: '95%',
      label: 'Recommendation Accuracy',
      description: 'Success rate of revenue uplift predictions'
    },
    {
      metric: '24/7',
      label: 'Continuous Monitoring',
      description: 'Real-time performance tracking and optimisation'
    }
  ];

  return (
    <Layout
      title="Features - PrimeEdge by Involv"
      description="Explore PrimeEdge's advanced AI-powered features for EGM optimisation. Predictive analytics, floor mapping, and revenue forecasting for Australian gaming venues."
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced AI for <span className="text-emerald-400">gaming optimisation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge technology that transforms your EGM performance. 
              Built on decades of research, PrimeEdge delivers the insights you need to maximise revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab('overview')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Explore Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Core Features' },
              { id: 'technical', label: 'Technology' },
              { id: 'integration', label: 'Integration' },
              { id: 'results', label: 'Results' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Tab */}
      {activeTab === 'overview' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Everything you need for EGM optimisation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                PrimeEdge combines cutting-edge AI with deep gaming industry expertise to deliver actionable insights.
              </p>
            </div>

            <div className="space-y-20">
              {coreFeatures.map((feature, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                        <i className={`${feature.icon} text-2xl text-emerald-400`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <i className="lni lni-check-circle-1 text-emerald-400 mr-3 mt-1"></i>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    {/* Placeholder for product imagery */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <i className={`${feature.icon} text-6xl text-emerald-400 mb-4`}></i>
                        <p className="text-gray-400">Product imagery placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Tab */}
      {activeTab === 'technical' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Built on advanced mathematical foundations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The product of 20+ years of research and development, leveraging techniques from financial algorithmic trading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {technicalCapabilities.map((capability, index) => (
                <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <i className={`${capability.icon} text-3xl text-emerald-400 mr-4`}></i>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>

            {/* Technical Deep Dive */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Understanding the Gaming Floor Ecosystem</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-4">
                    Your gaming floor isn&apos;t just a collection of individual machines - it&apos;s a complex ecosystem where every element influences every other element.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Traditional approaches treat each machine in isolation, missing the crucial interactions that drive player behaviour and revenue performance.
                  </p>
                  <p className="text-gray-300">
                    PrimeEdge&apos;s advanced algorithms model these complex relationships, accounting for cannibalisation effects, product placement impact, and player flow patterns.
                  </p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Key Technical Features:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Non-linear mathematical modelling</li>
                    <li>• Machine interaction analysis</li>
                    <li>• Cannibalisation effect calculations</li>
                    <li>• Product placement optimisation</li>
                    <li>• Revenue uplift predictions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Integration Tab */}
      {activeTab === 'integration' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Seamless integration with your existing systems
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                PrimeEdge works with your current gaming infrastructure, requiring minimal setup and no operational disruption.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-file-format-pdf text-3xl text-emerald-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Setup</h3>
                <p className="text-gray-300">Upload your existing floor plan PDFs or create new layouts in minutes. Simple, intuitive configuration process.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-plug-1 text-3xl text-emerald-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Integration</h3>
                <p className="text-gray-300">Connect with LMO providers and gaming systems. Secure, automated data synchronisation with existing infrastructure.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-screwdriver-1 text-3xl text-emerald-400"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ongoing Maintenance</h3>
                <p className="text-gray-300">Hassle-free ongoing maintenance with automatic updates and continuous monitoring of floor performance.</p>
              </div>
            </div>

            {/* Integration Partners */}
            <div className="bg-gray-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Compatible with Leading Gaming Systems</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center h-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/GMS/aristocrat.png" 
                    alt="Aristocrat" 
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
                  />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center h-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/GMS/ebet.png" 
                    alt="eBet" 
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
                  />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center h-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/GMS/konami.png" 
                    alt="Konami" 
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
                  />
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-700/50 transition-colors duration-200 flex items-center justify-center h-24">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/GMS/utopia.png" 
                    alt="Utopia" 
                    className="max-w-full max-h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven results across Australian venues
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real venues achieving real results with PrimeEdge&apos;s AI-powered optimisation.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">{outcome.metric}</div>
                  <div className="text-lg font-semibold text-white mb-2">{outcome.label}</div>
                  <div className="text-gray-400 text-sm">{outcome.description}</div>
                </div>
              ))}
            </div>

            {/* Case Study */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Success Story: Metro Gaming Club</h3>
                  <div className="mb-6">
                    <i className="lni lni-double-quotes-start-1 text-3xl text-emerald-400 mb-4"></i>
                    <blockquote className="text-lg text-gray-300 italic">
                      &quot;PrimeEdge has revolutionised our approach to floor optimisation. The AI discovered patterns and opportunities that we never could have identified manually. Our gaming revenue increased by 18% in just three months.&quot;
                    </blockquote>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      S
                    </div>
                    <div>
                      <div className="font-semibold text-white">Sarah Chen</div>
                      <div className="text-gray-400 text-sm">Gaming Manager, Metro Gaming Club</div>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-500/20">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-4">Results Achieved:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Revenue Uplift:</span>
                      <span className="text-emerald-400 font-bold">+18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Machine Efficiency:</span>
                      <span className="text-emerald-400 font-bold">+22%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Player Satisfaction:</span>
                      <span className="text-emerald-400 font-bold">+15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Implementation Time:</span>
                      <span className="text-emerald-400 font-bold">2 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to transform your gaming performance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of AI-driven EGM optimisation with a personalised demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
            >
              Schedule Demo
            </Link>
            <Link
              href="/support/documentation"
              className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturesPage;