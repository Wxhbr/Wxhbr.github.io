import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import About from './About';
import Home from './Home';
import Users from './Users';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <li>
          <Link to="/" > Home </Link>
        </li>
        <li>
          <Link to="/about" > About </Link>
        </li>
        <li>
          <Link to="/users" > Users </Link>
        </li>
      </div>

      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route exact path="/" component={Home} />

    </BrowserRouter>
  );
}

export default App;
