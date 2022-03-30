import React from "react";
import { NavLink } from "react-router-dom";
import IconLite from "../components/iconlite/IconLite";
import IconClock from "../assets/icons/clock.png";
import AvatarUser from "../assets/avatar.png";
import LogoGhibli from "../assets/logo-ghibli.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__icons">
        <NavLink
          activeClassName="active"
          className="header__link"
          exact
          to="./profile"
        >
          <IconLite iconSource={AvatarUser} />
        </NavLink>
        <IconLite iconSource={IconClock} />
      </div>
      <figure className="header__logo">
        <img src={LogoGhibli} alt={LogoGhibli} />
      </figure>
    </header>
  );
};

export default Header;
