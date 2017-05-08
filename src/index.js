"use strict"
import style from 'scss/style.scss'
import App from 'app'

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
  {visible: false},  
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
)

// React Router
import {BrowserRouter} from 'react-router-dom'

// Render to DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('react-root')
)


/*
  Router component

    - Basically a pubsub implementation
  
    - Provides 'context' to all children who listen

    - Router update cycle
        1) Router passes history obj to Link via context
        2) Link click handler pushes new route to history obj
        3) Router responds, calls setState, updating 'match' state
        4) Router's new match gets pushed down into Route components via context
        5) Routes re-render with new match

    - Router is a generic API with several implementations
      - BrowserRouter   - uses HTML5 based history API
      - HashRouter      - uses hash to route (eg google.com/foo#bar hash is 'bar')
      - StaticRouter    - server side rendering
  
  Source
  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Router.js
*/