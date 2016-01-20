import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import routes from './routes';
import Root from './components/Root/Root';

ReactDOM.render(
  <Root
    history={hashHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
