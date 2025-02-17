import React from 'react';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Ana AI</span>
            </div>
            <p className="mt-4 text-sm">
              AI-powered sales development representative working 24/7 to help you grow faster.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://x.com/manojsaharan_ai" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/manojsaharanai/" className="hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/ttwcommunity" className="hover:text-white transition"><Linkedin className="h-5 w-5" /></a>
              <a href="https://github.com/manojsaharan01/aicompany" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          © {new Date().getFullYear()} The Talent Warehouse AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 