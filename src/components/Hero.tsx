
import React from 'react';
import BlurEffect from './BlurEffect';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white to-medical-blue-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-medical-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-medical-green-300/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <BlurEffect className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-medical-blue-100 text-medical-blue-700 font-medium text-sm mb-4">
                Next Generation Healthcare
              </span>
            </BlurEffect>
            
            <BlurEffect delay={100} className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                TIET Medi-Care
                <span className="block text-medical-blue-600">Redefining Healthcare</span>
                <span className="block">at Thapar Institute</span>
              </h1>
            </BlurEffect>
            
            <BlurEffect delay={200} className="mb-10">
              <p className="text-lg text-gray-600 max-w-lg">
                A secure, AI-driven healthcare platform with IoT integration, designed to provide students and staff with seamless medical services and emergency assistance.
              </p>
            </BlurEffect>
            
            <BlurEffect delay={300} className="flex flex-wrap gap-3">
              <a href="#features" className="btn-primary">
                Get Started
              </a>
              <a href="#appointments" className="btn-outline">
                Book Appointment
              </a>
            </BlurEffect>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <BlurEffect delay={400} className="relative">
              <div className="relative z-10 glass-effect rounded-2xl overflow-hidden p-2 shadow-2xl">
                <div className="aspect-square w-full max-w-md rounded-xl overflow-hidden bg-medical-blue-50">
                  <div className="w-full h-full bg-gradient-to-br from-medical-blue-400 to-medical-green-400 opacity-80 flex items-center justify-center">
                    <div className="text-center p-10">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/90 flex items-center justify-center">
                        <svg className="w-8 h-8 text-medical-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">Medical Care Interface</h3>
                      <p className="text-white/80">Your health is our priority. Experience seamless healthcare with cutting-edge technology.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-medical-green-200 rounded-full blur-2xl opacity-50 animate-pulse-subtle"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-medical-blue-200 rounded-full blur-2xl opacity-50 animate-pulse-subtle"></div>
            </BlurEffect>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
