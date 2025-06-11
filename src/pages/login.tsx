import Layout from '../components/Layout';

const LoginPage = () => {
  return (
    <Layout
      title="Login - PrimeEdge by Involv"
      description="Access your PrimeEdge account to optimize your gaming venue performance."
    >
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="lni lni-lock text-3xl text-emerald-400"></i>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Access PrimeEdge</h1>
            <p className="text-gray-400">Coming Soon</p>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-6">
              User authentication and dashboard access will be available soon.
            </p>
            
            <div className="space-y-4">
              <a
                href="mailto:hello@involv.com.au"
                className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Request Access
              </a>
              
              <p className="text-sm text-gray-400">
                Already have questions?{' '}
                <a href="/contact" className="text-emerald-400 hover:text-emerald-300">
                  Contact our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;