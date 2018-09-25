import { FETCH_PRODUCTS, SET_PRIMARY_ITEM } from './actionTypes';

import products from '../../common/shoes';


const requestData = (type) => dispatch => {
  return dispatch({
    type: 'FETCH_PRODUCTS',
    items: products.data
  });
};

export const fetchProducts = () => dispatch  => {
  return dispatch(requestData(FETCH_PRODUCTS));
};

export const setPrimaryItem = (color, itemId) => 
  dispatch => {
    return dispatch({ type: SET_PRIMARY_ITEM, selectedColor: color, selectedItemId: itemId })
}
