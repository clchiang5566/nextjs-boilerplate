// redux/todo/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoItem {
  id: number;
  text: string;
}

interface TodoState {
  items: TodoItem[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoItem>) {
      state.items.push(action.payload);
    },
    resetTodo(state) {
      state.items = [];
    },
  },
});

export const { addTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;