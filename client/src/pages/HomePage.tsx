import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  GraduationCap,
} from 'lucide-react';

import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { SubjectCard } from '../components/cards/SubjectCard';
import { ClassCard } from '../components/cards/ClassCard';
import { useLearningProgress } from '../context/LearningProgressContext';
import { VidyaPathLogo } from '../components/common/VidyaPathLogo';
import type { ClassId } from '../types';

import iconVideo3D from '../assets/3d-video.png';
import iconNotes3D from '../assets/3d-notes.png';
import iconQuiz3D from '../assets/3d-quiz.png';
import iconRoadmap3D from '../assets/3d-roadmap.png';

interface DemoSheetTopic {
  id: string;
  num: string;
  title: string;
  time: string;
}

interface DemoSheetData {
  classId: ClassId;
  subjectId: string;
  chapterId: string;
  title: string;
  tabLabel: string;
  topics: DemoSheetTopic[];
}

export const HomePage: React.FC = () => {
  const {
    isTopicCompleted,
    toggleTopicCompletion,
    studentName,
    selectedClass,
    isLoggedIn,
  } = useLearningProgress();

  const currentClassInfo =
    CLASSES_LIST.find((c) => c.id === selectedClass) || CLASSES_LIST[2];
  const enrolledSubjects = CURRICULUM_DATA[selectedClass] || [];

  // Multi-class dynamic demo sheets for the live interactive sheet widget
  const classSheetsMap: Record<ClassId, DemoSheetData[]> = {
    '8': [
      {
        classId: '8',
        subjectId: 'mathematics',
        chapterId: 'ch-8-math-rational-numbers',
        title: 'Class 8 Mathematics: Rational Numbers',
        tabLabel: 'Math 8',
        topics: [
          { id: 'top-8-math-1-1', num: '1', title: 'Equivalent Fractions & Representation', time: '14m' },
          { id: 'top-8-math-1-2', num: '2', title: 'Closure, Commutativity & Associativity', time: '18m' },
          { id: 'top-8-math-1-3', num: '3', title: 'Finding Rational Numbers Between Two Values', time: '16m' },
        ],
      },
      {
        classId: '8',
        subjectId: 'science',
        chapterId: 'ch-8-sci-crop-production',
        title: 'Class 8 Science: Crop Production',
        tabLabel: 'Science 8',
        topics: [
          { id: 'top-8-sci-1-1', num: '1', title: 'Soil Preparation and Sowing Practices', time: '15m' },
          { id: 'top-8-sci-1-2', num: '2', title: 'Manure, Chemical Fertilisers & Irrigation', time: '18m' },
          { id: 'top-8-sci-1-3', num: '3', title: 'Harvesting Methods & Safe Grain Storage', time: '16m' },
        ],
      },
    ],
    '9': [
      {
        classId: '9',
        subjectId: 'science',
        chapterId: 'ch-9-sci-motion',
        title: 'Class 9 Science: Motion',
        tabLabel: 'Science 9',
        topics: [
          { id: 'top-9-sci-1-1', num: '1', title: 'Distance vs Displacement Concepts', time: '15m' },
          { id: 'top-9-sci-1-2', num: '2', title: 'Speed, Velocity & Acceleration', time: '18m' },
          { id: 'top-9-sci-1-3', num: '3', title: 'Deriving the Three Equations of Motion', time: '22m' },
        ],
      },
      {
        classId: '9',
        subjectId: 'mathematics',
        chapterId: 'ch-9-math-number-systems',
        title: 'Class 9 Mathematics: Number Systems',
        tabLabel: 'Math 9',
        topics: [
          { id: 'top-9-math-1-1', num: '1', title: 'Real Numbers & Decimal Expansions', time: '16m' },
          { id: 'top-9-math-1-2', num: '2', title: 'Representing Real Numbers on Number Line', time: '18m' },
          { id: 'top-9-math-1-3', num: '3', title: 'Laws of Exponents for Real Numbers', time: '15m' },
        ],
      },
    ],
    '10': [
      {
        classId: '10',
        subjectId: 'mathematics',
        chapterId: 'ch-10-math-real-numbers',
        title: 'Class 10 Mathematics: Real Numbers',
        tabLabel: 'Math 10',
        topics: [
          { id: 'top-10-math-1-1', num: '1', title: 'Real Numbers & Number Sets', time: '14m' },
          { id: 'top-10-math-1-2', num: '2', title: "Euclid's Division Lemma & HCF", time: '18m' },
          { id: 'top-10-math-1-3', num: '3', title: 'Fundamental Theorem of Arithmetic', time: '16m' },
          { id: 'top-10-math-1-4', num: '4', title: 'HCF × LCM Relationship & Problems', time: '15m' },
          { id: 'top-10-math-1-5', num: '5', title: 'Proof of Irrationality (√2, √3)', time: '22m' },
          { id: 'top-10-math-1-6', num: '6', title: 'Terminating Decimal Criteria', time: '15m' },
          { id: 'top-10-math-1-7', num: '7', title: 'Chapter Summary & Practice Quiz', time: '12m' },
        ],
      },
      {
        classId: '10',
        subjectId: 'science',
        chapterId: 'ch-10-sci-chemical-reactions',
        title: 'Class 10 Science: Chemical Reactions',
        tabLabel: 'Science 10',
        topics: [
          { id: 'top-10-sci-1-1', num: '1', title: 'Chemical Changes & Word Equations', time: '15m' },
          { id: 'top-10-sci-1-2', num: '2', title: 'Balancing Chemical Equations', time: '20m' },
          { id: 'top-10-sci-1-3', num: '3', title: 'Combination & Decomposition Reactions', time: '18m' },
          { id: 'top-10-sci-1-4', num: '4', title: 'Displacement & Double Displacement', time: '16m' },
          { id: 'top-10-sci-1-5', num: '5', title: 'Oxidation, Reduction & Redox', time: '17m' },
          { id: 'top-10-sci-1-6', num: '6', title: 'Corrosion & Food Rancidity', time: '14m' },
        ],
      },
    ],
    '11': [
      {
        classId: '11',
        subjectId: 'mathematics',
        chapterId: 'ch-11-math-sets',
        title: 'Class 11 Mathematics: Sets & Functions',
        tabLabel: 'Math 11',
        topics: [
          { id: 'top-11-math-1-1', num: '1', title: 'Sets, Subsets and Universal Sets', time: '16m' },
          { id: 'top-11-math-1-2', num: '2', title: 'Venn Diagrams and Union & Intersection', time: '18m' },
          { id: 'top-11-math-1-3', num: '3', title: 'Cartesian Product of Sets and Relations', time: '20m' },
        ],
      },
      {
        classId: '11',
        subjectId: 'physics',
        chapterId: 'ch-11-phy-units-measurements',
        title: 'Class 11 Physics: Physical World & Units',
        tabLabel: 'Physics 11',
        topics: [
          { id: 'top-11-phy-1-1', num: '1', title: 'Fundamental and Derived SI Units', time: '15m' },
          { id: 'top-11-phy-1-2', num: '2', title: 'Dimensional Analysis and Applications', time: '20m' },
          { id: 'top-11-phy-1-3', num: '3', title: 'Errors in Measurement & Significant Figures', time: '18m' },
        ],
      },
    ],
    '12': [
      {
        classId: '12',
        subjectId: 'mathematics',
        chapterId: 'ch-12-math-relations-functions',
        title: 'Class 12 Mathematics: Relations & Functions',
        tabLabel: 'Math 12',
        topics: [
          { id: 'top-12-math-1-1', num: '1', title: 'Reflexive, Symmetric & Transitive Relations', time: '18m' },
          { id: 'top-12-math-1-2', num: '2', title: 'Injective, Surjective and Bijective Functions', time: '20m' },
          { id: 'top-12-math-1-3', num: '3', title: 'Inverse Trigonometric Functions', time: '22m' },
        ],
      },
      {
        classId: '12',
        subjectId: 'physics',
        chapterId: 'ch-12-phy-electric-charges',
        title: 'Class 12 Physics: Electric Charges & Fields',
        tabLabel: 'Physics 12',
        topics: [
          { id: 'top-12-phy-1-1', num: '1', title: "Coulomb's Law and Electrostatic Force", time: '18m' },
          { id: 'top-12-phy-1-2', num: '2', title: 'Electric Field Lines and Dipole Moment', time: '20m' },
          { id: 'top-12-phy-1-3', num: '3', title: "Gauss's Law and Its Key Applications", time: '24m' },
        ],
      },
    ],
  };

  const currentClassSheets = classSheetsMap[selectedClass] || classSheetsMap['10'];
  const [activeSheetTab, setActiveSheetTab] = useState<number>(0);
  const activeSheetIdx = activeSheetTab < currentClassSheets.length ? activeSheetTab : 0;

  const currentSheet = currentClassSheets[activeSheetIdx] || currentClassSheets[0];
  const activeCompleted = currentSheet.topics.filter((t) => isTopicCompleted(t.id)).length;
  const activeTotal = currentSheet.topics.length;
  const activePercent = Math.round((activeCompleted / activeTotal) * 100);

  // State to toggle seeing all classes or focused enrolled class
  const [showAllClasses, setShowAllClasses] = useState(false);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* =========================================================================
          1. MINIMAL HERO
          ========================================================================= */}
      <section className="home-hero pt-9 sm:pt-14 pb-10 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="hero-eyebrow inline-flex items-center gap-2 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
            <span>Enrolled Standard: {currentClassInfo.name}</span>
            <span>•</span>
            <span className="text-blue-700 font-bold">{currentClassInfo.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            {isLoggedIn ? (
              <>
                Welcome, <span className="text-blue-600">{studentName.split(' ')[0]}</span>. Your path to learning.
              </>
            ) : (
              <>
                A clearer path to <span className="text-blue-600">learning well.</span>
              </>
            )}
          </h1>

          <p className="hero-description text-sm sm:text-base max-w-2xl font-normal leading-relaxed text-slate-600">
            Build understanding one lesson at a time with structured roadmaps, focused video lectures, bulleted NCERT notes, and chapter retention quizzes.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to={`/class/${selectedClass}`}
              className="hero-primary inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all shadow-md active:scale-95"
            >
              <span>Continue Class {selectedClass} Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {!isLoggedIn ? (
              <Link
                to="/login"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 transition-all active:scale-95"
              >
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <span>Sign In / Change Class</span>
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 transition-all active:scale-95"
              >
                <span>My Dashboard</span>
              </Link>
            )}
          </div>
        </div>

        {/* =========================================================================
            2. INTERACTIVE ROADMAP PREVIEW (Synchronized to Selected Class)
            ========================================================================= */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-9">
          <div className="roadmap-card bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Minimal Segmented Control */}
            <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <VidyaPathLogo size="sm" showWordmark={false} />
                <span className="roadmap-heading text-xs font-bold text-slate-900">
                  {currentSheet.title}
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-900 font-bold px-2 py-0.5 rounded-full">
                  Class {selectedClass} Active
                </span>
              </div>

              {/* Subject Tabs for Selected Class */}
              <div className="inline-flex p-1 bg-slate-200/80 rounded-lg text-xs font-medium">
                {currentClassSheets.map((sheet, idx) => (
                  <button
                    key={sheet.tabLabel}
                    onClick={() => setActiveSheetTab(idx)}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeSheetIdx === idx
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {sheet.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress status */}
            <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span>Completed: {activeCompleted} of {activeTotal}</span>
                <span className="text-slate-300">•</span>
                <span className="font-bold text-blue-700">{activePercent}%</span>
              </div>
              <span className="text-[11px] text-slate-400">Click circle to toggle topic completion</span>
            </div>

            {/* Topic Rows */}
            <div key={`${selectedClass}-${activeSheetIdx}`} className="divide-y divide-slate-100 animate-fade-in">
              {currentSheet.topics.map((t) => {
                const completed = isTopicCompleted(t.id);
                return (
                  <div
                    key={t.id}
                    className={`px-4 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors ${
                      completed ? 'bg-slate-50/70' : 'hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <button
                        onClick={() => toggleTopicCompletion(t.id)}
                        className="text-slate-300 hover:text-blue-600 transition-colors p-0.5 cursor-pointer shrink-0"
                        title={completed ? 'Completed' : 'Mark complete'}
                      >
                        {completed ? (
                          <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-50" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 hover:text-blue-600" />
                        )}
                      </button>

                      <span className="text-xs font-mono text-slate-400 shrink-0">
                        {t.num}.
                      </span>

                      <Link
                        to={`/learn/${currentSheet.classId}/${currentSheet.subjectId}/${currentSheet.chapterId}/${t.id}`}
                        className={`truncate font-medium transition-colors hover:text-blue-700 ${
                          completed ? 'text-slate-400 line-through' : 'text-slate-800'
                        }`}
                      >
                        {t.title}
                      </Link>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-xs">
                      <span className="text-slate-400 font-mono text-[11px]">{t.time}</span>
                      <Link
                        to={`/learn/${currentSheet.classId}/${currentSheet.subjectId}/${currentSheet.chapterId}/${t.id}`}
                        className="text-blue-600 hover:text-blue-800 font-bold text-xs"
                      >
                        Study →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Widget bottom bar */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Includes notes & self-check questions</span>
              <Link
                to={`/class/${selectedClass}`}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                View all Class {selectedClass} chapters →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FOUR CORE PILLARS WITH 3D ICONS
          ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-1 border border-slate-100 shadow-2xs">
              <img src={iconRoadmap3D} alt="Roadmaps" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-sm">Step-by-Step Path</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Curriculum roadmaps arranged in textbook chapter sequence.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-1 border border-slate-100 shadow-2xs">
              <img src={iconVideo3D} alt="Video Lessons" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-sm">Video Lessons</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Curated concept lectures mapped to textbook chapters.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-1 border border-slate-100 shadow-2xs">
              <img src={iconNotes3D} alt="Revision Notes" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-sm">Revision Notes</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Key formulas, definitions, and memory aids in concise cards.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-200/80 bg-white space-y-3 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center p-1 border border-slate-100 shadow-2xs">
              <img src={iconQuiz3D} alt="Practice Quizzes" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1">
              <h3 className="text-slate-900 font-bold text-sm">Practice Quizzes</h3>
              <p className="text-xs text-slate-500 leading-normal">
                NCERT-aligned chapter quizzes with instant explanations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. ENROLLED CLASS CURRICULUM SECTION (Showing Selected Class Content Only)
          ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Personalized Curriculum
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">
                Enrolled in {currentClassInfo.name}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Your {currentClassInfo.name} Subjects
            </h2>
            <p className="text-xs text-slate-500">
              Only {currentClassInfo.name} content is shown. Use the Profile menu or button to change your class anytime.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowAllClasses(!showAllClasses)}
              className="text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer shadow-2xs hover:border-slate-300"
            >
              {showAllClasses ? 'Show Enrolled Class Only' : 'Overview All Standards'}
            </button>
          </div>
        </div>

        {/* Display Subjects for the ENROLLED SELECTED CLASS */}
        {!showAllClasses ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            {enrolledSubjects.map((sub) => (
              <SubjectCard key={sub.id} subject={sub} classId={selectedClass} />
            ))}
          </div>
        ) : (
          /* Secondary overview of all standards when toggled */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
            {CLASSES_LIST.map((cls) => (
              <ClassCard key={cls.id} classInfo={cls} />
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          5. COMMUNITY LEARNING NOTE
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold tracking-wider uppercase text-blue-400">
              Community Education Initiative
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white">
              Open Educational Platform for School Students
            </h3>
            <p className="text-xs text-slate-400 max-w-lg">
              Designed for independent study without paid subscriptions or ads. All student progress saves locally.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/about"
              className="text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 px-3.5 py-2 rounded-lg transition-colors"
            >
              About Project
            </Link>
            <Link
              to="/about#feedback"
              className="text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 px-3.5 py-2 rounded-lg transition-colors"
            >
              Feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
