import React from 'react';
import { Bot } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Ana AI</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition">Features</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
            <a href="#about" onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition">About</a>
          </nav>
          
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            <a href="https://cal.com/manojsaharan/discovery-call" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Book a Demo
           </a>
          </button>
        </div>
      </div>
    </header>
  );
}
