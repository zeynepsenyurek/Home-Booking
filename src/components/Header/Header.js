import "../Header/header.scss";
import profile from "../../assets/img/customer-3.jpg";
import { IconArrow, IconHeartFill } from "../../assets/icon";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import Profile from "../Profile/Profile";
import logo from "../../assets/img/Monix.png";
import { useContext } from "react";
import { CityContext } from "../../Contexts/CityContext";
import { signup, useAuth, logout } from "../Firebase/Firebase";

const Header = () => {
  const { loading, setLoading } = useContext(CityContext);
  const currentUser = useAuth();

  //logout

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  }

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
          {currentUser?.email ? (
            <div className="header__contents">
              <NavLink to="/profile" className="header__link">
                My Profile
              </NavLink>
              <button onClick={handleLogout} className="main-button">
                Log out
              </button>
            </div>
          ) : (
            <div>
              {" "}
              <NavLink to="/login" className="header__link header__login">
                Log in
              </NavLink>
              <NavLink to="/signup" className="header__link header__signup">
                Sign up
                <IconArrow />
              </NavLink>{" "}
            </div>
          )}
        </div>
        {/* <Profile /> */}
      </div>
    </div>
  );
};
export default Header;
