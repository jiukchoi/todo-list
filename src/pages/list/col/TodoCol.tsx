import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { STATUS } from '../../../utils/constants/todo';
import { TodoContext } from '../../../utils/contexts/todo';
import { ITodo } from '../../../utils/types/todo';
import TodoItem from './item/TodoItem';

interface ITodoCol {
  title: string;
  index: number;
}

const TodoCol: React.FC<ITodoCol> = ({ title, index }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [focusedCol, setFocusedCol] = useState<string>('');

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFocusedCol(e.currentTarget.id);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setFocusedCol('');
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id: string = e.dataTransfer.getData('todo');
    const newTodo: ITodo = [...todos]
      .filter((todo) => todo.id === Number(id))
      .map((todo) => (todo = { ...todo, status: title }))[0];
    const newTodos = todos.filter((todo) => todo.id !== newTodo.id);
    setTodos([...newTodos, { ...newTodo }]);
  };

  useEffect(() => {
    setFocusedCol('');
  }, [todos]);

  return (
    <Wrapper
      id={title}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      focusedCol={focusedCol}
    >
      <Header>{title}</Header>
      <Body>
        {index === 0 &&
          todos
            .filter((todo) => todo.status === STATUS.NOT_STARTED)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {index === 1 &&
          todos
            .filter((todo) => todo.status === STATUS.IN_PROGRESS)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        {index === 2 &&
          todos
            .filter((todo) => todo.status === STATUS.DONE)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </Body>
    </Wrapper>
  );
};

export default TodoCol;

const Wrapper = styled.div<{ focusedCol: string; id: string }>`
  width: 400px;
  background-color: #00000010;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  opacity: ${({ focusedCol, id }) => (focusedCol === id ? 0.5 : 1)};
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 20px;
`;

const Body = styled.main``;
