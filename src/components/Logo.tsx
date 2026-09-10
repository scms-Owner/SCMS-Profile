import React, { useState } from 'react';
import { CompanyLogoSeal } from './CompanyLogoSeal';
import { normalizeAssetUrl } from '../utils/imageUtils';

interface LogoProps {
  variant?: 'full' | 'compact' | 'footer' | 'seal-only';
  className?: string;
  theme?: 'gold' | 'blue' | 'white';
  sealSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'gold',
  sealSize,
}) => {
  const [imageError, setImageError] = useState(false);

  // Size calculation based on variant
  const defaultSize = variant === 'compact' ? 42 : variant === 'footer' ? 52 : 48;
  const currentSize = sealSize || defaultSize;

  if (variant === 'seal-only') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        {!imageError ? (
          <img
            src={normalizeAssetUrl('company-logo.jpg')}
            alt="SOHANUR CONSTRUCTION & MANPOWER SOLUTION Logo"
            className="rounded-full object-cover shadow-lg border border-[#d4af37]/40"
            style={{ width: currentSize, height: currentSize }}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <CompanyLogoSeal size={currentSize} theme={theme} />
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Seal Badge */}
      <div className="relative flex-shrink-0 group">
        <div className="relative rounded-full p-0.5 bg-gradient-to-br from-[#fce089] via-[#d4af37] to-[#8d6910] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105">
          <div className="rounded-full overflow-hidden bg-[#0c0d12] flex items-center justify-center">
            {!imageError ? (
              <img
                src={normalizeAssetUrl('company-logo.jpg')}
                alt="SOHANUR CONSTRUCTION & MANPOWER SOLUTION"
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ width: currentSize, height: currentSize }}
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <CompanyLogoSeal size={currentSize} theme={theme} />
            )}
          </div>
        </div>

        {/* Small glowing verification dot */}
        <span
          className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#0c0d12] shadow-[0_0_8px_#10b981]"
          title="Verified Corporate Entity"
        ></span>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-black tracking-wider text-base sm:text-lg text-white font-['Montserrat'] leading-tight">
            SOHANUR
          </span>
          <span className="text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-[#d4af37]/20 text-[#fce089] border border-[#d4af37]/40 tracking-widest uppercase">
            SCMS
          </span>
        </div>

        <span className="text-[10px] sm:text-[11.5px] font-extrabold text-[#d4af37] tracking-wider uppercase font-['Montserrat'] leading-tight mt-0.5">
          CONSTRUCTION &amp; MANPOWER SOLUTION
        </span>

        {variant !== 'compact' && (
          <span className="text-[9px] text-gray-400 font-semibold tracking-widest uppercase mt-0.5 hidden sm:block">
            BUILDING TRUST, DELIVERING QUALITY
          </span>
        )}
      </div>
    </div>
  );
};
