import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import App from './App';
import Add from './components/Add';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ App } />
      <Route path='/add' component={ Add } />
      <Route path='/index' component={ IndexItem } />
      <Route path='/edit/:id' component={ EditItem } />
    </div>
  </Router>,
  document.getElementById('root')
);
