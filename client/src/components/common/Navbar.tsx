import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  LayoutDashboard,
  Info,
  Menu,
  X,
  GraduationCap,
  LogOut,
} from 'lucide-react';

import { useLearningProgress } from '../../context/LearningProgressContext';
import type { ClassId } from '../../types';
import { VidyaPathLogo } from './VidyaPathLogo';
import { ProfileMenu } from './ProfileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {
    selectedClass,
    setSelectedClass,
    studentName,
    isLoggedIn,
    logoutStudent,
  } = useLearningProgress();

  const navLinks = [
    { label: 'Home', path: '/', icon: Compass },
    {
      label: `Class ${selectedClass} Curriculum`,
      path: `/class/${selectedClass}`,
      icon: BookOpen,
    },
    { label: 'My Learning', path: '/dashboard', icon: LayoutDashboard },
    { label: 'About', path: '/about', icon: Info },
  ];

  const classOptions: { id: ClassId; label: string }[] = [
    { id: '8', label: 'Class 8' },
    { id: '9', label: 'Class 9' },
    { id: '10', label: 'Class 10' },
    { id: '11', label: 'Class 11' },
    { id: '12', label: 'Class 12' },
  ];

  return (
    <header className="site-header sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Announcement & Quick Demo Banner */}
      <div className="site-utility-bar bg-slate-900 text-slate-300 px-4 py-1.5 text-xs font-medium flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="utility-label bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase">
              Free Learning
            </span>
            <span className="hidden sm:inline text-slate-300">
              Structured Step-by-Step Curriculum for School Students (Classes 8–12)
            </span>
            <span className="sm:hidden text-slate-300">Class {selectedClass} Active</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
            <span>NCERT & CBSE Aligned</span>
            <span>•</span>
            <span className="text-blue-300 font-medium">100% Free & Open Access</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="site-nav-row flex items-center justify-between h-[74px]">
          {/* Brand Logo Component */}
          <Link to="/" className="flex items-center group">
            <VidyaPathLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="site-nav-links hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`site-nav-link inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-[13px] font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Profile Button & Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {isLoggedIn ? (
              <ProfileMenu />
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4.5 py-2.5 rounded-xl transition-all shadow-xs active:scale-95"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Student Sign In</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button & quick profile icon */}
          <div className="flex sm:hidden items-center gap-2">
            {isLoggedIn && <ProfileMenu />}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="site-mobile-toggle p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="site-mobile-menu sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {isLoggedIn ? (
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-medium text-slate-500">Active Student:</span>
              <span className="text-xs font-bold text-slate-900">
                {studentName} (Class {selectedClass})
              </span>
            </div>
          ) : (
            <div className="pb-2 border-b border-slate-100">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-xs font-bold py-2.5 rounded-xl"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Sign In / Select Class</span>
              </Link>
            </div>
          )}

          {/* Quick Class Switcher in Drawer */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-600">Change Class:</span>
            <div className="flex gap-1">
              {classOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedClass(opt.id)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all ${
                    selectedClass === opt.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {opt.id}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 space-y-2">
            {isLoggedIn && (
              <button
                onClick={() => {
                  logoutStudent();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 text-rose-600 bg-rose-50 hover:bg-rose-100 text-xs font-bold py-2 rounded-xl"
              >
                <LogOut className="w-4 h-4 text-rose-500" />
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
