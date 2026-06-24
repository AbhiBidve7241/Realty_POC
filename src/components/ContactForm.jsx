import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Get in touch</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">Schedule a Site Visit</h3>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Interested in our projects? Fill out the form to schedule a site visit or request a call back from our sales experts. We usually respond within 15 minutes during working hours.
              </p>
              
              <div className="bg-light p-6 rounded-xl border border-gray-100 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-charcoal font-bold text-l">100%</span>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">Privacy Assured</h4>
                  <p className="text-sm text-gray-500">Your information is secure and never shared.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal p-8 md:p-10 rounded-2xl shadow-2xl relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
              
              <form className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Aditya Sharma" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="+91 9876543211" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Aditya@gmail.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Interested In</label>
                  <select className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option>Select a Project</option>
                    <option>Skyline Heights</option>
                    <option>Green Valley Residency</option>
                    <option>Business Square</option>
                    <option>Royal Enclave</option>
                    <option>Park View Residency</option>
                    <option>Urban Greens</option>

                  </select>
                </div>

                <button type="submit" className="w-full bg-primary text-charcoal font-bold text-lg py-4 rounded-lg hover:bg-yellow-400 transition-colors mt-4">
                  Request Call Back
                </button>
              </form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
