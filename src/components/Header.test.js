import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

it('expect to render Card component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
})