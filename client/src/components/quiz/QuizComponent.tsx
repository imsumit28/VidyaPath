import React, { useState, useMemo, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Award,
  ArrowRight,
  BookOpen,
  Sparkles,
  Flame,
  ShieldCheck,
  Zap,
  Target,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { Quiz } from '../../types';
import { useLearningProgress } from '../../context/LearningProgressContext';
import { Link } from 'react-router-dom';

export type DifficultyLevel = 'all' | 'easy' | 'medium' | 'hard';

interface QuizComponentProps {
  quiz: Quiz;
  subjectId?: string;
  onFinish?: (score: number, total: number) => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, subjectId, onFinish }) => {
  const { saveQuizScore } = useLearningProgress();

  // Test Type / Difficulty state
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('all');
  // State: selected answers for each question index in active pool
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  // Track if submitted
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // Current active question index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Group questions by difficulty
  const easyQuestions = useMemo(
    () => quiz.questions.filter((q) => q.difficulty === 'easy'),
    [quiz.questions]
  );
  const mediumQuestions = useMemo(
    () => quiz.questions.filter((q) => q.difficulty === 'medium'),
    [quiz.questions]
  );
  const hardQuestions = useMemo(
    () => quiz.questions.filter((q) => q.difficulty === 'hard'),
    [quiz.questions]
  );

  // Active question pool based on selected difficulty tier
  const activeQuestions = useMemo(() => {
    if (selectedDifficulty === 'easy') {
      return easyQuestions.length > 0 ? easyQuestions : quiz.questions;
    }
    if (selectedDifficulty === 'medium') {
      return mediumQuestions.length > 0 ? mediumQuestions : quiz.questions;
    }
    if (selectedDifficulty === 'hard') {
      return hardQuestions.length > 0 ? hardQuestions : quiz.questions;
    }
    return quiz.questions;
  }, [quiz.questions, selectedDifficulty, easyQuestions, mediumQuestions, hardQuestions]);

  const totalQuestions = activeQuestions.length;
  const currentQuestion = activeQuestions[currentIndex] || activeQuestions[0];

  // Dynamic pass benchmark based on difficulty
  const passBenchmark =
    selectedDifficulty === 'hard'
      ? 75
      : selectedDifficulty === 'medium'
      ? 70
      : quiz.passingScore || 60;

  const handleSwitchDifficulty = (level: DifficultyLevel) => {
    if (level === selectedDifficulty) return;
    setSelectedDifficulty(level);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIndex(0);
  };

  const handleSelectOption = useCallback((questionIdx: number, optionIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIdx]: optionIdx,
    }));
  }, [isSubmitted]);

  const calculateScore = useCallback(() => {
    let score = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  }, [activeQuestions, selectedAnswers]);

  const handleSubmitQuiz = useCallback(() => {
    setIsSubmitted(true);
    const score = calculateScore();
    const quizRecordId =
      selectedDifficulty === 'all' ? quiz.id : `${quiz.id}-${selectedDifficulty}`;
    saveQuizScore(quizRecordId, score, totalQuestions);

    const percentage = Math.round((score / totalQuestions) * 100);
    if (percentage >= passBenchmark) {
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
        });
      } catch (e) {
        console.warn('Confetti error:', e);
      }
    }

    if (onFinish) {
      onFinish(score, totalQuestions);
    }
  }, [calculateScore, onFinish, passBenchmark, quiz.id, saveQuizScore, selectedDifficulty, totalQuestions]);

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentIndex(0);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const allAnswered = activeQuestions.every((_, idx) => selectedAnswers[idx] !== undefined);
  const currentScore = calculateScore();
  const percentage = totalQuestions > 0 ? Math.round((currentScore / totalQuestions) * 100) : 0;
  const isPassed = percentage >= passBenchmark;

  // Keyboard navigation: 1-4 for options, Left/Right arrows for questions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (!isSubmitted && ['1', '2', '3', '4'].includes(e.key)) {
        const optionIdx = parseInt(e.key, 10) - 1;
        if (currentQuestion && optionIdx < currentQuestion.options.length) {
          handleSelectOption(currentIndex, optionIdx);
        }
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Enter' && !isSubmitted && allAnswered) {
        handleSubmitQuiz();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allAnswered, currentIndex, currentQuestion, handleSelectOption, handleSubmitQuiz, isSubmitted, totalQuestions]);

  const difficultyMeta = {
    easy: {
      name: 'Easy Test',
      badge: 'Foundational Recall',
      desc: 'Focuses on core definitions, direct axioms, and standard formula recognition.',
      icon: ShieldCheck,
    },
    medium: {
      name: 'Medium Test',
      badge: 'NCERT Board Standard',
      desc: 'Focuses on step-by-step problem-solving and standard textbook derivations.',
      icon: Zap,
    },
    hard: {
      name: 'Hard Test',
      badge: 'Exemplar Challenge',
      desc: 'Focuses on multi-step synthesis, edge cases, and high-weightage board patterns.',
      icon: Flame,
    },
    all: {
      name: 'Full Marathon',
      badge: 'All Difficulties',
      desc: 'Comprehensive chapter test spanning foundational recall to advanced exemplar challenges.',
      icon: Sparkles,
    },
  }[selectedDifficulty];

  const completionPercentage = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* 1. Header: Clean Modern Educational Canvas Deck */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                {quiz.subjectName} • Chapter Practice Quiz
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-bold text-slate-500">
                Class {quiz.classId}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-snug">
              {quiz.chapterTitle}
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              {difficultyMeta.desc}
            </p>
          </div>

          {/* Benchmark Info Card */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 flex items-center gap-4 shrink-0 shadow-2xs self-start lg:self-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Active Pool</span>
                <span className="font-extrabold text-slate-900 text-sm">{totalQuestions} MCQs</span>
              </div>
            </div>
            <div className="h-9 w-px bg-slate-200" />
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Pass Benchmark</span>
              <span className="font-extrabold text-blue-700 text-sm">{passBenchmark}%</span>
            </div>
          </div>
        </div>

        {/* 2. Segmented Difficulty Switcher Ribbon */}
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 shrink-0">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Select Difficulty Tier:</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl">
            {/* Easy Button */}
            <button
              onClick={() => handleSwitchDifficulty('easy')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedDifficulty === 'easy'
                  ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Easy</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono font-bold">
                {easyQuestions.length}
              </span>
            </button>

            {/* Medium Button */}
            <button
              onClick={() => handleSwitchDifficulty('medium')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedDifficulty === 'medium'
                  ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              <span>Medium</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono font-bold">
                {mediumQuestions.length}
              </span>
            </button>

            {/* Hard Button */}
            <button
              onClick={() => handleSwitchDifficulty('hard')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedDifficulty === 'hard'
                  ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-blue-600" />
              <span>Hard</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono font-bold">
                {hardQuestions.length}
              </span>
            </button>

            {/* All Questions Button */}
            <button
              onClick={() => handleSwitchDifficulty('all')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedDifficulty === 'all'
                  ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>All MCQs</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-600 font-mono font-bold">
                {quiz.questions.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Exam Grid Layout (12 columns on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Active Question Canvas (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Score Summary Banner (If Submitted) */}
          {isSubmitted && (
            <div
              className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-5 animate-fade-in shadow-xs ${
                isPassed
                  ? 'bg-blue-50/90 border-blue-200 text-blue-950'
                  : 'bg-amber-50/90 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md ${
                    isPassed ? 'bg-blue-600' : 'bg-amber-600'
                  }`}
                >
                  <Award className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-lg font-bold">
                      {isPassed
                        ? `Passed ${difficultyMeta.name}!`
                        : `Keep Practicing (${difficultyMeta.name})`}
                    </h3>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-current shadow-2xs">
                      {percentage}% ({currentScore}/{totalQuestions} Correct)
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 max-w-lg leading-relaxed">
                    {isPassed
                      ? `Great job! You achieved ${percentage}%, beating the ${passBenchmark}% pass benchmark. Review the explanations below or advance to the next level!`
                      : `You scored ${percentage}% (pass benchmark: ${passBenchmark}%). Review the verified textbook derivations below to strengthen your understanding.`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
                {isPassed && selectedDifficulty === 'easy' && mediumQuestions.length > 0 && (
                  <button
                    onClick={() => handleSwitchDifficulty('medium')}
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Level Up to Medium Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {isPassed && selectedDifficulty === 'medium' && hardQuestions.length > 0 && (
                  <button
                    onClick={() => handleSwitchDifficulty('hard')}
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <span>Challenge Hard Test</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={handleRetryQuiz}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-300 transition-all shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Retry Test</span>
                </button>

                <Link
                  to={`/class/${quiz.classId}${subjectId ? `/${subjectId}` : ''}`}
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Back to Chapters</span>
                </Link>
              </div>
            </div>
          )}

          {/* Main Question Card */}
          {currentQuestion && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
              {/* Progress bar across card top */}
              <div className="w-full bg-slate-100 h-1.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 ease-out"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>

              {/* Mobile Question Quick Stepper Ribbon (visible on small screens) */}
              <div className="lg:hidden bg-slate-50/90 px-4 py-2.5 border-b border-slate-200/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 custom-scrollbar">
                  {activeQuestions.map((_, idx) => {
                    const answered = selectedAnswers[idx] !== undefined;
                    const isCorrect =
                      isSubmitted && selectedAnswers[idx] === activeQuestions[idx].correctIndex;
                    const isCurrent = idx === currentIndex;

                    let buttonClass = 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100';

                    if (isCurrent) {
                      buttonClass = 'ring-2 ring-blue-500 bg-blue-600 text-white shadow-xs scale-105';
                    } else if (isSubmitted) {
                      buttonClass = isCorrect
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold'
                        : 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
                    } else if (answered) {
                      buttonClass = 'bg-blue-50 text-blue-700 border-blue-300 font-bold';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-7 h-7 shrink-0 rounded-lg text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${buttonClass}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] font-bold text-slate-500 shrink-0">
                  {answeredCount}/{totalQuestions}
                </span>
              </div>

              {/* Question Card Header */}
              <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Question {currentIndex + 1} of {totalQuestions}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        currentQuestion.difficulty === 'hard'
                          ? 'bg-rose-500'
                          : currentQuestion.difficulty === 'medium'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                    />
                    <span>{currentQuestion.difficulty || 'medium'} difficulty</span>
                  </span>
                </div>

                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  {answeredCount} of {totalQuestions} answered
                </span>
              </div>

              {/* Question Text & Options */}
              <div className="p-6 sm:p-8 space-y-6">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentQuestion.questionText}
                </h2>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, optIdx) => {
                    const isSelected = selectedAnswers[currentIndex] === optIdx;
                    const isCorrectOption = currentQuestion.correctIndex === optIdx;

                    let optionStyle =
                      'border-slate-200 hover:border-blue-300 hover:bg-blue-50/20 bg-white text-slate-800';

                    if (isSubmitted) {
                      if (isCorrectOption) {
                        optionStyle =
                          'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-2 ring-emerald-500/20';
                      } else if (isSelected && !isCorrectOption) {
                        optionStyle =
                          'border-rose-400 bg-rose-50/80 text-rose-950 ring-2 ring-rose-400/20';
                      } else {
                        optionStyle =
                          'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle =
                        'border-blue-600 bg-blue-50/60 text-blue-950 font-bold ring-2 ring-blue-500/20 shadow-xs';
                    }

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(currentIndex, optIdx)}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3.5 text-xs sm:text-sm select-none ${optionStyle}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectOption(currentIndex, optIdx);
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-relaxed font-medium">{option}</span>
                        </div>

                        {/* Icon Indicator */}
                        <div className="shrink-0">
                          {isSubmitted ? (
                            isCorrectOption ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                            ) : isSelected ? (
                              <XCircle className="w-5 h-5 text-rose-600 fill-rose-100" />
                            ) : null
                          ) : isSelected ? (
                            <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Verified Full Solution & Step-by-Step Breakdown (Visible on Submit) */}
                {isSubmitted && (
                  <div className="rounded-2xl border border-blue-200/90 bg-gradient-to-br from-blue-50/80 via-white to-sky-50/60 p-5 sm:p-6 space-y-4 animate-fade-in shadow-xs">
                    {/* Solution Header: Correct Option & Concept Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-blue-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 block">
                            Verified Correct Answer
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                            Option {String.fromCharCode(65 + currentQuestion.correctIndex)}: {currentQuestion.options[currentQuestion.correctIndex]}
                          </span>
                        </div>
                      </div>

                      {currentQuestion.keyConcept && (
                        <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-blue-700 border border-blue-200 shadow-2xs">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span className="truncate max-w-[280px]">{currentQuestion.keyConcept}</span>
                        </span>
                      )}
                    </div>

                    {/* Step-by-Step Complete Solution Breakdown */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider">
                        <BookOpen className="w-4 h-4 text-blue-600" />
                        <span>Step-by-Step Complete Solution:</span>
                      </div>

                      {currentQuestion.solutionSteps && currentQuestion.solutionSteps.length > 0 ? (
                        <div className="space-y-2.5">
                          {currentQuestion.solutionSteps.map((step, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed"
                            >
                              <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                                {sIdx + 1}
                              </span>
                              <span className="flex-1 font-medium">{step}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {currentQuestion.explanation}
                        </div>
                      )}
                    </div>

                    {/* NCERT Examiner Note & Concept Summary */}
                    {currentQuestion.explanation && currentQuestion.solutionSteps && currentQuestion.solutionSteps.length > 0 && (
                      <div className="pt-2.5 text-xs text-slate-600 border-t border-blue-100/80 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong className="text-blue-900">NCERT Examiner Note:</strong> {currentQuestion.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation & Submit Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                      disabled={currentIndex === 0}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() =>
                        setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))
                      }
                      disabled={currentIndex === totalQuestions - 1}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <span className="hidden sm:inline text-[11px] text-slate-400 font-medium">
                      Keys 1–4 to pick, Enter to submit
                    </span>

                    {!isSubmitted ? (
                      <button
                        onClick={handleSubmitQuiz}
                        disabled={!allAnswered}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-xs disabled:cursor-not-allowed cursor-pointer"
                      >
                        <span>
                          {allAnswered
                            ? `Submit ${difficultyMeta.name} Answers`
                            : `Answer all questions (${answeredCount}/${totalQuestions})`}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <div className="text-xs text-blue-700 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Completed. Click palette to review any question.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Question Navigator Palette & Stats Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
          {/* Question Palette Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">Question Palette</h3>
              </div>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                {answeredCount}/{totalQuestions}
              </span>
            </div>

            {/* Status Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
                <span>Current</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-100 border border-blue-300" />
                <span>Answered</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-100 border border-slate-200" />
                <span>Pending</span>
              </span>
            </div>

            {/* Question Buttons Grid (5 cols) */}
            <div className="grid grid-cols-5 gap-2 max-h-[320px] overflow-y-auto p-1 custom-scrollbar">
              {activeQuestions.map((_, idx) => {
                const answered = selectedAnswers[idx] !== undefined;
                const isCorrect =
                  isSubmitted && selectedAnswers[idx] === activeQuestions[idx].correctIndex;
                const isCurrent = idx === currentIndex;

                let btnClass = 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100';

                if (isCurrent) {
                  btnClass = 'ring-2 ring-blue-500 bg-blue-600 text-white font-extrabold shadow-xs scale-105';
                } else if (isSubmitted) {
                  btnClass = isCorrect
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold'
                    : 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
                } else if (answered) {
                  btnClass = 'bg-blue-50 text-blue-700 border-blue-300 font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-xl text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${btnClass}`}
                    title={`Question ${idx + 1}${answered ? ' (Answered)' : ''}`}
                  >
                    <span>{idx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Completion Summary */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Progress:</span>
                <span className="font-bold text-slate-900">{completionPercentage}% Completed</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* NCERT Guidelines & Quick Tips */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-4 space-y-2.5 text-xs text-slate-600 shadow-2xs">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <BookOpen className="w-3.5 h-3.5 text-blue-600" />
              <span>NCERT Exam Guidelines</span>
            </div>
            <ul className="space-y-1.5 text-slate-500 text-[11px] list-disc list-inside">
              <li>Each question has exactly one correct choice.</li>
              <li>Pass benchmark is set to {passBenchmark}%.</li>
              <li>Press keyboard keys 1–4 to pick options quickly.</li>
              <li>Verified step-by-step explanations unlock on submit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
