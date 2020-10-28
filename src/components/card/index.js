import React from "react";
import CardButton from "../cardButton";

import "./card.css";

const Card = ({ buttonText, buttonDelete, name, price, ...props }) => {
  return (
    <div className="card">
      <h1 className="card__name">{name}</h1>
      <p className="card__price">{price}</p>
      <div className="card__button">
        <CardButton deleteButton={buttonDelete} {...props}>
          {buttonText}
        </CardButton>
      </div>
    </div>
  );
};

export default Card;
