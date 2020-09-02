import React from 'react';
import SignupContainerOne from './session/signup'
import LoginContainer from './session/login'
import VideosContainer from './home'
import VideoContainer from './video'
import categoryContainer from './category'
import LandingPage from './landingpage'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Switch} from 'react-router-dom'

export default () => (
  <div>
    <ProtectedRoute path='/' component={VideosContainer} />
    <Switch>
      <ProtectedRoute path='/videos/:videoId' component={VideoContainer} />
      <ProtectedRoute exact path='/' component={categoryContainer} />
    </Switch>
    <Switch>
      <AuthRoute exact path="/" component={LandingPage} />
      <AuthRoute exact path="/signup" component={SignupContainerOne} />
      <AuthRoute exact path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
