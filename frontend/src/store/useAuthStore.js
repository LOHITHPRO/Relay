import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
  user: null,
  signup: async (formData) => {
    const res = await axiosInstance.post('/auth/signup', formData);
    set({ user: res.data.user });
  },
  login: async (formData) => {
    const res = await axiosInstance.post('/auth/login', formData);
    set({ user: res.data.user });
  },
  logout: async () => {
    await axiosInstance.post('/auth/logout');
    set({ user: null });
  },
}));