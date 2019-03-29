import React from 'react';
import { shallow } from 'enzyme';
import AllUser from './AllUser';

describe('<AllUser />', () => {
  test('renders', () => {
    const wrapper = shallow(<AllUser />);
    expect(wrapper).toMatchSnapshot();
  });
});
