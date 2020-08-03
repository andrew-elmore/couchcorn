import React from 'react';
import SignupContainerOne from './session/signup'
import LoginContainer from './session/login'
import VideosContainer from './home'
import VideoContainer from './video'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
  <div>
    <ProtectedRoute exact path='/' component={VideosContainer} />
    <ProtectedRoute path='/videos/:videoId' component={VideoContainer} />
    <AuthRoute path="/signup" component={SignupContainerOne} />
    <AuthRoute path="/login" component={LoginContainer} />
   
  </div>
);
