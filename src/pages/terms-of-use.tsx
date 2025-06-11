import Layout from '../components/Layout';

const TermsOfUsePage = () => {
  return (
    <Layout
      title="Terms of Use - PrimeEdge by Involv"
      description="Terms of use for PrimeEdge EGM optimization platform by Involv."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-gray-400">Last updated: [Date]</p>
        </div>

        <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              These terms of use govern your use of PrimeEdge and any related services provided by Involv.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300">
                  [Terms of use content to be added]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Use of Service</h2>
                <p className="text-gray-300">
                  [Terms of use content to be added]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Use, please contact us at{' '}
                  <a href="mailto:hello@involv.com.au" className="text-emerald-400 hover:text-emerald-300">
                    hello@involv.com.au
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUsePage;