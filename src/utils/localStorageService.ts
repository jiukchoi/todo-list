import { ITodo } from './types/todo';

export const getItem = (key: string): ITodo[] | [] => {
  const data: string | null = localStorage.getItem(key);
  return data && JSON.parse(data);
};

export const setItem = (key: string, data: ITodo[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};
