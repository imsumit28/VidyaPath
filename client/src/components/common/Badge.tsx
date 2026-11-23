import React from 'react';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'sky' | 'blue' | 'teal' | 'emerald' | 'amber' | 'slate' | 'rose' | 'indigo';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sky',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    sky: 'bg-sky-50 text-sky-700 border-sky-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    teal: 'bg-blue-50 text-blue-700 border-blue-200',
    emerald: 'bg-blue-50 text-blue-700 border-blue-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold rounded-md border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
