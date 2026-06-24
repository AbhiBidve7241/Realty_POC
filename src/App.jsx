import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import OngoingProjects from './components/OngoingProjects';
import UpcomingProjects from './components/UpcomingProjects';
import Inventory from './components/Inventory';
import Amenities from './components/Amenities';
import ConstructionProgress from './components/ConstructionProgress';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import MapSection from './components/MapSection';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-light overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <OngoingProjects />
        <UpcomingProjects />
        <Inventory />
        <Amenities />
        <ConstructionProgress />
        <Gallery />
        <Testimonials />
        <MapSection />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
