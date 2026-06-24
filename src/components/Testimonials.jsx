import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Patil',
    apartment: '2 BHK, Skyline Heights',
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    text: 'We were looking for a home in Pune for a long time, and UrbanNest Realty exceeded our expectations. The construction quality is excellent, possession was smooth, and all promised amenities are available.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sneha Kulkarni',
    apartment: '3 BHK, Green Valley Residency',
  image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    text: 'The entire buying process was transparent and hassle-free. The sales team was helpful, and the project location is perfect for daily commuting.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Deshmukh',
    apartment: '2 BHK, Harmony Park',
    image: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    text: 'Great value for money and well-planned amenities. The clubhouse, garden, and security arrangements are impressive.',
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">What Our Clients Say</h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 right-12 text-gray-100 w-24 h-24 rotate-180 z-0" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < testimonials[currentIndex].rating ? 'currentColor' : 'none'} size={20} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 italic mb-10 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].apartment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
