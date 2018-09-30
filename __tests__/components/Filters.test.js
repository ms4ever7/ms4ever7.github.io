import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Filters from '../../src/components/filters/Filters';
import Categories from '../../src/components/filters/Categories';
import Colors from '../../src/components/filters/Colors';

describe('Feed', () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([]);
  });


  it('should render correctly', () => {
    wrapper = shallow(<Filters />,
      {
        context: { store: mockStore(fulfillProps()) }
      });

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('has appropriate components inside', () => {
    const wrapper = shallow(<Filters />,
      {
        context: { store: mockStore(fulfillProps()) }
      });

    const context = wrapper.dive();

    expect(context.contains(<Categories />)).toBe(true);
    expect(context.contains(<Colors />)).toBe(true);
  });
});

const fulfillProps = (props = {}) => ({
  resetFilters: () => {},
  ...props
});
