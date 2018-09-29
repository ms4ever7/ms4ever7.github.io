import { SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR, RESET_ALL_FILTERS } from './actionTypes';

export const selectCategory = category => dispatch => dispatch({ type: SET_PRODUCT_CATEGORY, category });

export const selectColor = color => dispatch => dispatch({ type: SET_PRODUCT_COLOR, color });

export const resetFilters = () => dispatch => dispatch({ type: RESET_ALL_FILTERS });
