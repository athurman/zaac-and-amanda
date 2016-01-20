import React from 'react'
import {Route, IndexRoute} from 'react-router'

// General Views
import MainLayout from '../components/MainLayout/MainLayout'
import GeneralInfo from '../views/GeneralInfo/GeneralInfo'

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={GeneralInfo} />
  </Route>
);
