import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    name: 'VidyaPath API Server',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    features: [
      'NCERT Curriculum Hub (Classes 8-12)',
      'Physics Wallah Verified Embed Engine',
      'Topic Progress & State Synchronization',
      'Interactive Chapter Quizzes & Grading',
      'Personal Study Notepad Store',
      'EPICS Community Feedback Evaluation Log',
    ],
  });
});

export default router;
