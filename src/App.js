import { BrowserRouter as Router } from 'react-router-dom';
import './assets/sass/main.scss';
import Roots from './route/Roots';

function App() {
  return (
    <div className="App">
      <Router>
        <Roots />
      </Router>
    </div>
  );
}

export default App;
