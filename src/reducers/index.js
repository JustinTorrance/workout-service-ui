import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';
import { selectedWorkout } from './selectedWorkout'

export const rootReducer = combineReducers({
  error: error,
  loading: loading,
  selectedWorkout: selectedWorkout
});