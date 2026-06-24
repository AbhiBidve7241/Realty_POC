import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, TrendingUp, CheckCircle2 } from 'lucide-react';

const inventoryStats = {
  total: 450,
  available: 124,
  breakdown: [
    { type: '1 BHK', total: 100, available: 12, price: 'From 50 Lakh' },
    { type: '2 BHK', total: 200, available: 45, price: 'From 70 Lakh' },
    { type: '3 BHK', total: 120, available: 60, price: 'From 80 Lakh' },
    { type: 'Penthouse', total: 30, available: 7, price: 'From 99 Lakh' },
  ]
};

const Inventory = () => {
  return (
    <section id="inventory" className="py-20 bg-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Live Availability</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">Flats & Inventory</h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Check real-time availability across our prime properties. Secure your dream home today before it's gone.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Dashboard Summary Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 bg-charcoal text-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8 text-primary">
              <LayoutGrid size={24} />
              <h4 className="text-xl font-bold">Overall Status</h4>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Units Built</p>
                <p className="text-4xl font-bold">{inventoryStats.total}</p>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-1">Currently Available</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-bold text-primary">{inventoryStats.available}</p>
                  <span className="text-sm font-medium text-green-400 flex items-center gap-1">
                    <TrendingUp size={14} /> Selling Fast
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div 
                  className="bg-primary h-2 rounded-full" 
                  style={{ width: `${((inventoryStats.total - inventoryStats.available) / inventoryStats.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-400 text-right mt-2">
                {Math.round(((inventoryStats.total - inventoryStats.available) / inventoryStats.total) * 100)}% Sold Out
              </p>

              <button className="w-full bg-primary text-charcoal py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors mt-8">
                Schedule Site Visit
              </button>
            </div>
          </motion.div>

          {/* Breakdown Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {inventoryStats.breakdown.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gray-50 px-4 py-2 rounded-bl-xl border-b border-l border-gray-100 text-sm font-semibold text-charcoal">
                  {item.price}
                </div>
                
                <h4 className="text-2xl font-bold text-charcoal mb-4">{item.type}</h4>
                
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Available Units</p>
                    <p className={`text-3xl font-bold ${item.available < 20 ? 'text-orange-500' : 'text-charcoal'}`}>
                      {item.available} <span className="text-sm text-gray-400 font-normal">/ {item.total}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-green-600 mt-6 pt-4 border-t border-gray-100">
                  <CheckCircle2 size={16} />
                  <span>Ready for Booking</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
