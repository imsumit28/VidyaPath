import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { ClassId, RecentlyViewedItem, QuizScoreRecord, FeedbackSubmission } from '../types';
import { safeGetItem, safeSetItem, safeRemoveItem } from '../utils/localStorage';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { api } from '../services/api';

interface ProgressStats {
  completed: number;
  total: number;
  percentage: number;
}

interface LearningProgressContextType {
  isLoggedIn: boolean;
  loginStudent: (name: string, classId: ClassId) => void;
  logoutStudent: () => void;
  completedTopicIds: Set<string>;
  toggleTopicCompletion: (topicId: string) => boolean;
  isTopicCompleted: (topicId: string) => boolean;
  markTopicComplete: (topicId: string) => void;
  markTopicIncomplete: (topicId: string) => void;
  recentlyViewed: RecentlyViewedItem[];
  recordTopicVisit: (item: RecentlyViewedItem) => void;
  quizScores: Record<string, QuizScoreRecord>;
  saveQuizScore: (quizId: string, score: number, total: number) => void;
  selectedClass: ClassId;
  setSelectedClass: (classId: ClassId) => void;
  studentName: string;
  setStudentName: (name: string) => void;
  getChapterProgress: (chapterId: string) => ProgressStats;
  getSubjectProgress: (subjectId: string, classId: ClassId) => ProgressStats;
  getClassProgress: (classId: ClassId) => ProgressStats;
  getOverallStats: () => {
    totalCompletedTopics: number;
    totalAvailableTopics: number;
    completionPercentage: number;
    completedChaptersCount: number;
    totalChaptersCount: number;
    quizzesAttemptedCount: number;
    averageQuizScore: number;
  };
  feedbackList: FeedbackSubmission[];
  addFeedback: (submission: Omit<FeedbackSubmission, 'id' | 'submittedAt'>) => void;
  resetAllProgress: () => void;
  loadSupervisorDemoProfile: () => void;
}

const STORAGE_KEYS = {
  COMPLETED_TOPICS: 'vidyapath_completed_topics_v2',
  RECENTLY_VIEWED: 'vidyapath_recently_viewed_v2',
  QUIZ_SCORES: 'vidyapath_quiz_scores_v2',
  SELECTED_CLASS: 'vidyapath_selected_class_v2',
  STUDENT_NAME: 'vidyapath_student_name_v2',
  FEEDBACK: 'vidyapath_feedback_submissions_v2',
  IS_LOGGED_IN: 'vidyapath_is_logged_in_v2',
};

const LearningProgressContext = createContext<LearningProgressContextType | undefined>(undefined);

export const LearningProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedInState] = useState<boolean>(() =>
    safeGetItem<boolean>(STORAGE_KEYS.IS_LOGGED_IN, false)
  );
  const [completedTopicArray, setCompletedTopicArray] = useState<string[]>(() =>
    safeGetItem<string[]>(STORAGE_KEYS.COMPLETED_TOPICS, [])
  );
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedItem[]>(() =>
    safeGetItem<RecentlyViewedItem[]>(STORAGE_KEYS.RECENTLY_VIEWED, [])
  );
  const [quizScores, setQuizScores] = useState<Record<string, QuizScoreRecord>>(() =>
    safeGetItem<Record<string, QuizScoreRecord>>(STORAGE_KEYS.QUIZ_SCORES, {})
  );
  const [selectedClass, setSelectedClassState] = useState<ClassId>(() =>
    safeGetItem<ClassId>(STORAGE_KEYS.SELECTED_CLASS, '10')
  );
  const [studentName, setStudentNameState] = useState<string>(() =>
    safeGetItem<string>(STORAGE_KEYS.STUDENT_NAME, 'Aarav Sharma')
  );
  const [feedbackList, setFeedbackList] = useState<FeedbackSubmission[]>(() =>
    safeGetItem<FeedbackSubmission[]>(STORAGE_KEYS.FEEDBACK, [
      {
        id: 'fb-demo-1',
        name: 'Mrs. S. Bannerjee',
        userType: 'Teacher',
        classLevel: '10',
        difficulty: 'Students get distracted by recommendation feeds on social video platforms.',
        suggestions: 'The structured A2Z sheet-like format prevents random skipping and helps verify chapter continuity.',
        submittedAt: '2026-10-08T14:30:00.000Z',
      },
    ])
  );

  // Purge legacy storage keys on mount so stale demo progress is completely removed
  useEffect(() => {
    try {
      localStorage.removeItem('vidyapath_completed_topics_v1');
      localStorage.removeItem('vidyapath_recently_viewed_v1');
      localStorage.removeItem('vidyapath_quiz_scores_v1');
      localStorage.removeItem('vidyapath_completed_topics');
      localStorage.removeItem('vidyapath_recently_viewed');
      localStorage.removeItem('vidyapath_quiz_scores');
    } catch {
      // ignore
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    safeSetItem(STORAGE_KEYS.COMPLETED_TOPICS, completedTopicArray);
  }, [completedTopicArray]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.RECENTLY_VIEWED, recentlyViewed);
  }, [recentlyViewed]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.QUIZ_SCORES, quizScores);
  }, [quizScores]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.SELECTED_CLASS, selectedClass);
  }, [selectedClass]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.STUDENT_NAME, studentName);
  }, [studentName]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.FEEDBACK, feedbackList);
  }, [feedbackList]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.IS_LOGGED_IN, isLoggedIn);
  }, [isLoggedIn]);

  const loginStudent = (name: string, classId: ClassId) => {
    const clean = name.trim() || 'Aarav Sharma';
    setStudentNameState(clean);
    setSelectedClassState(classId);
    setIsLoggedInState(true);
    // Sync with backend API
    api.auth.login({ name: clean, classLevel: classId }).catch(() => {});
  };

  const logoutStudent = () => {
    setIsLoggedInState(false);
  };

  const completedTopicIds = useMemo(() => new Set(completedTopicArray), [completedTopicArray]);

  const toggleTopicCompletion = (topicId: string): boolean => {
    let nowCompleted = false;
    setCompletedTopicArray((prev) => {
      if (prev.includes(topicId)) {
        nowCompleted = false;
        return prev.filter((id) => id !== topicId);
      } else {
        nowCompleted = true;
        return [...prev, topicId];
      }
    });
    // Sync with backend API
    api.progress.toggleTopic(studentName, topicId).catch(() => {});
    return nowCompleted;
  };

  const markTopicComplete = (topicId: string) => {
    setCompletedTopicArray((prev) => (prev.includes(topicId) ? prev : [...prev, topicId]));
  };

  const markTopicIncomplete = (topicId: string) => {
    setCompletedTopicArray((prev) => prev.filter((id) => id !== topicId));
  };

  const isTopicCompleted = (topicId: string): boolean => {
    return completedTopicIds.has(topicId);
  };

  const recordTopicVisit = (item: RecentlyViewedItem) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((it) => it.topicId !== item.topicId);
      return [item, ...filtered].slice(0, 8); // Keep last 8 viewed
    });
  };

  const saveQuizScore = (quizId: string, score: number, total: number) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    setQuizScores((prev) => ({
      ...prev,
      [quizId]: {
        quizId,
        score,
        total,
        percentage,
        date: new Date().toISOString(),
      },
    }));
  };

  const setSelectedClass = (cls: ClassId) => {
    setSelectedClassState(cls);
  };

  const setStudentName = (name: string) => {
    setStudentNameState(name);
  };

  // Dynamic progress calculations
  const getChapterProgress = (chapterId: string): ProgressStats => {
    let total = 0;
    let completed = 0;

    for (const classKey in CURRICULUM_DATA) {
      const subjects = CURRICULUM_DATA[classKey as ClassId];
      for (const sub of subjects) {
        const chapter = sub.chapters.find((ch) => ch.id === chapterId);
        if (chapter) {
          total = chapter.topics.length;
          completed = chapter.topics.filter((t) => completedTopicIds.has(t.id)).length;
          return {
            completed,
            total,
            percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
          };
        }
      }
    }

    return { completed: 0, total: 0, percentage: 0 };
  };

  const getSubjectProgress = (subjectId: string, classId: ClassId): ProgressStats => {
    const subjects = CURRICULUM_DATA[classId] || [];
    const subject = subjects.find((s) => s.id === subjectId);
    if (!subject) return { completed: 0, total: 0, percentage: 0 };

    let total = 0;
    let completed = 0;

    for (const chapter of subject.chapters) {
      total += chapter.topics.length;
      completed += chapter.topics.filter((t) => completedTopicIds.has(t.id)).length;
    }

    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  };

  const getClassProgress = (classId: ClassId): ProgressStats => {
    const subjects = CURRICULUM_DATA[classId] || [];
    let total = 0;
    let completed = 0;

    for (const sub of subjects) {
      for (const ch of sub.chapters) {
        total += ch.topics.length;
        completed += ch.topics.filter((t) => completedTopicIds.has(t.id)).length;
      }
    }

    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  };

  const getOverallStats = () => {
    let totalAvailableTopics = 0;
    let totalCompletedTopics = 0;
    let totalChaptersCount = 0;
    let completedChaptersCount = 0;

    for (const classKey in CURRICULUM_DATA) {
      const subjects = CURRICULUM_DATA[classKey as ClassId];
      for (const sub of subjects) {
        for (const ch of sub.chapters) {
          totalChaptersCount += 1;
          const chTotal = ch.topics.length;
          const chCompleted = ch.topics.filter((t) => completedTopicIds.has(t.id)).length;
          totalAvailableTopics += chTotal;
          totalCompletedTopics += chCompleted;
          if (chTotal > 0 && chCompleted === chTotal) {
            completedChaptersCount += 1;
          }
        }
      }
    }

    const quizKeys = Object.keys(quizScores);
    const quizzesAttemptedCount = quizKeys.length;
    const avgScore =
      quizzesAttemptedCount > 0
        ? Math.round(
            quizKeys.reduce((acc, k) => acc + (quizScores[k]?.percentage || 0), 0) /
              quizzesAttemptedCount
          )
        : 0;

    return {
      totalCompletedTopics,
      totalAvailableTopics,
      completionPercentage:
        totalAvailableTopics > 0
          ? Math.round((totalCompletedTopics / totalAvailableTopics) * 100)
          : 0,
      completedChaptersCount,
      totalChaptersCount,
      quizzesAttemptedCount,
      averageQuizScore: avgScore,
    };
  };

  const addFeedback = (submission: Omit<FeedbackSubmission, 'id' | 'submittedAt'>) => {
    const newEntry: FeedbackSubmission = {
      ...submission,
      id: `fb-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };
    setFeedbackList((prev) => [newEntry, ...prev]);
    // Sync with backend API
    api.feedback.submit({
      name: submission.name,
      userType: submission.userType,
      classLevel: submission.classLevel || 'General',
      difficulty: submission.difficulty,
      suggestions: submission.suggestions,
    }).catch(() => {});
  };

  const resetAllProgress = () => {
    setCompletedTopicArray([]);
    setRecentlyViewed([]);
    setQuizScores({});
    // Sync with backend API
    api.progress.resetProgress(studentName).catch(() => {});
  };

  const loadSupervisorDemoProfile = () => {
    // Reset to clean 0% state
    setCompletedTopicArray([]);
    setRecentlyViewed([]);
    setQuizScores({});
    setSelectedClassState('10');
    setStudentNameState('Aarav Sharma');
    setIsLoggedInState(true);
    safeRemoveItem(STORAGE_KEYS.COMPLETED_TOPICS);
    safeRemoveItem(STORAGE_KEYS.RECENTLY_VIEWED);
    safeRemoveItem(STORAGE_KEYS.QUIZ_SCORES);
  };

  return (
    <LearningProgressContext.Provider
      value={{
        isLoggedIn,
        loginStudent,
        logoutStudent,
        completedTopicIds,
        toggleTopicCompletion,
        isTopicCompleted,
        markTopicComplete,
        markTopicIncomplete,
        recentlyViewed,
        recordTopicVisit,
        quizScores,
        saveQuizScore,
        selectedClass,
        setSelectedClass,
        studentName,
        setStudentName,
        getChapterProgress,
        getSubjectProgress,
        getClassProgress,
        getOverallStats,
        feedbackList,
        addFeedback,
        resetAllProgress,
        loadSupervisorDemoProfile,
      }}
    >
      {children}
    </LearningProgressContext.Provider>
  );
};

export const useLearningProgress = (): LearningProgressContextType => {
  const context = useContext(LearningProgressContext);
  if (!context) {
    throw new Error('useLearningProgress must be used within a LearningProgressProvider');
  }
  return context;
};
