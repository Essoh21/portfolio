import { BrowserRouter } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
