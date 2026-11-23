import type { Request, Response } from 'express';
import { store } from '../store/dataStore.js';
import type { ApiResponse, FeedbackSubmissionRecord } from '../types/index.js';

export const submitFeedback = (req: Request, res: Response<ApiResponse<FeedbackSubmissionRecord>>) => {
  const { name, userType, classLevel, difficulty, suggestions } = req.body;

  if (!difficulty || !suggestions) {
    return res.status(400).json({
      success: false,
      error: 'difficulty and suggestions are required fields',
    });
  }

  const created = store.addFeedback({
    name: name || 'Anonymous Learner',
    userType: userType || 'Student',
    classLevel: classLevel || 'General',
    difficulty,
    suggestions,
  });

  return res.status(201).json({
    success: true,
    message: 'Feedback submitted successfully to EPICS Evaluation Log',
    data: created,
  });
};

export const getFeedbacks = (_req: Request, res: Response<ApiResponse<FeedbackSubmissionRecord[]>>) => {
  const list = store.getFeedbacks();
  return res.json({
    success: true,
    data: list,
  });
};
