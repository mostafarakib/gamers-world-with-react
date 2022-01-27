import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import OrderedItems from "../OrderedItems/OrderedItems";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }
  return (
    <div className="cart">
      <div className="cart-container">
        <h3>Order Summary</h3>
        <h5>Items ordered: {props.cart.length}</h5>
        <h5>Total price: {total.toFixed(2)}$</h5>
        <div>
          {cart.map((product) => (
            <OrderedItems product={product}></OrderedItems>
          ))}
        </div>

        <button className="btn-shift">
          <FontAwesomeIcon icon={faCartArrowDown} /> Add To Shifting
        </button>
      </div>
    </div>
  );
};

export default Cart;
