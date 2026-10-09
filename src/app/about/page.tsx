'use client';

import { useTodoStore } from '@/store/use-todo-store';

export default function Page() {
  const { count, hasHydrated } = useTodoStore();
  
  return (
    <main>
      <h1>Count: {hasHydrated ? count : '...'}</h1>
    </main>
  );
}