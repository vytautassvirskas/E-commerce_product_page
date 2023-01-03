import React, { useState, useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import LrgImg from "../../Atoms/LrgImg/LrgImg";
import ImgList from "../../Molecules/ImgList/ImgList";
import Close from "../../Atoms/Close/Close";
import Next from "../../Atoms/Next/Next";
import Previous from "../../Atoms/Previous/Previous";

import "./LightBox.scss";

const LightBox = () => {
  const { setLightbox, data, selectedIndex } = useContext(MainContext);
  const [lightboxIndex, setLightboxIndex] = useState(selectedIndex);

  const handleNext = () => {
    setLightboxIndex((prevValue) => {
      if (prevValue === data.images.length - 1) return prevValue;

      return prevValue + 1;
    });
  };

  const handlePrevious = () => {
    setLightboxIndex((prevValue) => {
      if (prevValue == 0) return prevValue;

      return prevValue - 1;
    });
  };

  return (
    <section className="lightbox">
      <div className="lightbox__wrapper">
        <div className="lightbox__lrg-img">
          <div
            className="lightbox__close-btn"
            onClick={() => setLightbox(false)}
          >
            <Close />
          </div>
          <LrgImg selectedIndex={lightboxIndex} data={data.images} />
          <div className="lightbox__next" onClick={handleNext}>
            <Next />
          </div>
          <div className="lightbox__previous" onClick={handlePrevious}>
            <Previous />
          </div>
        </div>
        <div className="lightbox__list-wrapper">
          <ImgList
            data={data.images}
            setSelectedIndex={setLightboxIndex}
            selectedIndex={lightboxIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default LightBox;
