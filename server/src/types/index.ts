export type ClassId = '8' | '9' | '10' | '11' | '12';

export interface UserProfile {
  id: string;
  name: string;
  username: string;
  classLevel: ClassId;
  role: 'student' | 'teacher' | 'parent' | 'reviewer';
  enrolledSubjects: string[];
  createdAt: string;
  lastLoginAt: string;
}

export interface UserProgressData {
  userId: string;
  completedTopics: string[];
  activeClass: ClassId;
  activeSubject?: string;
  lastTopicId?: string;
  quizScores: Record<string, { score: number; total: number; percentage: number; date: string }>;
  updatedAt: string;
}

export interface StudyNoteRecord {
  id: string;
  userId: string;
  topicId: string;
  content: string;
  updatedAt: string;
}

export interface FeedbackSubmissionRecord {
  id: string;
  name: string;
  userType: 'Student' | 'Teacher' | 'Parent' | 'Community Educator' | 'Supervisor/Reviewer' | 'Other';
  classLevel: string;
  difficulty: string;
  suggestions: string;
  submittedAt: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
