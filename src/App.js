import { BrowserRouter as Router } from 'react-router-dom';
import './assets/sass/main.scss';
import Roots from './route/Roots';
import MainHeader from './shared/components/Navigation/MainHeader';

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Roots />
      </Router>
    </div>
  );
}

export default App;
