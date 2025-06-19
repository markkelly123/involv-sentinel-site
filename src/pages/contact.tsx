import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    venueType: '',
    currentChallenge: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    
    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/xkgbzypl', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          jobTitle: '',
          phone: '',
          venueType: '',
          currentChallenge: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact Sales - Schedule Your PrimeEdge Demo</title>
        <meta name="description" content="Get a personalised demo of PrimeEdge gaming optimization platform. Speak with our experts about EGM optimization, floor performance, and revenue maximization for Australian gaming venues." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-[#0f1115] text-white font-sans min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900/20 to-[#0f1115] pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to uplify your gaming floor performance?
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a personalised demo of PrimeEdge or reach out to schedule a call to learn more about using AI for EGM optimisation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="mb-8 p-6 bg-green-900/30 border border-green-500/30 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div>
                          <h3 className="text-lg font-semibold text-green-400 mb-1">Thank you for your interest.</h3>
                          <p className="text-green-300 text-sm">We've received your demo request and will be in touch within 24 hours to schedule your personalised PrimeEdge demonstration.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-8 p-6 bg-red-900/30 border border-red-500/30 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-6 h-6 text-red-400 mr-3">⚠</div>
                        <div>
                          <h3 className="text-lg font-semibold text-red-400 mb-1">Something went wrong</h3>
                          <p className="text-red-300 text-sm">Please try again or contact us directly at hello@involv.com.au</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden fields for Formspree */}
                    <input type="hidden" name="_subject" value="PrimeEdge Demo Request - New Lead" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                    <input type="hidden" name="_cc" value="hello@involv.com.au" />
                    <input type="hidden" name="site" value="PrimeEdge" />
                    <input type="hidden" name="form_type" value="Demo Request" />
                    <input type="hidden" name="_template" value="table" />
                    
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                        placeholder="your.email@company.com.au"
                      />
                    </div>

                    {/* Company & Job Title */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                          placeholder="Your venue or company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-300 mb-2">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                          placeholder="Your role or position"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                        placeholder="04XX XXX XXX"
                      />
                    </div>

                    {/* Venue Type */}
                    <div>
                      <label htmlFor="venueType" className="block text-sm font-medium text-gray-300 mb-2">
                        Venue Type *
                      </label>
                      <select
                        id="venueType"
                        name="venueType"
                        required
                        value={formData.venueType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      >
                        <option value="">Select venue type</option>
                        <option value="club">Club</option>
                        <option value="hotel">Hotel</option>
                        <option value="casino">Casino</option>
                        <option value="multiple">Multi-venue</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Current Challenge */}
                    <div>
                      <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-300 mb-2">
                        Primary Gaming Performance Challenge/Opportunity
                      </label>
                      <select
                        id="currentChallenge"
                        name="currentChallenge"
                        value={formData.currentChallenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      >
                        <option value="">Select primary challenge</option>
                        <option value="revenue">Maximising Gaming Revenue</option>
                        <option value="placement">Cabinet Placement & Floor Layout</option>
                        <option value="performance">Machine Performance Analysis</option>
                        <option value="player-experience">Player Experience Optimisation</option>
                        <option value="data-insights">Gaming Data & Analytics</option>
                        <option value="game-selection">Game Selection & Mix</option>
                        <option value="occupancy">Floor Occupancy & Utilisation</option>
                        <option value="multiple">Multiple areas</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your gaming performance goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What specific gaming performance challenges are you facing? What would you like to see in the demo? Tell us about your current gaming floor setup and performance goals."
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Demo Request'
                      )}
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-green-400 hover:text-green-300 underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6">Other Ways to Reach Us</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-400">Get in touch for any questions</p>
                        <a href="mailto:hello@involv.com.au" className="text-green-400 hover:text-green-300 font-medium">
                          hello@involv.com.au
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-400">Speak with our team directly</p>
                        <a href="tel:1300XXXXXX" className="text-green-400 hover:text-green-300 font-medium">
                          1300 XXX XXX
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Location</h4>
                        <p className="text-gray-400">Based in Melbourne, serving Australia-wide</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support for Existing Customers */}
                <div className="border-l-4 border-green-500 bg-green-900/20 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-white mb-2">
                    <svg className="inline w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Existing Customer?
                  </h4>
                  <p className="text-gray-300 mb-3">
                    For platform support, billing, or technical assistance, contact our customer success team directly.
                  </p>
                  <a href="mailto:support@involv.com.au" className="text-green-400 hover:text-green-300 font-medium">
                    support@involv.com.au
                  </a>
                </div>

                {/* What to Expect */}
                <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Quick Response</h4>
                        <p className="text-gray-400 text-sm">We'll contact you within 24 hours to schedule your demo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Personalised Demo</h4>
                        <p className="text-gray-400 text-sm">45-minute demo tailored to your venue's specific needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Strategic Discussion</h4>
                        <p className="text-gray-400 text-sm">Explore how PrimeEdge can uplift your gaming floor performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}