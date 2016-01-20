import React from 'react'
import {Route, IndexRoute} from 'react-router'

// General Views
import MainLayout from '../components/MainLayout/MainLayout'
import GeneralInfo from '../views/GeneralInfo/GeneralInfo'
import WeddingLocation from '../views/WeddingLocation/WeddingLocation'
import WeddingGifts from '../views/WeddingGifts/WeddingGifts'
import WeddingRsvp from '../views/WeddingRsvp/WeddingRsvp'

export default (
  <Route path='/' component={MainLayout}>
    <IndexRoute component={GeneralInfo} />
    <Route path='location' component={WeddingLocation} />
    <Route path='registry' component={WeddingGifts} />
    <Route path='rsvp' component={WeddingRsvp} />
  </Route>
)
