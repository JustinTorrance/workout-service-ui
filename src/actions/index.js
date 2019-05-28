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

export const storeExercises = (exercises) => ({
  type: 'STORE_EXERCISES',
  exercises
})
