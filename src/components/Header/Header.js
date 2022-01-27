import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Gamer's World</h1>
      <div className="img-container">
        <h2>Pick your favourite game and enjoy your time!</h2>
        <img className="header-img" src="favicon.ico" alt="fifa game" />
      </div>
      <h3>Total budget : 100$</h3>
    </div>
  );
};

export default Header;
