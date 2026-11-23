import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';
import type { ClassId } from '../types';
import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { QUIZZES_DATA, getQuizForChapter } from '../data/quizzesData';
import { QuizComponent } from '../components/quiz/QuizComponent';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const QuizPage: React.FC = () => {
  const { classId, subjectId, chapterId } = useParams<{
    classId: string;
    subjectId: string;
    chapterId: string;
  }>();

  const activeClassId = (classId as ClassId) || '10';
  const classInfo = CLASSES_LIST.find((c) => c.id === activeClassId) || CLASSES_LIST[2];
  const subjects = CURRICULUM_DATA[activeClassId] || [];
  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];
  const chapter = subject?.chapters.find((ch) => ch.id === chapterId);

  // Look up quiz in QUIZZES_DATA with robust fallbacks
  const quizId = chapter?.quizId || (chapter ? `quiz-${chapter.id}` : 'quiz-10-math-real-numbers');
  const quiz =
    QUIZZES_DATA[quizId] ||
    (chapter && subject ? getQuizForChapter(chapter, subject, activeClassId) : undefined);

  if (!quiz) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
          <HelpCircle className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Quiz Not Available</h2>
        <p className="text-sm text-slate-500">
          A practice quiz for this chapter is being prepared. Check back shortly!
        </p>
        <Link
          to={`/class/${activeClassId}/${subject?.id || 'mathematics'}`}
          className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Subject Chapters</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: classInfo.name, path: `/class/${activeClassId}` },
          { label: subject?.name || 'Subject', path: `/class/${activeClassId}/${subject?.id}` },
          { label: chapter?.title || 'Chapter', path: `/class/${activeClassId}/${subject?.id}` },
          { label: 'Chapter Practice Quiz' },
        ]}
      />

      {/* Quiz Component Container */}
      <QuizComponent quiz={quiz} subjectId={subject?.id} />

      {/* Educational Guideline Note */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 text-xs text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <span className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Scores are recorded locally in your progress profile. You can retake the quiz anytime to improve mastery.</span>
        </span>
        <Link
          to={`/class/${activeClassId}/${subject?.id}`}
          className="text-blue-600 font-bold hover:text-blue-700 hover:underline shrink-0 text-xs flex items-center gap-1"
        >
          <span>Back to Chapter Topics</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};
