import React from "react";
import "./cardButton.css";

const CardButton = ({ children, deleteButton, ...props }) => {
  return (
    <button className={deleteButton ? "button__delete" : "button"} {...props}>
      {children}
    </button>
  );
};

export default CardButton;
