import { NavLink } from "react-router-dom";
import IconLite from "../components/iconlite/IconLite";
import AvatarUser from "../assets/avatar.png";
import LogoGhibli from "../assets/logo-ghibli.png";
import "./header.css";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos días";
  if (hour < 19) return "Buenas tardes";
  return "Buenas noches";
};

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__icons">
        <NavLink
          end
          className={({ isActive }) => isActive ? "header__link active" : "header__link"}
          to="/profile"
          aria-label="Abrir perfil"
        >
          <IconLite iconSource={AvatarUser} />
        </NavLink>
        <span className="header__greeting">{getGreeting()}</span>
      </div>
      <figure className="header__logo">
        <img src={LogoGhibli} alt="Studio Ghibli" />
      </figure>
    </header>
  );
};

export default Header;
