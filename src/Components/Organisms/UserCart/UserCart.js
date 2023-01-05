import React, { useContext } from "react";
import "../../../Utils/MainContext.js";
import MainContext from "../../../Utils/MainContext.js";
import Delete from "../../Atoms/Delete/Delete";
import SmImg from "../../Atoms/SmImg/SmImg";
import "./UserCart.scss";

const UserCart = () => {
  const { cartItem, setCartItem } = useContext(MainContext);
  return (
    <div className="user-cart">
      <p className="user-cart__cart-name">Cart</p>
      {cartItem.amount ? (
        <div className="user-cart__cart-container">
          <div className="user-cart__item-container">
            <div className="user-cart__item-img">
              <SmImg img={cartItem.img}></SmImg>
            </div>
            <div className="user-cart__item-info">
              <p className="user-cart__item-title">{cartItem.title}</p>
              <p className="user-cart__item-price">
                &#36;{`${cartItem.currentPrice} x ${cartItem.amount} `}
                <span className="user-cart__item-total-price">
                  &#36;{cartItem.currentPrice * cartItem.amount}
                </span>
              </p>
            </div>
            <div
              className="user-cart__delete-wrapper"
              onClick={() => setCartItem({})}
            >
              <Delete />
            </div>
          </div>
          <div className="user-cart__checkout-btn">Checkout</div>
        </div>
      ) : (
        <div className="user-cart__empty-container">
          <p className="user-cart__empty">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default UserCart;
