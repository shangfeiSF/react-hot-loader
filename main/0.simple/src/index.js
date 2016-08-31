import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import configBasename from '../../configBasename'

import './assets/index.css'
import '../../global.css'

import routes from './routes/config'

var content = <Router routes={routes} history={configBasename(browserHistory, __dirname)}/>
var root = document.getElementById('example')

render(content, root)