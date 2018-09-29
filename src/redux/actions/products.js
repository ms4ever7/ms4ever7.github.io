import { FETCH_PRODUCTS, SET_PRIMARY_ITEM } from './actionTypes';

import products from '../../common/shoes';


const requestData = type => dispatch => dispatch({
  type,
  items: products.data
});

export const fetchProducts = () => dispatch => dispatch(requestData(FETCH_PRODUCTS));

export const setPrimaryItem = (color, itemId) => dispatch =>
  dispatch({ type: SET_PRIMARY_ITEM, selectedColor: color, selectedItemId: itemId });
