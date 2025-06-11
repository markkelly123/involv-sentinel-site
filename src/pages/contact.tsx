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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
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
                Ready to optimise your gaming floor?
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get a personalised demo of PrimeEdge or reach out to schedule a call to learn about using AI for EGM optimisation.
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
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        Primary Gaming Optimization Challenge
                      </label>
                      <select
                        id="currentChallenge"
                        name="currentChallenge"
                        value={formData.currentChallenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
                      >
                        <option value="">Select primary challenge</option>
                        <option value="revenue">Maximizing Gaming Revenue</option>
                        <option value="placement">EGM Placement & Floor Layout</option>
                        <option value="performance">Machine Performance Analysis</option>
                        <option value="player-experience">Player Experience Optimization</option>
                        <option value="data-insights">Gaming Data & Analytics</option>
                        <option value="game-selection">Game Selection & Mix</option>
                        <option value="occupancy">Floor Occupancy & Utilization</option>
                        <option value="multiple">Multiple areas</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Tell us about your gaming optimization goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What specific gaming optimization challenges are you facing? What would you like to see in the demo? Tell us about your current gaming floor setup and performance goals."
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      Submit
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
                        <i className="lni lni-envelope-2 text-2xl text-green-400"></i>
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
                        <i className="lni lni-headphone-1-mic text-2xl text-green-400"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Phone</h4>
                        <p className="text-gray-400">Speak with our team directly</p>
                        <a href="tel:+61390000000" className="text-green-400 hover:text-green-300 font-medium">
                          1300 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                        <i className="lni lni-map-marker-7 text-2xl text-green-400"></i>
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
                    <i className="lni lni-headphone-1-mic mr-2 text-xl text-green-400"></i>
                    Existing Customer?
                  </h4>
                  <p className="text-gray-300 mb-3">
                    For platform support, billing, or technical assistance, contact our customer success team directly.
                  </p>
                  <a href="mailto:support@involv.com.au" className="text-green-400 hover:text-green-300 font-medium">
                    support@involv.com.au
                  </a>
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