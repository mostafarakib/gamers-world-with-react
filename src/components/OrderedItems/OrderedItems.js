import React from "react";
import "./OrderedItems.css";

const OrderedItems = (props) => {
  const { img, name } = props.product;
  return (
    <div className="container">
      <img className="selected-game-img" src={img} alt="game img" />
      <h5>{name}</h5>
      <button className="btn-cancel">❌</button>
    </div>
  );
};

export default OrderedItems;
