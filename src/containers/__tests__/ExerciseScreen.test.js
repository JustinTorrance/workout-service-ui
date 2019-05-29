import React from 'react';
import { shallow } from 'enzyme';
import { ExerciseScreen } from '../ExerciseScreen';

describe('ExerciseScreen', () => {

  let wrapper;
  let navigationMock = { navigate: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(
      <ExerciseScreen
        navigation={navigationMock}
      />
)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})