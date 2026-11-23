import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LearningProgressProvider, useLearningProgress } from './context/LearningProgressContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ClassSelectionPage } from './pages/ClassSelectionPage';
import { SubjectDetailPage } from './pages/SubjectDetailPage';
import { TopicLearningPage } from './pages/TopicLearningPage';
import { DashboardPage } from './pages/DashboardPage';
import { QuizPage } from './pages/QuizPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { isLoggedIn, selectedClass } = useLearningProgress();

  // If not logged in, only the login page is visible
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  // After logging in, the full content and navigation are unlocked
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Navigate to={`/class/${selectedClass}`} replace />} />
          <Route path="/classes" element={<ClassSelectionPage />} />
          <Route path="/class/:classId" element={<ClassSelectionPage />} />
          <Route path="/class/:classId/:subjectId" element={<SubjectDetailPage />} />
          <Route
            path="/learn/:classId/:subjectId/:chapterId/:topicId"
            element={<TopicLearningPage />}
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz/:classId/:subjectId/:chapterId" element={<QuizPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LearningProgressProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LearningProgressProvider>
  );
};

export default App;
