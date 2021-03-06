import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Products from '../../src/components/Products';
// import Product from '../../src/components/Product';

describe('Products', () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = configureMockStore([]);
  });

  it('should render correctly', () => {
    const props = fulfillProps();
    wrapper = shallow(
      <Products />,
      {
        context: { store: mockStore(props) }
      }
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});


const fulfillProps = (props = {}) => ({
  products: {
    items: [],
    ...props
  },
  filters: {
    selectCategory: [],
    selectColors: []
  }
});
