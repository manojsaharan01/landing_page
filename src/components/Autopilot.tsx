import React from 'react';
import { Search, MessageSquare, Play, Users } from 'lucide-react';

const steps = [
  {
    title: 'Discover',
    description:
      'Ana has access to every buyer on Earth in real-time. She prioritizes and matches you with your dream customers, only targeting companies that need your solution right now.',
    icon: Search,
  },
  {
    title: 'Research',
    description: 'Deep analysis of prospect data to ensure perfect targeting.',
    icon: Users,
  },
  {
    title: 'Personalize',
    description: 'Create highly personalized outreach that resonates.',
    icon: MessageSquare,
  },
  {
    title: 'Engage',
    description: 'Automated follow-ups and engagement tracking.',
    icon: Play,
  },
  {
    title: 'Autopilot',
    description: 'Continuous optimization and learning.',
    icon: Play,
  },
];

export default function Autopilot() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Ana gets you leads on autopilot
          </h2>
          <p className="text-xl text-gray-600">
            Automate every step of your outreach process, from finding and
            researching prospects to personalizing messages and booking
            meetings.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-xl">
            <div className="space-y-4">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div className="flex-1">
                    <div className="h-4 w-32 bg-gray-700 rounded" />
                    <div className="h-3 w-24 bg-gray-700 rounded mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.title} className="group">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
