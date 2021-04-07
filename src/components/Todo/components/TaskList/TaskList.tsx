import React from 'react';

import Task from '../Task';
import { TaskListType } from './TaskList.types';
import styles from './TaskList.module.css';

export default function TaskList({ tasks }: TaskListType) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
}
