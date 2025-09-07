import Link from 'next/link'

// Footer component (Sentinel) – dark theme
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#121418] text-gray-300 py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <a
                href="https://www.involv.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto" />
              </a>
            </div>
            <div className="text-gray-400 text-sm mb-6">
              <p>Compliance made simple.</p>
              <p>Gaming made smarter.</p>
              <p>Built for Australian pubs and clubs.</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/involvgroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-emerald-600 transition-colors group"
                aria-label="Follow Involv on LinkedIn"
              >
                <i className="lni lni-linkedin text-2xl text-gray-400 group-hover:text-white"></i>
              </a>
              <a
                href="https://www.youtube.com/@InvolvGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-emerald-600 transition-colors group"
                aria-label="Subscribe to Involv on YouTube"
              >
                <i className="lni lni-youtube text-2xl text-gray-400 group-hover:text-white"></i>
              </a>
              <a
                href="https://www.facebook.com/InvolvGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1d21] p-2 rounded-lg hover:bg-emerald-600 transition-colors group"
                aria-label="Follow Involv on Facebook"
              >
                <i className="lni lni-facebook text-2xl text-gray-400 group-hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">AML Advisory</Link></li>
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">Risk &amp; Compliance</Link></li>
              <li><Link href="/features" className="hover:text-emerald-400 transition-colors">Gaming Performance</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://sentinel.involv.com.au" className="hover:text-emerald-400 transition-colors">Sentinel</a></li>
              <li><a href="https://safeplay.involv.com.au" className="hover:text-emerald-400 transition-colors">SafePlay</a></li>
              <li><a href="https://assure.involv.com.au" className="hover:text-emerald-400 transition-colors">Assure</a></li>
              <li><a href="https://primeedge.involv.com.au" className="hover:text-emerald-400 transition-colors">PrimeEdge</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://involv.com.au/about" className="hover:text-emerald-400 transition-colors">About Involv</a></li>
              <li><Link href="/insights" className="hover:text-emerald-400 transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Involv. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-emerald-400 transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-emerald-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}