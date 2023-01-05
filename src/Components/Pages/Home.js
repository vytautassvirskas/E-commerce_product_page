import React, { useState, useEffect } from "react";
import MainContext from "../../Utils/MainContext";
import { item as data } from "../../Utils/data.js";
import ImgSection from "../Organisms/ImgSection/ImgSection";
import Header from "../Organisms/Header/Header";
import ItemSection from "../Organisms/ItemSection/ItemSection";
import LightBox from "../Organisms/LightBox/LightBox";
import ImgSectionMobile from "../Organisms/ImgSectionMobile/ImgSectionMobile";
import "./Home.scss";

const Home = () => {
  const [lightbox, setLightbox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cartItem, setCartItem] = useState(
    () => JSON.parse(localStorage.getItem("cartItem")) || []
  );

  const contextValue = {
    lightbox,
    setLightbox,
    selectedIndex,
    setSelectedIndex,
    cartItem,
    setCartItem,
    data,
  };

  useEffect(() => {
    cartItem !== [] &&
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  return (
    <>
      <MainContext.Provider value={contextValue}>
        <Header />
        <main className="main">
          <ImgSection />
          <ImgSectionMobile />
          <ItemSection />
          {lightbox ? <LightBox /> : null}
        </main>
      </MainContext.Provider>
    </>
  );
};

export default Home;
