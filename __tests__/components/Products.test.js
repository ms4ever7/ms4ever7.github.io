import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Products from '../../src/components/Products';

describe('Products', () => {
  let wrapper;

  it('should render correctly', () => {
    wrapper = shallow(
      <Products />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classnames', () => {
    const wrapper = shallow(
      <Products />
    );

    expect(wrapper.find('.products__wrapper').exists()).toBeTruthy();
  });
});
