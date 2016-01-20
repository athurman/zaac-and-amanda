import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import routes from './routes';
import Root from './components/Root/Root';

ReactDOM.render(
  <Root
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
