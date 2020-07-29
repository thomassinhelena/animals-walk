import React from 'react';
import {
  BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';
import Forms from '../src/components/Forms';
import HomePage from '../src/components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Les ballades de nos toutous </span>
        <div>
          <ul>
            <li>
              <Link to={'/'} className="nav-link">HomePage</Link>
            </li>
            <li>
              <Link to={'/forms'} className="nav-link">Forms</Link>
            </li>
          </ul>
        </div>
    </nav>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Forms" component={Forms}/>
          </Switch>
        
    </div>
    </Router>
);
}

export default App;