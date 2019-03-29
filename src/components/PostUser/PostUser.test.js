import React from 'react';
import { shallow } from 'enzyme';
import PostUser from './PostUser';

describe('<PostUser />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostUser />);
    expect(wrapper).toMatchSnapshot();
  });
});
