import React, {useContext } from "react";
import MainContext from "../../../Utils/MainContext";
import LrgImg from "../../Atoms/LrgImg/LrgImg";
import ImgList from "../../Molecules/ImgList/ImgList";
import "./ImgSection.scss";

const ImgSection = () => {
  const { setLightbox, data, selectedIndex, setSelectedIndex } =
    useContext(MainContext);

  return (
    <section className="imgs-section">
      <div className="imgs-section__lrg-img" onClick={() => setLightbox(true)}>
        <LrgImg selectedIndex={selectedIndex} data={data.images} />
      </div>
      <ImgList
        data={data.images}
        setSelectedIndex={setSelectedIndex}
        selectedIndex={selectedIndex}
      />
    </section>
  );
};

export default ImgSection;
