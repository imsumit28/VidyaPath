import type { Request, Response } from 'express';
import { store } from '../store/dataStore.js';
import type { ApiResponse, StudyNoteRecord } from '../types/index.js';

export const getNote = (req: Request, res: Response<ApiResponse<StudyNoteRecord | null>>) => {
  const userId = String(req.params.userId || '');
  const topicId = String(req.params.topicId || '');

  if (!userId || !topicId) {
    return res.status(400).json({
      success: false,
      error: 'userId and topicId are required',
    });
  }

  const note = store.getNote(userId, topicId);
  return res.json({
    success: true,
    data: note || null,
  });
};

export const saveNote = (req: Request, res: Response<ApiResponse<StudyNoteRecord>>) => {
  const userId = String(req.params.userId || '');
  const topicId = String(req.params.topicId || '');
  const { content } = req.body;

  if (!userId || !topicId) {
    return res.status(400).json({
      success: false,
      error: 'userId and topicId are required',
    });
  }

  const saved = store.saveNote(userId, topicId, content || '');
  return res.json({
    success: true,
    message: 'Note saved successfully',
    data: saved,
  });
};

export const deleteNote = (req: Request, res: Response<ApiResponse<null>>) => {
  const userId = String(req.params.userId || '');
  const topicId = String(req.params.topicId || '');

  if (!userId || !topicId) {
    return res.status(400).json({
      success: false,
      error: 'userId and topicId are required',
    });
  }

  const deleted = store.deleteNote(userId, topicId);
  return res.json({
    success: true,
    message: deleted ? 'Note deleted successfully' : 'Note did not exist',
  });
};
