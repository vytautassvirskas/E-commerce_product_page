import React from "react";
import "./LrgImg.scss";

const LrgImg = ({ selectedIndex, data }) => {
  return (
    <>
      <img
        className="lrg-image"
        src={data[selectedIndex].largeImg}
        alt="product"
      />
    </>
  );
};

export default LrgImg;
