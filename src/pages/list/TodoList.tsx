import React from 'react';
import styled from 'styled-components';
import { STATUS } from '../../utils/constants/todo';
import TodoCol from './col/TodoCol';

const TodoList: React.FC = () => {
  return (
    <TodoListWrapper>
      {TodoListColArr.map((title, i) => (
        <TodoCol key={title} title={title} index={i} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListColArr = [STATUS.NOT_STARTED, STATUS.IN_PROGRESS, STATUS.DONE];

const TodoListWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;
