import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    us: 'Experienced AI Developers',
    them: 'Junior Developers'
  },
  {
    us: 'Innovative Development Practices',
    them: 'Outdated Technologies & Approaches'
  },
  {
    us: 'Complete Custom Development',
    them: 'Generic / Copy & Paste Solutions'
  },
  {
    us: 'Client-Centric Approach',
    them: 'Agency-Centric Approach'
  },
  {
    us: 'Rigorous Testing and Validation',
    them: 'Limited Testing or Inadequate Quality Control'
  },
  {
    us: 'Partners With Leading AI Platforms',
    them: 'No Access To Platforms, No Support'
  }
];

export default function Benefits() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16">Benefits that Drive Success</h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-lg font-semibold mb-6">Other Development Agencies</div>
          
          {comparisonData.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500" />
                <span>{item.us}</span>
              </div>
              <div className="flex items-center space-x-2">
                <X className="h-5 w-5 text-red-500" />
                <span className="text-gray-500">{item.them}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}