import Login from "../Login/Login";
import { CityContext } from "../../Contexts/CityContext";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { IconError } from "../../assets/icon";

const Register = () => {
  const { password, confirmPassword, setErrorMsg } = useContext(CityContext);
  const [email, setEmail] = useState("");

  const signUp = (e) => {
    setErrorMsg("");
    if (!password || !email || !confirmPassword) {
      setErrorMsg("Please fill all the input fields");
      return;
    }
    if (password.length < 5 || confirmPassword.length < 5) {
      setErrorMsg("Password must be at least 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    // api call
  };

  return (
    <div>
      <div className="login"> </div>
      <div className="form-box register-box">
        <div className="header-text">Sign up</div>
        {errorMsg ? (
          <div className="error-msg">
            <IconError /> {errorMsg}
          </div>
        ) : null}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          type="text"
        />{" "}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Your Password"
          type="password"
        />{" "}
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirm Your Password"
          type="password"
        />{" "}
        <input id="terms" type="checkbox" /> <label for="terms"></label>
        <span>
          Agree with <a href="#">Terms & Conditions</a>
        </span>{" "}
        <button onClick={signUp}>Sign up</button>
        <NavLink to="/login" className="register-link">
          Already have an account? Login
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
