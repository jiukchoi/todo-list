import React from 'react';
import styled from 'styled-components';
import TodoCol from './col/TodoCol';

const TodoList: React.FC = () => {
  return (
    <TodoListWrapper>
      {TodoListColArr.map((title) => (
        <TodoCol key={title} title={title} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListColArr = ['Not Started', 'In Progress', 'Done'];

const TodoListWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;
