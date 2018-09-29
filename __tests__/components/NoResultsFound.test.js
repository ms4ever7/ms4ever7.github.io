import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NoResultsFound from '../../src/components/NoResultsFound';

describe('NoResultsFound', () => {
  let wrapper;


  it('should render correctly', () => {
    wrapper = shallow(
      <NoResultsFound />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate classnames', () => {
    const wrapper = shallow(<NoResultsFound />);

    expect(wrapper.find('.no-results-found__wrapper').exists()).toBeTruthy();
    expect(wrapper.find('.no-results-found__title').exists()).toBeTruthy();
    expect(wrapper.find('.no-results-found__subtitle').exists()).toBeTruthy();
  });
});
