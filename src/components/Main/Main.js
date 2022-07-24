import "../Main/main.scss";
import Search from "../Search/Search";

const Main = () => {
  return (
    <div className="main">
      <div className="main__content">
        <h1 className="main__heading">Where would you like to go?</h1>
        <div className="search-container">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Main;
