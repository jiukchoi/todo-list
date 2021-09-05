import React, { useContext } from 'react';
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

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const id: string = e.dataTransfer.getData('todo');
    const newTodo: ITodo = [...todos]
      .filter((todo) => todo.id === Number(id))
      .map((todo) => (todo = { ...todo, status: title }))[0];
    const newTodos = todos.filter((todo) => todo.id !== newTodo.id);
    setTodos([...newTodos, { ...newTodo }]);
  };

  return (
    <Wrapper id={title} onDragOver={onDragOver} onDrop={onDrop}>
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

const Wrapper = styled.div`
  width: 400px;
  background-color: #00000010;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 20px;
`;

const Body = styled.main``;
