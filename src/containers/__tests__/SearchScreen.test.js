import React from 'react';
import { shallow } from 'enzyme';
import { SearchScreen } from '../SearchScreen';

describe('SearchScreen', () => {

  let wrapper;
  let mockWorkout = [
    {
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
  ]

  beforeEach(() => {
    wrapper = shallow(
      <SearchScreen
        workouts={mockWorkout}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})