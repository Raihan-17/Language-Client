import React from 'react';
import { Link } from 'react-router';
import { Mail, MessageSquare, Globe, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mx-auto bg-black text-white pt-16 pb-8 px-4 border-t border-teal-400/20">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img className='w-10 h-10 rounded' src="/speakeasy.png" alt="logo" />
              <div className='text-2xl font-bold text-teal-400'>
                SPEAK<span className='text-white'>EASY</span>
              </div>
            </div>
            <p className="text-gray-300">
              Connecting language learners with expert tutors worldwide through immersive 1-on-1 sessions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-400/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/tutors" className="text-gray-300 hover:text-teal-400 transition-colors">Find Tutors</Link></li>
              <li><Link to="/addTutorial" className="text-gray-300 hover:text-teal-400 transition-colors">Become a Tutor</Link></li>
              <li><Link to="/bookedTutors" className="text-gray-300 hover:text-teal-400 transition-colors">Booked Tutors</Link></li>
              <li><Link to="" className="text-gray-300 hover:text-teal-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-400/30 pb-2">
              Popular Languages
            </h3>
            <ul className="space-y-3">
              <li><Link to="/tutors/spanish" className="text-gray-300 hover:text-teal-400 transition-colors">Spanish</Link></li>
              <li><Link to="/tutors/french" className="text-gray-300 hover:text-teal-400 transition-colors">French</Link></li>
              <li><Link to="/tutors/japanese" className="text-gray-300 hover:text-teal-400 transition-colors">Japanese</Link></li>
              <li><Link to="/tutors/german" className="text-gray-300 hover:text-teal-400 transition-colors">German</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-teal-400/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-teal-400" />
                support@speakeasy.com
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MessageSquare size={16} className="text-teal-400" />
                Live Chat
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Globe size={16} className="text-teal-400" />
                Worldwide Service
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SpeakEasy. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Cyber glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-20"></div>
    </footer>
  );
};

export default Footer;