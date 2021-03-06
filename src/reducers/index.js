import data from "../data/products.json";
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_NOTIFICATION } from "../types";

const INITIAL_STATE = {
  data: data,
  products: [],
  notification: false,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };

    default:
      return state;
  }
};
