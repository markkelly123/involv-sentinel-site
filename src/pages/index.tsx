import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { 
  SearchCode, 
  Eye, 
  Shield, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Target, 
  Clock, 
  TrendingUp,
  Database,
  Award,
  BarChart3,
  Users,
  FileText,
  Lightbulb
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Sentinel() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Sentinel - Intelligent Transaction Monitoring | Involv</title>
        <meta name="description" content="Empower your AML team with better intelligence. Sentinel is the AI-native business intelligence platform that magically simplifies detection and AML compliance for Australian venues." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 pt-20 pb-24">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/logo-sentinel-white.png" 
                alt="Sentinel"
                width={200}
                height={60}
                className="mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#66899b] to-[#9b7866] bg-clip-text text-transparent">
                Sharpen Your Detection Skills
              </span><br />
              <span className="text-white">with Pattern Intelligence</span>
            </h1>
            <p className="text-xl text-[#66899b] mb-4 font-semibold">
              The AI-native Business Intelligence Platform
            </p>
            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              Give your TMP a glow up. Sentinel magically simplifies detection and AML compliance, 
              transforming your venue from a reliance on slow and fraught observations to proactive pattern intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-[#66899b] text-white px-10 py-4 rounded-xl hover:bg-opacity-80 transition-all duration-300 font-semibold text-center hover:transform hover:scale-105 shadow-lg">
                Request a Demo
              </Link>
              <Link href="/contact" className="border-2 border-[#66899b] text-[#66899b] px-10 py-4 rounded-xl hover:bg-[#66899b] hover:text-white transition-all duration-300 font-semibold text-center">
                Transform Your TMP
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">AUSTRAC Has Been Unambiguous About AML Compliance</h2>
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
                AUSTRAC are on the record: they're targeting "the estimated $70 billion fed into poker machines" in NSW alone and plan to "crackdown on the laundering of dirty money." 
                After the high-profile casino investigations and penalties, if you're an operator of EGMs in Australia, ignorance is no longer an option.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#66899b]">What AUSTRAC Expects</h3>
                <div className="space-y-6">
                  {regulatoryExpectations.map((expectation, index) => (
                    <div key={index} className="bg-[#1a1d21] rounded-xl p-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-[#66899b] mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white mb-2">{expectation.title}</h4>
                          <p className="text-gray-300 text-sm">{expectation.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a1d21] rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-full max-w-md mx-auto mb-6">
                    <Image
                      src="/austrac-be-aware-alert-action.png"
                      alt="AUSTRAC Be Aware, Be Alert, Take Action"
                      width={500}
                      height={250}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#66899b] mb-2">You can't find</div>
                  <div className="text-xl text-gray-300 mb-4">what you're not looking for</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-500 bg-opacity-20 rounded-lg p-4">
                    <p className="text-red-400 text-sm text-center font-semibold">
                      Money launderers don't get caught by frameworks that rely solely on observations
                    </p>
                  </div>
                  <div className="bg-[#66899b] bg-opacity-20 rounded-lg p-4">
                    <p className="text-[#66899b] text-sm text-center font-semibold">
                      Sentinel reveals patterns that human observation alone cannot detect
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Less Chaos, More Focus */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Less Chaos, More Focus</h2>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Time is money. Save both. Sentinel transforms transaction monitoring and augments the time consuming job of manual surveillance 
              with intelligent, automated pattern recognition and alerting that reduces false positives and reveals the suspicious behavior that warrants reporting.
            </p>
          </div>

          {/* Before vs After */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-red-500 bg-opacity-10 border-2 border-red-500 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400 text-center">Current Approach</h3>
              <div className="space-y-4">
                {beforeSentinel.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="text-red-400 font-bold text-lg">Result: Incomplete, Expensive, Inconsistent</div>
              </div>
            </div>

            <div className="bg-[#66899b] bg-opacity-10 border-2 border-[#66899b] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#66899b] text-center">With Sentinel</h3>
              <div className="space-y-4">
                {withSentinel.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#66899b] mt-1 mr-4 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <div className="text-[#66899b] font-bold text-lg">Result: Proactive, Accurate, Comprehensive, Efficient</div>
              </div>
            </div>
          </div>
        </section>

        {/* How Sentinel Works */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Sentinel Works: Sharpen Your Detection Skills</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                From transaction-focused to behavior-focused. From reactive to predictive. 
                From manual to intelligent. This is how a modern transaction monitoring program works.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <div className="bg-[#1a1d21] rounded-xl p-6">
                    <div className="mb-4">{step.icon}</div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Deep Dive */}
            <div className="bg-[#1a1d21] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#66899b] text-center">Powerful Compliance. Simplified Assurance.</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="pl-12">
                  <h4 className="text-lg font-bold mb-4 text-white">Hardware Integration</h4>
                  <div className="space-y-3">
                    {hardwareFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Zap className="w-5 h-5 text-[#66899b] mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pl-12">
                  <h4 className="text-lg font-bold mb-4 text-white">Software Intelligence</h4>
                  <div className="space-y-3">
                    {softwareFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Brain className="w-5 h-5 text-[#66899b] mt-1 mr-3 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Finally, See What's Actually Happening</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              If you can see the data, you can understand the patterns. If you can understand the patterns, you can detect the risks. 
              If you can detect the risks, you can protect your venue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCapabilities.map((capability, index) => (
              <div key={index} className="bg-[#1a1d21] rounded-xl p-6 hover:bg-[#1f2328] transition-all duration-300 hover:transform hover:scale-105">
                <div className="bg-[#66899b] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <div className="text-sm text-[#66899b] font-semibold">{capability.outcome}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ROI and Compliance Benefits */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">From Obligation to Competitive Advantage</h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Transform your Transaction Monitoring Program from a compliance burden into a business intelligence asset 
                that protects your venue, your reputation, and your future.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#66899b]">Compliance Confidence</h3>
                <div className="space-y-6">
                  {complianceBenefits.map((benefit, index) => (
                    <div key={index} className="bg-[#1a1d21] rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-[#66899b] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                          <p className="text-gray-300 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#66899b]">Business Intelligence</h3>
                <div className="space-y-6">
                  {businessBenefits.map((benefit, index) => (
                    <div key={index} className="bg-[#1a1d21] rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="bg-[#66899b] w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                          <p className="text-gray-300 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence and Credibility */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Built on 80+ Years of Australian Gaming Experience</h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Sentinel isn't built by software developers who've never seen a gaming floor. 
              It's built by people who've managed Australia's largest gaming operations and understand what's pragmatic and works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credibilityFactors.map((factor, index) => (
              <div key={index} className="bg-[#1a1d21] rounded-xl p-6 text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{factor.title}</h3>
                <p className="text-gray-300">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#121418] py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-[#66899b] to-[#9b7866] rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">Ready to See What You've Been Missing?</h2>
              <p className="text-xl mb-8 text-white opacity-90 max-w-3xl mx-auto">
                Start using intelligence and data. 
                Transform your Transaction Monitoring Program with Sentinel's AI-native approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-white text-[#66899b] px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold hover:transform hover:scale-105 shadow-lg">
                  See Sentinel in Action
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-[#66899b] transition-all duration-300 font-semibold">
                  Speak with an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

// Data
const regulatoryExpectations = [
  {
    title: "Effective Transaction Monitoring Programs",
    description: "AUSTRAC requires risk-based TMPs that can actually detect suspicious activity, not just tick compliance boxes."
  },
  {
    title: "Pattern Recognition Beyond Individual Transactions", 
    description: "Modern ML techniques require monitoring customer behavior over time, not just single transaction reviews."
  },
  {
    title: "Proactive Detection and Reporting",
    description: "Venues must demonstrate they're actively looking for and finding suspicious activity through SMR submissions."
  },
  {
    title: "Evidence of Effective Controls",
    description: "Post the high-profile casino investigations and penalties, AUSTRAC expects venues to prove their systems work, not just claim they exist."
  }
]

const beforeSentinel = [
  "Staff report suspicious activity when/if they notice it",
  "CCTV review triggered by staff concerns to investigate", 
  "Transaction-by-transaction analysis missing broader patterns",
  "No systematic way to detect sophisticated techniques", 
  "Reactive approach - criminals adapt faster than detection",
  "Limited ability to prove absence of money laundering"
]

const withSentinel = [
  "Investigations enhanced with pattern intelligence alerts",
  "CCTV investigation supported by data-driven evidence",
  "Customer behavior tracking reveals sophisticated techniques",
  "Systematic detection of structuring and other ML methods",
  "Proactive pattern recognition stays ahead of criminal adaptation",
  "Comprehensive data and detailed SMRs demonstrates effective monitoring to AUSTRAC"
]

const howItWorks = [
  {
    title: "Data Capture",
    description: "Installed in-venue hardware continuously streams comprehensive gaming activity data including ticket-to-ticket tracking across all machines.",
    icon: <Database className="w-12 h-12 text-[#66899b] mx-auto" />
  },
  {
    title: "Pattern Analysis", 
    description: "AI algorithms analyse play behavior patterns over time, not just individual transactions.",
    icon: <Brain className="w-12 h-12 text-[#66899b] mx-auto" />
  },
  {
    title: "Intelligent Alerts",
    description: "Smart alerts for genuine risks with customisable rules, reducing false positives and focusing attention.",
    icon: <AlertTriangle className="w-12 h-12 text-[#66899b] mx-auto" />
  }
]

const hardwareFeatures = [
  "Seamless integration with existing gaming systems",
  "Continuous real-time data streaming",
  "Intelligent ticket tracking across machines",
  "Secure and encrypted data transmission",
  "No installation impact on operations"
]

const softwareFeatures = [
  "Pre-configured AML rules for Australian venues",
  "Customer behaviour pattern recognition",
  "Customisable alert thresholds and rules",
  "Automated SMR-ready reporting",
  "Comprehensive audit trail documentation"
]

const keyCapabilities = [
  {
    title: "Customer Journey Tracking",
    description: "Follow customer spend and behavior across multiple machines and sessions to identify concerning patterns.",
    outcome: "See the full picture, not just slivers and snapshots",
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    title: "Structuring Detection",
    description: "Automatically identify attempts to break up large transactions to avoid reporting thresholds.",
    outcome: "Catch sophisticated on EGM laundering techniques",
    icon: <BarChart3 className="w-8 h-8 text-white" />
  },
  {
    title: "Velocity Analysis",
    description: "Monitor frequency and timing of transactions to identify unusual patterns of activity.",
    outcome: "Spot risks based on timing and frequency",
    icon: <Clock className="w-8 h-8 text-white" />
  },
  {
    title: "Threshold Management",
    description: "Smart threshold monitoring that considers context and customer history, not just dollar amounts.",
    outcome: "Intelligent alerts, not just number triggers",
    icon: <Lightbulb className="w-8 h-8 text-white" />
  },
  {
    title: "Risk Scoring",
    description: "Dynamic risk assessment based on multiple factors and behavioral indicators over time.",
    outcome: "Prioritise investigations effectively",
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    title: "Audit Documentation",
    description: "Comprehensive logging and reporting for regulatory examinations that demonstrate a culture of compliance.",
    outcome: "Always audit-ready with clear evidence",
    icon: <FileText className="w-8 h-8 text-white" />
  }
]

const complianceBenefits = [
  {
    title: "AUSTRAC Confidence",
    description: "Meet reporting entity obligations with comprehensive, evidence-based transaction monitoring."
  },
  {
    title: "Audit Readiness",
    description: "Complete documentation and audit trails demonstrate effective TMP implementation."
  },
  {
    title: "Risk Mitigation",
    description: "Proactive detection reduces regulatory risk and potential penalties."
  },
  {
    title: "Professional Standards",
    description: "Industry-leading approach demonstrates commitment to compliance excellence."
  }
]

const businessBenefits = [
  {
    title: "Operational Efficiency", 
    description: "Reduce time spent on manual monitoring and investigations while improving detection effectiveness."
  },
  {
    title: "Staff Productivity",
    description: "Free up staff from screening and burning CCTV footage to focus on customer service and venue operations."
  },
  {
    title: "Data-Driven Insights",
    description: "Better understanding of customer behavior patterns informs business decisions."
  },
  {
    title: "Reputation Protection",
    description: "Proactive AML compliance protects your venue's reputation and community standing."
  }
]

const credibilityFactors = [
  {
    title: "Industry Expertise",
    description: "Built by former gaming operators who understand the reality of venue operations and AML challenges.",
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    title: "Regulatory Knowledge",
    description: "Deep understanding of AUSTRAC requirements and Australian gaming regulations.",
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    title: "Proven Technology",
    description: "Advanced AI and pattern recognition technology proven in high-stakes environments.",
    icon: <Award className="w-8 h-8 text-white" />
  }
]