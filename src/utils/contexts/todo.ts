import { createContext } from 'react';
import { ITodo } from '../types/todo';

interface ITodoContext {
  todo: ITodo;
  setTodo: (todo: ITodo) => void;
  todos: ITodo[] | [];
  setTodos: (todos: ITodo[]) => void;
}

export const TodoContext = createContext<ITodoContext>({
  todo: { id: 0, task: '', status: '' },
  todos: [],
  setTodo: () => {},
  setTodos: () => {},
});
