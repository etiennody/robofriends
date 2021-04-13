import CardList from './CardList';
import React from 'react';
import { shallow } from 'enzyme';

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            email: 'john.snow@game.com',

        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})