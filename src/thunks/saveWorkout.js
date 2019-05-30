import { setLoading, setError } from '../actions'

export const saveWorkout = (workout) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      dispatch(setLoading(true))
      const response = await fetch('https://workoutservice.herokuapp.com/api/v1/workouts', options)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(error.message))
    }
  }
} 