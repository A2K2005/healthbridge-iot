
import React from 'react';
import BlurEffect from './BlurEffect';
import { 
  FileText, 
  MessageSquare, 
  Ambulance, 
  Calendar, 
  Activity, 
  Heart,
  Lock
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const featuresData = [
  {
    icon: <FileText className="h-10 w-10 text-medical-blue-500" />,
    title: "Digital Medical Records",
    description: "Access your complete medical history, prescriptions, and test results securely from anywhere at any time.",
    requiresAuth: true
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-medical-blue-500" />,
    title: "AI Health Assistant",
    description: "Chat with our intelligent assistant for preliminary symptom checking and health recommendations.",
    requiresAuth: false
  },
  {
    icon: <Ambulance className="h-10 w-10 text-medical-blue-500" />,
    title: "Emergency Response",
    description: "Request immediate medical assistance with real-time ambulance tracking and status updates.",
    requiresAuth: true
  },
  {
    icon: <Calendar className="h-10 w-10 text-medical-blue-500" />,
    title: "Smart Scheduling",
    description: "Book appointments with campus medical professionals through our intuitive interface.",
    requiresAuth: true
  },
  {
    icon: <Activity className="h-10 w-10 text-medical-blue-500" />,
    title: "Wellness Monitoring",
    description: "Track health metrics using IoT devices integrated with our platform for proactive health management.",
    requiresAuth: true
  },
  {
    icon: <Heart className="h-10 w-10 text-medical-blue-500" />,
    title: "Mental Health Support",
    description: "Access mental wellness resources, schedule counseling sessions, and get personalized support.",
    requiresAuth: true
  }
];

const Features: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <section id="features" className="section-container bg-white">
      <div className="text-center mb-16">
        <BlurEffect>
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-blue-100 text-medical-blue-700 font-medium text-sm mb-4">
            Our Services
          </span>
        </BlurEffect>
        
        <BlurEffect delay={100}>
          <h2 className="section-title">Comprehensive Healthcare <br />at Your Fingertips</h2>
        </BlurEffect>
        
        <BlurEffect delay={200}>
          <p className="section-subtitle mx-auto">
            TIET Medi-Care combines cutting-edge technology with compassionate care to provide the Thapar community with accessible and efficient healthcare services.
            {!isAuthenticated && (
              <span className="block mt-2 text-medical-blue-600 font-medium">
                Sign in to unlock all features
              </span>
            )}
          </p>
        </BlurEffect>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <BlurEffect key={index} delay={300 + index * 100} className="card-hover">
            <div className={`glass-effect rounded-xl p-8 h-full flex flex-col ${feature.requiresAuth && !isAuthenticated ? 'opacity-75' : ''}`}>
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-lg bg-medical-blue-50 flex items-center justify-center">
                  {feature.icon}
                </div>
                {feature.requiresAuth && !isAuthenticated && (
                  <div className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1">
                    <Lock className="w-4 h-4 text-gray-500" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                {feature.title}
                {feature.requiresAuth && !isAuthenticated && (
                  <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    Sign in required
                  </span>
                )}
              </h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
              <div className="mt-6">
                <a 
                  href={feature.requiresAuth && !isAuthenticated ? "/auth" : "#"} 
                  className="inline-flex items-center text-medical-blue-600 font-medium hover:text-medical-blue-700 transition-colors"
                >
                  {feature.requiresAuth && !isAuthenticated ? "Sign in to access" : "Learn more"}
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </BlurEffect>
        ))}
      </div>
    </section>
  );
};

export default Features;
