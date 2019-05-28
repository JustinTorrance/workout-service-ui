import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';
import { selectedWorkout } from './selectedWorkout';
import { workouts } from '../reducers/workouts';

export const rootReducer = combineReducers({
  error: error,
  loading: loading,
  selectedWorkout: selectedWorkout,
  workouts: workouts
});