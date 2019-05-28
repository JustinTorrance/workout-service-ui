export const setError = error => ({
  type: 'SET_ERROR',
  error
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  loading
});

export const selectWorkout = (workout) => ({
  type: 'SELECT_WORKOUT',
  workout
});

export const setWorkouts = workouts => ({
  type: 'SET_WORKOUTS',
  workouts
});