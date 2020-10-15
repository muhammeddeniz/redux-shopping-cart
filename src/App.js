import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addProduct, removeProduct } from "./actions";

const App = (props) => {
  console.log("products : ", props.products);

  return (
    <div className="App">
      {props.data?.data?.map((product) => (
        <div
          style={{
            backgroundColor: "gray",
            cursor: "pointer",
            display: "inline-block",
            margin: 10,
          }}
          onClick={() => {
            props.addProduct(product);
          }}
        >
          <h1>{product.name}</h1>
          <h4>{product.price}</h4>
        </div>
      ))}

      <div
        style={{
          marginTop: 200,
        }}
      >
        {props.products?.map((product) => (
          <div>
            <h1>{product.name}</h1>
            <h4>{product.price}</h4>
          </div>
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

export default connect(GetStoreProps, { addProduct, removeProduct })(App);
