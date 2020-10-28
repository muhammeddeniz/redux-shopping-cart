import data from "../data/products.json";

const INITIAL_STATE = {
  data: data,
  products: [],
  notification: false,
};

const Delete = (data, payload) => {
  data.splice(
    data.findIndex((v) => v === payload),
    1
  );

  return data;
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, action.payload] };

    case "REMOVE_PRODUCT":
      return { ...state, products: Delete(state.products, action.payload) };

    case "SET_NOTIFICATION":
      return { ...state, notification: action.payload };

    default:
      return state;
  }
};
