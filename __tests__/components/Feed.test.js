import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Feed from '../../src/components/Feed';
import Filters from '../../src/components/filters/Filters';
import Products from '../../src/components/Products';

describe('Feed', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <Feed />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classname', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.contains(<Filters />)).toBe(true);
    expect(wrapper.contains(<Products />)).toBe(true);
  });
});
