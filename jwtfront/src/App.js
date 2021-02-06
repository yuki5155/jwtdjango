import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          
      </Router>
      
    </div>
  );
}

export default App;
