import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import Tasks from '../pages/Tasks'
import About from '../pages/About'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import CollectionPage from '../pages/CollectionPage'
import AllCoursePage from '../pages/AllCoursePage'
import Test from '../pages/Test'
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer'

export const RouteMap = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>

          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/collection" component={CollectionPage}/>
          <Route exact path="/allcourse" component={AllCoursePage}/>

          <EnsureLoggedInContainer>
            <Route path="/test" component={Test}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/tasks" component={Tasks}/>
          </EnsureLoggedInContainer>
        </Switch>

      </BrowserRouter>
    </div>
  )
}
