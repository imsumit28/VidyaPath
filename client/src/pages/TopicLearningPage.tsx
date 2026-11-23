import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import type { ClassId } from '../types';
import { CLASSES_LIST, CURRICULUM_DATA } from '../data/curriculumData';
import { useLearningProgress } from '../context/LearningProgressContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { VideoPlayer } from '../components/learning/VideoPlayer';
import { TopicSidebar } from '../components/learning/TopicSidebar';
import { StudyNotesView } from '../components/learning/StudyNotesView';
import { Badge } from '../components/common/Badge';

export const TopicLearningPage: React.FC = () => {
  const { classId, subjectId, chapterId, topicId } = useParams<{
    classId: string;
    subjectId: string;
    chapterId: string;
    topicId: string;
  }>();

  const navigate = useNavigate();
  const {
    isTopicCompleted,
    toggleTopicCompletion,
    recordTopicVisit,
  } = useLearningProgress();

  const activeClassId = (classId as ClassId) || '10';
  const classInfo = CLASSES_LIST.find((c) => c.id === activeClassId) || CLASSES_LIST[2];
  const subjects = CURRICULUM_DATA[activeClassId] || [];
  const subject = subjects.find((s) => s.id === subjectId) || subjects[0];
  const chapter = subject?.chapters.find((ch) => ch.id === chapterId) || subject?.chapters[0];

  // Find topic
  const topicIndex = chapter?.topics.findIndex((t) => t.id === topicId) ?? 0;
  const currentTopic = chapter?.topics[topicIndex >= 0 ? topicIndex : 0];

  // Navigation: previous and next topic
  const prevTopic = topicIndex > 0 ? chapter?.topics[topicIndex - 1] : null;
  const nextTopic =
    chapter && topicIndex < chapter.topics.length - 1 ? chapter.topics[topicIndex + 1] : null;

  // Track visit to recently viewed in localStorage
  useEffect(() => {
    if (currentTopic && chapter && subject) {
      recordTopicVisit({
        topicId: currentTopic.id,
        topicTitle: currentTopic.title,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        subjectId: subject.id,
        subjectName: subject.name,
        classId: activeClassId,
        timestamp: Date.now(),
      });
      // Scroll to top upon topic change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentTopic?.id, chapter?.id, subject?.id, activeClassId]);

  if (!subject || !chapter || !currentTopic) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Topic Not Found</h2>
        <p className="text-sm text-slate-500">The requested learning topic could not be found.</p>
        <Link
          to={`/class/${activeClassId}`}
          className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-xl text-sm font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Curriculum</span>
        </Link>
      </div>
    );
  }

  const isCompleted = isTopicCompleted(currentTopic.id);

  const handleToggleCompleted = () => {
    toggleTopicCompletion(currentTopic.id);
  };

  const handleGoNext = () => {
    if (nextTopic) {
      navigate(`/learn/${activeClassId}/${subject.id}/${chapter.id}/${nextTopic.id}`);
    } else if (chapter.hasQuiz && chapter.quizId) {
      navigate(`/quiz/${activeClassId}/${subject.id}/${chapter.id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Breadcrumb Hierarchy */}
      <Breadcrumbs
        items={[
          { label: classInfo.name, path: `/class/${activeClassId}` },
          { label: subject.name, path: `/class/${activeClassId}/${subject.id}` },
          { label: chapter.title, path: `/class/${activeClassId}/${subject.id}` },
          { label: currentTopic.title },
        ]}
      />

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Main Learning Stage */}
        <div className="lg:col-span-8 space-y-6">
          {/* Topic Title Bar & Status Pill */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="sky" size="sm">
                  {classInfo.name} • {subject.name}
                </Badge>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-600">
                  Chapter {chapter.chapterNumber}, Topic {currentTopic.topicNumber} of {chapter.topics.length}
                </span>
              </div>

              {isCompleted ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Topic Completed</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  <Circle className="w-3.5 h-3.5 text-slate-400" />
                  <span>In Progress</span>
                </span>
              )}
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentTopic.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentTopic.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentTopic.objectives.length} Target Objectives</span>
              </span>
            </div>
          </div>

          {/* Video Lesson Player Area */}
          <VideoPlayer
            topic={currentTopic}
            subjectName={subject.name}
            chapterTitle={chapter.title}
          />

          {/* Action Ribbon: Complete Button & Previous/Next Navigation */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Mark as Completed Button */}
            <button
              onClick={handleToggleCompleted}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer active:scale-95 ${
                isCompleted
                  ? 'bg-blue-50 text-blue-800 border border-blue-300 hover:bg-blue-100'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-blue-600 fill-blue-100" />
                  <span>Completed (Click to Undo)</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mark as Completed</span>
                </>
              )}
            </button>

            {/* Previous & Next Sequential Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {prevTopic ? (
                <Link
                  to={`/learn/${activeClassId}/${subject.id}/${chapter.id}/${prevTopic.id}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl border border-slate-300 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous:</span>
                  <span className="max-w-[100px] truncate">{prevTopic.title}</span>
                </Link>
              ) : (
                <button
                  disabled
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-slate-100 text-slate-400 text-xs font-bold px-4 py-3 rounded-xl border border-slate-200 cursor-not-allowed opacity-60"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>First Topic</span>
                </button>
              )}

              {nextTopic ? (
                <Link
                  to={`/learn/${activeClassId}/${subject.id}/${chapter.id}/${nextTopic.id}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <span>Next Topic</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : chapter.hasQuiz ? (
                <Link
                  to={`/quiz/${activeClassId}/${subject.id}/${chapter.id}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-sm shadow-blue-900/15 cursor-pointer active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Take Chapter Quiz</span>
                </Link>
              ) : (
                <Link
                  to={`/class/${activeClassId}/${subject.id}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-3 rounded-xl transition-all cursor-pointer"
                >
                  <span>Finish Chapter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>

          {/* Study Notes & Objectives Detailed View */}
          <div className="pt-2">
            <StudyNotesView topic={currentTopic} />
          </div>

          {/* Bottom Navigation Prompt */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              {isCompleted
                ? 'Great progress on this milestone!'
                : 'Ready for the next step in this roadmap?'}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Follow the sequential learning methodology: ensure you understand this concept before advancing to the next topic.
            </p>

            <div className="pt-2 flex justify-center gap-3">
              {nextTopic ? (
                <button
                  onClick={handleGoNext}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <span>Continue to Next Topic ({nextTopic.title})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : chapter.hasQuiz ? (
                <Link
                  to={`/quiz/${activeClassId}/${subject.id}/${chapter.id}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-blue-900/15 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-blue-200" />
                  <span>Start Chapter Practice Quiz</span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Sticky Chapter Roadmap Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
          <TopicSidebar
            chapter={chapter}
            currentTopic={currentTopic}
            classId={activeClassId}
            subjectId={subject.id}
          />
        </div>
      </div>
    </div>
  );
};
