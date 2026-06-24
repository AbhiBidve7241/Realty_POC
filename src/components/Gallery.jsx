import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { dataStore } from '../utils/dataStore';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(dataStore.getGallery());
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">Project Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative group overflow-hidden rounded-xl ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
