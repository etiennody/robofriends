import React from 'react';
import Scroll from './Scroll';
import { shallow } from 'enzyme';

it('expect to render Card component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
})