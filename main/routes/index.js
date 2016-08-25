import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../components/App'
import Index from '../components/Index'
import About from '../components/About'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}></IndexRoute>
    <Route path="/about" component={About}/>
  </Route>
)