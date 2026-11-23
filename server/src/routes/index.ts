import { Router } from 'express';
import healthRoutes from './health.routes.js';
import authRoutes from './auth.routes.js';
import curriculumRoutes from './curriculum.routes.js';
import progressRoutes from './progress.routes.js';
import quizRoutes from './quiz.routes.js';
import notesRoutes from './notes.routes.js';
import feedbackRoutes from './feedback.routes.js';

const apiRouter = Router();

apiRouter.use('/health', healthRoutes);
apiRouter.use('/auth', authRoutes);
apiRouter.use('/curriculum', curriculumRoutes);
apiRouter.use('/progress', progressRoutes);
apiRouter.use('/quizzes', quizRoutes);
apiRouter.use('/notes', notesRoutes);
apiRouter.use('/feedback', feedbackRoutes);

export default apiRouter;
