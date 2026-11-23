import { Router } from 'express';
import { getQuizByChapter, submitQuiz } from '../controllers/quiz.controller.js';

const router = Router();

router.get('/:chapterId', getQuizByChapter);
router.post('/submit', submitQuiz);

export default router;
