import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './Hero'
import HeroDetail from './HeroDetail'
import Home from './Home'

import View from '../layout/View'

import Creditos from './Creditos'
import Fuentes from './Fuentes'
const RouterApp = () => {
  return (
    
      <BrowserRouter>
        <View>
        <Switch>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/Creditos">
            <Creditos />
          </Route>
          <Route path="/Fuentes">
            <Fuentes />
          </Route>
        </Switch>
        </View>
      </BrowserRouter>
   
  )
}

export default RouterApp
