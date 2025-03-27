
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
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
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
    };
    
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        isUser: false,
      };
      setMessages(prev => [...prev, responseMessage]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('appointment') || input.includes('book')) {
      return 'You can book an appointment through our appointment section. Would you like me to guide you there?';
    } else if (input.includes('emergency')) {
      return 'For emergencies, please use our emergency tracking feature or call our helpline at +91-XXX-XXX-XXXX immediately.';
    } else if (input.includes('mental health') || input.includes('stress') || input.includes('anxiety')) {
      return 'We offer various mental health resources and counseling services. Would you like to know more about them?';
    } else if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I assist you with TIET Medi-Care services today?';
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
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.isUser
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
