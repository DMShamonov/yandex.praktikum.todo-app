import React, { memo, useCallback, useContext } from 'react';
import classnames from 'classnames';

import { TaskPropsType } from './Task.types';
import styles from './Task.module.css';
import { TodoContext } from '../../Todo.context';

const Task = memo(function Task({ id, name, done }: TaskPropsType) {
  const { onToggle, onRemove } = useContext(TodoContext);

  const handleOnToggle = useCallback(() => {
    onToggle(id);
  }, [onToggle, id]);

  const handleOnRemove = useCallback(() => {
    onRemove(id);
  }, [onRemove, id]);

  return (
    <div
      className={classnames(styles.task, {
        [styles.done]: done,
      })}
    >
      <input type="checkbox" checked={done} onChange={handleOnToggle} />
      <p className={styles.name}>{name}</p>
      <button onClick={handleOnRemove}>Remove</button>
    </div>
  );
});

export default Task;
