import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addProduct, removeProduct } from "../actions";
import { Card } from "../components";

const App = (props) => {
  console.log("products : ", props.products);

  return (
    <div className="App">
     
       <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
         
        >
      {props.data?.data?.map((product) => (
       
          <Card  
          onClick={() => {
            props.addProduct(product);
          }} 
          name={product.name} 
          price={product.price}></Card>
          ))}
          </div>

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
