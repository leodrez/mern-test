import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Add from './components/Add';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ App } />
      <Route path='/add' component={ Add } />
    </div>
  </Router>,
  document.getElementById('root')
);
