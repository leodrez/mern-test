import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Add from './components/Add';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={ IndexItem } />
      <Route path='/add' component={ Add } />
      <Route path='/edit/:id' component={ EditItem } />
    </div>
  </Router>,
  document.getElementById('root')
);
