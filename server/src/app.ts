import express from 'express';
import cors from 'cors';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

export const createApp = () => {
  const app = express();

  // Basic CORS configuration for local client and preview origins
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );

  // Parse JSON and urlencoded request bodies
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ extended: true, limit: '5mb' }));

  // Request logger in non-test mode
  if (process.env.NODE_ENV !== 'test') {
    app.use((req, _res, next) => {
      const timestamp = new Date().toLocaleTimeString();
      console.log(`[${timestamp}] ${req.method} ${req.url}`);
      next();
    });
  }

  // Mount API router
  app.use('/api', apiRouter);

  // Catch-all 404 for unhandled API endpoints
  app.use('/api', (req, res) => {
    res.status(404).json({
      success: false,
      error: `API route not found: ${req.method} ${req.originalUrl}`,
    });
  });

  // Centralized error handler
  app.use(errorHandler);

  return app;
};
