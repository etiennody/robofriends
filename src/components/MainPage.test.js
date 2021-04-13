import MainPage from './MainPage';
import React from 'react';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters returns john robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id: 1,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

it('filters return empty robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'Amanda',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />)
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
})