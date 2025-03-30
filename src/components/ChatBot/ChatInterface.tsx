
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Clock, Calendar, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatInterfaceProps {
  isOpen: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your TIET Medi-Care assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const getTimeString = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: getTimeString(),
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        isUser: false,
        timestamp: getTimeString(),
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('appointment') || input.includes('book') || input.includes('doctor')) {
      return 'You can book an appointment through our appointment section. Would you like me to help you schedule one now? Our next available slot is tomorrow at 10:30 AM.';
    } else if (input.includes('emergency')) {
      return 'For emergencies, please use our emergency tracking feature or call our helpline at +91-175-239-3000 immediately. Our medical team is available 24/7.';
    } else if (input.includes('mental health') || input.includes('stress') || input.includes('anxiety')) {
      return 'We offer various mental health resources and counseling services. Our counselors are available Monday-Friday from 9 AM to 5 PM. Would you like me to connect you with a counselor?';
    } else if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I assist you with TIET Medi-Care services today? You can ask about appointments, emergency services, or mental health support.';
    } else if (input.includes('contact') || input.includes('phone') || input.includes('call')) {
      return 'You can reach TIET Medi-Care at +91-175-239-3000 or email us at medicare@thapar.edu. Our office hours are Monday to Friday, 8 AM to 6 PM.';
    } else if (input.includes('thank')) {
      return 'You\'re welcome! Is there anything else I can help you with today?';
    } else {
      return 'I\'m here to help with appointments, emergencies, mental health support, and general information about TIET Medi-Care. Could you please provide more details about your query?';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-md">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`flex max-w-[80%] items-start ${
                message.isUser ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <Avatar className={`w-8 h-8 ${message.isUser ? 'ml-2' : 'mr-2'}`}>
                <AvatarFallback className={message.isUser ? 'bg-medical-blue-100 text-medical-blue-600' : 'bg-medical-green-100 text-medical-green-600'}>
                  {message.isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </AvatarFallback>
              </Avatar>
              <div>
                <div
                  className={`rounded-2xl p-3 shadow-sm ${
                    message.isUser
                      ? 'bg-medical-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {message.text}
                </div>
                <div className={`text-xs mt-1 text-gray-500 ${message.isUser ? 'text-right' : 'text-left'}`}>
                  {message.timestamp}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start">
              <Avatar className="w-8 h-8 mr-2">
                <AvatarFallback className="bg-medical-green-100 text-medical-green-600">
                  <Bot className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-2xl p-3 shadow-sm bg-white text-gray-800 border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-gray-200 bg-white rounded-b-md">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow bg-gray-50 border-gray-200 focus:ring-medical-blue-400 rounded-full px-4"
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon"
            className="rounded-full bg-medical-blue-600 hover:bg-medical-blue-700 transition-all transform hover:scale-105"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-2">
          <div className="flex space-x-2 text-xs text-gray-500">
            <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> Appointments
            </button>
            <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors flex items-center">
              <AlertCircle className="w-3 h-3 mr-1" /> Emergency
            </button>
            <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors flex items-center">
              <Clock className="w-3 h-3 mr-1" /> Hours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
