import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const responce = await axiosInstance.get("/api/auth/check")

      set({ authUser: responce.data});
    } catch (error) {
      console.log("Error checking auth:", error);
      set({ authUser: null });
    }finally {
      set({ isCheckingAuth: false });
    }
  }

}));