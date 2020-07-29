import React from 'react';
import SignupContainerOne from './session/signup'
import LoginContainer from './session/login'
import VideosContainer from './home'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
  <div>
    <ProtectedRoute exact path='/' component={VideosContainer} />
    <AuthRoute path="/signup" component={SignupContainerOne} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path='/videos' component={VideosContainer} />
  </div>
);
