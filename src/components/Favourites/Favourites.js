import "../style.scss";
import { Context } from "../../contexts/Context";
import Card from "../Card/Card";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Favourites = () => {
  const { favs } = useContext(Context);
  return (
    <div>
      <div className="home-container">
        {/* // Conditionally rendering based on fav array's length in case there are no favourites*/}
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
