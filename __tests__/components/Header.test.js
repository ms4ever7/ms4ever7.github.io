import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../../src/components/Header';

describe('Header', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <Header />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classnames', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('.header').exists()).toBeTruthy();
    expect(wrapper.find('.header__title').exists()).toBeTruthy();
    expect(wrapper.find('.header__separate-line').exists()).toBeTruthy();
    expect(wrapper.find('.header__subtitle').exists()).toBeTruthy();
  });
});
