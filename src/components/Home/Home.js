import { CityContext } from "../../Contexts/CityContext";
import { useContext, useEffect, useState } from "react";
import "../Home/home.scss";
import Card from "../Card/Card";
import {
  searchDestinationApi,
  DESTINATION_API_URL,
  PROPERTY_API_URL,
  searchPropertyByPlace,
} from "../../Api";
import Header from "../Header/Header";

const Home = () => {
  const { city, property, setProperty } = useContext(CityContext);

  const getCity = async () => {
    if (city.label) {
      return await fetch(
        `${DESTINATION_API_URL}?query=${city?.label}&country=USA`,
        searchDestinationApi
      )
        .then((response) => response.json())
        .then((response) =>
          setTimeout(() => {
            fetch(
              `${PROPERTY_API_URL}?id=${response?.data?.[0]?.id}&totalRecords=10&currency=USD&adults=1`,
              searchPropertyByPlace
            )
              .then((response) => response.json())
              .then((response) => setProperty(response))
              .catch((err) => console.error(err));
          }, 2000)
        )
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    if (city.label) getCity();
  }, [city]);

  // const filterHome = () => {
  //   {
  //     property?.data.sort((a, b) => console.log(a.price, b.price));
  //   }
  // };

  return (
    <div className="home">
      <div className="home-container">
        {property.data ? (
          property?.data?.map((home) => <Card key={home.id} home={home} />)
        ) : (
          <p>Loading...</p>
        )}
        {/* <button onClick={filterHome}>Filter</button> */}
        {/* {property?.data?.map((home) => (
        <Card key={home.id} home={home} />
      ))} */}
      </div>
    </div>
  );
};

export default Home;
