import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import './assets/index.css'

import routes from './routes/index'

var content = <Router routes={routes} history={browserHistory}/>
var root = document.getElementById('example')

render(content, root)