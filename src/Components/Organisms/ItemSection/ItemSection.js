import React, {useRef,useState, useContext, createRef } from "react";
import MainContext from "../../../Utils/MainContext.js";
import CartMessage from "../../Atoms/CartMessage/CartMessage.js";
import AddToCart from "../../Molecules/AddToCart/AddToCart";
import ItemPrice from "../../Molecules/ItemPrice/ItemPrice";
import ItemText from "../../Molecules/ItemText/ItemText";
import "./ItemSection.scss";

const ItemSection = () => {
  const { data } = useContext(MainContext);
  const ref = createRef()

  console.log("ref", ref)

  const handleMessage = () => {
 
    ref.current.classList.remove("item-section__message-fadeOut")
    ref.current.classList.add("item-section__message-fadeIn")
    console.dir("ref.current:",ref.current )

    setTimeout(() => {
      ref.current.classList.remove("item-section__message-fadeIn")
      ref.current.classList.add("item-section__message-fadeOut")
    },3000)
  }

  return (
    <section className = "item-section">
      <ItemText data = {data.info} />
      <ItemPrice data = {data.info} />
      <AddToCart handleMessage = {handleMessage}  />
      <CartMessage 
        ref = {ref} 
        message={"Max item amount to buy is 10!"} 
        className = "item-section__message" 
        />
    </section>
  );
};

export default ItemSection;
