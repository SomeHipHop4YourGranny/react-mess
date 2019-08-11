import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Auth, NotFound } from 'pages'
import { ChatContainer } from 'containers'

import './app.scss'
import 'styles/index.scss'

function App (props) {
  const { isAuth } = props
  return (
    <div className='App'>
      {isAuth ? (
        <Switch>
          <Route
            exact
            path={['/', '/login', '/register']}
            component={ChatContainer}
          />
          <Route path='*' component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={['/', '/login', '/register']} component={Auth} />
          <Route path='*' component={NotFound} />
        </Switch>
      )}
    </div>
  )
}

export default App
