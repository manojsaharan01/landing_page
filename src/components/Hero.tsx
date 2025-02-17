import React from 'react';
import { Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">
            Hi, I'm Ana. Your <span className="text-purple-500">AI Powered</span> Sales Development Rep
          </h1>
          <p className="text-xl text-gray-600">
            I consumed trillions of datapoints to become the world's best SDR. I work 24/7, at scale, to help you grow faster and automate sales.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition inline-flex items-center">
            <Bot className="mr-2 h-5 w-5" />
            <a href="https://cal.com/manojsaharan/discovery-call" className="inline-block">Hire Ana Today</a>
          </button>
        </div>
        <div className="flex justify-center">
          <img src="https://github.com/manojsaharan01/landing_page/blob/main/.bolt/Ana.png?raw=true"  className="rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
}