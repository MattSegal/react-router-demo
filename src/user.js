import React, {Component} from 'react'

export default class User extends Component 
{ 
  render() 
  {
    const {match} = this.props
    const username = match.params.user
    return (
      <div>
        <p>Hi {username}!</p>
      </div>
    )
  }
}