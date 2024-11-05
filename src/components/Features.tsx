import React from 'react';
import { Users, BarChart3, Target, Zap } from 'lucide-react';

const features = [
  {
    title: 'Revenue Operations',
    description:
      "Simplify outbound operations and boost Rep's efficiency with a best-in-class, AI-first solution.",
    icon: BarChart3,
    metrics: ['Open Rate', 'Reply Rate', 'Click Rate', 'ACV'],
  },
  {
    title: 'Marketing & Growth',
    description:
      'Grow pipeline efficiently and lower CAC with an all-in-one, 24/7, autonomous SDR.',
    icon: Target,
    showCampaigns: true,
  },
  {
    title: 'Sales',
    description:
      'Unlock unmatched levels of efficiency by creating opportunities at scale with the speed of AI.',
    icon: Users,
    showSequences: true,
  },
  {
    title: 'Early-stage',
    description:
      'Accelerate growth and scale faster without growing headcount.',
    icon: Zap,
    showTeam: true,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Ana empowers your entire GTM team
          </h2>
          <p className="text-xl text-gray-600">
            Stop prospecting, start connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-gray-100"
            >
              <feature.icon className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              {feature.metrics && (
                <div className="space-y-3">
                  {feature.metrics.map((metric) => (
                    <div key={metric} className="flex items-center space-x-2">
                      <div className="h-1 w-1 rounded-full bg-purple-500" />
                      <span className="text-sm text-gray-600">{metric}</span>
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
