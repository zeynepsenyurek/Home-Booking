import "../Home/home.scss";
import {
  IconPrice,
  IconHome,
  IconRating,
  IconHeartEmpty,
  IconHeartFill,
} from "../../assets/icon";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";

const Card = ({ home }) => {
  const [liked, setLiked] = useState(false);
  const { favs, setFavs, setDetails } = useContext(Context);

  // control like state
  useEffect(() => {
    favs?.map((fav) => {
      if (fav.id === home.id) {
        setLiked(true);
      }
    });
  }, []);

  // push liked home to favs array to display in liked properties
  const handleOnClick = () => {
    if (liked) {
      setFavs((prevState) => {
        return prevState.filter((fav) => fav.id !== home.id);
      });
    } else {
      setFavs((prevState) => [...prevState, home]);
    }
    setLiked((prevState) => !prevState);
  };

  // when get property details button clicked, details state changes with current home
  const clickHandler = () => {
    setDetails(home);
  };

  return (
    <div className="card">
      <div className="card__box">
        <img src={home.images?.[0]} className="card__img"></img>
      </div>
      <button onClick={handleOnClick} className="card__button-sm">
        {liked ? (
          <IconHeartFill width={28} height={28} />
        ) : (
          <IconHeartEmpty width={28} height={28} />
        )}
      </button>
      <div className="card__info">
        <h4 className="card__title">{home.title}</h4>
        <div className="property__details">
          <div className="card__details">
            <IconPrice />
            <p className="card__text">{home.price}</p>
          </div>
          <div className="card__details">
            <IconHome />
            <p className="card__text">
              {home.beds} room{home.beds > 1 ? "s" : ""}
            </p>
          </div>
          <div className="card__details">
            <IconRating />
            <p className="card__text">
              {home.avgRating ? `${home.avgRating}` : "no rating"}
            </p>
          </div>
          <NavLink to="/details">
            <button className="card__button" onClick={clickHandler}>
              Get Property Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
