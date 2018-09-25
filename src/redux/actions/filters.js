import { SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR, RESET_ALL_FILTERS } from './actionTypes';

export const selectCategory = category => dispatch  => {
  return dispatch({ type: SET_PRODUCT_CATEGORY, category });
};

export const selectColor = color => dispatch  => {
  return dispatch({ type: SET_PRODUCT_COLOR, color });
};

export const resetFilters = () => dispatch  => {
  return dispatch({ type: RESET_ALL_FILTERS });
};
