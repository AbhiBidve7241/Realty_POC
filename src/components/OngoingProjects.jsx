import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { dataStore } from '../utils/dataStore';

const categories = ['All', 'Residential', 'Commercial', 'Luxury', 'Affordable Housing'];

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    setProjects(dataStore.getOngoing());
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-charcoal">Ongoing Projects</h3>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === category 
                  ? 'bg-charcoal text-primary' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project, idx) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {project.category}
        </div>
      </div>

      {/* Basic Details */}
      <div className="p-5">
        <h4 className="text-xl font-bold text-charcoal">
          {project.title}
        </h4>

        <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
          <MapPin size={15} />
          {project.location}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 block">
              Starting From
            </span>

            <span className="text-lg font-bold text-forest">
              {project.startingPrice}
            </span>
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block bg-charcoal text-white px-5 py-2 rounded-xl">
            View Details
          </button>
        </div>

        {/* Mobile Expand Button */}
        <button
          onClick={() =>
            setExpandedProject(
              expandedProject === project.id
                ? null
                : project.id
            )
          }
          className="md:hidden mt-4 w-full flex items-center justify-center gap-2 border rounded-xl py-3 text-sm font-semibold"
        >
          {expandedProject === project.id
            ? "Hide Details"
            : "View Details"}

          <ChevronDown
            size={18}
            className={`transition-transform ${
              expandedProject === project.id
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {/* Mobile Expand Content */}
        <AnimatePresence>
          {expandedProject === project.id && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0
              }}
              animate={{
                height: "auto",
                opacity: 1
              }}
              exit={{
                height: 0,
                opacity: 0
              }}
              transition={{
                duration: 0.3
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-5 space-y-4 border-t pt-4">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">
                      Construction Progress
                    </span>

                    <span className="font-bold text-forest">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-forest h-2 rounded-full"
                      style={{
                        width: `${project.progress}%`
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">
                      Completion
                    </span>

                    <span className="font-semibold">
                      {project.expectedCompletion}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-500 block">
                      Available
                    </span>

                    <span className="font-semibold">
                      {project.flatsAvailable} Units
                    </span>
                  </div>
                </div>

                <button className="w-full bg-charcoal text-white py-3 rounded-xl">
                  Schedule Site Visit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Details Always Visible */}
        <div className="hidden md:block mt-5">
          <div className="flex justify-between text-sm mb-2">
            <span>Construction Progress</span>
            <span className="font-bold">
              {project.progress}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-forest h-2 rounded-full"
              style={{
                width: `${project.progress}%`
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <span className="text-gray-500 block">
                Completion
              </span>

              <span className="font-semibold">
                {project.expectedCompletion}
              </span>
            </div>

            <div>
              <span className="text-gray-500 block">
                Available
              </span>

              <span className="font-semibold">
                {project.flatsAvailable} Units
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
};

export default OngoingProjects;
