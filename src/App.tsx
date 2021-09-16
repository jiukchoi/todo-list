import { useState } from 'react';
import Layout from './components/layout/Layout';
import Modal from './components/modal/Modal';
import TodoContainer from './pages/TodoContainer';
import { ModalContext } from './utils/contexts/modal';
import GlobalStyle from './utils/styles/globalStyles';
import ReadModal from './components/modal/ReadModal';
import { ITodo } from './utils/types/todo';
import { LS_KEY } from './utils/constants/localStorageKey';
import { getItem } from './utils/localStorageService';
import { TodoContext } from './utils/contexts/todo';

const App = () => {
  const [showReadModal, setShowReadModal] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [todo, setTodo] = useState<ITodo>({
    id: 0,
    task: '',
    status: '',
  });
  const [todos, setTodos] = useState<ITodo[] | []>(getItem(LS_KEY));

  return (
    <TodoContext.Provider value={{ todo, setTodo, todos, setTodos }}>
      <ModalContext.Provider
        value={{ showReadModal, setShowReadModal, isUpdate, setIsUpdate }}
      >
        {showReadModal && (
          <Modal>
            <ReadModal />
          </Modal>
        )}
        <Layout>
          <GlobalStyle />
          <TodoContainer />
        </Layout>
      </ModalContext.Provider>
    </TodoContext.Provider>
  );
};

export default App;
