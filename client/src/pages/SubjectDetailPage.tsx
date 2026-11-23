import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import type { ClassId } from '../types';
import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { ChapterAccordion } from '../components/cards/ChapterAccordion';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLearningProgress } from '../context/LearningProgressContext';
import { ProgressBar } from '../components/common/ProgressBar';

export const SubjectDetailPage: React.FC = () => {
  const { classId, subjectId } = useParams<{ classId: string; subjectId: string }>();
  const { getSubjectProgress } = useLearningProgress();

  const activeClassId = (classId as ClassId) || '10';
  const classInfo = CLASSES_LIST.find((c) => c.id === activeClassId) || CLASSES_LIST[2];
  const subjects = CURRICULUM_DATA[activeClassId] || [];
  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];

  if (!subject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Subject Not Found</h2>
        <Link
          to={`/class/${activeClassId}`}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {classInfo.name}</span>
        </Link>
      </div>
    );
  }

  const progress = getSubjectProgress(subject.id, activeClassId);
  const totalTopics = subject.chapters.reduce((acc, ch) => acc + ch.topics.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: classInfo.name, path: `/class/${activeClassId}` },
          { label: subject.name },
        ]}
      />

      {/* Clean Subject Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>{classInfo.name}</span>
            <span>•</span>
            <span>{subject.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {subject.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
            {subject.description}
          </p>

          <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-slate-400" />
              <span>{totalTopics} Topics</span>
            </span>
          </div>
        </div>

        {/* Minimal Progress Widget */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 w-full sm:w-auto sm:min-w-[220px] shrink-0 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Mastery</span>
            </span>
            <span className="font-bold text-slate-900">{progress.percentage}%</span>
          </div>

          <ProgressBar
            completed={progress.completed}
            total={totalTopics}
            percentage={progress.percentage}
            size="sm"
            showLabel={false}
            colorTheme={progress.percentage === 100 ? 'blue' : 'sky'}
          />

          <div className="text-[11px] text-slate-500">
            {progress.completed} of {totalTopics} topics completed
          </div>
        </div>
      </div>

      {/* Chapters Accordion Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Chapters ({subject.chapters.length})
          </h2>
          <span className="text-xs text-slate-400">Click chapter to open topics</span>
        </div>

        <div className="space-y-3">
          {subject.chapters.map((chapter, index) => (
            <ChapterAccordion
              key={chapter.id}
              chapter={chapter}
              classId={activeClassId}
              subjectId={subject.id}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
