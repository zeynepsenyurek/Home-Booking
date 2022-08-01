import { useEffect, useState } from "react";
import React from "react";
import { signup, useAuth } from "../components/Firebase/Firebase";

export const CityContext = React.createContext();

const CityContextProvider = (props) => {
  const [city, setCity] = useState([]);
  const [property, setProperty] = useState([]);
  const [favs, setFavs] = useState([]);
  const [details, setDetails] = useState([]);

  //// LOGIN & REGISTER PAGE VALIDATION STATES ////

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

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
    currentUser,
    setCurrentUser,
    setLoading,
    loading,
  };

  return (
    <CityContext.Provider value={value}>{props.children}</CityContext.Provider>
  );
};

export default CityContextProvider;
