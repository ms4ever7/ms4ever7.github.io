import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Colors from '../../src/components/filters/Colors';

describe('Colors', () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([]);
  });

  it('should render correctly', () => {
    const props = fulfillProps();
    wrapper = shallow(
      <Colors />,
      {
        context: { store: mockStore(props) }
      }
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

});


const fulfillProps = (props = {}) => ({
  products: {
    items: []
  },
  filters: {
    selectCategory: [],
    selectColors: [],
    ...props
  }
});
