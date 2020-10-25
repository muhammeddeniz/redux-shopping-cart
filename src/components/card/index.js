import React from "react";

import  './card.css';

const Card = ({name, price, ...props}) => {
    return(
        <div className="card" {...props}>
            <h1 className="card__name">{name}</h1>
            <p className="card__price">{price}</p>
        </div>
    )
}

export default Card;