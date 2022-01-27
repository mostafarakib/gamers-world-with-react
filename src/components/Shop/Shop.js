import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Game from "../Game/Game";
import "./Shop.css";

const Shop = () => {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const handleAddToCart = (game) => {
    const newCart = [...cart, game];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="game-container">
        {games.map((game) => (
          <Game
            handleAddToCart={handleAddToCart}
            key={game.id}
            games={game}
          ></Game>
        ))}
      </div>
      <div className="cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
