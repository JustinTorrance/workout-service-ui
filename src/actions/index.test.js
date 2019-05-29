
import * as actions from './index'

describe('setError', () => {
  it('should return a type of SET_ERROR and an error message', () => {
    const message = 'Something went wrong'
    const result = actions.setError(message)
    const expected = {
      type: 'SET_ERROR',
      error: 'Something went wrong'
    }
    expect(result).toEqual(expected)
  })
})

describe('setLoading', () => {
  it('should return a type of SET_LOADING and a boolean of true', () => {
    const result = actions.setLoading(true)
    const expected = {
      type: 'SET_LOADING',
      loading: true
    }
    expect(result).toEqual(expected)
  })
})

describe('selectWorkout', () => {
  it('should return a type of SELECT_WORKOUT and a workout', () => {
    const mockWorkout = {
      "id": 1,
      "name": "Workout 1",
      "length": 30,
      "avgrating": 3.5,
      "repetitions": [
        {
          "id": 1,
          "exercise": {
            "id": 1,
            "name": "Exercises 1",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "30 reps"
        },
        {
          "id": 2,
          "exercise": {
            "id": 2,
            "name": "Exercises 2",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "32 reps"
        },
        {
          "id": 3,
          "exercise": {
            "id": 3,
            "name": "Exercises 3",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "100 reps"
        }
      ]
    }
    const result = actions.selectWorkout(mockWorkout)
    const expected = {
      type: 'SELECT_WORKOUT',
      workout: mockWorkout
    }
    expect(result).toEqual(expected)
  })
})

describe('setWorkouts', () => {
  it('should return a type of SET_WORKOUTS and a workout', () => {
    const mockWorkouts = [{
      "id": 1,
      "name": "Workout 1",
      "length": 30,
      "avgrating": 3.5,
      "repetitions": [
        {
          "id": 1,
          "exercise": {
            "id": 1,
            "name": "Exercises 1",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "30 reps"
        },
        {
          "id": 2,
          "exercise": {
            "id": 2,
            "name": "Exercises 2",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "32 reps"
        },
        {
          "id": 3,
          "exercise": {
            "id": 3,
            "name": "Exercises 3",
            "description": "30",
            "img_url": "blank.jpg"
          },
          "description": "100 reps"
        }
      ]
    }]
    const result = actions.setWorkouts(mockWorkouts)
    const expected = {
      type: 'SET_WORKOUTS',
      workouts: mockWorkouts
    }
    expect(result).toEqual(expected)
  })
})

describe('storeExercises', () => {
  it('should return a type of SET_WORKOUTS and a workout', () => {
    const mockExercises = [
      {
        "id": 1,
        "exercise": {
          "id": 1,
          "name": "Exercises 1",
          "description": "30",
          "img_url": "blank.jpg"
        },
        "description": "30 reps"
      },
      {
        "id": 2,
        "exercise": {
          "id": 2,
          "name": "Exercises 2",
          "description": "30",
          "img_url": "blank.jpg"
        },
        "description": "32 reps"
      },
      {
        "id": 3,
        "exercise": {
          "id": 3,
          "name": "Exercises 3",
          "description": "30",
          "img_url": "blank.jpg"
        },
        "description": "100 reps"
      }
    ]
    const result = actions.storeExercises(mockExercises)
    const expected = {
      type: 'STORE_EXERCISES',
      exercises: mockExercises
    }
    expect(result).toEqual(expected)
  })
})