import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import Cart from "../../Atoms/Cart/Cart";
import Plus from "../../Atoms/Plus/Plus";
import Minus from "../../Atoms/Minus/Minus";
import "./AddToCart.scss";

const AddToCart = ({ setMessage, message }) => {
  const [amount, setAmout] = useState(0);
  const { cartItem, setCartItem, data } = useContext(MainContext);
  const itemLimit = 10;

  const handleAdd = (e) => {
    //messages
    const messageOne = `Max item amount to buy is ${itemLimit}! Your cart is full!`;
    const messageTwo = `Max item amount to buy is ${itemLimit}! You can add ${
      itemLimit - cartItem.amount
    } items.`;

    //conditions:
    if (amount === 0) return;
    // when cart will be full
    if (cartItem.amount + amount === itemLimit) {
      setMessage(messageOne);
      setCartItem((prevValue) => {
        return { ...prevValue, amount: prevValue.amount + amount };
      });
      return;
    }

    //when cart is full
    if (cartItem.amount === itemLimit) {
      setMessage(messageOne);
      return;
    }

    //when cart amount is near limit, but still you can add few items
    if (cartItem.amount + amount > itemLimit) {
      setMessage(messageTwo);
      setCartItem((prevValue) => {
        return { ...prevValue, amount: prevValue.amount };
      });
      return;
    }

    //when cart amount way less than limit
    if (cartItem.amount) {
      setCartItem((prevValue) => {
        return { ...prevValue, amount: prevValue.amount + amount };
      });
      return;
    }

    //when cart is empty. first addition
    setCartItem((prevValue) => {
      return {
        ...prevValue,
        amount: amount,
        title: data.info.title,
        currentPrice: data.info.currentPrice,
        img: data.images[0].smallImg,
      };
    });
  };

  const handleIncrease = () => {
    if (amount === itemLimit) {
      setMessage(`Max item amount to buy is ${itemLimit}!`);
      return;
    }

    setAmout((prevAmount) => {
      return prevAmount + 1;
    });
  };

  const handleDecrease = () => {
    setAmout((prevAmount) => {
      if (prevAmount === 0) return prevAmount;

      return prevAmount - 1;
    });
  };

  return (
    <div className="add-cart">
      <div className="add-cart__amount-wrapper">
        <div className="add-cart__changer" onClick={handleDecrease}>
          <Minus />
        </div>
        <label htmlFor="input-number"></label>
        <input
          id="input-number"
          className="add-cart__amount"
          type="number"
          value={amount}
          onChange={(e) => setAmout(+e.target.value)}
        />
        <div className="add-cart__changer" onClick={handleIncrease}>
          <Plus disabled={message} />
        </div>
      </div>
      <button className="add-cart__btn" onClick={handleAdd} disabled={message}>
        <span className="add-cart__cart">
          <Cart />
        </span>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
