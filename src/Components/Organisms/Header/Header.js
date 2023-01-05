import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import Cart from "../../Atoms/Cart/Cart";
import Logo from "../../Atoms/Logo/Logo";
import User from "../../Atoms/User/User";
import Navbar from "../../Molecules/Navbar/Navbar";
import UserCart from "../../Organisms/UserCart/UserCart";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import Close from "../../Atoms/Close/Close";
import variables from "../../../Styles/Variables.scss";
import "./Header.scss";

const Header = () => {
  const [isCart, setIsCart] = useState(false);
  const [navBarMobile, setNavBarMobile] = useState(false);
  const { cartItem } = useContext(MainContext);

  const handleHideNavbar = () => {
    const delayVariable = variables.fadeInOutNavBar;
    const delayTime = +delayVariable.slice(0, delayVariable.length - 1) * 1000;

    const ele = document.querySelector(".header__navbar-mobile-background");
    ele.classList.add("header__navbar-mobile-background-fadeOut");

    setTimeout(() => {
      setNavBarMobile(false);
    }, delayTime);
  };
  return (
    <header className="header">
      <div className="header__logo-nav-wrapper">
        <Logo />
        <Navbar />
      </div>
      {/* {lower code is header of mobile} */}
      <div
        className="header__logo-burger-wrapper"
        onClick={() => setNavBarMobile(true)}
      >
        <NavIcon />
        <Logo />
      </div>
      {navBarMobile ? (
        <div
          className={
            "header__navbar-mobile-background header__navbar-mobile-background-fadeIn"
          }
        >
          <div className="header__navbar-mobile-wrapper">
            <div
              className="header__navbar-mobile-close"
              onClick={handleHideNavbar}
            >
              <Close />
            </div>
            <Navbar />
          </div>
        </div>
      ) : null}
    
      {/* {upper code is header of mobile} */}
      <div className="header__user-cart-wrapper">
        <div
          className="header__cart-img-wrapper"
          onClick={() => setIsCart(!isCart)}
        >
          <Cart />
          {cartItem.amount ? (
            <p className="header__cart-amount">{cartItem.amount}</p>
          ) : null}
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
