import { SET_PRODUCT_CATEGORY, SET_PRODUCT_COLOR, RESET_ALL_FILTERS } from '../actions/actionTypes';

const initialState = {
  selectedCategories: [],
  selectedColors: []
};

const filters = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCT_CATEGORY:
      const { selectedCategories } = state;

      if (selectedCategories.includes(action.category)) {
        return {
          ...state,
          selectedCategories: selectedCategories.filter(category => category !== action.category)
        };
      }

      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.category]
      };
    case SET_PRODUCT_COLOR:
      const { selectedColors } = state;

      if (selectedColors.includes(action.color)) {
        return {
          ...state,
          selectedColors: selectedColors.filter(color => color !== action.color)
        };
      }

      return {
        ...state,
        selectedColors: [...state.selectedColors, action.color]
      };
    case RESET_ALL_FILTERS:
      return {
        ...state,
        selectedColors: [],
        selectedCategories: []
      };
    default:
      return state;
  }
};

export default filters;
