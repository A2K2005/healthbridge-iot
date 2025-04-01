
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import AppointmentCard from '../components/AppointmentCard';
import EmergencyTracking from '../components/EmergencyTracking';
import MentalHealthSupport from '../components/MentalHealthSupport';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot/ChatBot';
import FeatureLock from '../components/FeatureLock';

const Index: React.FC = () => {
  // Smooth scroll to section when clicking navigation links
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange(); // Check on initial load
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle navigation click events
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          const id = href.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            window.history.pushState(null, '', href);
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section id="appointments">
          <FeatureLock
            title="Book an Appointment"
            description="Sign in to schedule appointments with campus medical professionals"
          >
            <AppointmentCard />
          </FeatureLock>
        </section>
        <section id="emergency">
          <FeatureLock
            title="Emergency Services"
            description="Sign in to access emergency medical assistance and ambulance tracking"
          >
            <EmergencyTracking />
          </FeatureLock>
        </section>
        <section id="mental-health">
          <FeatureLock
            title="Mental Health Support"
            description="Sign in to access mental wellness resources and counseling services"
          >
            <MentalHealthSupport />
          </FeatureLock>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
