import { useEffect, useState } from "react";
import React from "react";

export const CityContext = React.createContext();

const CityContextProvider = (props) => {
  const [city, setCity] = useState([]);
  const [property, setProperty] = useState([]);
  const [favs, setFavs] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    console.log(favs);
  }, [favs]);

  const value = {
    city,
    setCity,
    property,
    setProperty,
    favs,
    setFavs,
    details,
    setDetails,
  };

  return (
    <CityContext.Provider value={value}>{props.children}</CityContext.Provider>
  );
};

export default CityContextProvider;
