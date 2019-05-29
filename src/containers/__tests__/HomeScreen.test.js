import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from '../HomeScreen';

describe('HomeScreen', () => {

  let wrapper;
  let navigationMock = { navigate: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(
      <HomeScreen
        navigation={navigationMock}
      />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})