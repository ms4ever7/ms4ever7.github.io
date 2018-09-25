import { FETCH_PRODUCTS, SET_PRIMARY_ITEM } from '../actions/actionTypes';

const initialState = {
  items: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        items: [...state.items, ...action.items]
      };
    case SET_PRIMARY_ITEM:
      const itemsToUpdate = state.items;
      const { selectedColor, selectedItemId } = action;
      const itemToUpdate = itemsToUpdate.find(item => item.id === selectedItemId);
      const appropriateItem = itemToUpdate.similarProducts.find(({ color }) =>
        color.toLowerCase() === selectedColor.toLowerCase());

      itemToUpdate.primaryColor = appropriateItem.color;
      itemToUpdate.primaryImageUrl = appropriateItem.imageUrl;
      itemToUpdate.price = appropriateItem.price;

      return {
        items: [...itemsToUpdate]
      };
    default:
      return state;
  }
}

export default products;