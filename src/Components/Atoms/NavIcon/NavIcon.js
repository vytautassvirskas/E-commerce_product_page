import React from "react";

const NavIcon = (props) => {
  return (
    <svg width="16" height="15" {...props}>
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default NavIcon;
