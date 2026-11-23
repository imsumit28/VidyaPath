import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  FlaskConical,
  BookOpen,
  Globe,
  Atom,
  Dna,
  ArrowRight,
  Layers,
} from 'lucide-react';
import type { Subject, ClassId } from '../../types';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { ProgressBar } from '../common/ProgressBar';

interface SubjectCardProps {
  subject: Subject;
  classId: ClassId;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, classId }) => {
  const { getSubjectProgress } = useLearningProgress();
  const progress = getSubjectProgress(subject.id, classId);

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-blue-600" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-sky-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-700" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-sky-500" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-indigo-600" />;
      case 'Dna':
        return <Dna className="w-5 h-5 text-blue-500" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const totalTopics = subject.chapters.reduce((acc, ch) => acc + ch.topics.length, 0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50/80 flex items-center justify-center border border-blue-100 shrink-0">
              {getSubjectIcon(subject.iconName)}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                {subject.name}
              </h3>
              <span className="text-[11px] text-slate-500">
                {subject.category} • Class {classId}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {subject.chapters.length} Ch
          </span>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 my-2">
          {subject.description}
        </p>

        {/* Minimal Progress Bar */}
        <div className="pt-2 space-y-1">
          <div className="flex justify-between text-xs text-slate-500 font-medium">
            <span>{progress.completed}/{totalTopics} topics</span>
            <span className="font-semibold text-slate-800">{progress.percentage}%</span>
          </div>
          <ProgressBar
            completed={progress.completed}
            total={totalTopics}
            percentage={progress.percentage}
            size="sm"
            showLabel={false}
            colorTheme="sky"
          />
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100">
        <Link
          to={`/class/${classId}/${subject.id}`}
          className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-blue-600 group"
        >
          <span>{progress.completed > 0 ? 'Continue' : 'Start'} Roadmap</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-blue-600 transition-all" />
        </Link>
      </div>
    </div>
  );
};
