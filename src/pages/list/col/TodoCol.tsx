import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../../../utils/contexts/todo';
import TodoItem from './item/TodoItem';

interface ITodoCol {
  title: string;
}

const TodoCol: React.FC<ITodoCol> = ({ title }) => {
  const { todos } = useContext(TodoContext);

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Body>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
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
