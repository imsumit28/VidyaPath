import type {
  KeyConceptOrFormula,
  PracticeQuestion,
  Quiz,
  QuizQuestion,
  StudyNoteSection,
  Topic,
  ClassId,
} from '../types';

export const PW_DEFAULT_VIDEO = 'https://www.youtube.com/watch?v=3Oa8RpHqxKc';

export function topic(
  id: string,
  topicNumber: number,
  title: string,
  duration: string,
  description: string,
  objectives: string[],
  studyNotes: StudyNoteSection[],
  extra?: {
    keyFormulasOrConcepts?: KeyConceptOrFormula[];
    practiceQuestions?: PracticeQuestion[];
    videoEmbedId?: string;
    videoUrl?: string;
    videoSourceNote?: string;
  },
): Topic {
  return {
    id,
    topicNumber,
    title,
    duration,
    description,
    videoUrl: extra?.videoUrl || PW_DEFAULT_VIDEO,
    videoEmbedId: extra?.videoEmbedId || '3Oa8RpHqxKc',
    videoSourceNote: extra?.videoSourceNote || 'Physics Wallah (PW) • Curated Conceptual Lecture',
    objectives,
    studyNotes,
    ...extra,
  };
}

export function quiz(
  id: string,
  chapterId: string,
  chapterTitle: string,
  subjectName: string,
  classId: ClassId,
  description: string,
  questions: QuizQuestion[],
): Quiz {
  return {
    id,
    chapterId,
    chapterTitle,
    subjectName,
    classId,
    description,
    passingScore: 60,
    questions,
  };
}
