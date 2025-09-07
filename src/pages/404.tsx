import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Sentinel by Involv</title>
        <meta
          name="description"
          content="The page you're looking for could not be found. Return to the Sentinel homepage or get in touch with our team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation />

        {/* 404 Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-[#66899b]/15 rounded-full mb-6 border border-white/10">
                <i className="lni lni-emoji-monocle text-6xl text-[#66899b]"></i>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white/10 mb-4">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or the URL may be incorrect.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/"
                className="bg-[#66899b] text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-colors flex items-center"
              >
                <i className="lni lni-home-1 mr-2"></i>
                Back to Homepage
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-colors flex items-center"
              >
                <i className="lni lni-envelope-2 mr-2"></i>
                Contact Support
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="bg-[#121418] rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Looking for something specific?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Sentinel Overview */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#66899b]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-shield-1 text-2xl text-[#66899b]"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Sentinel Overview</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Intelligent AML & transaction monitoring for Australian venues
                  </p>
                  <Link
                    href="/"
                    className="text-[#66899b] hover:text-white font-medium text-sm"
                  >
                    Explore Sentinel →
                  </Link>
                </div>

                {/* Insights */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#66899b]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-bulb-1 text-2xl text-[#66899b]"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Insights</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Articles on AML, AUSTRAC expectations & transaction monitoring
                  </p>
                  <Link
                    href="/insights"
                    className="text-[#66899b] hover:text-white font-medium text-sm"
                  >
                    Read Insights →
                  </Link>
                </div>

                {/* About / Contact */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#66899b]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-users text-2xl text-[#66899b]"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">About & Contact</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Learn about Sentinel or speak with our team
                  </p>
                  <div className="space-x-4">
                    <Link
                      href="/about"
                      className="text-[#66899b] hover:text-white font-medium text-sm"
                    >
                      About →
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[#66899b] hover:text-white font-medium text-sm"
                    >
                      Contact →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-white mb-4">
                Popular Pages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="px-4 py-2 bg-[#1a1d21] border border-white/10 rounded-lg text-gray-200 hover:bg-[#1f2328] transition-colors text-sm"
                >
                  Sentinel Home
                </Link>
                <Link
                  href="/insights"
                  className="px-4 py-2 bg-[#1a1d21] border border-white/10 rounded-lg text-gray-200 hover:bg-[#1f2328] transition-colors text-sm"
                >
                  Insights
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-2 bg-[#1a1d21] border border-white/10 rounded-lg text-gray-200 hover:bg-[#1f2328] transition-colors text-sm"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#1a1d21] border border-white/10 rounded-lg text-gray-200 hover:bg-[#1f2328] transition-colors text-sm"
                >
                  Contact
                </Link>
                <a
                  href="https://involv.com.au"
                  className="px-4 py-2 bg-[#1a1d21] border border-white/10 rounded-lg text-gray-200 hover:bg-[#1f2328] transition-colors text-sm"
                >
                  Involv Main Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}