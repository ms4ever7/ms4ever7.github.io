import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from '../../src/components/Footer';

describe('Footer', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <Footer />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classnames', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('.footer').exists()).toBeTruthy();
    expect(wrapper.find('.footer-title').exists()).toBeTruthy();
  });
});
