import { Router } from 'express';
import { getClasses, getClassById, searchCurriculum } from '../controllers/curriculum.controller.js';

const router = Router();

router.get('/classes', getClasses);
router.get('/classes/:classId', getClassById);
router.get('/search', searchCurriculum);

export default router;
