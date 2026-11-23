import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ClassInfo } from '../../types';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { ProgressBar } from '../common/ProgressBar';

interface ClassCardProps {
  classInfo: ClassInfo;
}

export const ClassCard: React.FC<ClassCardProps> = ({ classInfo }) => {
  const { getClassProgress } = useLearningProgress();
  const progress = getClassProgress(classInfo.id);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {classInfo.name}
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {classInfo.level}
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
            {classInfo.subjectsCount} Subjects
          </span>
        </div>

        {/* Minimal Progress Bar */}
        <div className="pt-1 space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Progress</span>
            <span className="font-semibold text-slate-800">{progress.percentage}%</span>
          </div>
          <ProgressBar
            completed={progress.completed}
            total={progress.total}
            percentage={progress.percentage}
            size="sm"
            showLabel={false}
            colorTheme="sky"
          />
        </div>
      </div>

      <div className="pt-4 mt-2 border-t border-slate-100">
        <Link
          to={`/class/${classInfo.id}`}
          className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-900 hover:text-sky-600 group"
        >
          <span>Explore subjects</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-sky-600 transition-all" />
        </Link>
      </div>
    </div>
  );
};
