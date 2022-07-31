import "./login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login"> </div>
      <div className="form-box">
        <div className="header-text">Login</div>
        <input placeholder="Your Email Address" type="text" />{" "}
        <input placeholder="Your Password" type="password" />{" "}
        <input id="terms" type="checkbox" /> <label for="terms"></label>
        <span>
          Agree with <a href="#">Terms & Conditions</a>
        </span>{" "}
        <button>Login</button>
        <NavLink to="/signup" className="register-link">
          Create an account
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
