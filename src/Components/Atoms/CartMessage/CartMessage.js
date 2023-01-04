import React, { forwardRef } from "react";

const CartMessage = forwardRef((props, ref) => {
  console.log("ref in CarMessage: ", ref);
  return (
    <p ref={ref} {...props}>
      {props.message}{" "}
    </p>
  );
});

export default CartMessage;
