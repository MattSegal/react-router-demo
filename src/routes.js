import React from 'react'
import RootPage from 'pages/root'
import UsersPage from 'pages/users'
import ReduxPage from 'pages/redux'

const routes = [
  {
    path: '/',
    component: () => <RootPage />,
    exact: false,
  },
  {
    path: '/users/',
    component: () => <UsersPage />,
    exact: false,
  },
  {
    path: '/redux/',
    component: () => <ReduxPage />,
    exact: false,
  },
  {
    path: '/about/',
    component: () => (
      <div>
        <h2>About</h2>
        <p> This app is a demo of React Router</p>
      </div>
    ),
    exact: false,
  },
]

module.exports = routes