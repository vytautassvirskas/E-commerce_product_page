import React from "react";
import SmImg from "../../Atoms/SmImg/SmImg";
import "./ImgList.scss";

const ImgList = ({ data, setSelectedIndex, selectedIndex }) => {
  
  return (
    <ul className="imgs-list">
      {data.map((img, index) => {
        return (
          <li
            className="imgs-list__item"
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <SmImg img={img.smallImg} />
            <div
              className={
                selectedIndex === index
                  ? "imgs-list__selected"
                  : "imgs-list__item-hover"
              }
            ></div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImgList;
