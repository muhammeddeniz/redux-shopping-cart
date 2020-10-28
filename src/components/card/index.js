import React from "react";
import CardButton from "../cardButton";

import "./card.css";

const Card = ({ isButtonVisible = true, name, price, ...props }) => {
  return (
    <div className="card">
      <h1 className="card__name">{name}</h1>
      <p className="card__price">{price}</p>
      {isButtonVisible ? (
        <div className="card__button">
          {" "}
          <CardButton {...props}>Add</CardButton>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
