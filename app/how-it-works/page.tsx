import { NextPage } from 'next';
import Head from 'next/head';
import AppFlowAnimation from '../components/AppFlowAnimation';
import appFlowAnimation from '../public/animations/app-flow.json'; // Your animation JSON file

const HowItWorksPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Head>
        <title>How Vroom Works? | App Flow</title>
      </Head>
      
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">App Flow</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">How Vroom Works?</h1>
      </div>
      
      <AppFlowAnimation 
        animationData={appFlowAnimation} 
        className="max-w-6xl mx-auto"
      />
      
      {/* Alternatively, you could create a static version with images */}
      <div className="hidden lg:flex flex-col mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative">
          {/* User Flow */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src="/images/user-login.svg" alt="User Login" className="mx-auto h-40" />
                <h3 className="font-medium mt-2">User login</h3>
              </div>
            </div>
          </div>
          
          {/* Add more steps here following your design */}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;