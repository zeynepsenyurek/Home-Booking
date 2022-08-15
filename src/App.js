import "./components/style.scss";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Favourites from "./components/Favourites/Favourites";
import PropertyDetails from "./components/Details/PropertyDetails";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="home" element={<Home />} />
        <Route path="likes" element={<Favourites />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="details" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
