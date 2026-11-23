import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { VidyaPathLogo } from './VidyaPathLogo';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 mt-auto text-slate-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top: Brand & Main Navigation Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="space-y-1">
            <VidyaPathLogo size="md" variant="dark" />
            <p className="text-xs text-slate-500 font-normal">
              Sequential, distraction-free learning roadmaps for school students.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <Link
              to="/classes"
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors"
            >
              Classes 8–12
            </Link>
            <Link
              to="/class/10"
              className="px-3 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors"
            >
              Class 10 Benchmark
            </Link>
            <Link
              to="/dashboard"
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors"
            >
              My Learning
            </Link>
            <Link
              to="/about"
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition-colors"
            >
              About VidyaPath
            </Link>
            <Link
              to="/about#feedback"
              className="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Feedback</span>
            </Link>
          </div>
        </div>

        {/* Middle: 3 Minimal Apple-style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* 1. Fast Syllabus Jumper */}
          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 space-y-2">
            <span className="font-semibold text-slate-900 block text-[11px] uppercase tracking-wider text-sky-700">
              Grade Curricula
            </span>
            <div className="flex flex-wrap gap-1.5 font-medium">
              {[8, 9, 10, 11, 12].map((num) => (
                <Link
                  key={num}
                  to={`/class/${num}`}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/70 text-slate-700 hover:text-sky-600 hover:border-sky-300 transition-all text-xs"
                >
                  Class {num}
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Curated textbook chapter order with modular lessons.
            </p>
          </div>

          {/* 2. Educational Purpose */}
          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 space-y-1.5">
            <div className="flex items-center gap-1.5 text-blue-800 font-semibold text-[11px] uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-blue-600" />
              <span>Open Learning</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs">
              Engineered to provide students with free, equal access to structured learning roadmaps without costly coaching subscriptions.
            </p>
          </div>

          {/* 3. Platform Privacy & Storage */}
          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 space-y-1.5">
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold text-[11px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>Privacy & Storage</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-xs">
              Runs client-side using browser LocalStorage. No tracking cookies, no personal ads, and zero paid API dependencies.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Info */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span>© {CURRENT_YEAR} VidyaPath</span>
            <span>•</span>
            <span>Structured School Learning</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>Educational Technology Initiative</span>
            </span>
            <Link to="/about" className="hover:text-slate-600 transition-colors">
              Documentation
            </Link>
            <Link to="/about#feedback" className="hover:text-slate-600 transition-colors">
              Evaluation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
