import React, { useEffect } from "react";
import "./CartMessage.scss";
import variables from "../../../Styles/Variables.scss";

const CartMessage = ({ message, setMessage }) => {
  
  useEffect(() => {
    const delayVariable = variables.fadeInOutMessage;
    const delayTime = +delayVariable.slice(0, delayVariable.length - 1) * 1000;
    const fadeOutTime = 3000;
    if (!message) return;
    const alert = document.querySelector(".cart-message");
    alert.classList.add("cart-message__fadeIn");

    setTimeout(() => {
      alert.classList.add("cart-message__fadeOut");
    }, fadeOutTime);

    setTimeout(() => {
      setMessage("");
    }, fadeOutTime + delayTime);
  }, [message, setMessage]);


  return <>{message ? <p className="cart-message">{message}</p> : null}</>;
};

export default CartMessage;
