import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { LS_KEY } from '../../utils/constants/localStorageKey';
import { STATUS } from '../../utils/constants/todo';
import { TodoContext } from '../../utils/contexts/todo';
import { setItem } from '../../utils/localStorageService';
import { ITodo } from '../../utils/types/todo';
import addIcon from '../../assets/add.png';

const TodoHeader: React.FC = () => {
  const { todo, setTodo, todos, setTodos } = useContext(TodoContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      ...todo,
      task: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo && !validateTodo(todo.task)) return;
    if (todo) {
      const newTodos: ITodo[] = [
        ...todos,
        { ...todo, id: Date.now(), status: STATUS.NOT_STARTED },
      ];
      setTodos(newTodos);
      setTodo({ ...todo, task: '' });
    }
  };

  const validateTodo = (todo: string): boolean => {
    if (todo.trim() === '') {
      return false;
    }
    return true;
  };

  useEffect(() => {
    setItem(LS_KEY, todos);
  }, [todos]);

  return (
    <form onSubmit={onSubmit}>
      <Header>
        <HeaderInput
          type="text"
          placeholder="할 일을 입력해주세요."
          autoFocus
          onChange={onChange}
          value={todo?.task}
        />
        <HeaderBtn type="submit">
          <AddIcon src={addIcon} alt="delete" />
        </HeaderBtn>
      </Header>
    </form>
  );
};

export default TodoHeader;

const Header = styled.header`
  display: flex;
  margin-bottom: 50px;
`;

const HeaderInput = styled.input`
  width: 100%;
  font-size: 33px;
  padding: 20px 30px;
  border-radius: 10px;
  margin-right: 15px;
  border: 1px solid rgba(200, 200, 200);
  ::placeholder {
    color: #bdbdbd;
  }
  outline: none;
`;

const HeaderBtn = styled.button`
  width: 200px;
  border: none;
  background-color: darkgray;
  border-radius: 10px;
`;

const AddIcon = styled.img`
  width: 65px;
`;
