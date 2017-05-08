import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import RootPage from 'pages/root'
import UsersPage from 'pages/users'
import ReduxPage from 'pages/redux'

/*
  Route component
    - You can put them anywhere in the router

    - Receives route info from router via context
    
    - Renders 'component' if match, else null

    - Different routing styles possible
  
  Source
  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Route.js
*/

export default class Content extends Component 
{ 
  render() 
  {
    return (
      <div>
        <Route exact path="/" component={RootPage} />
        <Route path="/users/" component={UsersPage} />
        <Route path="/redux/" component={ReduxPage} />
        <Route path="/about/" component={() => (
          <div>
            <h2>About</h2>
            <p> This app is a demo of React Router</p>
          </div>
        )} />
      </div>
    )
  }
}
