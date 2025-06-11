import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121418] text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="https://involv.com.au" target="_blank" rel="noopener noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-involv-white.svg" alt="Involv" className="h-6 w-auto hover:opacity-80 transition-opacity" />
              </Link>
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
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/support/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/support/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Involv. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;