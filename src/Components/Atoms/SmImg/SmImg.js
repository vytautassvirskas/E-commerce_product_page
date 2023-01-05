import React, { memo } from "react";

const SmImg = ({ img }) => {

  return <img src={img} alt="product" />;
};

export default memo(SmImg);
