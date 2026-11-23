import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import { VidyaPathLogo } from '../components/common/VidyaPathLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="flex items-center justify-center mx-auto">
        <VidyaPathLogo size="xl" showWordmark={false} />
      </div>


      <div className="space-y-2">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
          404 Error • Path Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Page Not In Curriculum
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          The requested page or topic URL does not exist or may have been reorganized.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/classes"
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-5 py-2.5 rounded-xl border border-slate-300 transition-colors"
        >
          <Compass className="w-4 h-4 text-slate-400" />
          <span>Explore Classes</span>
        </Link>
      </div>
    </div>
  );
};
