import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addProduct, removeProduct } from "../actions";
import { Card } from "../components";

const App = (props) => {
  console.log("products : ", props.products);

  return (
    <div className="carts">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {props.data?.data?.map((product) => (
          <Card
            onClick={() => {
              props.addProduct(product);
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

export default connect(GetStoreProps, { addProduct, removeProduct })(App);
