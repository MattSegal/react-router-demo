"use strict"
import style from 'scss/style.scss'

// React
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import {reducer} from 'reducers'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger  from 'redux-logger'
const loggerMiddleware = createLogger()
const store  = createStore(
  reducer, 
  {/* Initial state */},  
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)

// React Router
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <p>sqwswqs</p>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('react-root')
)
