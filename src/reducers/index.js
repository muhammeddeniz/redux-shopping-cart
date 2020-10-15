import data from "../data/products.json";

const INITIAL_STATE = {
  data: data,
  products: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };
    default:
      return state;
  }
};
