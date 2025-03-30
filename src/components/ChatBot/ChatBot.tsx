
import React, { useState } from 'react';
import ChatButton from './ChatButton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import ChatInterface from './ChatInterface';
import { Bot } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton onClick={toggleChat} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[450px] h-[600px] flex flex-col p-0 overflow-hidden gap-0">
          <DialogHeader className="p-4 border-b bg-gradient-to-r from-medical-blue-50 to-medical-green-50">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-medical-blue-100 rounded-full flex items-center justify-center mr-3">
                <Bot className="h-5 w-5 text-medical-blue-600" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold">TIET Medi-Care Assistant</DialogTitle>
                <DialogDescription className="text-sm text-gray-600">
                  Ask me anything about healthcare services
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <ChatInterface isOpen={isOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
