import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Dumbbell, 
  Car, 
  TreePine, 
  ShieldAlert, 
  Coffee, 
  Baby, 
  Zap, 
  Wifi 
} from 'lucide-react';

const amenitiesList = [
  { icon: <Waves size={32} />, title: 'Infinity Pool' },
  { icon: <Dumbbell size={32} />, title: 'Modern Gym' },
  { icon: <Car size={32} />, title: 'Covered Parking' },
  { icon: <TreePine size={32} />, title: 'Lush Gardens' },
  { icon: <ShieldAlert size={32} />, title: '24/7 Security' },
  { icon: <Coffee size={32} />, title: 'Clubhouse' },
  { icon: <Baby size={32} />, title: 'Kids Play Area' },
  { icon: <Zap size={32} />, title: 'EV Charging' },
  { icon: <Wifi size={32} />, title: 'Smart Home Ready' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Lifestyle</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">World-Class Amenities</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Experience a life of luxury and convenience with our thoughtfully curated amenities designed for all age groups.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenitiesList.map((amenity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-gray-100 hover:border-primary hover:bg-light transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-light group-hover:bg-primary group-hover:text-white flex items-center justify-center text-charcoal mb-4 transition-colors duration-300">
                {amenity.icon}
              </div>
              <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors">{amenity.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
