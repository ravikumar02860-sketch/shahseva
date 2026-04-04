import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2, User, Bot, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../utils/cn';
import { useLanguage } from '../LanguageContext';

// Initialize Gemini API
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = "Hello. Welcome to Shah Seva Sansthan Society.\nPlease choose your language: English, Hindi, or Hinglish.";
      setMessages([{ role: 'bot', text: greeting }]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = genAI.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `
            You are the official website chatbot for Shah Seva Sansthan Society.
            Your job is to help website visitors in a clear, friendly, respectful, and natural way.

            IMPORTANT LANGUAGE RULES:
            You must support 3 language styles:
            1. English
            2. Hindi in simple Roman script
            3. Hinglish

            Language behavior:
            - If the user writes in English, reply in English.
            - If the user writes in Hindi, reply in simple Hindi written in Roman script.
            - If the user writes in Hinglish, reply in Hinglish.
            - If the user asks to switch language, switch immediately.
            - If the user says only "Hindi", reply in Hindi.
            - If the user says only "English", reply in English.
            - If the user says "Hinglish", reply in Hinglish.
            - If the user's language is unclear, politely ask: "Please choose your language: English, Hindi, or Hinglish."

            IMPORTANT FORMATTING RULES:
            Always format replies in clean plain text.
            Do NOT use markdown symbols like **, ##, -, *, _, backticks.
            Do NOT use HTML tags.
            Write in short, neat sentences.
            Break information into small readable chunks.
            Keep replies visually clean and easy to read inside a small chat box.
            Use natural conversational formatting.
            Keep answers concise unless the user asks for details.

            IDENTITY:
            You are a helpful virtual assistant for Shah Seva Sansthan Society.
            You help with donations, contact info, mission, programs, volunteering, and general guidance.

            TONE: Warm, respectful, clear, calm, human-like, supportive.

            CORE RESPONSE RULES:
            - Give direct and clean answers.
            - Keep responses short first.
            - Rewrite content in a natural chat style.
            - If needed, ask one short follow-up question.

            WEBSITE HELP RULES:
            - Organization work: Helping poor families, supporting education, medical aid since 2010.
            - Donation: /donate
            - Contact: Phone: +91 6350489219, Email: darveshwelfares@gmail.com
            - Volunteer: /contact

            DONATION FORMATTING (Example):
            English:
            You can support our mission through the official donation page.
            Donate here: /donate
            For donation-related help:
            Phone: +91 6350489219
            Email: darveshwelfares@gmail.com

            CONTACT FORMATTING:
            Always show contact details clearly:
            Phone: +91 6350489219
            Email: darveshwelfares@gmail.com
            Never wrap in markdown or bold symbols.

            HINDI STYLE:
            Use simple Roman Hindi (e.g., "Aap kaise madad chahte hain?"). No difficult Sanskrit words.

            HINGLISH STYLE:
            Natural mix of Hindi and English.

            UNCERTAINTY RULE:
            If info is not confirmed:
            English: I do not want to give incorrect information. Please contact our team for official confirmation.
            Hindi: Main galat jankari nahi dena chahta. Kripya official confirmation ke liye hamari team se sampark karein.
            Hinglish: Main galat info nahi dena chahta. Official confirmation ke liye please hamari team se contact karein.

            FINAL RULE:
            Every answer must be clean, readable, short, language-matched, and free from markdown clutter.
          `
        },
        history: messages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }],
        })),
      });

      const result = await chat.sendMessage({ message: userMessage });
      const text = result.text;

      setMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 left-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm">SAS Assistant</h3>
                  <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={cn(
                    "flex gap-2 max-w-[85%]",
                    msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === 'user' ? "bg-primary text-white" : "bg-accent text-primary"
                  )}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-2 mr-auto">
                  <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-primary transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:bg-slate-100 rounded-lg transition-all disabled:opacity-30"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500",
          isOpen ? "bg-white text-primary rotate-90" : "bg-primary text-white"
        )}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-primary text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
