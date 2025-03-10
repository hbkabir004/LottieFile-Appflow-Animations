import Head from 'next/head';
import AppFlowAnimation from '../../components/AppFlowAnimation';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Head>
          <title>How Vroom Works? | App Flow</title>
        </Head>

        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">App Flow</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900">How Vroom Works?</h1>
        </div>
      </div>

      <AppFlowAnimation
        animationData={AppFlowAnimation}
        className="max-w-6xl mx-auto"
      />

    </main>
  );
}