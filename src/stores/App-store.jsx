import { create } from "zustand";
import { persist } from "zustand/middleware";

const appStore = (set) => ({
  count: 0,
  increase: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrease: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },

  username: "FarisAhmad",
  updateUsername: (username) => set({ username }, true),

  user: {},
  getUser: async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();

    set({ user });
  },
  logoutUser: () => set({ user: {} }),
});

export const useAppStore = create(
  persist(appStore, { 
    name: "app-store" 
  })
)