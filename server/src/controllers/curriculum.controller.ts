import type { Request, Response } from 'express';
import type { ApiResponse } from '../types/index.js';

export const CLASSES_META = [
  {
    id: '8',
    name: 'Class 8',
    level: 'Middle School Mastery',
    badge: 'Foundation Phase',
    description: 'Build core mathematical logic and scientific curiosity with guided concepts.',
    targetFocus: 'Foundational concepts, basic problem-solving, intuitive scientific principles.',
    subjectsCount: 4,
    subjects: ['mathematics', 'science', 'social_science', 'english'],
  },
  {
    id: '9',
    name: 'Class 9',
    level: 'Secondary Bridge',
    badge: 'Concept Builder',
    description: 'Bridge foundational learning with formal rigorous science and algebra frameworks.',
    targetFocus: 'Laws of motion, algebraic geometry, atom structure, structured grammar.',
    subjectsCount: 4,
    subjects: ['mathematics', 'science', 'social_science', 'english'],
  },
  {
    id: '10',
    name: 'Class 10',
    level: 'Secondary Benchmark',
    badge: 'Board Preparation',
    description: 'Master core board curricula with step-by-step video roadmaps and practice quizzes.',
    targetFocus: 'Real numbers, trigonometry, chemical reactions, heredity, analytical writing.',
    subjectsCount: 4,
    subjects: ['mathematics', 'science', 'social_science', 'english'],
  },
  {
    id: '11',
    name: 'Class 11',
    level: 'Senior Secondary',
    badge: 'Stream Specialization',
    description: 'Deep-dive into specialized Science, Mathematics, and Analytical streams.',
    targetFocus: 'Calculus fundamentals, mechanics, chemical bonding, cell biology.',
    subjectsCount: 5,
    subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'english'],
  },
  {
    id: '12',
    name: 'Class 12',
    level: 'Senior Benchmark',
    badge: 'Advanced & Board Ready',
    description: 'Comprehensive chapter pathways for board excellence and competitive readiness.',
    targetFocus: 'Electromagnetism, organic synthesis, integral calculus, genetics.',
    subjectsCount: 5,
    subjects: ['mathematics', 'physics', 'chemistry', 'biology', 'english'],
  },
];

export const getClasses = (_req: Request, res: Response<ApiResponse<typeof CLASSES_META>>) => {
  return res.json({
    success: true,
    data: CLASSES_META,
  });
};

export const getClassById = (req: Request, res: Response<ApiResponse<any>>) => {
  const { classId } = req.params;
  const found = CLASSES_META.find((c) => c.id === classId);

  if (!found) {
    return res.status(404).json({
      success: false,
      error: `Class ${classId} not found`,
    });
  }

  return res.json({
    success: true,
    data: found,
  });
};

export const searchCurriculum = (req: Request, res: Response<ApiResponse<any>>) => {
  const query = (req.query.q as string || '').trim().toLowerCase();

  if (!query) {
    return res.json({
      success: true,
      data: [],
    });
  }

  // Quick curriculum matching tags
  const matched = CLASSES_META.filter(
    (c) =>
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.targetFocus.toLowerCase().includes(query) ||
      c.subjects.some((s) => s.includes(query))
  );

  return res.json({
    success: true,
    data: matched,
  });
};
