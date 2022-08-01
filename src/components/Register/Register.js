import { CityContext } from "../../Contexts/CityContext";
import { IconError } from "../../assets/icon";
import { signup, useAuth } from "../Firebase/Firebase";
import { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");

  const { loading, setLoading } = useContext(CityContext);

  const currentUser = useAuth();
  const navigate = useNavigate();

  const signUp = async (e) => {
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
    try {
      setLoading(true);
      const response = await signup(email, password);
      if (response?.user?.email) {
        setLoading(false);
        navigate("/home");
      }
    } catch {
      setErrorMsg("Could not create an account");
    }
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
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Your Password"
          type="password"
        />
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirm Your Password"
          type="password"
        />
        <input id="terms" type="checkbox" /> <label for="terms"></label>
        <span>
          Agree with <a href="#">Terms & Conditions</a>
        </span>
        <button
          onClick={signUp}
          className={
            loading || currentUser ? "btn-disabled" : "form-box_button"
          }
        >
          Sign up
        </button>
        <NavLink to="/login" className="register-link">
          Already have an account? Login
        </NavLink>
        <NavLink to="/home" className="register-link">
          Back to home
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
