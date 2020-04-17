import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Splash from './pages/Splash'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/login' component={Login}/>
        <Route paht='/home' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes