import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Sparkles, Layers } from 'lucide-react';
import type { Chapter, ClassId, Topic } from '../../types';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { ProgressBar } from '../common/ProgressBar';

interface TopicSidebarProps {
  chapter: Chapter;
  currentTopic: Topic;
  classId: ClassId;
  subjectId: string;
}

export const TopicSidebar: React.FC<TopicSidebarProps> = ({
  chapter,
  currentTopic,
  classId,
  subjectId,
}) => {
  const { isTopicCompleted, toggleTopicCompletion, getChapterProgress, quizScores } =
    useLearningProgress();

  const progress = getChapterProgress(chapter.id);
  const quizRecord = chapter.quizId ? quizScores[chapter.quizId] : undefined;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-col h-full">
      {/* Chapter Title & Progress */}
      <div className="pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
          <Layers className="w-3.5 h-3.5 text-sky-600" />
          <span>Chapter {chapter.chapterNumber} Roadmap</span>
        </div>
        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
          {chapter.title}
        </h3>

        {/* Chapter Progress */}
        <ProgressBar
          completed={progress.completed}
          total={progress.total}
          percentage={progress.percentage}
          size="sm"
          showLabel={true}
          colorTheme={progress.percentage === 100 ? 'blue' : 'sky'}
        />
      </div>

      {/* Ordered List of Topics */}
      <div className="py-3 flex-1 overflow-y-auto space-y-1.5 max-h-[calc(100vh-320px)] pr-1">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
          Sequential Step-by-Step Flow
        </div>

        {chapter.topics.map((t, idx) => {
          const isCurrent = t.id === currentTopic.id;
          const completed = isTopicCompleted(t.id);

          return (
            <div
              key={t.id}
              className={`rounded-xl transition-all flex items-center justify-between p-2.5 gap-2.5 text-xs ${
                isCurrent
                  ? 'bg-blue-50 border border-blue-300 text-blue-950 font-bold shadow-xs'
                  : 'hover:bg-slate-50 text-slate-700 border border-transparent'
              }`}
            >
              {/* Checkbox toggle */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleTopicCompletion(t.id);
                }}
                className="text-slate-400 hover:text-blue-600 transition-colors p-0.5 focus:outline-hidden shrink-0"
                title={completed ? 'Mark pending' : 'Mark completed'}
                aria-label={`Toggle completion for ${t.title}`}
              >
                {completed ? (
                  <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-300 hover:text-blue-500" />
                )}
              </button>

              {/* Title & Link */}
              <Link
                to={`/learn/${classId}/${subjectId}/${chapter.id}/${t.id}`}
                className="flex-1 min-w-0"
                title={t.title}
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-slate-400 shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <span
                    className={`truncate ${
                      completed && !isCurrent ? 'text-slate-500 line-through decoration-blue-400' : ''
                    }`}
                  >
                    {t.title}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Chapter Quiz Card / Trigger */}
      {chapter.hasQuiz && chapter.quizId && (
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <Link
            to={`/quiz/${classId}/${subjectId}/${chapter.id}`}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-50/80 border border-blue-200/80 hover:border-blue-300 transition-all text-xs text-blue-950 group shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
                <Sparkles className="w-4 h-4 text-blue-200" />
              </div>
              <div>
                <span className="font-bold block leading-tight">Chapter Test</span>
                <span className="text-[10px] text-slate-500">
                  {quizRecord ? `Score: ${quizRecord.percentage}%` : '3 Test Tiers Ready'}
                </span>
              </div>
            </div>

            <span className="text-[11px] font-bold text-blue-700 group-hover:underline">
              {quizRecord ? 'Review' : 'Start →'}
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};
