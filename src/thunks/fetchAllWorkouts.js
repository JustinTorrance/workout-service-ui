import * as actions from '../actions';
import { fetchData } from '../utilities/fetchData';

export const fetchAllWorkouts = () => {
  return async (dispatch) => {
    try {
      const url = 'https://workoutservice.herokuapp.com/api/v1/workouts';
      const response = await fetchData(url);
      dispatch(actions.setWorkouts(response));
    } catch (error) {
      console.log(error.message);
    }
  }
}