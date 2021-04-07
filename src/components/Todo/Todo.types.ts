export interface TodoType {
  id: string;
  name: string;
  done: boolean;
}

export interface TodoContextType {
  todos: TodoType[];
  onAdd(name: string): void;
  onToggle(id: string): void;
  onRemove(id: string): void;
}
