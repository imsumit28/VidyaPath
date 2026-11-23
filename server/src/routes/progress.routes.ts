import { Router } from 'express';
import {
  getProgress,
  toggleTopic,
  syncProgress,
  resetProgress,
} from '../controllers/progress.controller.js';

const router = Router();

router.get('/:userId', getProgress);
router.post('/toggle', toggleTopic);
router.post('/sync', syncProgress);
router.post('/reset/:userId', resetProgress);

export default router;
