import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  CheckCircle2,
  Circle,
  PlayCircle,
  FileText,
  BookOpen,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import type { Chapter, ClassId } from '../../types';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

interface ChapterAccordionProps {
  chapter: Chapter;
  classId: ClassId;
  subjectId: string;
  defaultOpen?: boolean;
}

export const ChapterAccordion: React.FC<ChapterAccordionProps> = ({
  chapter,
  classId,
  subjectId,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { isTopicCompleted, toggleTopicCompletion, getChapterProgress, quizScores } =
    useLearningProgress();

  const progress = getChapterProgress(chapter.id);
  const quizRecord = chapter.quizId ? quizScores[chapter.quizId] : undefined;
  const explanationPoints = Array.from(
    new Set(chapter.topics.flatMap((topic) => topic.studyNotes.flatMap((section) => section.content))),
  )
    .filter((point) => point.length > 24)
    .slice(0, 4);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all hover:border-blue-300">
      {/* Accordion Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 sm:p-6 cursor-pointer select-none bg-white hover:bg-slate-50/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
            {chapter.chapterNumber}
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {chapter.title}
              </h3>
              {progress.percentage === 100 && (
                <Badge variant="sky" size="sm">
                  Chapter Mastered
                </Badge>
              )}
              {chapter.hasQuiz && (
                <Badge variant="amber" size="sm">
                  Practice Quiz Ready
                </Badge>
              )}
            </div>
            <p className="text-xs text-slate-500 line-clamp-2 max-w-2xl">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Progress & Metadata */}
        <div className="flex items-center gap-5 justify-between md:justify-end shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-1.5 font-medium">
              <span>{progress.completed}/{progress.total} topics completed</span>
            </div>
          </div>

          <div className="w-24 sm:w-28 hidden sm:block">
            <ProgressBar
              completed={progress.completed}
              total={progress.total}
              percentage={progress.percentage}
              size="sm"
              showLabel={false}
              colorTheme="sky"
            />
          </div>

          <div className="text-slate-400 p-1 rounded-lg hover:bg-slate-100 transition-colors">
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : ''}`}
            />
          </div>
        </div>
      </div>

      {/* Accordion Body: Ordered Topic Sequence */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-slate-50/50 p-4 sm:p-6 space-y-2.5 animate-fade-in">
          <section className="chapter-explanation rounded-xl border border-blue-100 bg-white p-4 sm:p-5 mb-5">
            <div className="flex items-center gap-2 text-blue-800 mb-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <h4 className="text-sm font-bold">Chapter explanation</h4>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-1 rounded-full">NCERT aligned</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{chapter.description}</p>
            {explanationPoints.length > 0 && (
              <div className="mt-4">
                <h5 className="text-xs font-bold text-slate-800 mb-2">Key ideas to understand</h5>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {explanationPoints.map((point, index) => (
                    <li key={`${index}-${point}`} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400">
              Source reference: NCERT textbook, Class {classId}, Chapter {chapter.chapterNumber} · Original study summary; consult the textbook for the complete chapter.
            </p>
          </section>

          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1 flex items-center justify-between">
            <span>Sequential Learning Path</span>
            <span>{chapter.topics.length} Step-by-Step Milestones</span>
          </div>

          <div className="space-y-2">
            {chapter.topics.map((topic, idx) => {
              const completed = isTopicCompleted(topic.id);
              return (
                <div
                  key={topic.id}
                  className={`group bg-white rounded-xl border transition-all flex items-center justify-between p-3.5 sm:px-4 sm:py-3 gap-3 ${
                    completed
                      ? 'border-blue-200/80 bg-blue-50/20'
                      : 'border-slate-200/80 hover:border-blue-300 hover:shadow-xs'
                  }`}
                >
                  {/* Left: Quick Completion Toggle & Title */}
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTopicCompletion(topic.id);
                      }}
                      title={completed ? 'Mark topic as pending' : 'Mark topic as completed'}
                      className="text-slate-400 hover:text-blue-600 transition-colors p-0.5 focus:outline-hidden"
                      aria-label={`Toggle completion for ${topic.title}`}
                    >
                      {completed ? (
                        <CheckCircle2 className="w-5 h-5 text-blue-600 fill-blue-100 shrink-0" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-300 hover:text-blue-500 shrink-0" />
                      )}
                    </button>

                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span className="text-xs font-mono font-bold text-slate-400 shrink-0">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <Link
                        to={`/learn/${classId}/${subjectId}/${chapter.id}/${topic.id}`}
                        className={`text-xs sm:text-sm font-semibold truncate hover:text-blue-600 transition-colors ${
                          completed ? 'text-slate-700 line-through decoration-blue-400' : 'text-slate-900'
                        }`}
                        title={topic.title}
                      >
                        {topic.title}
                      </Link>
                    </div>
                  </div>

                  {/* Right: Badges & Action */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex items-center gap-2 text-slate-400">
                      <span title="Video Lesson Included">
                        <PlayCircle className="w-3.5 h-3.5 text-blue-500" />
                      </span>
                      <span title="Curated Revision Notes">
                        <FileText className="w-3.5 h-3.5 text-sky-500" />
                      </span>
                    </div>

                    <Link
                      to={`/learn/${classId}/${subjectId}/${chapter.id}/${topic.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <span>Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chapter Quiz Card */}
          {chapter.hasQuiz && chapter.quizId && (
            <div className="mt-4 bg-gradient-to-r from-blue-500/10 via-sky-500/5 to-slate-50 border border-blue-500/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:border-blue-500/35 hover:shadow-xs">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm shadow-blue-700/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      Chapter Mastery Test: {chapter.title}
                    </h4>
                    {quizRecord ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Best Score: {quizRecord.percentage}%
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Practice Ready
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <span>3 Test Tiers:</span>
                      <span className="inline-flex items-center gap-1 text-blue-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Easy
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-amber-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        Medium
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-rose-700 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        Hard
                      </span>
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>
                    <span className="text-[11px] text-slate-500">Instant explanations & scoring</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/quiz/${classId}/${subjectId}/${chapter.id}`}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4.5 py-2.5 rounded-xl transition-all shadow-sm shrink-0 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>{quizRecord ? 'Retake Quiz' : 'Take Chapter Quiz'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
