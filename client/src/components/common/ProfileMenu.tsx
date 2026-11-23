import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  BookOpen,
  LayoutDashboard,
  LogOut,
  Check,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { CLASSES_LIST } from '../../data/curriculumData';
import type { ClassId } from '../../types';

export const ProfileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    studentName,
    selectedClass,
    setSelectedClass,
    isLoggedIn,
    logoutStudent,
    getClassProgress,
  } = useLearningProgress();

  const currentClassInfo =
    CLASSES_LIST.find((c) => c.id === selectedClass) || CLASSES_LIST[2];
  const classProgress = getClassProgress(selectedClass);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Generate initials from student name
  const getInitials = (name: string) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return (name.slice(0, 2) || 'VP').toUpperCase();
  };

  const handleClassChange = (newClassId: ClassId) => {
    setSelectedClass(newClassId);
    setIsOpen(false);

    // If currently on a class or subject page, navigate to the newly selected class
    if (location.pathname.startsWith('/class')) {
      navigate(`/class/${newClassId}`);
    } else if (location.pathname.startsWith('/learn')) {
      navigate(`/class/${newClassId}`);
    }
  };

  const handleSignOut = () => {
    logoutStudent();
    setIsOpen(false);
    navigate('/login');
  };

  if (!isLoggedIn) {
    return (
      <button
        onClick={() => navigate('/login')}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
      >
        <GraduationCap className="w-4 h-4" />
        <span>Student Sign In</span>
      </button>
    );
  }

  const firstName = studentName.split(' ')[0] || 'Student';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-blue-50/50 text-slate-800 text-xs font-semibold shadow-2xs hover:border-blue-300 transition-all cursor-pointer group active:scale-98"
      >
        {/* Avatar with initials & active status dot */}
        <div className="relative">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-700 to-sky-500 text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
            {getInitials(studentName)}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-white" />
        </div>

        {/* Student name & active class pill */}
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold text-slate-900 leading-tight max-w-[110px] truncate">
            {firstName}
          </span>
          <span className="text-[10px] font-semibold text-blue-700">
            Class {selectedClass}
          </span>
        </div>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-700' : ''
          }`}
        />
      </button>

      {/* Profile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-88 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 z-50 overflow-hidden animate-fade-in divide-y divide-slate-100">
          {/* 1. Header with Student Identity & Progress */}
          <div className="p-4 bg-gradient-to-b from-blue-50/50 to-white">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                  {getInitials(studentName)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm truncate" title={studentName}>
                    {studentName}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-100 text-blue-800">
                      Class {selectedClass}
                    </span>
                    <span className="text-[11px] text-slate-500 truncate">
                      {currentClassInfo.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Class Progress */}
            <div className="mt-3.5 pt-3 border-t border-slate-200/70 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-slate-600">
                <span className="font-medium">Class {selectedClass} Mastery</span>
                <span className="font-bold text-slate-900">{classProgress.percentage}%</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(3, classProgress.percentage))}%` }}
                />
              </div>
            </div>
          </div>

          {/* 2. CHANGE CLASS SELECTOR */}
          <div className="p-3.5 space-y-2.5 bg-white">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Change Enrolled Class
              </span>
              <span className="text-[10px] font-semibold text-blue-600">
                Switches all visible content
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1.5">
              {CLASSES_LIST.map((cls) => {
                const isSelected = cls.id === selectedClass;
                return (
                  <button
                    key={cls.id}
                    onClick={() => handleClassChange(cls.id)}
                    className={`flex flex-col items-center justify-center p-2 rounded-xl text-center border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-2xs ring-1 ring-blue-500/30'
                        : 'border-slate-200/80 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-300'
                    }`}
                    title={`${cls.name} (${cls.badge})`}
                  >
                    <span className="text-xs font-bold leading-none">{cls.id}</span>
                    <span className="text-[9px] text-slate-400 mt-1 uppercase font-medium">
                      Class
                    </span>
                    {isSelected && (
                      <Check className="w-3 h-3 text-blue-600 mt-0.5 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Navigation Shortcuts */}
          <div className="p-2 space-y-0.5">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate(`/class/${selectedClass}`);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Class {selectedClass} Curriculum Roadmaps</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/dashboard');
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="w-4 h-4 text-blue-600" />
                <span>My Learning Dashboard</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/login');
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Switch Student / Re-Login</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* 4. Sign Out */}
          <div className="p-2 bg-slate-50">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors text-left"
            >
              <LogOut className="w-4 h-4 text-rose-500" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
