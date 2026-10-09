'use client';

import { useTodoStore } from '@/store/use-todo-store';
import Todo from './components/Todo';

export default function Page() {
  const { count, increment, decrement } = useTodoStore();

  return (
    <main>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+ Add</button>
      <button onClick={decrement} style={{ marginLeft: 8 }}>- Sub</button>
      <Todo />
    </main>
  );
}