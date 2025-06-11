import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout
      title="Contact - PrimeEdge by Involv"
      description="Get in touch with the PrimeEdge team for AI-powered EGM optimization solutions."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your gaming performance? Contact our team to learn more about PrimeEdge.
          </p>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <i className="lni lni-envelope text-4xl text-emerald-400"></i>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              Our team is ready to discuss how PrimeEdge can optimize your gaming venue performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <i className="lni lni-envelope text-3xl text-emerald-400 mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:hello@involv.com.au" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  hello@involv.com.au
                </a>
              </div>
              <div className="text-center">
                <i className="lni lni-calendar text-3xl text-emerald-400 mb-4"></i>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Demo</h3>
                <a href="https://involv.com.au/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Book a consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;