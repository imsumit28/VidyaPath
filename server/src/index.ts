import dotenv from 'dotenv';
import { createApp } from './app.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const app = createApp();

const server = app.listen(PORT, () => {
  console.log(`
  ======================================================
  🎓  VidyaPath Unified Backend Server
  ======================================================
  • Port:        ${PORT}
  • URL:         http://localhost:${PORT}
  • Health Check: http://localhost:${PORT}/api/health
  • Environment: ${process.env.NODE_ENV || 'development'}
  ======================================================
  `);
});

// Graceful shutdown
const handleShutdown = (signal: string) => {
  console.log(`\n[Server] Received ${signal}. Closing HTTP server gracefully...`);
  server.close(() => {
    console.log('[Server] HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
