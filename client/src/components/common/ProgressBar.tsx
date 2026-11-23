import React from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
  percentage?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  colorTheme?: 'sky' | 'blue' | 'teal' | 'emerald' | 'amber';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
  percentage,
  size = 'md',
  showLabel = true,
  colorTheme = 'sky',
}) => {
  const calcPercent = percentage !== undefined ? percentage : total > 0 ? Math.round((completed / total) * 100) : 0;
  const clampedPercent = Math.min(100, Math.max(0, calcPercent));

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  };

  const barColors = {
    sky: 'bg-sky-600',
    blue: 'bg-blue-600',
    teal: 'bg-blue-600',
    emerald: 'bg-blue-600',
    amber: 'bg-amber-500',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center text-xs mb-1.5 font-medium text-slate-600">
          <span>
            {completed} of {total} completed
          </span>
          <span className="font-bold text-slate-800">{clampedPercent}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClasses[size]}`}>
        <div
          className={`${barColors[colorTheme]} h-full rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clampedPercent}%` }}
          role="progressbar"
          aria-valuenow={clampedPercent}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};
