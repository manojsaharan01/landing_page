import React from 'react';
import { Bot } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6">Ana drives growth 24/7</h1>
          <p className="text-xl text-gray-600">
            Ramp up growth without growing headcount.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">Accelerate your growth</h2>
            <p className="text-gray-600 mb-8">
              Grow your business with a 24/7 AI SDR, reach your Total
              Addressable Market faster, scale your team in real-time, without
              the hassle of hiring.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition inline-flex items-center">
              <Bot className="mr-2 h-5 w-5" />
              Hire Ana Today
            </button>
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Monthly opportunities
            </h3>
            <p className="text-gray-400 mb-6">
              An SDR team scaled outbound with Ana, resulting in 90% more
              qualified opportunities.
            </p>

            <div className="relative h-48 bg-gray-800 rounded-xl p-4">
              <div className="absolute top-4 left-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-purple-500" />
                  <span>With Ana</span>
                </div>
                <div className="mt-4 text-3xl font-bold text-purple-500">
                  +90%
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-600" />
                  <span>Without Ana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
