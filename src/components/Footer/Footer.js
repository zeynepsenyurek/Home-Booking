import "./footer.scss";
import logo from "../../assets/img/Monix.png";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { pathname } = useLocation();

  // clears the success msg after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);
  }, [successMsg]);

  // subscribe form validation
  const handleSubscribe = () => {
    setSuccessMsg("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setEmail("");
    setError("");
    setSuccessMsg("Succesfully subscribed!");
  };

  // controlled footer only appears on some pages
  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="footer">
      <div className="footer__first">
        <img src={logo} className="footer__logo" />
        <div className="footer__pages">
          <span className="footer__heading"> Pages </span>
          <ul>
            <NavLink to="/" className="footer__list-item">
              Home
            </NavLink>
            <NavLink to="/profile" className="footer__list-item">
              Profile
            </NavLink>
          </ul>
        </div>
        <div className="footer__contact">
          <span className="footer__heading"> Contact Us </span>
          <ul>
            <a className="footer__list-item">Careers</a>
            <a className="footer__list-item" href="mailto:monix@monix.com">
              Contact Us
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__subscribe">
        <span className="footer__heading">Subscribe</span>
        <p className="footer__heading--text">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <div action="#" className="footer__form">
          <div className="footer__form-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="main-button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
        {error && <p>{error}</p>}
        {successMsg && <p>{successMsg}</p>}
        <p className="footer__text">
          By subscribing you agree to with our
          <a href="#">Privacy Policy</a>
          and provide consent to receive updates from our company.
        </p>
      </div>
    </div>
  );
};

export default Footer;
