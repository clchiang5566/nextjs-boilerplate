import { create } from 'zustand';

export type HomePageData = {
  id: number;
  title: string;
  body: string;
};

interface DataState {
  homePageData: HomePageData[];
  isLoading: boolean;
  error: string | null;
  setHomePageData: (data: HomePageData[]) => void;
  setLoading: (value: boolean) => void;
  setError: (value: string | null) => void;
}

export const useDataStore = create<DataState>((set) => ({
  homePageData: [],
  isLoading: false,
  error: null,
  setHomePageData: (data) => set({ homePageData: data }),
  setLoading: (value) => set({ isLoading: value }),
  setError: (value) => set({ error: value }),
}));
