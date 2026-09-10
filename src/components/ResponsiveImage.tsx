import React, { useState, useRef, useEffect } from 'react';
import { getWebpUrl, getResponsiveSrcSet, getDefaultSizes, normalizeAssetUrl } from '../utils/imageUtils';
import { HardHat } from 'lucide-react';

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  widths?: number[];
  sizes?: string;
  layout?: 'gallery' | 'card' | 'hero' | 'thumb' | 'fullscreen';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  priority?: boolean;
  quality?: number;
  id?: string;
  onLoad?: () => void;
  style?: React.CSSProperties;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  widths,
  sizes,
  layout = 'card',
  loading = 'lazy',
  decoding = 'async',
  priority = false,
  quality = 80,
  id,
  onLoad,
  style,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [finalFailed, setFinalFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
      return;
    }
    const onLoadListener = () => setIsLoaded(true);
    const onErrorListener = () => {
      if (!hasError) {
        setHasError(true);
      } else {
        setFinalFailed(true);
      }
    };
    img.addEventListener('load', onLoadListener);
    img.addEventListener('error', onErrorListener);
    return () => {
      img.removeEventListener('load', onLoadListener);
      img.removeEventListener('error', onErrorListener);
    };
  }, [src, hasError]);

  const webpSrc = getWebpUrl(src, undefined, quality);
  const webpSrcSet = getResponsiveSrcSet(src, widths, quality);
  const computedSizes = sizes || getDefaultSizes(layout as 'card' | 'gallery' | 'hero' | 'thumb' | 'fullscreen');
  const imageLoading = priority ? 'eager' : loading;
  const fallbackSrc = normalizeAssetUrl(src.endsWith('.webp') ? src.replace(/\.webp$/i, '.jpg') : src);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true);
    } else {
      setFinalFailed(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      id={id ? `${id}-container` : undefined}
    >
      {/* Subtle skeleton shimmer placeholder while loading */}
      {!isLoaded && !hasError && !priority && !finalFailed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#12141c] animate-pulse pointer-events-none z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}

      {finalFailed ? (
        <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#1c202d] to-[#0c0d12] border border-[#d4af37]/30 text-center select-none">
          <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center mb-2">
            <HardHat className="w-5 h-5 text-[#d4af37]" />
          </div>
          <p className="text-[11px] font-bold text-gray-300 font-['Montserrat'] tracking-wide line-clamp-1">{alt}</p>
          <span className="text-[9px] text-[#d4af37]/80 font-mono uppercase mt-0.5">SOHANUR CONSTRUCTION</span>
        </div>
      ) : (
        /* Modern Picture element with WebP source and fallback */
        <picture>
          {!hasError && webpSrcSet && (
            <source
              type="image/webp"
              srcSet={webpSrcSet}
              sizes={computedSizes}
            />
          )}
          <img
            ref={imgRef}
            id={id}
            src={hasError ? fallbackSrc : webpSrc}
            alt={alt}
            srcSet={!hasError && webpSrcSet ? webpSrcSet : undefined}
            sizes={computedSizes}
            loading={imageLoading}
            decoding={decoding}
            fetchPriority={priority ? 'high' : undefined}
            onLoad={handleImageLoad}
            onError={handleImageError}
            referrerPolicy="no-referrer"
            style={style}
            className={`${className} transition-opacity duration-300 ease-out will-change-[opacity] ${
              isLoaded || priority || hasError ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </picture>
      )}
    </div>
  );
};
