import React from 'react';
import { Bot, Target, Zap } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Hire Ana',
    description:
      "Sign up and connect Ana into your team. She'll seamlessly fit into your existing systems, ready to begin the journey of boosting your sales efforts.",
    features: [
      'Streamline process',
      'Save costs',
      'All-in-one outbound solution',
    ],
    integrations: [
      'google',
      'slack',
      'outlook',
      'linkedin',
      'hubspot',
      'calendar',
      'salesforce',
    ],
  },
  {
    number: 2,
    title: 'Train Ana',
    description:
      "Tell Ana what you're selling and build your Ideal Customer Profile (ICP).",
    showICP: true,
  },
  {
    number: 3,
    title: 'Grow with Ana',
    description: 'Ana books meetings, you close them.',
    metrics: [
      { label: 'Booked by Ana', value: '$833k', count: 58 },
      { label: 'Closed-won', value: '$470k', count: 32 },
      { label: 'Closed-lost', value: '$24k', count: 2 },
    ],
  },
];

export default function Process() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Outreach to the world with Ana
          </h2>
          <p className="text-xl text-gray-600">
            Ana integrates with the tools you know and love to convert prospects
            on autopilot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>

              {step.features && (
                <div className="space-y-3">
                  {step.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {step.metrics && (
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {step.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="font-bold">{metric.value}</div>
                      <div className="text-sm text-gray-500">
                        {metric.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {metric.count}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
