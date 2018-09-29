import { Reducer } from 'redux-testkit';

import products from '../../src/redux/reducers/products';
import filters from '../../src/redux/reducers/filters';
import {
  FETCH_PRODUCTS, SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR, RESET_ALL_FILTERS
} from '../../src/redux/actions/actionTypes';

const mockItems = [
  {
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
  }
];

const initialProductsState = { items: [] };
const initialFiltersState = {
  selectedCategories: [],
  selectedColors: []
};

describe('Reducers', () => {
  it('products reducers should have initial state', () => {
    expect(products()).toEqual(initialProductsState);
  });

  it('should not affect products state', () => {
    Reducer(products).expect({ type: 'NOT_EXISTING' }).toReturnState(initialProductsState);
  });

  it('should store fetched products', () => {
    const action = { type: FETCH_PRODUCTS, items: mockItems };

    Reducer(products).expect(action).toReturnState({ ...initialProductsState, items: mockItems });
  });

  it('filters reducers should have initial state', () => {
    expect(filters()).toEqual(initialFiltersState);
  });

  it('should not affect filters state', () => {
    Reducer(products).expect({ type: 'NOT_EXISTING' }).toReturnState(initialProductsState);
  });

  it('should store filtered categories', () => {
    const action = { type: SET_PRODUCT_CATEGORY, category: 'shoes' };
    const selectedCategories = ['shoes'];

    Reducer(filters).expect(action).toReturnState({ ...initialFiltersState, selectedCategories });
  });

  it('shuold clear filtered categories', () => {
    const action = { type: SET_PRODUCT_CATEGORY, category: 'shoes' };

    Reducer(filters).withState({ ...initialFiltersState, selectedCategories: ['shoes'] }).expect(action).toReturnState({ ...initialFiltersState });
  });

  it('should store filtered colors', () => {
    const action = { type: SET_PRODUCT_COLOR, color: 'red' };
    const selectedColors = ['red'];

    Reducer(filters).expect(action).toReturnState({ ...initialFiltersState, selectedColors });
  });

  it('should clear filtered colors', () => {
    const action = { type: SET_PRODUCT_COLOR, color: 'red' };

    Reducer(filters).withState({ ...initialFiltersState, selectedColors: ['red'] }).expect(action).toReturnState({ ...initialFiltersState });
  });

  it('should reset all filters', () => {
    const action = { type: RESET_ALL_FILTERS };

    Reducer(filters).expect(action).toReturnState({ ...initialFiltersState });
  });
});
