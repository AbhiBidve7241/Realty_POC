import React from 'react';
import { MapPin, Train, GraduationCap, Hospital, Briefcase } from 'lucide-react';

const locations = [
  { icon: <Train size={20} />, name: 'Metro Station', time: '5 mins' },
  { icon: <GraduationCap size={20} />, name: 'International School', time: '10 mins' },
  { icon: <Hospital size={20} />, name: 'City Hospital', time: '15 mins' },
  { icon: <Briefcase size={20} />, name: 'IT Tech Park', time: '20 mins' },
];

const MapSection = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          
          <div className="lg:w-1/3 p-10 flex flex-col justify-center">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Location</h2>
            <h3 className="text-3xl font-bold text-charcoal mb-6">Unmatched Connectivity</h3>
            <p className="text-gray-500 mb-8">
              Strategically located in the heart of the city, offering seamless connectivity to major landmarks, business hubs, and entertainment zones.
            </p>
            
            <div className="space-y-4">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-light border border-gray-100 hover:border-primary transition-colors">
                  <div className="flex items-center gap-3 text-charcoal font-medium">
                    <div className="text-primary">{loc.icon}</div>
                    {loc.name}
                  </div>
                  <span className="text-sm font-bold bg-white px-3 py-1 rounded-full text-gray-600 shadow-sm">{loc.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 min-h-[400px] relative bg-gray-200">
            {/* Placeholder for iframe map */}
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114989.55297161703!2d73.73899743475452!3d18.64250890233142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8377fbdeab3%3A0x2c4265dab1a7a0f8!2sPimpri-Chinchwad%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1782288789709!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay Map Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
              <div className="bg-charcoal text-white font-bold px-4 py-2 rounded shadow-xl text-sm mb-2 relative">
                UrbanNest Realty Flagship
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-solid border-t-charcoal border-t-8 border-x-transparent border-x-8 border-b-0"></div>
              </div>
              <MapPin className="text-primary fill-primary animate-bounce w-10 h-10 drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
