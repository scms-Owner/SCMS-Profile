import React, { useState, useRef, useEffect } from 'react';
import { getWebpUrl, getResponsiveSrcSet, getDefaultSizes } from '../utils/imageUtils';

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
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
      return;
    }
    const onLoadListener = () => setIsLoaded(true);
    const onErrorListener = () => setHasError(true);
    img.addEventListener('load', onLoadListener);
    img.addEventListener('error', onErrorListener);
    return () => {
      img.removeEventListener('load', onLoadListener);
      img.removeEventListener('error', onErrorListener);
    };
  }, [src]);

  const webpSrc = getWebpUrl(src, undefined, quality);
  const webpSrcSet = getResponsiveSrcSet(src, widths, quality);
  const computedSizes = sizes || getDefaultSizes(layout as 'card' | 'gallery' | 'hero' | 'thumb' | 'fullscreen');
  const imageLoading = priority ? 'eager' : loading;
  const fallbackSrc = src.endsWith('.webp') ? src.replace(/\.webp$/i, '.jpg') : src;

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    // If WebP version fails on older browsers, fallback to original or jpeg src
    if (!hasError) {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      id={id ? `${id}-container` : undefined}
    >
      {/* Subtle skeleton shimmer placeholder while loading */}
      {!isLoaded && !hasError && !priority && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#12141c] animate-pulse pointer-events-none z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}

      {/* Modern Picture element with WebP source and fallback */}
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
    </div>
  );
};
