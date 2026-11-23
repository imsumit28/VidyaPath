import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type {
  UserProfile,
  UserProgressData,
  StudyNoteRecord,
  FeedbackSubmissionRecord,
} from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');

export interface StoreSchema {
  users: Record<string, UserProfile>;
  progress: Record<string, UserProgressData>;
  notes: Record<string, StudyNoteRecord>; // key: `${userId}_${topicId}`
  feedbacks: FeedbackSubmissionRecord[];
}

// Initial seed data
const initialData: StoreSchema = {
  users: {
    'demo-student-1': {
      id: 'demo-student-1',
      name: 'Aarav Sharma',
      username: 'aarav.sharma',
      classLevel: '10',
      role: 'student',
      enrolledSubjects: ['mathematics', 'science', 'social_science', 'english'],
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    },
    'supervisor-demo': {
      id: 'supervisor-demo',
      name: 'Academic Supervisor (Demo)',
      username: 'supervisor',
      classLevel: '10',
      role: 'reviewer',
      enrolledSubjects: ['mathematics', 'science', 'social_science', 'english'],
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    },
  },
  progress: {
    'demo-student-1': {
      userId: 'demo-student-1',
      completedTopics: [],
      activeClass: '10',
      activeSubject: 'mathematics',
      quizScores: {},
      updatedAt: new Date().toISOString(),
    },
    'supervisor-demo': {
      userId: 'supervisor-demo',
      completedTopics: [],
      activeClass: '10',
      activeSubject: 'mathematics',
      quizScores: {},
      updatedAt: new Date().toISOString(),
    },
  },
  notes: {},
  feedbacks: [
    {
      id: 'fb-seed-1',
      name: 'Pooja Verma (TGT Science)',
      userType: 'Teacher',
      classLevel: 'Class 10',
      difficulty: 'Appropriate for NCERT Board Standards',
      suggestions: 'The sequential roadmap and clean Alakh Pandey video integration remove YouTube distraction effectively.',
      submittedAt: new Date().toISOString(),
    },
  ],
};

class DataStore {
  private data: StoreSchema;

  constructor() {
    this.data = this.load();
  }

  private load(): StoreSchema {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      if (fs.existsSync(STORE_FILE)) {
        const raw = fs.readFileSync(STORE_FILE, 'utf-8');
        return JSON.parse(raw);
      }
    } catch (err) {
      console.warn('[DataStore] Failed to load store from disk, using in-memory seed.', err);
    }
    return JSON.parse(JSON.stringify(initialData));
  }

  private persist() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }
      fs.writeFileSync(STORE_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.warn('[DataStore] Failed to persist data to disk:', err);
    }
  }

  // User operations
  getUser(id: string): UserProfile | undefined {
    return this.data.users[id];
  }

  getUserByUsername(username: string): UserProfile | undefined {
    return Object.values(this.data.users).find((u) => u.username.toLowerCase() === username.toLowerCase());
  }

  createUser(user: UserProfile): UserProfile {
    this.data.users[user.id] = user;
    if (!this.data.progress[user.id]) {
      this.data.progress[user.id] = {
        userId: user.id,
        completedTopics: [],
        activeClass: user.classLevel,
        quizScores: {},
        updatedAt: new Date().toISOString(),
      };
    }
    this.persist();
    return user;
  }

  updateUser(id: string, updates: Partial<UserProfile>): UserProfile | undefined {
    const existing = this.data.users[id];
    if (!existing) return undefined;
    this.data.users[id] = { ...existing, ...updates };
    this.persist();
    return this.data.users[id];
  }

  // Progress operations
  getProgress(userId: string): UserProgressData {
    if (!this.data.progress[userId]) {
      const user = this.data.users[userId];
      this.data.progress[userId] = {
        userId,
        completedTopics: [],
        activeClass: user?.classLevel || '10',
        quizScores: {},
        updatedAt: new Date().toISOString(),
      };
      this.persist();
    }
    return this.data.progress[userId];
  }

  saveProgress(progress: UserProgressData): UserProgressData {
    this.data.progress[progress.userId] = {
      ...progress,
      updatedAt: new Date().toISOString(),
    };
    this.persist();
    return this.data.progress[progress.userId];
  }

  toggleTopicCompletion(userId: string, topicId: string): { completed: boolean; completedTopics: string[] } {
    const p = this.getProgress(userId);
    const index = p.completedTopics.indexOf(topicId);
    let completed = false;

    if (index > -1) {
      p.completedTopics.splice(index, 1);
      completed = false;
    } else {
      p.completedTopics.push(topicId);
      completed = true;
    }
    p.updatedAt = new Date().toISOString();
    this.persist();
    return { completed, completedTopics: p.completedTopics };
  }

  saveQuizScore(
    userId: string,
    chapterId: string,
    score: number,
    total: number
  ): { score: number; total: number; percentage: number } {
    const p = this.getProgress(userId);
    const percentage = Math.round((score / total) * 100);
    p.quizScores[chapterId] = {
      score,
      total,
      percentage,
      date: new Date().toISOString(),
    };
    p.updatedAt = new Date().toISOString();
    this.persist();
    return { score, total, percentage };
  }

  // Notes operations
  getNote(userId: string, topicId: string): StudyNoteRecord | undefined {
    return this.data.notes[`${userId}_${topicId}`];
  }

  saveNote(userId: string, topicId: string, content: string): StudyNoteRecord {
    const key = `${userId}_${topicId}`;
    const record: StudyNoteRecord = {
      id: this.data.notes[key]?.id || `note_${Date.now()}`,
      userId,
      topicId,
      content,
      updatedAt: new Date().toISOString(),
    };
    this.data.notes[key] = record;
    this.persist();
    return record;
  }

  deleteNote(userId: string, topicId: string): boolean {
    const key = `${userId}_${topicId}`;
    if (this.data.notes[key]) {
      delete this.data.notes[key];
      this.persist();
      return true;
    }
    return false;
  }

  // Feedback operations
  addFeedback(feedback: Omit<FeedbackSubmissionRecord, 'id' | 'submittedAt'>): FeedbackSubmissionRecord {
    const record: FeedbackSubmissionRecord = {
      id: `fb_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      ...feedback,
      submittedAt: new Date().toISOString(),
    };
    this.data.feedbacks.unshift(record);
    this.persist();
    return record;
  }

  getFeedbacks(): FeedbackSubmissionRecord[] {
    return this.data.feedbacks;
  }
}

export const store = new DataStore();
