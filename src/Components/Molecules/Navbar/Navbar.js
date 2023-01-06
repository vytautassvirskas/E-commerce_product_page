import React, { useState } from "react";
import Logo from "../../Atoms/Logo/Logo";
import NavIcon from "../../Atoms/NavIcon/NavIcon";
import Close from "../../Atoms/Close/Close";

import "./Navbar.scss";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  if (navMobile) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <nav className="nav">
      <NavIcon className="nav__burger" onClick={() => setNavMobile(true)} />
      <Logo className="nav__logo" />
      <ul className={navMobile ? "nav__list--open" : "nav__list"}>
        <div className="nav__close" onClick={() => setNavMobile(false)}>
          <Close />
        </div>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Collections
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Men
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Women
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
