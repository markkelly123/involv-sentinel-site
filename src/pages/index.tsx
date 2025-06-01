import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Involv PrimeEdge - Make Better Gaming Floor Decisions</title>
        <meta name="description" content="AI-powered optimisation tool for EGM floors in Australian pubs and clubs. Get clear insights on which games are working, how many of a game you should have, how many should be in links, and more - all leading to improved turnover." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-gray-900 shadow-sm border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-involve-primeedge-white.svg" 
                alt="Involv PrimeEdge" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white">How It Works</Link>
              <Link href="/insights" className="text-gray-300 hover:text-white">Insights</Link>
              <Link href="/faqs" className="text-gray-300 hover:text-white">FAQs</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Login
              </Link>
              <Link href="/contact" className="border border-gray-300 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                Get Demo
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section - Problem-First */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Stop Guessing About Your Gaming Floor
                </h1>
                <p className="text-xl mb-6 font-medium text-green-100">
                  The science behind high-performance gaming venues.
                </p>
                <p className="text-lg text-green-100 mb-8 leading-relaxed">
                  PrimeEdge moves you beyond making gaming floor calls based on instinct or rules-of-thumb. Want to know how to better yield your machines and improve market share? PrimeEdge gives you clear insights to improve your gaming revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center">
                    See How It Works
                  </Link>
                  <Link href="/login" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-center">
                    Try PrimeEdge
                  </Link>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-4">Common Gaming Floor Challenges</h3>
                </div>
                <div className="space-y-4">
                  {gamingChallenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-green-200 mr-3 mt-1">
                        <span className="text-lg">🤔</span>
                      </div>
                      <p className="text-green-100 text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-green-300 text-center">
                  <p className="text-green-200 text-sm font-medium">PrimeEdge gives you data-backed answers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Approach vs Better Way */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">From Guessing to Knowing</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Even today, many gaming decisions are made based on experience and gut feel. Which is fine, but there's a better way and it yeilds greater returns on your asset and conversion investment decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Current Way */}
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤷</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">How Most Gaming Decisions Are Made</h3>
                  <p className="text-orange-300 text-sm">Experience-based, reactive</p>
                </div>
                <ul className="space-y-3">
                  {currentApproach.map((approach, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-400 mr-2 mt-1">•</span>
                      <span className="text-gray-300 text-sm">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Better Way */}
              <div className="bg-gray-700 border border-green-500 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">How PrimeEdge Changes This</h3>
                  <p className="text-green-300 text-sm">Data-driven, proactive</p>
                </div>
                <ul className="space-y-3">
                  {primeEdgeApproach.map((approach, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Simple Language */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How PrimeEdge Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple steps to better understand your gaming floor performance and make informed decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-green-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic">"{step.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get - Practical Benefits */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You Get with PrimeEdge</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Built for gaming venues by people who have worked in gaming venues. No generic software that is not fit for purpose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practicalFeatures.map((feature) => (
                <div key={feature.title} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm text-center mb-4">{feature.description}</p>
                  <div className="bg-gray-600 rounded p-3">
                    <p className="text-green-300 text-xs font-medium text-center">{feature.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section - Conservative Claims */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Venues Using PrimeEdge Report</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Finally understand which machines are actually working and which ones aren't. Takes the guesswork out of gaming floor decisions."
              </blockquote>
              <div className="text-sm text-gray-600">
                — Gaming Manager, Regional Club
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Clear Insights</div>
                <div className="text-gray-600 text-sm">Into machine performance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Better Decisions</div>
                <div className="text-gray-600 text-sm">Based on actual data</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">Improved Revenue</div>
                <div className="text-gray-600 text-sm">From smarter placement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Background */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Built by Gaming Industry Experts</h2>
            <div className="bg-gray-700 rounded-lg p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                PrimeEdge is developed by Involv, led by gaming industry veterans including Con Nikitas, who managed nearly 13,000 EGMs across Australia's largest gaming operations. We understand gaming venues because we've run them.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">30+</div>
                  <div className="text-gray-400 text-sm">Years Industry Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">13,000</div>
                  <div className="text-gray-400 text-sm">EGMs Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">Real</div>
                  <div className="text-gray-400 text-sm">Venue Operations Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Make Better Gaming Floor Decisions?</h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              See how PrimeEdge can help you understand your gaming floor performance and make decisions based on data, not guesswork.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                See How It Works
              </Link>
              <Link href="/login" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-medium">
                Try PrimeEdge Free
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 px-4 border-t border-gray-700">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src="/logo-involve-primeedge-white.svg" 
                    alt="Involv PrimeEdge" 
                    className="h-6 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  The science behind high-performance gaming venues. Clear insights for better gaming floor decisions.
                </p>
                <p className="text-gray-500 text-xs">
                  Part of the <a href="https://involv.com.au" className="hover:text-gray-300">Involv</a> family
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-white">Product</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/features" className="hover:text-white">How It Works</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Get Demo</Link></li>
                  <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/insights" className="hover:text-white">Gaming Insights</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white">Success Stories</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Support</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-white">Expert Advisory</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://involv.com.au" className="hover:text-white">Involv Advisory</a></li>
                  <li><a href="https://assure.involv.com.au" className="hover:text-white">Assure Compliance</a></li>
                  <li><a href="https://lane.involv.com.au" className="hover:text-white">Lane Consulting</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; 2025 Involv. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-gray-300">Terms of Use</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

// Data
const gamingChallenges = [
  "Which machines are actually performing well and which aren't?",
  "Where should we place new machines for best results?",
  "How do we know if floor changes are actually improving revenue?",
  "Making decisions based on gut feel rather than data",
  "Want to improve gaming revenue but not sure where to start"
]

const currentApproach = [
  "Move machines based on experience and gut feel",
  "Try different layouts and hope for the best",
  "Rely on manufacturer recommendations only",
  "Make changes when revenue seems to drop", 
  "Difficulty measuring if changes actually worked",
  "Limited visibility into machine-level performance"
]

const primeEdgeApproach = [
  "See exactly which machines are performing best",
  "Get data-backed recommendations for placement",
  "Test layout changes before implementing them",
  "Track revenue impact of every change",
  "Clear insights into what's working and what's not",
  "Make decisions based on real performance data"
]

const howItWorksSteps = [
  {
    title: "Connect Your Data",
    description: "PrimeEdge connects to your existing gaming systems to understand current performance.",
    example: "See revenue per machine, player patterns, peak times"
  },
  {
    title: "Get Clear Insights",
    description: "Visual dashboards show you exactly what's working and what isn't on your gaming floor.",
    example: "Which machines are underperforming, where the hot spots are"
  },
  {
    title: "Make Better Decisions",
    description: "Get specific recommendations for machine placement and floor improvements.",
    example: "Move Machine A to Location B, expect 12% revenue increase"
  }
]

const practicalFeatures = [
  {
    title: "Floor Performance Map",
    icon: "🗺️",
    description: "Visual map of your gaming floor showing performance by location and machine.",
    benefit: "Instantly see hot spots and underperformers"
  },
  {
    title: "Machine Insights",
    icon: "🎰",
    description: "Detailed performance data for every machine including revenue trends and player engagement.",
    benefit: "Know which machines are worth keeping"
  },
  {
    title: "Placement Recommendations",
    icon: "📍",
    description: "Data-backed suggestions for where to place machines for optimal performance.",
    benefit: "Stop guessing about machine placement"
  },
  {
    title: "Revenue Tracking",
    icon: "💰",
    description: "Track the impact of floor changes on revenue with before and after analysis.",
    benefit: "Prove that changes are working"
  },
  {
    title: "Performance Alerts",
    icon: "🔔",
    description: "Get notified when machines drop below performance thresholds.",
    benefit: "Catch problems before they impact revenue"
  },
  {
    title: "Simple Reports",
    icon: "📊",
    description: "Easy-to-understand reports you can share with management and staff.",
    benefit: "Clear communication about gaming performance"
  }
]