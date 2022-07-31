import "../Header/header.scss";
import profile from "../../assets/img/customer-3.jpg";
import { IconArrow, IconHeartFill } from "../../assets/icon";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import logo from "../../assets/img/Monix.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="header__logo" />

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
        <div className="header__links">
          <NavLink to="/login" className="header__link header__login">
            Log in
          </NavLink>
          <NavLink to="/signup" className="header__link header__signup">
            Sign up
            <IconArrow />
          </NavLink>
        </div>
        {/* <Profile /> */}
      </div>
    </div>
  );
};
export default Header;
