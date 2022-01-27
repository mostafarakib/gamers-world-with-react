import React from "react";
import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Game = (props) => {
  const { img, name, genre, company, ageRestriction, price } = props.games;
  // console.log(props.games);
  return (
    <div className="game">
      <img className="game-img" src={img} alt="" />
      <h5>
        Name: <small>{name}</small>
      </h5>
      <h5>
        Genre: <small>{genre}</small>
      </h5>
      <h5>
        Published by: <small>{company}</small>
      </h5>
      <h5>
        Age restriction: <small>{ageRestriction}</small>
      </h5>
      <h5>
        Price: <small>{price}$</small>
      </h5>
      <button
        onClick={() => props.handleAddToCart(props.games)}
        className="btn-purchase"
      >
        <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart!
      </button>
    </div>
  );
};

export default Game;
