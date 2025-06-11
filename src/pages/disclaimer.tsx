import Layout from '../components/Layout';

const DisclaimerPage = () => {
  return (
    <Layout
      title="Disclaimer - PrimeEdge by Involv"
      description="Disclaimer for PrimeEdge EGM optimization platform by Involv."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Disclaimer</h1>
          <p className="text-gray-400">Last updated: [Date]</p>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, Involv excludes all representations, warranties, obligations, and liabilities.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No Warranty</h2>
                <p className="text-gray-300">
                  [Disclaimer content to be added]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300">
                  [Disclaimer content to be added]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this disclaimer, please contact us at{' '}
                  <a href="mailto:hello@involv.com.au" className="text-emerald-400 hover:text-emerald-300">
                    hello@involv.com.au
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DisclaimerPage;