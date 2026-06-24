import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { dataStore } from '../utils/dataStore';

const UpcomingProjects = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    setUpcoming(dataStore.getUpcoming());
  }, []);

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
              Future Visions &
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold">Upcoming Launches</h3>
          </div>
          <p className="text-gray-400 max-w-md">
            Be the first to know about our upcoming visionary projects. Register your interest for exclusive early-bird benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {upcoming.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,211,105,0.05)] border border-gray-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
              />
              
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-primary text-charcoal px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  Early Booking
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h4 className="text-3xl font-bold mb-4">{project.title}</h4>
                
                <div className="flex flex-wrap gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={18} className="text-primary" />
                    {project.city}
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={18} className="text-primary" />
                    Launch: {project.launchDate}
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-white/10 hover:bg-primary hover:text-charcoal border border-white/20 hover:border-primary backdrop-blur-sm text-white px-8 py-3 rounded font-bold transition-all duration-300">
                  Register Interest
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
