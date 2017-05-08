import React, {PropTypes, Component} from 'react'
import {Link, Route} from 'react-router-dom'

import User from 'user'

/*
This page is rendered by a Route, but it can still render Routes/Links inside
*/

export default class UsersPage extends Component 
{ 
  render() 
  {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          <Link to="/users/matt"><li>matt</li></Link> 
          <Link to="/users/gavin"><li>gavin</li></Link> 
          <Link to="/users/quek"><li>quek</li></Link> 
        </ul>
        <hr/>
        <Route path="/users/:user" component={User} />
      </div>
    )
  }
}