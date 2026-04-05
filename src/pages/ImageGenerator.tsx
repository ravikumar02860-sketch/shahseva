import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, Download, Loader2, Key, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../utils/cn';

// Extend Window interface for AI Studio specific functions
declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

type ImageSize = '1K' | '2K' | '4K';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>('1K');
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasApiKey, setHasApiKey] = useState<boolean>(false);

  useEffect(() => {
    checkApiKey();
  }, []);

  const checkApiKey = async () => {
    if (window.aistudio) {
      try {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        // Also check if the environment variable is actually present
        const envKey = (process.env as any).API_KEY;
        setHasApiKey(hasKey && !!envKey);
      } catch (err) {
        console.error("Error checking API key:", err);
        setHasApiKey(false);
      }
    }
  };

  const handleSelectKey = async () => {
    if (window.aistudio) {
      try {
        await window.aistudio.openSelectKey();
        // As per guidelines, assume success after triggering the dialog
        setHasApiKey(true);
        setError(null);
      } catch (err) {
        console.error("Error opening key selector:", err);
      }
    }
  };

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    // Final check before proceeding
    const apiKey = (process.env as any).API_KEY;
    if (!apiKey) {
      setError("API Key is missing. Please select an API key to continue.");
      setHasApiKey(false);
      return;
    }

    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      // Create a new instance right before the call to ensure we use the latest key
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        },
      });

      let foundImage = false;
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data;
            setGeneratedImage(`data:image/png;base64,${base64Data}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("The model did not return an image. This can happen with certain prompts. Please try rephrasing.");
      }
    } catch (err: any) {
      console.error("Image generation error:", err);
      
      // Handle specific API key errors
      if (err.message?.includes("Requested entity was not found") || 
          err.message?.includes("API key not valid") ||
          err.message?.includes("403") ||
          err.message?.includes("401")) {
        setError("Your API key appears to be invalid or lacks sufficient permissions. Please re-select a valid paid API key.");
        setHasApiKey(false);
      } else {
        setError(err.message || "An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `charity-image-${Date.now()}.png`;
    link.click();
  };

  return (
    <div className="pt-24 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-primary text-accent rounded-2xl flex items-center justify-center shadow-lg">
            <ImageIcon size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary">Charity Image Generator</h1>
            <p className="text-slate-500">Create high-quality promotional images for your campaigns</p>
          </div>
        </div>

        {!hasApiKey ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Key size={32} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">API Key Required</h2>
            <p className="text-slate-500 mb-8">
              To generate high-quality images, you need to select a paid Gemini API key. 
              This ensures you have the necessary quota for image generation.
            </p>
            <button 
              onClick={handleSelectKey}
              className="btn-primary btn-lg mx-auto"
            >
              <Key size={20} />
              Select API Key
            </button>
            <p className="mt-6 text-xs text-slate-400">
              Learn more about <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline">Gemini API billing</a>.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-xl font-serif font-bold text-primary mb-6">Settings</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Prompt</label>
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the image you want to create..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm h-32 resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Image Size</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['1K', '2K', '4K'] as ImageSize[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={cn(
                            "py-2 rounded-lg text-sm font-bold transition-all border",
                            size === s 
                              ? "bg-primary text-white border-primary shadow-md" 
                              : "bg-white text-slate-500 border-slate-200 hover:border-primary"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-rose-50 text-rose-600 rounded-xl text-xs flex items-start gap-2">
                      <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button 
                    onClick={generateImage}
                    disabled={loading || !prompt.trim()}
                    className="btn-primary btn-lg w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={24} className="animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles size={24} />
                        Generate Image
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button 
                onClick={handleSelectKey}
                className="w-full py-3 text-slate-400 hover:text-primary text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Key size={14} />
                Change API Key
              </button>
            </div>

            {/* Preview */}
            <div className="lg:col-span-8">
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                {loading ? (
                  <div className="text-center space-y-4">
                    <div className="relative">
                      <div className="w-24 h-24 border-4 border-slate-100 border-t-primary rounded-full animate-spin mx-auto"></div>
                      <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" size={32} />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-primary text-lg">Creating your masterpiece...</p>
                      <p className="text-slate-400 text-sm">This may take up to 30 seconds</p>
                    </div>
                  </div>
                ) : generatedImage ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full h-full flex flex-col items-center"
                  >
                    <img 
                      src={generatedImage} 
                      alt="Generated charity promotional" 
                      className="max-w-full max-h-[600px] rounded-2xl shadow-2xl object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <button 
                      onClick={downloadImage}
                      className="mt-6 bg-accent text-primary font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-accent-light transition-all flex items-center gap-2"
                    >
                      <Download size={20} />
                      Download Image
                    </button>
                  </motion.div>
                ) : (
                  <div className="text-center text-slate-300 space-y-4">
                    <ImageIcon size={64} className="mx-auto opacity-20" />
                    <p className="font-medium">Your generated image will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
