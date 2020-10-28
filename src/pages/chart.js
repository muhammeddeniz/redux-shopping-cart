import React from "react";

import { connect } from "react-redux";
import { Card } from "../components";

const Chart = (props) => {
  return (
    <div>
      <div className="container">
        {props.products?.map((product) => (
          <Card
            isButtonVisible={false}
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

const getStateProps = (state) => {
  return {
    data: state.data,
    products: state.products,
  };
};

export default connect(getStateProps)(Chart);
