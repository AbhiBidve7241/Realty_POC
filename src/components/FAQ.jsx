import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Do you provide home loan assistance?',
    answer: 'Yes, we have tie-ups with all major nationalized and private banks including HDFC, SBI, ICICI, and Axis Bank. Our dedicated team will assist you through the entire documentation and approval process.'
  },
  {
    question: 'Are all your projects RERA approved?',
    answer: 'Absolutely. 100% of our ongoing projects are registered under RERA. We strictly adhere to all legal compliances and provide complete transparency regarding RERA numbers and timelines.'
  },
  {
    question: 'What is the standard possession timeline?',
    answer: 'Possession timelines vary by project. A standard high-rise residential tower typically takes 36-42 months from launch. We provide detailed quarter-by-quarter progress updates.'
  },
  {
    question: 'How does the booking process work?',
    answer: 'You can block a unit by paying a token advance (usually 5% of the property value). Within 15-30 days, the agreement of sale is executed upon payment of 20%, followed by construction-linked installments.'
  },
  {
    question: 'Can I schedule a site visit on weekends?',
    answer: 'Yes, our site sales offices and sample flats are open 7 days a week from 10 AM to 6 PM. We recommend scheduling in advance for a personalized guided tour.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Queries Solved</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-primary bg-light' : 'border-gray-200'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-charcoal text-lg">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-charcoal' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
