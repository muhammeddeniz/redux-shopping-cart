import { ADD_PRODUCT, REMOVE_PRODUCT, SET_NOTIFICATION } from "../types";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
};

export const setNotification = (notification) => {
  return {
    type: SET_NOTIFICATION,
    payload: notification,
  };
};
