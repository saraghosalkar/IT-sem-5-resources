import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import about from './about';
import contact from './contact';
const routing = (
  <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <ul>  
        <li>  
          <Link to="./">Home</Link>  React
        </li>  
        <li>  
          <Link to="./about">about</Link>  
        </li>  
        <li>  
          <Link to="./contact">contact</Link>  
        </li>  
      </ul>  
      <Route exact path="/" component={App} />  
      <Route path="/about" component={about} />  
      <Route path="/contact" component={contact} />  
    </div>  
  </Router>
)
ReactDOM.render(routing,document.getElementById('root'));