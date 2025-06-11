import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function About() {
  const router = useRouter();

  return (
    <Layout
      title="About PrimeEdge - Built by Gaming Industry Veterans"
      description="Meet the team behind PrimeEdge - former gaming executives and AI specialists who understand the science of gaming floor optimization and revenue maximization."
    >
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">About</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-600/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Built by Gaming Industry Veterans Who Actually Understand Your Business
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are not consultants who lack hands-on experience. We are former gaming operators, data scientists, and performance optimization specialists who have lived the reality of maximizing gaming revenue at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://involv.com.au/about/our-team" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium text-center">
                  Meet Our Team
                </a>
                <a href="https://involv.com.au/about/why-involv" className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-3 rounded-lg transition-all duration-200 font-medium text-center">
                  Why Choose Involv
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Industry Credibility</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">13K</div>
                    <div className="text-gray-400 text-sm">EGMs Previously Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">80+</div>
                    <div className="text-gray-400 text-sm">Years Combined Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">20+</div>
                    <div className="text-gray-400 text-sm">Years of Research & Development</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-gray-400 text-sm">Gaming Focused</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm text-center">
                A team of gaming industry experts: operators, data scientists, and AI specialists who understand the science behind high-performance gaming venues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              PrimeEdge was created by the team at Involv - seasoned gaming professionals who recognised a gap in the market: no AI-powered optimization technology built specifically for Australian gaming venues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">The Problem We Saw</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Gaming managers are making critical floor decisions based on intuition and limited data, missing opportunities for revenue optimization. Traditional approaches treat each machine in isolation, ignoring the complex ecosystem interactions that drive player behaviour.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At the same time, the gaming industry is becoming increasingly competitive. Player preferences are evolving, new games are launching constantly, and venues need every advantage to maximize their gaming performance and stay profitable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We had a unique view of the market combining deep gaming operations experience with advanced AI capabilities. We knew there was a better way - an optimization platform built specifically for Australian gaming venues, by people who actually understand how venues operate.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-white/10">
              <h4 className="text-lg font-semibold mb-4 text-white">What Makes PrimeEdge Different</h4>
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-emerald-500 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">{item.title}</h5>
                      <p className="text-gray-300 text-sm">{item.description}</p>
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
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            To transform gaming floor management from guesswork into science, delivering AI-powered optimization that maximizes revenue while enhancing player experiences at Australian pubs and clubs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${value.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Highlight */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Led by Industry Veterans</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our leadership team brings together the exact expertise needed to build AI-powered gaming optimization that delivers real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 mb-4 border border-white/10">
                  <ProfileImage 
                    leader={leader}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{leader.name}</h3>
                  <p className="text-emerald-400 text-sm font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{leader.highlight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://involv.com.au/about/our-team" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium">
              Meet the Full Team
              <i className="lni lni-arrow-right text-xl ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">How PrimeEdge Works</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We do not just build software and walk away. Our platform is designed based on real venue experience and advanced AI research to ensure it actually delivers measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {approach.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 border border-white/10">
              <div className="flex items-start mb-4">
                <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className={`${item.icon} text-xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <i className="lni lni-checkmark-circle text-emerald-400 mt-0.5 mr-3 flex-shrink-0"></i>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600/20 to-emerald-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience AI-Powered Gaming Optimization?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Stop guessing about your gaming floor performance. Experience AI-powered optimization built specifically for Australian gaming venues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium">
              Schedule a Demo
            </Link>
            <Link href="/features" className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0f1115] px-8 py-3 rounded-lg transition-all duration-200 font-medium">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Profile Image Component with Error Handling
function ProfileImage({ leader, className }: { leader: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-emerald-500 flex items-center justify-center relative`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={`/images/team/${leader.slug}.jpg`}
        alt={leader.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 bg-emerald-500 text-white text-2xl font-bold hidden items-center justify-center">
        {leader.initials}
      </div>
    </div>
  );
}

// Data
const differentiators = [
  {
    title: "Built for Gaming Venues",
    description: "Purpose-built for Australian pubs and clubs, not generic business analytics."
  },
  {
    title: "AI-Powered Intelligence",
    description: "Advanced algorithms based on 20+ years of research from financial modeling and gaming optimization."
  },
  {
    title: "Real-World Validation",
    description: "Every recommendation tested with actual gaming operators to ensure measurable revenue impact."
  },
  {
    title: "Continuous Learning",
    description: "AI models continuously improve as they process more venue data and player behaviour patterns."
  }
];

const values = [
  {
    icon: "lni lni-chip-ai",
    title: "Scientific Approach",
    description: "Every recommendation must be backed by data science and proven to deliver measurable results."
  },
  {
    icon: "lni lni-hand-shake",
    title: "Partnership Approach",
    description: "We work alongside your team as trusted technology partners, sharing in your success."
  },
  {
    icon: "lni lni-trend-up-2",
    title: "Revenue Focus",
    description: "Every feature is designed to maximize gaming revenue while enhancing player experiences."
  }
];

const leadership = [
  {
    name: "Louise Lane",
    slug: "louise-lane",
    role: "Chief Executive Officer",
    initials: "LL",
    highlight: "Gaming compliance and regulatory expert ensuring PrimeEdge meets all Australian requirements."
  },
  {
    name: "Con Nikitas",
    slug: "con-nikitas",
    role: "Chief Commercial Officer",
    initials: "CN",
    highlight: "30 years gaming industry experience, former ALH Group executive managing 13,000 EGMs."
  },
  {
    name: "Tim Barnett",
    slug: "tim-barnett",
    role: "Chief Strategy Officer",
    initials: "TB",
    highlight: "20+ years hospitality & gaming leadership with deep expertise in performance optimization."
  },
  {
    name: "Mark Kelly",
    slug: "mark-kelly",
    role: "Chief Operating Officer",
    initials: "MK",
    highlight: "30 years transformational change experience, 6 years specialising in gaming performance and EGM optimization."
  }
];

const approach = [
  {
    icon: "lni lni-search-2",
    title: "Deep Gaming Intelligence",
    description: "Built on comprehensive understanding of gaming ecosystems, player behaviour, and revenue optimization principles.",
    points: [
      "AI-powered recommendation engine",
      "Real-time performance monitoring",
      "Venue-specific optimization models",
      "Integration with existing gaming systems"
    ]
  },
  {
    icon: "lni lni-rocket",
    title: "Rapid Implementation",
    description: "Designed for quick setup and immediate value delivery with minimal disruption to operations.",
    points: [
      "Fast data integration process",
      "Comprehensive training and support",
      "Gradual feature rollout",
      "Dedicated customer success team"
    ]
  },
  {
    icon: "lni lni-analytics",
    title: "Measurable Results",
    description: "Track your gaming performance improvements with clear analytics and revenue attribution.",
    points: [
      "Real-time revenue dashboards",
      "ROI tracking for all changes",
      "Performance analytics and trends",
      "Predictive modeling capabilities"
    ]
  },
  {
    icon: "lni lni-bulb-beat",
    title: "Continuous Innovation",
    description: "Regular AI model updates and new features ensure you stay ahead of industry trends.",
    points: [
      "Automatic AI model improvements",
      "New feature releases",
      "Industry trend analysis",
      "Customer feedback integration"
    ]
  }
];