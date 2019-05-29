import React from 'react';
import { shallow } from 'enzyme';
import { WorkoutScreen } from '../WorkoutScreen';

describe('WorkoutScreen', () => {

  let wrapper;
  let navigationMock = { getParam: jest.fn() };
  let mockWorkout = {
    item: {
      id: 1,
      name: "Workout 1",
      length: 30,
      avgrating: 3.5,
    }
  }
  

  beforeEach(() => {
    wrapper = shallow(
      <WorkoutScreen
        navigation={navigationMock}
        workout={mockWorkout}
      />
)
  })

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})