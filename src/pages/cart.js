import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Card } from "../components";
import { removeProduct, setNotification } from "../actions";

const Cart = (props) => {
  useEffect(() => {
    if (props.products.length === 0) {
      props.setNotification(false);
    }
  });

  return (
    <div>
      <div className="container">
        {props.products.map((product) => (
          <Card
            buttonDelete={true}
            onClick={async () => {
              await props.removeProduct(product);
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
    count: state.pruductCount,
  };
};

export default connect(getStateProps, {
  removeProduct,
  setNotification,
})(Cart);
