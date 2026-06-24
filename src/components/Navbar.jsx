import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash in URL smoothly without triggering default jump/scroll or hashchange scroll
      window.history.pushState(null, null, href);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, null, '#');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded text-charcoal font-bold text-xl">UR</div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-charcoal' : 'text-white'}`}>UrbanNest<span className="text-primary">Realty</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+1234567890" className="flex items-center gap-2 bg-primary text-charcoal px-5 py-2.5 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
            <PhoneCall size={18} />
            <span>Call Now</span>
          </a>
          <a
            href="#admin"
            className={`p-2.5 rounded-md border transition-all ${isScrolled ? 'text-charcoal border-charcoal/10 hover:bg-gray-100' : 'text-white border-white/20 hover:bg-white/10'}`}
            title="Admin Portal"
          >
            <Settings size={18} />
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-charcoal' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-charcoal py-2 border-b border-gray-100"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+1234567890" className="flex items-center justify-center gap-2 bg-primary text-charcoal px-5 py-3 rounded-md font-semibold mt-4">
              <PhoneCall size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="#admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-charcoal text-white px-5 py-3 rounded-md font-semibold mt-2 hover:bg-concrete transition-colors"
            >
              <Settings size={18} className="text-primary" />
              <span>Admin Portal</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
