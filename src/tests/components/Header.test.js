import React from 'react'
import { shallow } from 'enzyme'

import { Header } from '../../components/Header'
import { startLogout } from '../../actions/auth'

test('should render Header conrrectly', () => {

    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should call start logout on button click', () => {
    const startLogout = jest.fn()
    const warpper = shallow(<Header startLogout={startLogout}/>)
    warpper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})