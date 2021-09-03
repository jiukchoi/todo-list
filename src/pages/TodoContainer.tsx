import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../utils/contexts/todo';
import { ITodo } from '../utils/types/todo';
import TodoHeader from './header/TodoHeader';
import TodoList from './list/TodoList';

const TodoContainer: React.FC = () => {
  const [todo, setTodo] = useState<ITodo>({
    id: 0,
    task: '',
    status: '',
  });
  const [todos, setTodos] = useState<ITodo[] | []>([]);

  return (
    <TodoContext.Provider value={{ todo, setTodo, todos, setTodos }}>
      <UpperWrapper>
        <Wrapper>
          <TodoHeader />
          <TodoList />
        </Wrapper>
      </UpperWrapper>
    </TodoContext.Provider>
  );
};

export default TodoContainer;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 1300px;
  margin-top: 50px;
`;
