import { useEffect, useState } from "react";
import React from "react";
import {
  DESTINATION_API_URL,
  PROPERTY_API_URL,
  searchDestinationApi,
  searchPropertyByPlace,
} from "../api/Api";

export const Context = React.createContext();

const ContextProvider = (props) => {
  const [city, setCity] = useState([]);
  const [property, setProperty] = useState([]);
  const [favs, setFavs] = useState([]);
  const [details, setDetails] = useState([]);
  //// LOGIN & REGISTER PAGE VALIDATION STATES ////
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    if (city.label) {
      setLoading(true);
      return await fetch(
        `${DESTINATION_API_URL}?query=${city?.label}&country=USA`,
        searchDestinationApi
      )
        .then((response) => response.json())
        .then((response) =>
          // backend limits api request per one second
          setTimeout(() => {
            fetch(
              `${PROPERTY_API_URL}?id=${response?.data?.[0]?.id}&totalRecords=10&currency=USD&adults=1`,
              searchPropertyByPlace
            )
              .then((response) => response.json())
              .then((response) => {
                if (response.status) {
                  setProperty(response);
                }
                setLoading(false);
              })
              .catch((err) => {
                console.error(err);
                setLoading(false);
              });
          }, 2000)
        )
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    console.log(property);
  }, [property]);

  useEffect(() => {
    if (city.label) getCity();
  }, [city]);
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
