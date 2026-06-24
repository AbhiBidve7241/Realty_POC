import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '1200+', label: 'Homes Delivered' },
  { value: '8', label: 'Ongoing Projects' },
  { value: '15', label: 'Project Completed' },
];

const Statistics = () => {
  return (
    <section className="relative -mt-20 z-20 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center md:px-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-charcoal mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
