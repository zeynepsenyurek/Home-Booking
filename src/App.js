import "./components/style.scss";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";
import PropertyDetails from "./components/Details/PropertyDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />

        <Route path="likes" element={<Favourites />} />
        <Route path="details" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
