import { useContext, useEffect } from "react";
import { CityContext } from "../../Contexts/CityContext";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";
import "../style.scss";

const Favourites = () => {
  const { favs } = useContext(CityContext);

  return (
    <div>
      <div className="home-container">
        {favs.length ? (
          favs?.map((home) => <Card key={home.id} home={home} />)
        ) : (
          <div className="fav-box">
            <p>You haven't selected any favourites yet.. 😿</p>
            <NavLink to="/home" className="register-link">
              Back to home
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
