import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addProduct, removeProduct, setNotification } from "../actions";
import { Card } from "../components";

import "../styles/home.css";

const App = (props) => {
  console.log("products : ", props.products);

  return (
    <div className="carts">
      <div className="container">
        {props.data?.data?.map((product) => (
          <Card
            onClick={() => {
              props.addProduct(product);
              props.setNotification(true);
            }}
            name={product.name}
            price={product.price}
          ></Card>
        ))}
      </div>
    </div>
  );
};

const GetStoreProps = (state) => {
  return {
    data: state.data,
    products: state.products,
  };
};

export default connect(GetStoreProps, {
  addProduct,
  removeProduct,
  setNotification,
})(App);
