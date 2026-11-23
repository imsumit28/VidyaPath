import { Router } from 'express';
import { submitFeedback, getFeedbacks } from '../controllers/feedback.controller.js';

const router = Router();

router.post('/', submitFeedback);
router.get('/', getFeedbacks);

export default router;
