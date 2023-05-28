import { BrowserRouter } from 'react-router-dom';
import HomePage from './assets/pages/homePage/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
