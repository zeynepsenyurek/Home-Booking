import { useEffect, useState } from "react";
import React from "react";

export const CityContext = React.createContext();

const CityContextProvider = (props) => {
  const [city, setCity] = useState([]);
  const [property, setProperty] = useState([]);
  const [favs, setFavs] = useState([]);
  const [details, setDetails] = useState([]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMsg,
    setErrorMsg,
  };

  return (
    <CityContext.Provider value={value}>{props.children}</CityContext.Provider>
  );
};

export default CityContextProvider;
