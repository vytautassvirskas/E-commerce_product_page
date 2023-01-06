import React from "react";
import UserImg from "../../../Assets/image-avatar.png";
import "./User.scss";

const User = (props) => {
  return (
    <>
      <img {...props} className="user" src={UserImg} alt="user" />
    </>
  );
};

export default User;
