import "../Home/home.scss";
import {
  IconPrice,
  IconHome,
  IconRating,
  IconHeartEmpty,
  IconHeartFill,
  ChevronRight,
  ChevronLeft,
} from "../../assets/icon";
import { useContext, useState } from "react";
import { CityContext } from "../../Contexts/CityContext";

const Card = ({ home }) => {
  const [liked, setLiked] = useState(false);
  const { setFavs } = useContext(CityContext);

  const handleOnClick = () => {
    if (liked) {
      setFavs((prevState) => prevState.filter((fav) => fav.id !== home.id));
    } else {
      setFavs((prevState) => [...prevState, home]);
    }
    setLiked((prevState) => !prevState);
  };

  return (
    <div className="card">
      <div className="card__box">
        <img src={home.images?.[0]} className="card__img"></img>
      </div>
      <button onClick={handleOnClick} className="card__button-sm">
        {liked ? <IconHeartFill /> : <IconHeartEmpty width={28} height={28} />}
      </button>
      <button className="chevron right">
        <ChevronRight />
      </button>
      <button className="chevron left">
        <ChevronLeft />
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
              {/* {home.beds < 2 ? ` ${home.beds} room` : ` ${home.beds} rooms`} */}
              {home.beds} room{home.beds > 2 ? "s" : ""}
            </p>
          </div>
          <div className="card__details">
            <IconRating />
            <p className="card__text">
              {home.avgRating ? `${home.avgRating}` : "no rating"}
            </p>
          </div>
          <button className="card__button">Get Property Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
