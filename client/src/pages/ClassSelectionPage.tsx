import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Info,
  GraduationCap,
  Layers,
  Check,
  RotateCcw,
} from 'lucide-react';
import type { ClassId } from '../types';
import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { SubjectCard } from '../components/cards/SubjectCard';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLearningProgress } from '../context/LearningProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';

export const ClassSelectionPage: React.FC = () => {
  const { classId } = useParams<{ classId?: string }>();
  const navigate = useNavigate();
  const {
    selectedClass,
    setSelectedClass,
    getClassProgress,
    studentName,
  } = useLearningProgress();

  // If a specific classId is provided in URL, sync it if needed or use selectedClass
  const activeClassId: ClassId =
    (classId as ClassId) || selectedClass || '10';

  const [showClassSwitcherModal, setShowClassSwitcherModal] = useState(false);

  const classInfo =
    CLASSES_LIST.find((c) => c.id === activeClassId) || CLASSES_LIST[2];
  const subjects = CURRICULUM_DATA[activeClassId] || [];
  const classProgress = getClassProgress(activeClassId);

  const handleSwitchClass = (newClsId: ClassId) => {
    setSelectedClass(newClsId);
    setShowClassSwitcherModal(false);
    navigate(`/class/${newClsId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'My Curriculum', path: `/class/${activeClassId}` },
          { label: classInfo.name },
        ]}
      />

      {/* Active Student & Enrolled Class Notice Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm shrink-0">
            <GraduationCap className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Enrolled Student:</span>
              <span className="text-xs font-bold text-slate-900">{studentName}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-blue-100 text-blue-900">
                Active
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              Showing curriculum content exclusively for{' '}
              <strong className="text-blue-700">{classInfo.name} ({classInfo.badge})</strong>
            </p>
          </div>
        </div>

        {/* Change Class Button */}
        <button
          onClick={() => setShowClassSwitcherModal(true)}
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 transition-all cursor-pointer self-start sm:self-auto active:scale-95"
        >
          <RotateCcw className="w-3.5 h-3.5 text-blue-600" />
          <span>Change Class ({activeClassId})</span>
        </button>
      </div>

      {/* Class Switcher Modal / Inline Drawer */}
      {showClassSwitcherModal && (
        <div className="p-5 rounded-2xl bg-slate-950 text-white shadow-xl space-y-4 animate-fade-in border border-blue-900">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Select New Standard to Study
              </h2>
              <p className="text-xs text-slate-300">
                Switching your class updates your entire curriculum, roadmaps, and practice quizzes.
              </p>
            </div>
            <button
              onClick={() => setShowClassSwitcherModal(false)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/10"
            >
              Close ✕
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {CLASSES_LIST.map((cls) => {
              const isCurrent = cls.id === activeClassId;
              return (
                <button
                  key={cls.id}
                  onClick={() => handleSwitchClass(cls.id)}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    isCurrent
                      ? 'bg-blue-600 border-blue-400 text-white shadow-md ring-2 ring-blue-400/30'
                      : 'bg-white/5 hover:bg-white/15 border-white/10 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm">{cls.name}</span>
                    {isCurrent && <Check className="w-3.5 h-3.5 text-blue-300" />}
                  </div>
                  <span className="text-[10px] text-blue-300 block font-medium mt-1 truncate">
                    {cls.badge}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {cls.subjectsCount} Subjects
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Clean Class Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-700">
              {classInfo.level}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-500 font-medium">
              {subjects.length} Enrolled Subjects
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {classInfo.name} Curriculum Roadmap
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            {classInfo.description}
          </p>
        </div>

        {/* Completion Progress Card */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 w-full sm:w-auto sm:min-w-[220px] shrink-0 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Standard Mastery</span>
            </span>
            <span className="font-bold text-slate-900">{classProgress.percentage}%</span>
          </div>

          <ProgressBar
            completed={classProgress.completed}
            total={classProgress.total}
            percentage={classProgress.percentage}
            size="sm"
            showLabel={false}
            colorTheme="sky"
          />

          <div className="text-[11px] text-slate-500">
            {classProgress.completed} of {classProgress.total} topics completed in {classInfo.name}
          </div>
        </div>
      </div>

      {/* Subjects Grid (ONLY FOR THE SELECTED CLASS) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Enrolled Subjects for {classInfo.name}
          </h2>
          <span className="text-xs text-slate-400">
            {subjects.length} Core Subjects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((sub) => (
            <SubjectCard key={sub.id} subject={sub} classId={activeClassId} />
          ))}
        </div>
      </div>

      {/* Footer Syllabus & Board Note */}
      <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
        <Info className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <span>Curricula strictly mapped to NCERT and State Board standards for {classInfo.name}.</span>
      </div>
    </div>
  );
};
