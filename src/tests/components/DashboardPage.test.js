import React from 'react'
import { shallow } from 'enzyme'
import DashboardPage from '../../components/DashBoardPage'

test('should render dashboard page', () => {
    const wrapper = shallow(<DashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})