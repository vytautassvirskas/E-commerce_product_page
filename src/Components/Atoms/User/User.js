import React from "react";
import UserImg from "../../../Assets/image-avatar.png";
import "./User.scss";

const User = () => {
  return (
    <>
      <img className="user" src={UserImg} alt="user" />
    </>
  );
};

export default User;
