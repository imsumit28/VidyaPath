import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-slate-500 py-2 overflow-x-auto whitespace-nowrap">
      <Link
        to="/"
        className="flex items-center gap-1 text-slate-500 hover:text-sky-600 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-slate-400 mx-1.5 shrink-0" />
            {isLast || !item.path ? (
              <span className="font-semibold text-slate-800 max-w-[240px] truncate" title={item.label}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-slate-500 hover:text-sky-600 transition-colors max-w-[200px] truncate"
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
