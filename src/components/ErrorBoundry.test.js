import ErrorBoundry from './ErrorBoundry';
import React from 'react';
import { shallow } from 'enzyme';

it('expect to render Card component', () => {
    expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
})