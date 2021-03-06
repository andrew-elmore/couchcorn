import { combineReducers } from 'redux';
import sessionReducer from './session'
import errorsReducer from './errors'
import videoReducer from './videos'
import categoriesReducer from './categories';
import listReducer from './list';


export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  videos: videoReducer,
  categories: categoriesReducer,
  list: listReducer
});