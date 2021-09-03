import React from 'react';
import styled from 'styled-components';
import { ITodo } from '../../../../utils/types/todo';

interface ITodoItem {
  todo: ITodo;
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  return (
    <Wrapper>
      <Task>{todo.task}</Task>
    </Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 33px;
  background-color: #ffffff;
  border: 1px solid #00000020;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px 30px;
`;

const Task = styled.div``;
