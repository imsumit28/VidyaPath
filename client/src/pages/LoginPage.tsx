import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User,
  ArrowRight,
  Sparkles,
  Check,
  Play,
  BookOpen,
} from 'lucide-react';
import { useLearningProgress } from '../context/LearningProgressContext';
import { CLASSES_LIST } from '../data/curriculumData';
import type { ClassId } from '../types';
import { VidyaPathLogo } from '../components/common/VidyaPathLogo';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    loginStudent,
    loadSupervisorDemoProfile,
    isLoggedIn,
    studentName: currentName,
    selectedClass: currentClass,
  } = useLearningProgress();

  const [name, setName] = useState(isLoggedIn && currentName ? currentName : '');
  const [chosenClass, setChosenClass] = useState<ClassId>(currentClass || '10');
  const [error, setError] = useState<string>('');

  const currentChosenClassInfo =
    CLASSES_LIST.find((c) => c.id === chosenClass) || CLASSES_LIST[2];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name to start learning.');
      return;
    }
    setError('');
    loginStudent(name.trim(), chosenClass);
    navigate(`/class/${chosenClass}`);
  };

  const handleSupervisorDemo = () => {
    loadSupervisorDemoProfile();
    navigate('/class/10');
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-white grid grid-cols-1 lg:grid-cols-12">
      {/* =========================================================================
          LEFT SIDE: MODERN PRODUCT SHOWCASE (BLACK & WHITE THEME - ZERO SCROLLING)
          ========================================================================= */}
      <div className="lg:col-span-5 xl:col-span-5 h-full bg-black border-r border-neutral-800 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
        {/* Top: Brand Header */}
        <div className="flex items-center justify-between relative z-10 shrink-0">
          <VidyaPathLogo size="md" variant="light" />
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-medium text-[11px] tracking-wide">Classes 8-12</span>
          </div>
        </div>

        {/* Middle: Clear Value Pitch & Compact Sleek Roadmap Card */}
        <div className="space-y-4 my-auto py-2 relative z-10">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Master every chapter, <span className="text-neutral-400">one step at a time.</span>
            </h1>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              A distraction-free learning roadmap for school students. Curated concept lessons, formula notes, and chapter tests in sequential order.
            </p>
          </div>

          {/* Interactive Preview Card: Monochrome Dark Roadmap Card */}
          <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-4 shadow-xl space-y-3 max-w-md">
            <div className="flex items-center justify-between pb-2.5 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs">
                  10
                </div>
                <div>
                  <span className="text-xs font-bold text-white block leading-tight">
                    Class 10 • Mathematics
                  </span>
                  <span className="text-[10px] text-neutral-400">Chapter 1: Real Numbers</span>
                </div>
              </div>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-200 border border-neutral-700 uppercase tracking-wider">
                Roadmap
              </span>
            </div>

            {/* Step Milestone Items */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded-xl bg-black border border-neutral-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-neutral-200 text-[11px]">1. Fundamental Theorem of Arithmetic</span>
                </div>
                <span className="text-[9px] text-neutral-400 font-mono">Completed</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-800 border border-neutral-700 text-xs font-semibold text-white">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-xs">
                    <Play className="w-2 h-2 fill-current ml-0.5" />
                  </div>
                  <span className="text-[11px]">2. Revisiting Irrational Numbers</span>
                </div>
                <span className="text-[9px] text-black font-bold bg-white px-1.5 py-0.5 rounded">
                  Current
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-black/60 border border-neutral-800/60 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-neutral-700 text-neutral-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-2 h-2 text-neutral-400" />
                  </div>
                  <span className="text-[11px]">3. Chapter Self-Check & MCQs</span>
                </div>
                <span className="text-[9px] text-neutral-500">Up next</span>
              </div>
            </div>
          </div>

          {/* 3 Value Highlights */}
          <div className="grid grid-cols-3 gap-2 max-w-md">
            <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl text-center">
              <span className="block text-xs font-bold text-white">100% Free</span>
              <span className="text-[10px] text-neutral-400">No paywalls</span>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl text-center">
              <span className="block text-xs font-bold text-white">Zero Feeds</span>
              <span className="text-[10px] text-neutral-400">No distractions</span>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-xl text-center">
              <span className="block text-xs font-bold text-white">NCERT Order</span>
              <span className="text-[10px] text-neutral-400">Board aligned</span>
            </div>
          </div>
        </div>

        {/* Bottom: Standards & Privacy Notice */}
        <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500 font-medium relative z-10 shrink-0">
          <span>CBSE & State Board Curricula</span>
          <span>Open School Initiative</span>
        </div>
      </div>

      {/* =========================================================================
          RIGHT SIDE: STUDENT SIGN IN FORM (FULL HEIGHT, CENTERED & CLEAN)
          ========================================================================= */}
      <div className="lg:col-span-7 xl:col-span-7 h-full flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          {/* Brand Logo & Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <VidyaPathLogo size="md" variant="dark" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80">
                Student Portal
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome to VidyaPath
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Enter your name and pick your class to enter your classroom.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold animate-fade-in">
                {error}
              </div>
            )}

            {/* 1. Student Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="student-name"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700"
              >
                Your Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="student-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 placeholder:font-normal focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                />
              </div>
            </div>

            {/* 2. Compact 5-Button Class Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Your Class
                </label>
                <span className="text-[11px] font-semibold text-blue-600">
                  Filtered to Class {chosenClass}
                </span>
              </div>

              {/* 5-Button Grid */}
              <div className="grid grid-cols-5 gap-2">
                {CLASSES_LIST.map((cls) => {
                  const isSelected = chosenClass === cls.id;
                  return (
                    <button
                      key={cls.id}
                      type="button"
                      onClick={() => setChosenClass(cls.id)}
                      className={`py-3 px-1 rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center ${
                        isSelected
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm ring-2 ring-blue-500/30'
                          : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-base sm:text-lg font-extrabold leading-none">
                        {cls.id}
                      </span>
                      <span
                        className={`text-[10px] mt-1 font-semibold uppercase tracking-wider ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}
                      >
                        Class
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Class Dynamic Summary Pill */}
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900">
                    {currentChosenClassInfo.name}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="font-semibold text-blue-700">
                    {currentChosenClassInfo.badge}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-blue-700 bg-white px-2.5 py-0.5 rounded-lg border border-blue-200">
                  {currentChosenClassInfo.subjectsCount} Subjects
                </span>
              </div>
            </div>

            {/* 3. Primary CTA Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md hover:shadow-lg shadow-blue-600/25 active:scale-98 cursor-pointer mt-2"
            >
              <span>Enter Class {chosenClass} Classroom</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 4. Supervisor Quick Demo Shortcut */}
          <div className="pt-2 border-t border-slate-100 text-center">
            <button
              type="button"
              onClick={handleSupervisorDemo}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-700 bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>Quick Sign-In: Aarav Sharma (Class 10)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
