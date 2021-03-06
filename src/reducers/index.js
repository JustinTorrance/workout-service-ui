import { combineReducers } from 'redux';
import { error } from './error';
import { loading } from './loading';
import { selectedWorkout } from './selectedWorkout';
import { workouts } from '../reducers/workouts';
import { exercises } from './exercises';
import { exercisesInProgress } from './exercisesInProgress'

export const rootReducer = combineReducers({
  error: error,
  loading: loading,
  selectedWorkout: selectedWorkout,
  workouts: workouts,
  exercises: exercises,
  exercisesInProgress: exercisesInProgress
});