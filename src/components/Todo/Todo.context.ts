import { createContext } from 'react';

import { TodoContextType } from './Todo.types';

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  onAdd() {},
  onToggle() {},
  onRemove() {},
});
