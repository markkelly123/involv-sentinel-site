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
    inquiryType: '',
    currentChallenge: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)
      
      // If you have a Sentinel-specific Formspree endpoint, replace below
      const response = await fetch('https://formspree.io/f/mgvlrzew', {
        method: 'POST',
        body: formDataObj,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            jobTitle: '',
            phone: '',
            venueType: '',
            inquiryType: '',
            currentChallenge: '',
            message: ''
          })
        }, 5000)
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        alert('There was an error sending your message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Head>
        <title>Contact Sales – Schedule Your Sentinel Demo</title>
        <meta
          name="description"
          content="Get a personalised demo of Sentinel. Speak with our team about AML, transaction monitoring, and pattern intelligence for Australian gaming venues."
        />
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
        <section className="bg-gradient-to-br from-[#121418] to-[#0f1115] pt-24 pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to sharpen your detection with pattern intelligence?
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a personalised demo of Sentinel or reach out with any questions about AML and Transaction Monitoring for Australian venues.
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
                <div className="bg-[#1a1d21] rounded-2xl p-8 border border-white/10">
                  {/* Success Message */}
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-[#66899b]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="lni lni-checkmark-circle text-3xl text-[#66899b]"></i>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Message sent successfully</h3>
                      <p className="text-gray-300">
                        Thank you for contacting us. We&apos;ll respond within the next business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Hidden fields for Formspree */}
                      <input type="hidden" name="_subject" value={`Sentinel Contact Form - ${formData.inquiryType || 'General Inquiry'}`} />
                      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                      <input type="hidden" name="_cc" value="mark.kelly@involv.com.au" />
                      <input type="hidden" name="site" value="Sentinel" />
                      <input type="hidden" name="form_type" value="Contact Form" />
                      
                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-300 mb-2">
                          How can we help you? *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="Schedule a Demo">Schedule a Demo</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>

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
                            className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
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
                            className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
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
                          className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
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
                            className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
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
                            className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
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
                          className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
                          placeholder="04XX XXX XXX"
                        />
                      </div>

                      {/* Venue Type */}
                      <div>
                        <label htmlFor="venueType" className="block text-sm font-medium text-gray-300 mb-2">
                          Venue Type
                        </label>
                        <select
                          id="venueType"
                          name="venueType"
                          value={formData.venueType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
                        >
                          <option value="">Select venue type</option>
                          <option value="club">Club</option>
                          <option value="hotel">Hotel</option>
                          <option value="casino">Casino</option>
                          <option value="multiple">Multi-venue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Current Challenge - Only show for demo requests */}
                      {formData.inquiryType === 'Schedule a Demo' && (
                        <div>
                          <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-300 mb-2">
                            Primary AML / Transaction Monitoring Challenge
                          </label>
                          <select
                            id="currentChallenge"
                            name="currentChallenge"
                            value={formData.currentChallenge}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white"
                          >
                            <option value="">Select primary challenge</option>
                            <option value="tmp-setup">Designing/Upgrading TMP</option>
                            <option value="structuring">Structuring Detection</option>
                            <option value="journeys">Cross-machine Journey Tracking</option>
                            <option value="velocity">Velocity / Timing Anomalies</option>
                            <option value="thresholds">Threshold & Risk Scoring</option>
                            <option value="false-positives">Reducing False Positives</option>
                            <option value="audit">Audit-ready Evidence & SMRs</option>
                            <option value="integration">Data/Hardware Integration</option>
                            <option value="training">Team Workflow & Training</option>
                            <option value="multiple">Multiple areas</option>
                          </select>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          {formData.inquiryType === 'Schedule a Demo' 
                            ? "Tell us about your AML/TMP goals" 
                            : "Your message *"
                          }
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required={formData.inquiryType !== 'Schedule a Demo'}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={
                            formData.inquiryType === 'Schedule a Demo'
                              ? "What specific AML or TMP challenges are you facing? What would you like to see in the Sentinel demo?"
                              : "Please provide details about your inquiry..."
                          }
                          className="w-full px-4 py-3 bg-[#0f1115] border border-white/10 rounded-lg focus:ring-2 focus:ring-[#66899b] focus:border-transparent text-white placeholder-gray-400"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex items-center justify-between pt-4">
                        <p className="text-sm text-gray-400">
                          * Required fields
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#66899b] text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="lni lni-send-4 mr-2"></i>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-400 text-center">
                        By submitting this form, you agree to our{' '}
                        <Link href="/privacy-policy" className="text-[#66899b] hover:text-white underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Side Content */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-[#121418] rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">Other Ways to Reach Us</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#66899b]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="lni lni-envelope-1 text-xl text-[#66899b]"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Email</h4>
                        <p className="text-gray-400">Get in touch for any questions</p>
                        <a href="mailto:hello@involv.com.au" className="text-[#66899b] hover:text-white font-medium">
                          hello@involv.com.au
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#66899b]/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <i className="lni lni-telephone-1 text-xl text-[#66899b]"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-400">Speak with our team directly</p>
                        <a href="tel:1300XXXXXX" className="text-[#66899b] hover:text-white font-medium">
                          1300 XXX XXX
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Support for Existing Customers */}
                <div className="border-l-4 border-[#66899b] bg-[#66899b]/15 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <i className="lni lni-heart text-[#66899b] mr-2"></i>
                    Existing Customer?
                  </h4>
                  <p className="text-gray-300 mb-3">
                    For platform support, billing, or technical assistance, contact our customer success team directly.
                  </p>
                  <a href="mailto:support@involv.com.au" className="text-[#66899b] hover:text-white font-medium">
                    support@involv.com.au
                  </a>
                </div>

                {/* What to Expect */}
                <div className="bg-[#121418] rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">What to Expect</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Quick Response</h4>
                        <p className="text-gray-400 text-sm">We&apos;ll contact you within 24–48 hours to address your inquiry.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Tailored Discussion</h4>
                        <p className="text-gray-400 text-sm">We&apos;ll align on your venue&apos;s AML/TMP needs and use cases.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-[#66899b] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">Strategic Demo</h4>
                        <p className="text-gray-400 text-sm">See how Sentinel reveals patterns, reduces false positives, and strengthens SMR workflows.</p>
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