export const exercises = (state = [], action) => {
  switch(action.type) {
    case 'STORE_EXERCISES':
      return action.exercises
    default:
      return state
  }
}