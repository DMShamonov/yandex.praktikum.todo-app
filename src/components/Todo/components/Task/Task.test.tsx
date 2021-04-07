import { render, fireEvent } from '@testing-library/react';

import Task from './Task';
import styles from './Task.module.css';
import { TodoContext } from '../../Todo.context';

describe('Task', () => {
  const TASK = { id: '1', name: 'Test', done: false };

  it('Correct render', () => {
    const { container } = render(<Task {...TASK} />);
    const taskElement = container.firstChild as HTMLElement;

    expect(taskElement).toBeInTheDocument();
    expect(taskElement).toHaveClass(styles.task);
    expect(taskElement).not.toBeEmptyDOMElement();
  });

  it('Actions: `onRemove`', () => {
    const handleOnRemoveMock = jest.fn();

    const { getByText } = render(
      <TodoContext.Provider
        value={{
          todos: [],
          onAdd() {},
          onToggle() {},
          onRemove: handleOnRemoveMock,
        }}
      >
        <Task {...TASK} />
      </TodoContext.Provider>
    );

    fireEvent.click(getByText('Remove'));

    expect(handleOnRemoveMock).toBeCalled();
    expect(handleOnRemoveMock).toBeCalledTimes(1);
    expect(handleOnRemoveMock).toBeCalledWith(TASK.id);
  });
});
