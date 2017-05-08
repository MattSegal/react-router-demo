import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import routes from 'routes'

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
        {routes.map((r, idx) => 
          <Route key={idx} exact={r.exact} path={r.path} component={r.component} />
        )}
      </div>
    )
  }
}