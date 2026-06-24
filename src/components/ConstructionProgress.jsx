import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const timeline = [
  { stage: 'Excavation', date: 'Jan 2025', status: 'completed' },
  { stage: 'Foundation', date: 'Apr 2025', status: 'completed' },
  { stage: 'Structural Work', date: 'Oct 2025', status: 'completed' },
  { stage: 'Interior Masonry', date: 'Mar 2026', status: 'in-progress' },
  { stage: 'Finishing & Painting', date: 'Sep 2026', status: 'pending' },
  { stage: 'Handover / Possession', date: 'Dec 2026', status: 'pending' },
];

const ConstructionProgress = () => {
  return (
    <section className="py-20 bg-charcoal text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Transparency</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Construction Progress</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Track the development lifecycle of our flagship project. We believe in keeping you updated every step of the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-charcoal border-4 border-gray-800 flex items-center justify-center z-10">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="text-green-500 bg-charcoal rounded-full" size={24} />
                    ) : item.status === 'in-progress' ? (
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      >
                        <CircleDashed className="text-primary" size={20} />
                      </motion.div>
                    ) : (
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className={`p-6 rounded-xl border ${item.status === 'in-progress' ? 'border-primary bg-primary/5' : 'border-gray-800 bg-gray-900/50'}`}>
                      <span className={`text-sm font-bold mb-2 inline-block ${item.status === 'completed' ? 'text-green-400' : item.status === 'in-progress' ? 'text-primary' : 'text-gray-500'}`}>
                        {item.date}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-1">{item.stage}</h4>
                      <p className="text-gray-400 text-sm">
                        {item.status === 'completed' ? 'Phase successfully completed.' : item.status === 'in-progress' ? 'Work is currently actively ongoing.' : 'Scheduled phase.'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionProgress;
