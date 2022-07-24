import Search from "./components/Search/Search";
import "./components/style.scss";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />

        <Route path="likes" element={<Favourites />} />
      </Routes>
      {/*  <Search /> */}
    </div>
  );
}

export default App;
