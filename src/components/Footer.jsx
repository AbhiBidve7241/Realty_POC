import React from 'react';
import { Globe, MessageSquare, Camera, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded text-charcoal font-bold text-xl">UR</div>
              <span className="text-2xl font-bold tracking-tight text-white">UrbanNest<span className="text-primary">Realty</span></span>
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Crafting architectural masterpieces and redefining urban living since 1999. Trust, transparency, and timely delivery are our core pillars.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-charcoal transition-colors"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-charcoal transition-colors"><MessageSquare size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-charcoal transition-colors"><Camera size={18} /></a>
              <a href="#" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-charcoal transition-colors"><Briefcase size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">▹</span> About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">▹</span> Ongoing Projects</a></li>
              <li><a href="#inventory" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">▹</span> Availability</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">▹</span> Contact Us</a></li>
              <li><a href="#admin" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2"><span className="text-primary text-xs">▹</span> Admin Portal</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span>03 Sector 24 Nigdi , Pimpri Chinchwad 411044</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="text-primary shrink-0" size={18} />
                <span>sales@UrbanNestRealty.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates on new launches and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email address" className="bg-gray-800 border border-gray-700 text-white rounded-l px-4 py-2 w-full focus:outline-none focus:border-primary text-sm" />
              <button className="bg-primary text-charcoal font-bold px-4 rounded-r hover:bg-yellow-400 transition-colors">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} UrbanNest Realty Real Estate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">RERA Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
