import type { Request, Response } from 'express';
import { store } from '../store/dataStore.js';
import type { ApiResponse, UserProgressData } from '../types/index.js';

export const getProgress = (req: Request, res: Response<ApiResponse<UserProgressData>>) => {
  const userId = String(req.params.userId || '');

  if (!userId) {
    return res.status(400).json({
      success: false,
      error: 'User ID is required',
    });
  }

  const progress = store.getProgress(userId);
  return res.json({
    success: true,
    data: progress,
  });
};

export const toggleTopic = (req: Request, res: Response<ApiResponse<any>>) => {
  const { userId, topicId } = req.body;

  if (!userId || !topicId) {
    return res.status(400).json({
      success: false,
      error: 'userId and topicId are required',
    });
  }

  const result = store.toggleTopicCompletion(String(userId), String(topicId));
  return res.json({
    success: true,
    message: result.completed ? 'Topic marked complete' : 'Topic marked incomplete',
    data: result,
  });
};

export const syncProgress = (req: Request, res: Response<ApiResponse<UserProgressData>>) => {
  const progressData: UserProgressData = req.body;

  if (!progressData?.userId) {
    return res.status(400).json({
      success: false,
      error: 'Invalid progress data structure or missing userId',
    });
  }

  const saved = store.saveProgress(progressData);
  return res.json({
    success: true,
    message: 'Progress synchronized with server',
    data: saved,
  });
};

export const resetProgress = (req: Request, res: Response<ApiResponse<UserProgressData>>) => {
  const userId = String(req.params.userId || '');

  if (!userId) {
    return res.status(400).json({
      success: false,
      error: 'User ID is required',
    });
  }

  const resetData: UserProgressData = {
    userId,
    completedTopics: [],
    activeClass: '10',
    quizScores: {},
    updatedAt: new Date().toISOString(),
  };

  const saved = store.saveProgress(resetData);
  return res.json({
    success: true,
    message: 'Progress reset successfully',
    data: saved,
  });
};
