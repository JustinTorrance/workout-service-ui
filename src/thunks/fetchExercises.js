import { setLoading, setError, storeExercises } from '../actions'

export const fetchExercises = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('https://workoutservice.herokuapp.com/api/v1/exercises')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const exercises = await response.json()
      dispatch(setLoading(false))
      dispatch(storeExercises(exercises))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
}