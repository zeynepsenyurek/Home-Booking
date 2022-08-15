import { useEffect, useState } from "react";
import React from "react";

export const Context = React.createContext();

const ContextProvider = (props) => {
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

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
