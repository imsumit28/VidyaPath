/**
 * VidyaPath Unified API Client
 * Seamlessly connects to the VidyaPath Express Backend with automatic offline/fallback resiliency.
 */

const API_BASE = '/api';

interface RequestOptions extends RequestInit {
  userId?: string;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T | null> {
  const { userId, headers = {}, ...rest } = options;

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };

  if (userId) {
    requestHeaders['x-user-id'] = userId;
  }

  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: requestHeaders,
      ...rest,
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => null);
      throw new Error(errBody?.error || `HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data?.data ?? data;
  } catch (err) {
    // In dev or offline, log warning and gracefully return null so local fallbacks activate
    console.warn(`[API] Network request to ${endpoint} failed or backend unavailable:`, err);
    return null;
  }
}

export const api = {
  // System Health
  async checkHealth() {
    return request<{ status: string; uptimeSeconds: number; version: string }>('/health');
  },

  // Authentication
  auth: {
    async login(payload: { name: string; username?: string; classLevel?: string; role?: string }) {
      return request<any>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },

    async getMe(userId: string) {
      return request<any>('/auth/me', { userId });
    },

    async logout() {
      return request<any>('/auth/logout', { method: 'POST' });
    },
  },

  // Curriculum
  curriculum: {
    async getClasses() {
      return request<any[]>('/curriculum/classes');
    },

    async getClassById(classId: string) {
      return request<any>(`/curriculum/classes/${classId}`);
    },

    async search(query: string) {
      return request<any[]>(`/curriculum/search?q=${encodeURIComponent(query)}`);
    },
  },

  // Learning Progress
  progress: {
    async getProgress(userId: string) {
      return request<any>(`/progress/${userId}`);
    },

    async toggleTopic(userId: string, topicId: string) {
      return request<{ completed: boolean; completedTopics: string[] }>('/progress/toggle', {
        method: 'POST',
        body: JSON.stringify({ userId, topicId }),
      });
    },

    async syncProgress(progressData: any) {
      return request<any>('/progress/sync', {
        method: 'POST',
        body: JSON.stringify(progressData),
      });
    },

    async resetProgress(userId: string) {
      return request<any>(`/progress/reset/${userId}`, {
        method: 'POST',
      });
    },
  },

  // Practice Quizzes
  quizzes: {
    async getByChapter(chapterId: string) {
      return request<any>(`/quizzes/${chapterId}`);
    },

    async submit(payload: { userId?: string; chapterId: string; answers: number[] }) {
      return request<{
        chapterId: string;
        score: number;
        total: number;
        percentage: number;
        passed: boolean;
        results: any[];
      }>('/quizzes/submit', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },
  },

  // Study Scratchpad Notes
  notes: {
    async getNote(userId: string, topicId: string) {
      return request<{ content: string; updatedAt: string }>(`/notes/${userId}/${topicId}`);
    },

    async saveNote(userId: string, topicId: string, content: string) {
      return request<any>(`/notes/${userId}/${topicId}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      });
    },

    async deleteNote(userId: string, topicId: string) {
      return request<any>(`/notes/${userId}/${topicId}`, {
        method: 'DELETE',
      });
    },
  },

  // EPICS Community Feedback
  feedback: {
    async submit(payload: {
      name?: string;
      userType: string;
      classLevel?: string;
      difficulty: string;
      suggestions: string;
    }) {
      return request<any>('/feedback', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
    },

    async list() {
      return request<any[]>('/feedback');
    },
  },
};
