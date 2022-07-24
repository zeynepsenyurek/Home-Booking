import { useContext, useEffect } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { useNavigate } from "react-router-dom";
import { CityContext } from "../../Contexts/CityContext";

import { GEO_API_URL, geoApiOptions } from "../../Api";

const Search = () => {
  const { city, setCity } = useContext(CityContext);
  const navigate = useNavigate();

  const loadOptions = async (inputValue) => {
    return await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/home");
    }
  };

  const handleOnChange = (cityData) => {
    setCity(cityData);
    navigate("/home");
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={city}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Search;
