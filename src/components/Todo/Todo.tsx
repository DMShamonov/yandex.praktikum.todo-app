import React, { useCallback, useState } from 'react';
import { v4 } from 'uuid';

import { TodoContext } from './Todo.context';
import { TodoType } from './Todo.types';
import TaskForm from './components/TaskForm';
import styles from './Todo.module.css';
import TaskList from './components/TaskList';

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onAdd = useCallback(
    (name: string) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: v4(),
          name,
          done: false,
        },
      ]);
    },
    [setTodos]
  );

  const onToggle = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.reduce<TodoType[]>(
        (acc, item) => [
          ...acc,
          item.id === id ? { ...item, done: !item.done } : item,
        ],
        []
      )
    );
  }, []);

  const onRemove = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.reduce<TodoType[]>(
        (acc, item) => (item.id === id ? acc : [...acc, item]),
        []
      )
    );
  }, []);

  return (
    <TodoContext.Provider value={{ todos, onAdd, onToggle, onRemove }}>
      <section className={styles.main}>
        <header>
          <TaskForm />
        </header>
        <div className={styles.content}>
          {!todos.length ? (
            <p className={styles.empty}>No tasks</p>
          ) : (
            <TaskList tasks={todos} />
          )}
        </div>
        <footer className={styles.footer}>
          <p>{todos.length} tasks</p>
          <p>{todos.filter(({ done }) => done).length} completed</p>
          <p>{todos.filter(({ done }) => !done).length} open</p>
        </footer>
      </section>
    </TodoContext.Provider>
  );
}
