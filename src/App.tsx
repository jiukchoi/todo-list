import Layout from './components/layout/Layout';
import TodoContainer from './pages/TodoContainer';
import GlobalStyle from './utils/styles/globalStyles';

const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <TodoContainer />
    </Layout>
  );
};

export default App;
