export const workouts = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_WORKOUT':
      return action.workout;
    default:
      return state;
  }
};