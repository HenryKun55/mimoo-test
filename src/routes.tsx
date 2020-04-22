import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Splash from './pages/Splash'
import Scan from './pages/Scan'
import ProductConfirmation from './pages/ProductConfirmation'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/scan' component={Scan}/>
        <Route path='/product/confirmation' component={ProductConfirmation}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes