import { Context } from "../../contexts/Context";
import { IconError } from "../../assets/icon";
import { signup } from "../Firebase/Firebase";
import { useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [termsClicked, setTermsClicked] = useState(false);

  const { state } = useLocation();

  const { loading, setLoading } = useContext(Context);
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
    if (!termsClicked) {
      setErrorMsg("Please check the terms");
      return;
    }

    try {
      setLoading(true);
      const response = await signup(email, password);
      if (response?.user?.email && state?.previousPath === "/details") {
        setLoading(false);
        navigate("/details");
      } else if (response?.user?.email) {
        setLoading(false);
        navigate("/home");
        console.log(state?.previousPath);
      }
    } catch {
      setErrorMsg("Please enter a valid email adress");
    }
  };

  const onEnter = (key) => {
    if (key === "Enter") {
      signUp();
    }
  };

  const isTermsClicked = () => {
    setTermsClicked(!termsClicked);
    return;
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
          htmlFor
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
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirm Your Password"
          type="password"
          onKeyDown={(e) => onEnter(e.key)}
        />
        <input id="terms" type="checkbox" />{" "}
        <label htmlFor="terms" onClick={isTermsClicked}></label>
        <span>
          Agree with <a href="#">Terms & Conditions</a>
        </span>
        <button onClick={signUp} className="form-box_button">
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
