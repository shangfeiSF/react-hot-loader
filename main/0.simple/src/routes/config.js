import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../modules/App'
import Home from '../modules/Home'
import About from '../modules/About'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}/>
  </Route>
)