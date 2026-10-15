import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  toggleMenuOpen: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      menuOpen: false,
      setMenuOpen: (value) => set({ menuOpen: value }),
      toggleMenuOpen: () => set((state) => ({ menuOpen: !state.menuOpen })),
    }),
    {
      name: 'app-store',
    }
  )
);
