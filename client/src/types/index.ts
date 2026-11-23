export type ClassId = '8' | '9' | '10' | '11' | '12';

export interface KeyConceptOrFormula {
  label: string;
  formulaOrRule: string;
  note?: string;
}

export interface StudyNoteSection {
  sectionTitle: string;
  content: string[];
  calloutBox?: {
    type: 'tip' | 'warning' | 'remember';
    title?: string;
    text: string;
  };
}

export interface PracticeQuestion {
  id: string;
  question: string;
  hint: string;
  solution: string;
}

export interface Topic {
  id: string;
  topicNumber: number;
  title: string;
  duration: string;
  description: string;
  videoUrl: string;
  videoEmbedId?: string;
  videoSourceNote?: string;
  objectives: string[];
  keyFormulasOrConcepts?: KeyConceptOrFormula[];
  studyNotes: StudyNoteSection[];
  practiceQuestions?: PracticeQuestion[];
}

export interface Chapter {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  estimatedHours: number;
  hasQuiz: boolean;
  quizId?: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  name: string;
  classId: ClassId;
  iconName: string;
  category: 'STEM' | 'Humanities' | 'Languages';
  color: string;
  description: string;
  chapters: Chapter[];
}

export interface ClassInfo {
  id: ClassId;
  name: string;
  level: string;
  badge: string;
  description: string;
  targetFocus: string;
  subjectsCount: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  solutionSteps?: string[];
  keyConcept?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Quiz {
  id: string;
  chapterId: string;
  chapterTitle: string;
  subjectName: string;
  classId: ClassId;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface RecentlyViewedItem {
  topicId: string;
  topicTitle: string;
  chapterId: string;
  chapterTitle: string;
  subjectId: string;
  subjectName: string;
  classId: ClassId;
  timestamp: number;
}

export interface QuizScoreRecord {
  quizId: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
}

export interface FeedbackSubmission {
  id: string;
  name?: string;
  userType: 'Student' | 'Teacher' | 'Parent' | 'Community Educator' | 'Supervisor/Reviewer' | 'Other';
  classLevel?: string;
  difficulty: string;
  suggestions: string;
  submittedAt: string;
}
