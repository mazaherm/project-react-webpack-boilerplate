import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from './TestComponent'

describe('<TestComponent />', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<TestComponent />)
    expect(wrapper.length).toEqual(1)
  })
})
