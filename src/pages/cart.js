import React from "react";

import { connect } from "react-redux";
import { Card } from "../components";
import { removeProduct } from "../actions";

const Cart = (props) => {
  return (
    <div>
      <div className="container">
        {props.products.map((product) => (
          <Card
            buttonDelete={true}
            onClick={() => {
              props.removeProduct(product);
            }}
            name={product.name}
            price={product.price}
            buttonText="Delete"
          ></Card>
        ))}
      </div>
    </div>
  );
};

const getStateProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(getStateProps, { removeProduct })(Cart);
