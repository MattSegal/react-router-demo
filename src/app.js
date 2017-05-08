import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import Navigation from 'nav'
import Content from 'content'


export default class App extends Component 
{ 
  render() 
  {
    return (
      <div>
        <Navigation />
        <hr/>
        <Content />
      </div>
    )
  }
}