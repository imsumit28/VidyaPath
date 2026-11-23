import React from 'react';
import logoImg from '../../assets/logo.png';

interface VidyaPathLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export const VidyaPathLogo: React.FC<VidyaPathLogoProps> = ({
  size = 'md',
  showWordmark = true,
  variant = 'dark',
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-9 h-9 rounded-xl',
    lg: 'w-12 h-12 rounded-xl',
    xl: 'w-20 h-20 rounded-2xl',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official VidyaPath Logo Image */}
      <div
        className={`relative ${iconDimensions[size]} shrink-0 flex items-center justify-center overflow-hidden bg-white shadow-2xs border border-blue-200/80 p-0.5 transition-transform hover:scale-105`}
      >
        <img
          src={logoImg}
          alt="VidyaPath Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Typography Wordmark & Tagline */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center">
            <span
              className={`font-extrabold tracking-tight font-sans ${textSizes[size]} ${
                variant === 'dark' ? 'text-slate-900' : 'text-white'
              }`}
            >
              Vidya
              <span className={variant === 'dark' ? 'text-blue-600' : 'text-blue-400'}>
                Path
              </span>
            </span>
          </div>

          <span
            className={`font-medium tracking-tight mt-1 ${taglineSizes[size]} ${
              variant === 'dark' ? 'text-slate-500' : 'text-blue-200'
            }`}
          >
            Learn Step by Step. Grow Every Day.
          </span>
        </div>
      )}
    </div>
  );
};
