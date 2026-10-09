import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface TodoItem {
  id: number;
  text: string;
}

interface TodoState {
  count: number;
  todos: TodoItem[];
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  increment: () => void;
  decrement: () => void;
  addTodo: (text: string) => void;
  resetTodo: () => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      count: 0,
      todos: [],
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text }],
        })),
      resetTodo: () => set({ todos: [] }),
    }),
    {
      name: 'todo-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);