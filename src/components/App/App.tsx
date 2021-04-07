import React from 'react';

import Todo from 'components/Todo';

import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.app}>
      <Todo />
    </main>
  );
}
