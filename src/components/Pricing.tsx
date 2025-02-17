import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  features, 
  isDark = false,
  buttonText = "Get Started"
}) => (
  <div className={`rounded-3xl p-8 ${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
    <div className="space-y-2">
      <div className="inline-block px-4 py-1 rounded-full text-sm bg-green-100 text-green-800">
        {subtitle}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <div className="mt-8">
      <div className="text-3xl font-bold">
        Starting From ${price}
        <span className="text-base font-normal text-gray-500 ml-2">setup fee</span>
      </div>
    </div>
  
    <a href="https://cal.com/manojsaharan/discovery-call" target="_blank" rel="noopener noreferrer">
  <button className={`mt-8 w-full rounded-full px-6 py-3 font-medium ${
    isDark ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'
    } transition`}>
    {buttonText}
  </button>
   </a> 
    
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);
export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50">


      <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <PricingCard
            title="Fully automate your Sales Systems."
            subtitle="AI SDR"
            price="4,997"
            features={[
              "Lead Generation & Research (Scraping, email finding, verification, enrichment)",
              "AI Personalized Outreach (Automated emails, personalized videos, custom landing pages)",
              "Lead Nurturing & Follow-Ups (Daily scans, context-aware follow-ups)",
              "FAQ Handling & Calendar Coordination (Auto-replies, scheduling, rescheduling)",
              "CRM Management (Logging contacts, updating pipeline, tracking interactions)",
              "Proposal & Contract Generation (Auto-generated quotes, proposals, e-signatures)",
              "Post-Meeting Summaries & Notes (AI-generated summaries, CRM updates)",
              "Lead Re-Engagement (Identifying dormant leads,sending re-engagement emails)",
              "Reporting & Analytics (Tracking performance, generating reports, sending insights)",
              "Latest AI Models"
            ]}
            isDark={true}
          />
        </div>
      </div>

      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold">About</h2>
        {/* About content here */}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold">Book Our AI Agent Discovery Call Today.</h3>
        <button className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition inline-flex items-center">
          <Phone className="mr-2 h-5 w-5" />
          <a href="https://cal.com/ai-company-fcboct/discovery-call" target="_blank" rel="noopener noreferrer" className=" text-white px-6 py-2 rounded-full ">
            Book a Demo
          </a>
        </button>
      </div>
    </div>
  );
}
