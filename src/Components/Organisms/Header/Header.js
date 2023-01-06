import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import Cart from "../../Atoms/Cart/Cart";
import User from "../../Atoms/User/User";
import Navbar from "../../Molecules/Navbar/Navbar";
import UserCart from "../../Organisms/UserCart/UserCart";

import "./Header.scss";

const Header = () => {
  const [isCart, setIsCart] = useState(false);
  const { cartItem } = useContext(MainContext);

  return (
    <header className="header">
      <Navbar />
      <div className="header__user-cart-wrapper">
        <div
          className="header__cart-wrapper"
          onClick={() => setIsCart(!isCart)}
        >
          <Cart />
          {cartItem.amount ? (
            <p className="header__cart-amount">{cartItem.amount}</p>
          ) : null}
        </div>
        <User onClick={() => setIsCart(!isCart)}/>
      </div>
      {isCart ? <UserCart /> : null}
    </header>
  );
};

export default Header;
