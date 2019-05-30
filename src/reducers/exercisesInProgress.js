export const exercisesInProgress = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EXERCISE_TO_WORKOUT':
      return [...state, action.exercise]
    default:
      return state
  }
}