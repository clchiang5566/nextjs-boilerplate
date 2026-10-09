'use client';

import React, { useState, FormEvent } from 'react';
import { useTodoStore } from '@/store/use-todo-store';
import style from './Todo.module.scss';

const Todo: React.FC = () => {
  const { todos, addTodo, resetTodo } = useTodoStore();
  const [taskText, setTaskText] = useState('');

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTodo(taskText);
    setTaskText('');
  };

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <form onSubmit={onSubmitHandler}>
          <div className={style.formItem}>
            <label htmlFor="title">Task</label>
            <input
              id="title"
              name="title"
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="New Todo"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={style.operations}>
        <button onClick={resetTodo}>Reset</button>
      </div>

      <div className="todoList">
        <h2>To do: {todos.length}</h2>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;