import "./login.scss";
import { IconError } from "../../assets/icon";
import { Context } from "../../contexts/Context";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { login } from "../Firebase/Firebase";

const Login = () => {
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  const { loading, setLoading } = useContext(Context);

  // login form validation
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

      if (response?.user?.email && state?.previousPath === "/details") {
        setLoading(false);
        navigate("/details");
      } else if (response?.user?.email) {
        setLoading(false);
        navigate("/home");
      }
    } catch {
      setErrorMsg("Invalid password or email");
    }
  };

  // on keypress "enter" signIn function invoked
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
