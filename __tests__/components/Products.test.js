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

  it('is null when no data has been passed', () => {
    const items = [{
      id: 'id',
      price: '$67.94',
      category: 'Athletic',
      name: 'Yeezy Boost',
      owner: 'Adidas',
      colors: ['black', 'red', 'grey'],
      primaryImageUrl: 'test',
      primaryColor: 'Red',
      similarProducts: [
        {
          price: '$67.94',
          imageUrl: 'test',
          color: 'Black'
        }
      ]
    }];
    const wrapper = shallow(<Products />, {
      context: { store: mockStore(fulfillProps({ items })) }
    });

    const render = wrapper.dive();

    expect(render.find('.productItem').exists()).toBeTruthy();
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
