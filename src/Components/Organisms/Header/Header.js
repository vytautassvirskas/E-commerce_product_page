import React, { useState, useContext } from "react";
import MainContext  from "../../../Utils/MainContext";
import Cart from "../../Atoms/Cart/Cart";
import Logo from "../../Atoms/Logo/Logo";
import User from "../../Atoms/User/User";
import Navbar from "../../Molecules/Navbar/Navbar";
import UserCart from "../../Organisms/UserCart/UserCart";
import "./Header.scss";

const Header = () => {
  const [isCart, setIsCart] = useState(false);
  const {cartItem} = useContext(MainContext)


  // console.log("cartItem Header komponente: ",cartItem)

  
  return (
    <header className="header">
      <div className="header__logo-nav-wrapper">
        <Logo />
        <Navbar />
      </div>
      <div className="header__user-cart-wrapper">
        <div
          className="header__cart-img-wrapper"
          onClick={() => setIsCart(!isCart)}
        >
          <Cart />
          {cartItem.amount 
          ?
          <p className="header__cart-amount">{cartItem.amount}</p>
          : 
          null
          }
        </div>
        <div
          className="header__user-img-wrapper"
          onClick={() => setIsCart(!isCart)}
        >
          <User />
        </div>
      </div>
      {isCart ? <UserCart /> : null}
    </header>
  );
};

export default Header;
