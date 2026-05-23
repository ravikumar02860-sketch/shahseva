import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import { ImageIcon, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../utils/useIntersectionObserver';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(loadingProp === 'eager' ? src : undefined);
  const [retryCount, setRetryCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(containerRef, {
    freezeOnceVisible: true,
    rootMargin: '200px', // Start loading earlier
  });

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (loadingProp === 'eager') {
      setCurrentSrc(src);
      setError(false);
      return;
    }

    if (isVisible) {
      setCurrentSrc(src);
    } else {
      setCurrentSrc(undefined);
      setIsLoaded(false);
    }
    setError(false);
    setRetryCount(0);
  }, [src, loadingProp, isVisible]);

  const handleLoad = () => {
    setIsLoaded(true);
    setError(false);
  };

  const handleError = () => {
    if (retryCount < 2) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setCurrentSrc(`${src}${src?.includes('?') ? '&' : '?' }retry=${retryCount + 1}`);
      }, 1000);
    } else {
      setIsLoaded(true); // Stop spinner
      setError(true);
      if (fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden bg-slate-100 min-h-[200px]", containerClassName)}
    >
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-200 overflow-hidden">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-slate-400 opacity-20" />
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 p-4 text-center">
          <AlertCircle className="w-8 h-8 mb-2 opacity-20" />
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Failed to load image</span>
        </div>
      )}

      {currentSrc && (
        <img
          {...props}
          src={currentSrc}
          alt={alt}
          loading={loadingProp}
          fetchPriority={props.fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-all duration-1000 ease-in-out w-full h-full object-cover",
            !isLoaded ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0",
            className
          )}
        />
      )}
    </div>
  );
}
