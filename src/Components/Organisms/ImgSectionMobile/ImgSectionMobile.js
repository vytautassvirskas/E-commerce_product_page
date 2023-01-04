import React, { useContext } from "react";
import MainContext from "../../../Utils/MainContext.js";
import { handleNext, handlePrevious } from "../../../Utils/Utils.js";
import LrgImg from "../../Atoms/LrgImg/LrgImg";
import Next from "../../Atoms/Next/Next";
import Previous from "../../Atoms/Previous/Previous";
import "./ImgSectionMobile.scss";

const ImgSectionMobile = () => {
  const { data, selectedIndex, setSelectedIndex } =
    useContext(MainContext);
  return (
    <section className="imgs-section-mobile">
      <LrgImg selectedIndex={selectedIndex} data={data.images} />
      <div
        className="imgs-section-mobile__next"
        onClick={() => handleNext(setSelectedIndex, data)}
      >
        <Next />
      </div>
      <div
        className="imgs-section-mobile__previous"
        onClick={() => handlePrevious(setSelectedIndex)}
      >
        <Previous />
      </div>
    </section>
  );
};

export default ImgSectionMobile;
