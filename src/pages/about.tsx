import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Brain, Database, AlertTriangle, Shield, TrendingUp, Zap, Target, FileText, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <>
      <Head>
        <title>About Sentinel – Pattern Intelligence for AML | Involv</title>
        <meta
          name="description"
          content="Sentinel is the AI-native business intelligence platform for Australian gaming venues. We turn transaction noise into pattern intelligence so your AML team can see, detect, and act sooner."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav className="text-sm text-gray-400">
            <Link href="/" className="hover:text-[#66899b] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Image
                  src="/logo-sentinel-white.svg"
                  alt="Sentinel"
                  width={180}
                  height={54}
                  className="opacity-90"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built by Australian Gaming Veterans for Real-World AML
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sentinel replaces guesswork and fragmented surveillance with <span className="text-[#66899b] font-semibold">pattern intelligence</span>. 
                We help venues see cross-machine journeys, detect structuring and velocity anomalies, and prove effective monitoring to AUSTRAC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://involv.com.au/about/our-team"
                  className="bg-[#66899b] text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-200 font-medium text-center"
                >
                  Meet Our Team
                </a>
                <a
                  href="https://involv.com.au/about/why-involv"
                  className="border-2 border-[#66899b] text-[#66899b] px-8 py-3 rounded-lg hover:bg-[#66899b] hover:text-white transition-all duration-200 font-medium text-center"
                >
                  Why Involv
                </a>
              </div>
            </div>

            <div className="bg-[#121418] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-[#66899b] text-center">What We Bring</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">40+</div>
                  <div className="text-gray-400 text-sm">Years Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">AU</div>
                  <div className="text-gray-400 text-sm">Built for Australian Venues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">AI</div>
                  <div className="text-gray-400 text-sm">Pattern &amp; Risk Models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-gray-400 text-sm">Venue Focused</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm text-center mt-6">
                Operators, compliance leaders, and data practitioners building tools that actually work on the floor—and stand up to audit.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We saw venues relying on observations and manual reviews—fast for headlines, slow for truth. 
                Sentinel was founded to give AML teams <span className="text-[#66899b] font-semibold">evidence</span>, not hunches: 
                behaviour over time, patterns across machines, and alerting that cuts false positives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#66899b]">The Problem We Solve</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Transaction-by-transaction reviews miss structuring, device hopping, and timing signals. 
                  CCTV is essential, but it’s reactive and expensive without data-led direction.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  AUSTRAC expects risk-based programs that genuinely detect suspicious activity—paired with clear, auditable evidence of effective controls.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Sentinel turns raw activity into patterns you can search, score, and operationalise—so your team sees what matters first.
                </p>
              </div>

              <div className="bg-[#1a1d21] rounded-2xl p-8">
                <h4 className="text-lg font-semibold mb-4 text-white">What Makes Sentinel Different</h4>
                <div className="space-y-5">
                  {differentiators.map((d, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-[#66899b] text-white text-sm font-bold flex items-center justify-center mr-4 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">{d.title}</h5>
                        <p className="text-gray-300 text-sm">{d.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Help AML teams move from reactive checks to <span className="text-[#66899b] font-semibold">proactive pattern intelligence</span>— 
              so venues can protect their customers, their communities, and their licence to operate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#66899b] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Experienced operators and compliance leaders focused on pragmatic, auditable outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, i) => (
                <div key={i} className="text-center">
                  <div className="bg-[#1a1d21] rounded-2xl p-6 mb-4 border border-white/10">
                    <ProfileImage leader={leader} className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-1">{leader.name}</h3>
                    <p className="text-[#66899b] text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{leader.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://involv.com.au/about/our-team"
                className="inline-flex items-center bg-[#66899b] text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-200 font-medium"
              >
                Meet the Full Team
                <i className="lni lni-arrow-right text-xl ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* How Sentinel Works (Approach) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Sentinel Works</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From transaction-focused to behaviour-focused. From manual to intelligent. From reactive to predictive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((card, i) => (
              <div key={i} className="bg-[#121418] rounded-2xl p-8 border border-white/10">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#66899b] flex items-center justify-center mr-4">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {card.points.map((p, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#66899b] mt-0.5 mr-3 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Evidence & Credibility */}
        <section className="bg-[#121418] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Venues Trust Sentinel</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Practical engineering, Australian regulatory depth, and a relentless focus on audit-ready evidence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {credibility.map((c, i) => (
                <div key={i} className="bg-[#1a1d21] rounded-xl p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#66899b] flex items-center justify-center mx-auto mb-6">
                    {c.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
                  <p className="text-gray-300">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-[#66899b] to-[#9b7866] rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to See What You’ve Been Missing?</h2>
              <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
                Transform your Transaction Monitoring Program with pattern intelligence that surfaces risk earlier—and proves it.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#66899b] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  See Sentinel in Action
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#66899b] transition-all"
                >
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

/** Profile image with graceful fallback */
function ProfileImage({ leader, className }: { leader: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-[#66899b] flex items-center justify-center relative`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/team/${leader.slug}.jpg`}
        alt={leader.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const fallback = target.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <div className="absolute inset-0 bg-[#66899b] text-white text-2xl font-bold hidden items-center justify-center">
        {leader.initials}
      </div>
    </div>
  )
}

/** Content Data */
const differentiators = [
  {
    title: 'Behaviour over Transactions',
    description: 'Track journeys, not snapshots. Sentinel correlates activity across machines and time windows to reveal intent.'
  },
  {
    title: 'AU-Ready from Day One',
    description: 'Risk-based controls, alerting, and documentation patterns designed for AUSTRAC expectations.'
  },
  {
    title: 'Operational Pragmatism',
    description: 'Built by operators—fast to deploy, simple to use, and designed to guide CCTV and staff focus.'
  },
  {
    title: 'Audit-Ready Evidence',
    description: 'Clear trails from detection to SMR so you can demonstrate effective monitoring—not just policies.'
  }
]

const values = [
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: 'Intelligence First',
    description: 'Every feature sharpens detection accuracy and reduces noise for investigation teams.'
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: 'Compliance You Can Prove',
    description: 'Design for examinations from the start—controls, context, and documentation together.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-white" />,
    title: 'Operational Lift',
    description: 'Save time on manual review so your team can focus on conversations and care.'
  }
]

const leadership = [
  {
    name: 'Louise Lane',
    slug: 'louise-lane',
    role: 'Chief Executive Officer',
    initials: 'LL',
    highlight: 'Gaming regulatory & AML specialist ensuring Sentinel aligns with AUSTRAC obligations.'
  },
  {
    name: 'Tim Barnett',
    slug: 'tim-barnett',
    role: 'Chief Strategy Officer',
    initials: 'TB',
    highlight: 'Hospitality & gaming leadership with deep insight into venue operations and risk.'
  },
  {
    name: 'Mark Kelly',
    slug: 'mark-kelly',
    role: 'Chief Operating Officer',
    initials: 'MK',
    highlight: 'Transformational change leader focused on scalable implementation and support.'
  }
]

const approach = [
  {
    icon: <Database className="w-6 h-6 text-white" />,
    title: 'Data Capture',
    description: 'In-venue hardware streams comprehensive activity including ticket-to-ticket movement.',
    points: [
      'Continuous real-time capture',
      'Secure, encrypted transmission',
      'Cross-machine linkage'
    ]
  },
  {
    icon: <Brain className="w-6 h-6 text-white" />,
    title: 'Pattern Analysis',
    description: 'AI correlates time, location, and velocity to surface structuring and device hopping.',
    points: [
      'Behavioural scoring',
      'Temporal & spatial patterns',
      'Anomaly detection'
    ]
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    title: 'Intelligent Alerts',
    description: 'Signal over noise—actionable alerts with context so investigators can move fast.',
    points: [
      'Configurable thresholds',
      'Context-rich narratives',
      'False-positive reduction'
    ]
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: 'Evidence & Reporting',
    description: 'Audit-ready trails from detection to SMR preparation.',
    points: [
      'Case notes & timelines',
      'Exportable artefacts',
      'Clear control mapping'
    ]
  }
]

const credibility = [
  {
    title: 'Industry Expertise',
    description: 'Built by operators and compliance leaders who know what works on a gaming floor.',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    title: 'Regulatory Depth',
    description: 'Designed for AUSTRAC expectations with risk-based controls and documentation patterns.',
    icon: <Shield className="w-8 h-8 text-white" />
  },
  {
    title: 'Proven Engineering',
    description: 'Robust data pipelines and models, battle-tested for reliability and clarity.',
    icon: <Award className="w-8 h-8 text-white" />
  }
]