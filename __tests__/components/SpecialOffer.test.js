import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SpecialOffer from '../../src/components/SpecialOffer';

describe('SpecialOffer', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <SpecialOffer />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classname', () => {
    const wrapper = shallow(<SpecialOffer />);

    expect(wrapper.find('.special-offer__title').exists()).toBeTruthy();
  });
});
