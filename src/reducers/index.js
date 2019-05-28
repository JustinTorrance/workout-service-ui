import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';
import { selectedWorkout } from './selectedWorkout';
import { exercises } from './exercises';

export const rootReducer = combineReducers({
  error: error,
  loading: loading,
  selectedWorkout: selectedWorkout,
  exercises: exercises
});