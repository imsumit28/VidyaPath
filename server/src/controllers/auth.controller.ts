import type { Request, Response } from 'express';
import { store } from '../store/dataStore.js';
import type { UserProfile, ApiResponse } from '../types/index.js';

export const login = (req: Request, res: Response<ApiResponse<UserProfile>>) => {
  try {
    const { username, name, classLevel, role } = req.body;

    if (!username && !name) {
      return res.status(400).json({
        success: false,
        error: 'Username or Name is required',
      });
    }

    const cleanUsername = (username || name).trim().toLowerCase().replace(/\s+/g, '.');
    let user = store.getUserByUsername(cleanUsername);

    if (!user) {
      // Create new user profile on first login
      const newUser: UserProfile = {
        id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: name || username,
        username: cleanUsername,
        classLevel: (classLevel as any) || '10',
        role: role || 'student',
        enrolledSubjects: ['mathematics', 'science', 'social_science', 'english'],
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
      };
      user = store.createUser(newUser);
    } else {
      user = store.updateUser(user.id, {
        lastLoginAt: new Date().toISOString(),
        ...(name ? { name } : {}),
        ...(classLevel ? { classLevel } : {}),
      });
    }

    return res.json({
      success: true,
      message: 'Login successful',
      data: user,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message || 'Internal server error during login',
    });
  }
};

export const getMe = (req: Request, res: Response<ApiResponse<UserProfile>>) => {
  const userId = req.headers['x-user-id'] as string;
  if (!userId) {
    return res.status(401).json({
      success: false,
      error: 'Unauthenticated. Header x-user-id is required.',
    });
  }

  const user = store.getUser(userId);
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found',
    });
  }

  return res.json({
    success: true,
    data: user,
  });
};

export const logout = (_req: Request, res: Response<ApiResponse<null>>) => {
  return res.json({
    success: true,
    message: 'Logged out successfully',
  });
};
