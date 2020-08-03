import { combineReducers } from 'redux';
import sessionReducer from './session'
import errorsReducer from './errors'
import videoReducer from './videos'


export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  videos: videoReducer
});