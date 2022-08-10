import "../Header/header.scss";
import { IconArrow, IconHeartFill, IconMenu } from "../../assets/icon";
import Search from "../Search/Search";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/Monix.png";
import { useContext, useState, useEffect } from "react";
import { CityContext } from "../../Contexts/CityContext";
import { useAuth, logout } from "../Firebase/Firebase";

const Header = () => {
  // state of viewport size
  const [desktop, setDesktop] = useState(window.innerWidth > 800);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const { loading, setLoading } = useContext(CityContext);
  const currentUser = useAuth();
  const { pathname } = useLocation();

  // conditionally render based on viewport size
  const updateMedia = () => {
    setDesktop(window.innerWidth > 800);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // open hamburger menu

  const openMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    return;
  };

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

  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="header">
      <Link to="/home">
        <img src={logo} className="header__logo" />
      </Link>
      <div className="header__search">
        <Search />
      </div>
      {desktop ? (
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
                <NavLink
                  to="/profile"
                  className="header__link header__links-profile"
                >
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
      ) : (
        <button className="hamburger-button" onClick={openMenu}>
          <IconMenu />
        </button>
      )}
      {isMenuClicked ? (
        <div className="hamburger-menu">
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
                <a onClick={handleLogout} className="header__link">
                  Log out
                </a>
              </div>
            ) : (
              <>
                {" "}
                <NavLink to="/login" className="header__link">
                  Log in
                </NavLink>
                <NavLink
                  to="/signup"
                  className="header__link hamburger-menu--signup"
                >
                  Sign up
                  <IconArrow />
                </NavLink>{" "}
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Header;
