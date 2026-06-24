
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Clock,
  Building2,
  Scale,
  Home,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const reasons = [
    {
      icon: <ShieldCheck className="text-primary w-8 h-8" />,
      title: 'Trusted Builder',
      desc: 'Over two decades of excellence and trust in real estate.',
    },
    {
      icon: <Clock className="text-primary w-8 h-8" />,
      title: 'On-Time Delivery',
      desc: 'Commitment to delivering projects within the promised timeline.',
    },
    {
      icon: <Building2 className="text-primary w-8 h-8" />,
      title: 'Premium Materials',
      desc: 'Uncompromising quality using the best materials available.',
    },
    {
      icon: <Scale className="text-primary w-8 h-8" />,
      title: 'Legal Transparency',
      desc: '100% clear titles and RERA approved projects.',
    },
    {
      icon: <Home className="text-primary w-8 h-8" />,
      title: 'Modern Architecture',
      desc: 'Aesthetic designs that blend luxury with functionality.',
    },
  ];

  return (
    <section id="about" className="py-18 bg-light scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">
                About Us
              </h2>

              <h3 className="text-3xl md:text-5xl font-bold text-charcoal mb-6">
                Building the Future,
                <br />
                Restoring the Past.
              </h3>

              {/* Always Visible */}
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                At UrbanNest Realty, we believe that every structure we build
                is a landmark in the making. With over 25 years of experience,
                we have redefined the skyline with our premium residential and
                commercial projects.
              </p>

              {/* Desktop Full Content */}
              <div className="hidden md:block">
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  Our mission is to deliver exceptional living spaces that
                  combine aesthetic brilliance, robust engineering, and
                  sustainable practices. We don't just build homes; we build
                  communities where families thrive.
                </p>
              </div>

              {/* Mobile Expandable Content */}
              <div className="md:hidden">
                {showMore && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 mt-3 mb-6 leading-relaxed">
                      Our mission is to deliver exceptional living spaces that
                      combine aesthetic brilliance, robust engineering, and
                      sustainable practices. We don't just build homes; we
                      build communities where families thrive.
                    </p>
                  </motion.div>
                )}

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-2 text-primary font-semibold mb-8"
                >
                  {showMore ? (
                    <>
                      Read Less
                      <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(showMore ? reasons : reasons.slice(0, 3)).map(
                  (reason, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {reason.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-charcoal text-lg">
                          {reason.title}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Image Collage */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://i.pinimg.com/1200x/d8/61/18/d86118d9f92694e9c6ee2be9553f87ef.jpg"
                alt="Construction Site"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Interior"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Building Exterior"
                className="rounded-lg shadow-lg w-full h-48 object-cover col-span-2"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

