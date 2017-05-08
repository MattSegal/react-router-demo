import React, {PropTypes, Component} from 'react'
import {Link} from 'react-router-dom'

/*
  Link component
    - You can put them anywhere in the router

    - Renders an anchor tag with OnClick event
      - OnClick event sends notice to Router of route change
      - Degrades gracefully into a normal anchor tag with no JS

    - Receives 'history' object from router via context, for messaging the Router
  
  Source
  https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js
*/

export default class Navigation extends Component 
{ 
  render() 
  {
    return (
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/users"><li>Users</li></Link>
        <Link to="/redux"><li>Redux</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
    )
  }
}