import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-blue-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to transform your sales process?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Join thousands of companies using Ana to automate their sales development
          </p>
          
          <form className="mt-10 max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 rounded-full px-6 py-3 text-gray-900 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition inline-flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}