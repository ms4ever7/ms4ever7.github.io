import React from 'react';
import Header from '../.././src/components/Header';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

describe('ExploreStrainsList', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <Header />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

});