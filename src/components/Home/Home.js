import { useContext } from "react";
import "../Home/home.scss";
import Card from "../Card/Card";
import { AppContext } from "../../contexts/AppContext";

const Home = () => {
  const { property, loading, city } = useContext(AppContext);

  return (
    <div className="home">
      <div className="home-container">
        {loading ? (
          <p>Loading...</p>
        ) : property.data ? (
          property?.data?.map((home) => <Card key={home.id} home={home} />)
        ) : (
          <p>No houses found in {city.label}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
