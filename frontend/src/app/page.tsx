'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useWebSocket from '@/lib/hooks/useWebsocket';
import { useEffect, useState } from 'react';
import Roadmap from '@/components/roadmap';
export default function Home() {
  const {messages, sendMessage } = useWebSocket('ws://localhost:5000');
  const [prompt, setPrompt] = useState('');
  const [chatLine, setChatLine] = useState<any[]>([]);
  const [history, setHistory] = useState<string[]>([]);


  // useEffect(() => {
  //   if (messages.length > 0 && messages[messages.length - 1] !== 'END_OF_STREAM') {
  //     setHistory([...history, messages[messages.length - 1]]);
  //   }
  // }, [messages])

  // useEffect(() => {
  //   if (history.length > 0 && history[history.length - 1] === 'END_OF_STREAM') {
  //     // Копируем messages в chatLine
  //     setChatLine([...chatLine, [...history]]);
    
  //   }

  //   else{
  //     setHistory([]);
  //   }
  // }, [messages]);
  
  const handleSend = () => {
    if (prompt.trim() !== '') {

      sendMessage(prompt);
      setPrompt('');
    }
  };

  


  useEffect(() => {
    console.log(messages);
    console.log(chatLine);
    console.log(history);
  }, [messages]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <h1 className="text-3xl font-bold">Chat Generator via WebSockets</h1>
      </header>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Message</h2>
          <div className="flex space-x-2">
            <Input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt"
              className="flex-1 px-4 py-2 border rounded-lg"
            />
            <Button
              onClick={handleSend}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Send
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          <div className="space-y-2">
          <Roadmap title="Chat" messages={messages} />
          </div>
        </div>
      </main>
    </div>
  );
}
