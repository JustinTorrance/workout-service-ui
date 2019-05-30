import { setLoading, setError } from '../actions'

export const saveWorkout = (workout) => {
  console.log('HITTTTTT!', workout)
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
      const data = response.json()
      console.log('DATA', data)
      dispatch(setLoading(false))
    } catch (error) {
      console.log(error)
      dispatch(setError(error.message))
    }
  }
} 