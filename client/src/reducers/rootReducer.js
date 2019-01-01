// This is the root reducer where we bring all other reducers
import {combineReducers} from 'redux';
import resultsReducer from './resultsReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  results: resultsReducer,
  errors: errorReducer,
});