import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import Cart from "../../Atoms/Cart/Cart";
import Plus from "../../Atoms/Plus/Plus";
import Minus from "../../Atoms/Minus/Minus";
import "./AddToCart.scss";

const AddToCart = ({ handleMessage }) => {
  const [amount, setAmout] = useState(0);
  const [itemLimit, setItemLimit] = useState(10);
  const { setCartItem, data } = useContext(MainContext);

  const handleAdd = () => {
    setCartItem((prevValue) => {
      if (prevValue.amount + amount > itemLimit) {
        handleMessage();
        console.log("max gali buti 10");
        return { ...prevValue, amount: prevValue.amount };
      }

      if (prevValue.amount) {
        return { ...prevValue, amount: prevValue.amount + amount };
      }

      return {
        ...prevValue,
        amount: amount,
        title: data.info.title,
        currentPrice: data.info.currentPrice,
        totalPrice: data.info.currentPrice * 3,
        img: data.images[0].smallImg,
      };
    });
  };

  const handleIncrease = () => {
    setAmout((prevAmount) => {
      if (prevAmount === itemLimit) {
        handleMessage();
        return prevAmount;
      }

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
        <input
          className="add-cart__amount"
          type="number"
          value={amount}
          onChange={(e) => setAmout(+e.target.value)}
        />
        <div className="add-cart__changer" onClick={handleIncrease}>
          <Plus />
        </div>
      </div>
      <button className="add-cart__btn" onClick={handleAdd}>
        <span className="add-cart__cart">
          <Cart />
        </span>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
