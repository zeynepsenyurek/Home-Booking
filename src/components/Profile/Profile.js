import profile from "../../assets/img/customer-3.jpg";
import { IconArrow } from "../../assets/icon";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div className="header__profile">
      <img src={profile} className="header__user-pic" />
      <div className="header__name">
        <span>Zeynep Ş.</span>
        <NavLink to="/profile" className="header__name-icon">
          Profile
          <IconArrow className="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
