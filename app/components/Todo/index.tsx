'use client';

import React, { useEffect, useRef } from 'react';
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik';

import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { addTodo, resetTodo } from '../../../redux/todo/todoSlice';

import style from './Todo.module.scss';

interface FormValues {
  title: string;
}

const Todo: React.FC = () => {
  const dispatch = useAppDispatch();
  const formRef = useRef<FormikProps<FormValues>>(null);

  const todos = useAppSelector((state) => state.todo.items);

  const onSubmitHandler = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    dispatch(addTodo({ id: todos.length + 1, text: values.title }));
    actions.resetForm();
  };

  const resetHandler = () => {
    dispatch(resetTodo());
  };

  useEffect(() => {
    formRef?.current?.resetForm();
  }, [todos]);

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <Formik
          innerRef={formRef}
          initialValues={{ title: '' }}
          onSubmit={onSubmitHandler}
        >
          <Form>
            <div className={style.formItem}>
              <label htmlFor="title">Task</label>
              <Field id="title" name="title" placeholder="New Todo" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>

      <div className={style.operations}>
        <button onClick={resetHandler}>Reset</button>
      </div>

      <div className="todoList">
        <h2>To do:</h2> {todos?.length}
        <ul>
          {todos?.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
