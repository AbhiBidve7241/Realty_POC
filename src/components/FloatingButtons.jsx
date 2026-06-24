import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 border-2 border-white group relative"
      >
        <MessageCircle size={24} className="fill-white" />
        <span className="absolute right-full mr-4 bg-white text-charcoal text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a 
        href="tel:+1234567890"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-charcoal shadow-xl shadow-primary/30 border-2 border-white group relative"
      >
        <PhoneCall size={24} className="fill-charcoal" />
        <span className="absolute right-full mr-4 bg-white text-charcoal text-xs font-bold px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Sales Team
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
