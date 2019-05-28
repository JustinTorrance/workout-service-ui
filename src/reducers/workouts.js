export const workouts = (state = [], action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return action.workouts;
    default:
      return state;
  }
};
