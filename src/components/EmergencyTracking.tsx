
import React from 'react';
import BlurEffect from './BlurEffect';
import { Phone, Clock, MapPin } from 'lucide-react';

const EmergencyTracking: React.FC = () => {
  return (
    <section id="emergency" className="section-container bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <BlurEffect>
            <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                {/* Map placeholder */}
                <div className="absolute inset-0 bg-medical-blue-900/20">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDN2M2gtM3ptMC04aDN2M2gtM3ptLTgtOGgzdjNoLTN6bTgtMGgzdjNoLTN6bS04IDhoM3YzaC0zem0wIDhoM3YzaC0zem0tOC04aDN2M2gtM3ptMCA4aDN2M2gtM3ptMC04aDN2M2gtM3oiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                </div>
                
                {/* Map overlay with routes and markers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5">
                    {/* Campus marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-medical-blue-500 rounded-full"></div>
                      <div className="w-10 h-10 bg-medical-blue-500/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    </div>
                    
                    {/* Ambulance marker */}
                    <div className="absolute top-[30%] left-[20%]">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 16 4 2 4-2 4 2 4-2"></path>
                          <path d="M22 12a10 9 0 0 0-20 0"></path>
                          <path d="M9 6v2"></path>
                          <path d="M15 6v2"></path>
                          <path d="M13 21h-2a2 2 0 0 1-2-2v-7h6v7a2 2 0 0 1-2 2z"></path>
                        </svg>
                      </div>
                      
                      {/* Pulsing effect */}
                      <div className="w-12 h-12 bg-red-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    </div>
                    
                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path 
                        d="M20,30 Q35,40 50,50 T80,70" 
                        stroke="#EF4444" 
                        strokeWidth="1.5" 
                        strokeDasharray="2 2" 
                        fill="none" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Status bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <Clock className="h-5 w-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Estimated Arrival</p>
                        <p className="font-bold">4 minutes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-medical-blue-100 flex items-center justify-center mr-3">
                        <MapPin className="h-5 w-5 text-medical-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Distance</p>
                        <p className="font-bold">1.2 km away</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Emergency Response</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    Active
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">Ambulance #A-103 is en route to your location. Medical team has been notified of your situation.</p>
                
                <div className="flex items-center justify-between">
                  <button className="flex items-center justify-center gap-2 w-full mr-2 py-3 bg-medical-blue-50 rounded-lg text-medical-blue-600 font-medium hover:bg-medical-blue-100 transition-colors">
                    <Phone className="h-4 w-4" />
                    Call Driver
                  </button>
                  
                  <button className="flex items-center justify-center gap-2 w-full ml-2 py-3 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition-colors">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                    Emergency SOS
                  </button>
                </div>
              </div>
            </div>
          </BlurEffect>
          
          <div>
            <BlurEffect delay={100}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-medium text-sm mb-4">
                Critical Response
              </span>
            </BlurEffect>
            
            <BlurEffect delay={200}>
              <h2 className="section-title">Real-Time <br />Emergency Assistance</h2>
            </BlurEffect>
            
            <BlurEffect delay={300}>
              <p className="section-subtitle">
                Our integrated emergency response system ensures rapid medical assistance during critical situations. Track ambulances in real-time and stay connected with healthcare providers.
              </p>
            </BlurEffect>
            
            <BlurEffect delay={400}>
              <div className="space-y-6 mt-8">
                <div className="glass-effect rounded-lg p-5 flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">One-Touch Emergency Alert</h3>
                    <p className="text-gray-600">Instantly notify emergency services with a single tap, automatically sharing your location and medical information.</p>
                  </div>
                </div>
                
                <div className="glass-effect rounded-lg p-5 flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-medical-blue-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-medical-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="8"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Real-Time Tracking</h3>
                    <p className="text-gray-600">Monitor the ambulance location and estimated arrival time, providing peace of mind during emergencies.</p>
                  </div>
                </div>
                
                <div className="glass-effect rounded-lg p-5 flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-medical-green-100 flex items-center justify-center">
                      <svg className="h-5 w-5 text-medical-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Immediate Medical Response</h3>
                    <p className="text-gray-600">Our medical team is alerted instantly, allowing them to prepare for your specific emergency while en route.</p>
                  </div>
                </div>
              </div>
            </BlurEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyTracking;
