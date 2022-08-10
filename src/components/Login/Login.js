import "./login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { CityContext } from "../../Contexts/CityContext";
import { useContext, useState } from "react";
import { IconError } from "../../assets/icon";
import { signup, useAuth, login } from "../Firebase/Firebase";
const Login = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(CityContext);

  const signIn = async (e) => {
    setErrorMsg("");
    if (!password || !email) {
      setErrorMsg("Please fill all the input fields");
      return;
    }
    if (password.length < 5) {
      setErrorMsg("Password must be at least 6 character");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Invalid email adress");
      return;
    }
    try {
      setLoading(true);
      const response = await login(email, password);
      if (response?.user?.email) {
        setLoading(false);
        navigate("/home");
      }
    } catch {
      setErrorMsg("Invalid password or email");
    }
  };

  const onEnter = (key) => {
    if (key === "Enter") {
      signIn();
    }
  };

  return (
    <div>
      <div className="login"> </div>
      <div className="form-box">
        <div className="header-text">Login</div>
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
          onKeyDown={(e) => onEnter(e.key)}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Your Password"
          type="password"
          onKeyDown={(e) => onEnter(e.key)}
        />

        <button onClick={signIn} className="form-box_button">
          Login
        </button>
        <NavLink to="/signup" className="register-link">
          Create an account
        </NavLink>
        <NavLink to="/home" className="register-link">
          Back to home
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
