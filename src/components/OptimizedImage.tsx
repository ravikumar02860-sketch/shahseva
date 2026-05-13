import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { ImageIcon, AlertCircle } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  fetchPriority?: "high" | "low" | "auto";
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className, 
  loading: loadingProp,
  fallbackSrc = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
  containerClassName,
  ...props 
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setCurrentSrc(src);
    setRetryCount(0);
  }, [src]);

  const handleLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    if (retryCount < 2) {
      // Small delay before retry
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setCurrentSrc(`${src}${src?.includes('?') ? '&' : '?' }retry=${retryCount + 1}`);
      }, 1000);
    } else {
      setLoading(false);
      setError(true);
      if (fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    }
  };

  return (
    <div className={cn("relative overflow-hidden bg-slate-100", containerClassName)}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-slate-200">
          <ImageIcon className="w-8 h-8 text-slate-400 opacity-20" />
        </div>
      )}
      
      {error && !loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-4 text-center">
          <AlertCircle className="w-8 h-8 mb-2 opacity-20" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Failed to load portrait</span>
        </div>
      )}

      <img
        {...props}
        src={currentSrc}
        alt={alt}
        loading={loadingProp}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-all duration-700 ease-in-out",
          loading ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0",
          className
        )}
        style={{ 
          opacity: loading ? 0 : 1 
        }}
      />
    </div>
  );
}
