import React from 'react';
import SignupContainerOne from './session/signup'
import LoginContainer from './session/login'
import VideosContainer from './home'
import VideoContainer from './video'
import CategoryContainer from './category'
import Search from './search'
import LandingPage from './landingpage'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch} from 'react-router-dom'
import mylist from './mylist';
import About from './about'

export default () => (
  <div>
    <ProtectedRoute path='/' component={VideosContainer} />
    <Switch>
      <ProtectedRoute path='/mylist' component={mylist} />
      <ProtectedRoute path='/videos/:videoId' component={VideoContainer} />
      <ProtectedRoute exact path='/videos' component={CategoryContainer} />
      <ProtectedRoute exact path='/search' component={Search} />
      <ProtectedRoute exact path='/about' component={About} />

    </Switch>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <AuthRoute exact path="/signup" component={SignupContainerOne} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
