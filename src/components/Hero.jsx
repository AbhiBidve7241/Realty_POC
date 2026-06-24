import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80")' }}
      >
        <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-6">
              Premium Real Estate Developer
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building <span className="text-primary">Dreams</span><br />
              Shaping Reality
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Experience the pinnacle of modern architecture and luxurious living. We deliver premium spaces that inspire and endure, ensuring your investment grows for generations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="bg-primary text-charcoal px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 group">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white z-10"
      >
        {/* <span className="text-sm font-medium tracking-widest uppercase">Scroll</span> */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
