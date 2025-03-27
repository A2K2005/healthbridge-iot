
import React, { useState } from 'react';
import ChatButton from './ChatButton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ChatInterface from './ChatInterface';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton onClick={toggleChat} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] h-[500px] flex flex-col">
          <DialogHeader>
            <DialogTitle>TIET Medi-Care Assistant</DialogTitle>
          </DialogHeader>
          <ChatInterface isOpen={isOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
