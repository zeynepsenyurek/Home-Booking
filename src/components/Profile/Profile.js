import "./profile.scss";
import profileIcon from "../../assets/Img/profile-icon.jpg";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth, logout, upload } from "../Firebase/Firebase";
import { useEffect, useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);

  const [changePic, setChangePic] = useState(false);

  //logout
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      navigate("/home");
    } catch {
      alert("error");
    }
    setLoading(false);
  }

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const handleClick = () => {
    upload(photo, currentUser, setLoading);
  };
  const [photoURL, setPhotoURL] = useState(profileIcon);

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser?.photoURL);
    }
  }, [currentUser]);

  const changePicOnClick = () => {
    setChangePic(!changePic);
  };

  return (
    <div>
      <div className="bg"></div>
      <div className="profile">
        <div className="header__name">
          <span>Logged in as: {currentUser?.email}</span>
        </div>
        <img src={photoURL} alt="Avatar" className="avatar" />
        <button onClick={changePicOnClick} className="main-button">
          Change Profile Picture
        </button>
        {changePic ? (
          <>
            <input onChange={handleChange} type="file" className="submit" />

            <button
              disabled={loading || !photo}
              onClick={handleClick}
              className={
                loading || !photo ? "main-button disabled" : "main-button"
              }
            >
              Upload
            </button>
          </>
        ) : null}
        <button className="main-button" onClick={handleLogout}>
          Logout
        </button>
        <NavLink to="/home" className="header__link">
          Back to home
        </NavLink>
      </div>
    </div>
  );
};

export default Profile;
