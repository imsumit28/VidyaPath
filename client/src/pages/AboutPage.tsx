import React, { useState } from 'react';
import {
  Heart,
  Target,
  Users,
  Compass,
  CheckCircle2,
  MessageSquare,
  Send,
  FileCheck,
} from 'lucide-react';
import { useLearningProgress } from '../context/LearningProgressContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import logoImg from '../assets/logo.png';

export const AboutPage: React.FC = () => {
  const { feedbackList, addFeedback } = useLearningProgress();

  // Feedback form state
  const [name, setName] = useState('');
  const [userType, setUserType] = useState<
    'Student' | 'Teacher' | 'Parent' | 'Community Educator' | 'Other'
  >('Student');
  const [classLevel, setClassLevel] = useState('10');
  const [difficulty, setDifficulty] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const difficultiesOptions = [
    'Distraction by algorithmic video recommendations and social media feeds',
    'Inability to locate which video matches the textbook chapter sequence next',
    'Lack of concise formula cheat-sheets and quick revision summaries alongside videos',
    'Difficulty testing concept retention with immediate feedback without paying for tests',
    'Inconsistent video quality or unverified explanations from random search results',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!difficulty.trim()) {
      newErrors.difficulty = 'Please select or state your main difficulty studying online.';
    }
    if (!suggestions.trim()) {
      newErrors.suggestions = 'Please provide at least one suggestion for improving the platform.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addFeedback({
      name: name.trim() || 'Anonymous Reviewer',
      userType,
      classLevel: userType === 'Student' ? classLevel : undefined,
      difficulty: difficulty.trim(),
      suggestions: suggestions.trim(),
    });

    setSubmittedSuccess(true);
    setErrors({});
    setName('');
    setDifficulty('');
    setSuggestions('');

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 6000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About VidyaPath' }]} />

      {/* Hero Header */}
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/15 text-blue-300 border border-blue-400/20 px-3 py-1 rounded-full text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-blue-400" />
            <span>Community Education Initiative</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Technology for Community Impact
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            A focused learning roadmap designed to remove distraction and fragmentation for school students studying independently.
          </p>
        </div>

        <div className="shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-slate-200/80 hidden md:block">
          <img
            src={logoImg}
            alt="VidyaPath Official Logo"
            className="w-32 h-32 object-contain rounded-xl"
          />
        </div>
      </div>

      {/* Four Core Educational Pillars - Minimal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Problem Statement */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm">
            <Target className="w-4 h-4" />
            <span>1. Problem Statement</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Algorithmic Distraction:</strong> Generic video platforms push irrelevant entertainment feeds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Fragmented Syllabi:</strong> Online videos lack textbook chapter order and sequential flow.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>No Immediate Feedback:</strong> Videos lack built-in formula sheets and quick retention quizzes.</span>
            </li>
          </ul>
        </div>

        {/* Target Community */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm">
            <Users className="w-4 h-4" />
            <span>2. Target Community</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>Classes 8–12 Students:</strong> Free board exam and core concept preparation without coaching fees.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>Community Learning Circles:</strong> Structured roadmaps for peer groups and after-school centers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>Parents & Mentors:</strong> Clear visibility into completed chapters and syllabus progress.</span>
            </li>
          </ul>
        </div>

        {/* Proposed Solution */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
            <Compass className="w-4 h-4" />
            <span>3. Proposed Solution</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Sequential Topic Roadmaps:</strong> Step-by-step topic order matching official school curricula.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Integrated Workspace:</strong> Curated lessons + key formulas + revision notes on one page.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Privacy & Offline Readiness:</strong> Progress saved locally in browser with zero mandatory logins.</span>
            </li>
          </ul>
        </div>

        {/* Expected Benefits */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>4. Expected Outcomes</span>
          </div>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>60% Less Search Time:</strong> Instant access to the exact next topic without rabbit holes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>Higher Completion Rates:</strong> Visual progress tracking reinforces daily study momentum.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500 font-bold">•</span>
              <span><strong>Equitable Access:</strong> Quality digital learning paths regardless of family income.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Field Evaluation Phases */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs space-y-3">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">
          Field Evaluation & Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-600">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
            <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-sky-700">
              Phase 1: Teacher Advisory
            </span>
            <p>Review topic granularity with school educators to ensure CBSE and state board alignment.</p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
            <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-blue-700">
              Phase 2: Offline PWA Caching
            </span>
            <p>Add Service Worker offline notes caching for students with intermittent internet access.</p>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 space-y-1">
            <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider text-indigo-700">
              Phase 3: Vernacular Audio
            </span>
            <p>Introduce audio summaries in regional languages alongside English textbook notes.</p>
          </div>
        </div>
      </div>

      {/* Interactive Feedback Form Section */}
      <section id="feedback" className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-8 shadow-2xs space-y-5">
        <div className="max-w-xl space-y-1">
          <div className="flex items-center gap-1.5 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Consultation</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Student & Educator Feedback
          </h2>
          <p className="text-xs text-slate-500">
            Submit feedback or suggestions to help refine the learning experience. Saved locally in your browser session.
          </p>
        </div>

        {submittedSuccess && (
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-300 text-blue-950 flex items-start gap-3 text-xs sm:text-sm animate-fade-in">
            <FileCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Thank you! Your feedback was successfully recorded.</span>
              <p className="text-xs text-blue-800 mt-0.5">
                Saved to browser localStorage. You can view your entry in the feedback log below.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
          {/* Name & User Type Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Name <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. K. Sharma or Student"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-sky-600 focus:border-sky-600 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Stakeholder Role <span className="text-rose-500">*</span>
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value as any)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-sky-600 focus:border-sky-600 bg-white"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher / Academic Mentor</option>
                <option value="Parent">Parent</option>
                <option value="Community Educator">Community Educator</option>
                <option value="Supervisor/Reviewer">Supervisor / Academic Reviewer</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Class if student */}
          {userType === 'Student' && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Class Standard
              </label>
              <select
                value={classLevel}
                onChange={(e) => setClassLevel(e.target.value)}
                className="w-full sm:w-48 text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-sky-600 bg-white"
              >
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
              </select>
            </div>
          )}

          {/* Online Study Difficulty */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Main Difficulty Faced When Studying Online <span className="text-rose-500">*</span>
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-sky-600 bg-white"
            >
              <option value="">-- Select or type main difficulty --</option>
              {difficultiesOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.difficulty && (
              <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                {errors.difficulty}
              </span>
            )}
          </div>

          {/* Suggestions */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Suggestions for Improving VidyaPath <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={3}
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              placeholder="e.g. Include downloadable PDF revision mind-maps, add Hindi video toggles..."
              className="w-full text-xs p-3.5 rounded-xl border border-slate-300 focus:outline-sky-600 bg-white"
            />
            {errors.suggestions && (
              <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                {errors.suggestions}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] text-slate-400">
              * Local browser storage only (no external server calls).
            </span>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Feedback</span>
            </button>
          </div>
        </form>

        {/* Existing / Submitted Feedback Viewer */}
        <div className="pt-6 border-t border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Recent Feedback Entries ({feedbackList.length})
            </h3>
            <span className="text-[11px] text-slate-500">
              Stored locally
            </span>
          </div>

          <div className="space-y-2.5">
            {feedbackList.map((item) => (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <span>{item.name || 'Anonymous Reviewer'}</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-normal">
                      {item.userType} {item.classLevel ? `(Class ${item.classLevel})` : ''}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {new Date(item.submittedAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-slate-600">
                  <strong className="text-slate-700">Obstacle:</strong> {item.difficulty}
                </p>
                <p className="text-slate-700">
                  <strong className="text-slate-900">Suggestion:</strong> {item.suggestions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
