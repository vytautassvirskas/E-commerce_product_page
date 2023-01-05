import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext.js";
import CartMessage from "../../Atoms/CartMessage/CartMessage.js";
import AddToCart from "../../Molecules/AddToCart/AddToCart";
import ItemPrice from "../../Molecules/ItemPrice/ItemPrice";
import ItemText from "../../Molecules/ItemText/ItemText";
import "./ItemSection.scss";

const ItemSection = () => {
  const { data } = useContext(MainContext);
  const [message, setMessage] = useState("");

  return (
    <section className="item-section">
      <ItemText data={data.info} />
      <ItemPrice data={data.info} />
      <AddToCart setMessage={setMessage} message={message} />
      <CartMessage message={message} setMessage={setMessage} />
    </section>
  );
};

export default ItemSection;
