import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  RotateCcw,
  ChevronRight,
  History,
} from 'lucide-react';
import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { useLearningProgress } from '../context/LearningProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';

import iconVideo3D from '../assets/3d-video.png';
import iconNotes3D from '../assets/3d-notes.png';
import iconQuiz3D from '../assets/3d-quiz.png';
import iconRoadmap3D from '../assets/3d-roadmap.png';

export const DashboardPage: React.FC = () => {
  const {
    studentName,
    setStudentName,
    selectedClass,
    setSelectedClass,
    recentlyViewed,
    getOverallStats,
    getClassProgress,
    getSubjectProgress,
    resetAllProgress,
  } = useLearningProgress();

  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(studentName);

  const stats = getOverallStats();
  const currentClassInfo =
    CLASSES_LIST.find((c) => c.id === selectedClass) || CLASSES_LIST[2];
  const subjects = CURRICULUM_DATA[selectedClass] || [];
  const classProgress = getClassProgress(selectedClass);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setStudentName(tempName.trim());
      setIsEditingName(false);
    }
  };

  const continueItem = recentlyViewed.length > 0 ? recentlyViewed[0] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Minimal Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <span>Student Dashboard</span>
            <span>•</span>
            <button
              onClick={() => {
                setTempName(studentName);
                setIsEditingName(!isEditingName);
              }}
              className="text-sky-600 hover:text-sky-700 underline cursor-pointer"
            >
              {isEditingName ? 'Cancel' : 'Edit Name'}
            </button>
          </div>

          {!isEditingName ? (
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {studentName}
            </h1>
          ) : (
            <div className="flex items-center gap-2 pt-1 max-w-sm">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="text-sm px-3 py-1.5 rounded-lg border border-slate-300 focus:outline-sky-600 flex-1 font-semibold"
              />
              <button
                onClick={handleSaveName}
                className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-semibold"
              >
                Save
              </button>
            </div>
          )}

          <div className="flex items-center gap-2 pt-3">
            <span className="text-xs text-slate-500 font-medium">Standard:</span>
            <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold gap-1">
              {CLASSES_LIST.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClass(cls.id)}
                  className={`px-2.5 py-1 rounded-md transition-all ${selectedClass === cls.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  {cls.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Tools */}
        <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0 pt-2 md:pt-0">
          <button
            onClick={() => {
              if (window.confirm('Reset all completed topics and history?')) {
                resetAllProgress();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-slate-600 hover:text-rose-600 text-xs font-semibold py-2 px-3.5 rounded-xl border border-slate-200 bg-white hover:border-rose-200 hover:bg-rose-50/50 transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        </div>
      </div>

      {/* 4 Clean Metric Cards with 3D Icons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Topics Done</span>
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-0.5">
              <img src={iconNotes3D} alt="Topics" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {stats.totalCompletedTopics}
            <span className="text-xs text-slate-400 font-normal ml-1">/ {stats.totalAvailableTopics}</span>
          </div>
          <div className="text-[11px] text-slate-400">{stats.completionPercentage}% overall</div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Chapters Done</span>
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-0.5">
              <img src={iconRoadmap3D} alt="Chapters" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {stats.completedChaptersCount}
            <span className="text-xs text-slate-400 font-normal ml-1">/ {stats.totalChaptersCount}</span>
          </div>
          <div className="text-[11px] text-slate-400">Chapters mastered</div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Quizzes</span>
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-0.5">
              <img src={iconQuiz3D} alt="Quizzes" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {stats.quizzesAttemptedCount}
          </div>
          <div className="text-[11px] text-slate-400">
            {stats.quizzesAttemptedCount > 0 ? `Avg: ${stats.averageQuizScore}%` : 'None taken'}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-2xs space-y-2 hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>{currentClassInfo.name}</span>
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-0.5">
              <img src={iconVideo3D} alt="Class" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {classProgress.percentage}%
          </div>
          <div className="text-[11px] text-slate-400">{classProgress.completed} topics done</div>
        </div>
      </div>

      {/* Resume Card (if recently viewed exists) */}
      {continueItem && (
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="space-y-0.5">
            <span className="text-[10px] font-semibold text-sky-300 uppercase tracking-wider block">
              Resume Lesson • Class {continueItem.classId}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white">
              {continueItem.topicTitle}
            </h3>
            <span className="text-xs text-slate-400 block">
              {continueItem.subjectName} • {continueItem.chapterTitle}
            </span>
          </div>

          <Link
            to={`/learn/${continueItem.classId}/${continueItem.subjectId}/${continueItem.chapterId}/${continueItem.topicId}`}
            className="inline-flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-xl transition-all shrink-0"
          >
            <span>Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Enrolled Subjects */}
      <div className="space-y-3">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
          Enrolled Subjects ({currentClassInfo.name})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {subjects.map((sub) => {
            const subProgress = getSubjectProgress(sub.id, selectedClass);

            return (
              <div
                key={sub.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:border-slate-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">
                    {sub.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {subProgress.percentage}%
                  </span>
                </div>

                <ProgressBar
                  completed={subProgress.completed}
                  total={subProgress.total}
                  percentage={subProgress.percentage}
                  size="sm"
                  showLabel={false}
                  colorTheme={subProgress.percentage === 100 ? 'blue' : 'sky'}
                />

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                  <span>{subProgress.completed} of {subProgress.total} topics</span>
                  <Link
                    to={`/class/${selectedClass}/${sub.id}`}
                    className="font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1"
                  >
                    <span>View Roadmap</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity List */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
            <History className="w-4 h-4 text-slate-500" />
            <span>Recent History</span>
          </div>
          <span className="text-xs text-slate-400">{recentlyViewed.length} items</span>
        </div>

        {recentlyViewed.length === 0 ? (
          <div className="text-center py-6 text-xs text-slate-400">
            No recently opened topics. Start a topic to view history here.
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {recentlyViewed.map((item, idx) => (
              <div
                key={idx}
                className="py-2.5 flex items-center justify-between gap-2 text-xs"
              >
                <div className="truncate flex-1">
                  <Link
                    to={`/learn/${item.classId}/${item.subjectId}/${item.chapterId}/${item.topicId}`}
                    className="font-semibold text-slate-800 hover:text-sky-600 truncate block"
                  >
                    {item.topicTitle}
                  </Link>
                  <span className="text-[11px] text-slate-400 block truncate">
                    Class {item.classId} • {item.subjectName}
                  </span>
                </div>

                <Link
                  to={`/learn/${item.classId}/${item.subjectId}/${item.chapterId}/${item.topicId}`}
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 shrink-0 ml-2"
                >
                  Open →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
