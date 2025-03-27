
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg flex items-center justify-center bg-medical-blue-600 hover:bg-medical-blue-700 z-50"
      onClick={onClick}
      aria-label="Open AI assistant"
    >
      <MessageSquare className="w-6 h-6" />
    </Button>
  );
};

export default ChatButton;
