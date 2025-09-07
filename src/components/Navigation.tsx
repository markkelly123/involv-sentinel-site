import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Insights', href: '/insights' },
    { 
      name: 'Support', 
      href: '/support',
      children: [
        { name: 'Documentation', href: '/support/documentation' },
        { name: 'FAQs', href: '/support/faqs' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
      
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0f1115]/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-sentinel-white.svg" alt="PrimeEdge by Involv" className="h-6 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-emerald-400 bg-emerald-400/10'
                          : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Dropdown for Support */}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#1a1d23] border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5 transition-colors duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
              >
                Login
              </Link>
            </div>

            {/* Mobile menu button - Fixed styling */}
            <div className="md:hidden flex items-center">
              {/* Mobile Login Button */}
              <Link
                href="/login"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 mr-3"
              >
                Login
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-400 transition-colors duration-200 min-w-[40px] min-h-[40px]"
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                {/* Fallback text if icons don't load */}
                <span className="lni-fallback text-lg font-bold">
                  {isOpen ? '✕' : '☰'}
                </span>
                {/* LineIcons with better fallback */}
                <i 
                  className={`${isOpen ? 'hidden' : 'block'} lni lni-menu text-xl absolute`}
                  style={{ lineHeight: 1 }}
                ></i>
                <i 
                  className={`${isOpen ? 'block' : 'hidden'} lni lni-close text-xl absolute`}
                  style={{ lineHeight: 1 }}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0f1115]/95 backdrop-blur-md border-b border-white/10">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-emerald-400 bg-emerald-400/10'
                      : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Mobile dropdown items */}
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navigation;