
import React, { useState } from 'react';
import BlurEffect from './BlurEffect';
import { Calendar, Clock, User, Stethoscope } from 'lucide-react';

const AppointmentCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  
  return (
    <section id="appointments" className="section-container bg-medical-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <BlurEffect>
              <span className="inline-block px-4 py-1.5 rounded-full bg-medical-blue-100 text-medical-blue-700 font-medium text-sm mb-4">
                Quick & Easy
              </span>
            </BlurEffect>
            
            <BlurEffect delay={100}>
              <h2 className="section-title">Schedule Your Appointment</h2>
            </BlurEffect>
            
            <BlurEffect delay={200}>
              <p className="section-subtitle">
                Our streamlined booking process makes it effortless to schedule appointments with campus medical professionals. Get the care you need, when you need it.
              </p>
            </BlurEffect>
            
            <BlurEffect delay={300}>
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-medical-blue-100 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-medical-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Select Your Date & Time</h3>
                    <p className="text-gray-600">Choose from available slots that fit your schedule.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-medical-blue-100 flex items-center justify-center">
                      <Stethoscope className="h-5 w-5 text-medical-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Choose Your Doctor</h3>
                    <p className="text-gray-600">Select from our qualified medical professionals based on your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-medical-blue-100 flex items-center justify-center">
                      <User className="h-5 w-5 text-medical-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Confirm Your Details</h3>
                    <p className="text-gray-600">Verify your information and appointment specifics.</p>
                  </div>
                </div>
              </div>
            </BlurEffect>
          </div>
          
          <BlurEffect delay={400}>
            <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold">Book Appointment</h3>
                  <div className="flex">
                    {[1, 2, 3].map((step) => (
                      <div 
                        key={step} 
                        className={`w-3 h-3 rounded-full mx-1 ${
                          step === activeStep 
                            ? 'bg-medical-blue-500' 
                            : step < activeStep 
                              ? 'bg-medical-blue-300' 
                              : 'bg-gray-200'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {activeStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Select Date</label>
                      <div className="relative">
                        <div className="flex">
                          <button className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-medical-blue-500">
                            Tuesday, Feb 25, 2023
                          </button>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Available Time Slots</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['9:00 AM', '10:30 AM', '11:45 AM', '2:00 PM', '3:15 PM', '4:30 PM'].map((time, i) => (
                          <button 
                            key={i}
                            className={`py-2 px-1 rounded-lg text-sm font-medium transition-colors ${
                              i === 1 
                                ? 'bg-medical-blue-100 text-medical-blue-600 border-2 border-medical-blue-500' 
                                : 'bg-white border border-gray-200 text-gray-600 hover:bg-medical-blue-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Appointment Type</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button className="p-4 bg-medical-blue-100 border-2 border-medical-blue-500 rounded-lg text-left">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                              <Stethoscope className="h-5 w-5 text-medical-blue-600" />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-medical-blue-800">General Checkup</p>
                            </div>
                          </div>
                        </button>
                        
                        <button className="p-4 bg-white border border-gray-200 rounded-lg text-left hover:bg-medical-blue-50">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-gray-800">Specialist Consult</p>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Select Doctor</label>
                      <div className="space-y-2">
                        {['Dr. Aisha Sharma', 'Dr. Rajiv Mehta'].map((doctor, i) => (
                          <button 
                            key={i}
                            className={`w-full p-3 flex items-center rounded-lg transition-colors ${
                              i === 0 
                                ? 'bg-medical-blue-100 border-2 border-medical-blue-500' 
                                : 'bg-white border border-gray-200 hover:bg-medical-blue-50'
                            }`}
                          >
                            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                            <div className="ml-3 text-left">
                              <p className={`font-medium ${i === 0 ? 'text-medical-blue-800' : 'text-gray-800'}`}>{doctor}</p>
                              <p className="text-sm text-gray-500">General Physician</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-4 bg-medical-blue-50 rounded-lg border border-medical-blue-100">
                      <h4 className="font-medium text-medical-blue-800 mb-3">Appointment Summary</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <div className="flex items-center text-gray-700">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span className="text-sm">Date:</span>
                          </div>
                          <span className="text-sm font-medium">Tuesday, Feb 25, 2023</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="flex items-center text-gray-700">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">Time:</span>
                          </div>
                          <span className="text-sm font-medium">10:30 AM</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="flex items-center text-gray-700">
                            <Stethoscope className="h-4 w-4 mr-2" />
                            <span className="text-sm">Doctor:</span>
                          </div>
                          <span className="text-sm font-medium">Dr. Aisha Sharma</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="flex items-center text-gray-700">
                            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 7h-3a2 2 0 0 1-2-2V2"></path>
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                            </svg>
                            <span className="text-sm">Service:</span>
                          </div>
                          <span className="text-sm font-medium">General Checkup</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue-500 focus:border-medical-blue-500 resize-none"
                        rows={3}
                        placeholder="Add any specific concerns or symptoms you'd like to discuss..."
                      ></textarea>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  {activeStep > 1 ? (
                    <button 
                      onClick={handlePrev}
                      className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-blue-500"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  <button 
                    onClick={handleNext}
                    className={`px-6 py-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-medical-blue-500 ${
                      activeStep === 3 
                        ? 'bg-medical-green-500 text-white hover:bg-medical-green-600' 
                        : 'bg-medical-blue-500 text-white hover:bg-medical-blue-600'
                    }`}
                  >
                    {activeStep === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </div>
            </div>
          </BlurEffect>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
