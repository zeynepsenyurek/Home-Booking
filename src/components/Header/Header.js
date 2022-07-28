import "../Header/header.scss";
import profile from "../../assets/img/customer-3.jpg";
import { IconArrow, IconHeartFill } from "../../assets/icon";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__search">
        <Search />
      </div>
      <div className="header__user">
        <div className="header__like-container">
          <NavLink to="/likes" className="header__link">
            Liked Properties
          </NavLink>
          <IconHeartFill />
        </div>
        <Profile />
      </div>
    </div>
  );
};
export default Header;
