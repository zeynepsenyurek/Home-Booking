import { useContext, useEffect } from "react";
import { CityContext } from "../../Contexts/CityContext";
import Card from "../Card/Card";

const Favourites = () => {
  const { favs } = useContext(CityContext);
  console.log("favs", favs);

  return (
    <div>
      <h1>hello</h1>
      <div className="home-container">
        {favs?.map((home) => (
          <Card key={home.id} home={home} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
