import { useLocation } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/img/Monix.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 2000);
  }, [successMsg]);

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

  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="footer">
      <div class="footer__first">
        <img src={logo} className="footer__logo" />
        <div class="footer__pages">
          <span class="footer__heading"> Pages </span>
          <ul>
            <a class="footer__list-item">Home</a>
            <a class="footer__list-item">Products</a>
          </ul>
        </div>

        <div class="footer__contact">
          <span class="footer__heading"> Contact Us </span>
          <ul>
            <a class="footer__list-item">Careers</a>
            <a class="footer__list-item" href="mailto:monix@monix.com">
              Contact Us
            </a>
          </ul>
        </div>
      </div>
      <div class="footer__subscribe">
        <span class="footer__heading">Subscribe</span>
        <p class="footer__heading--text">
          Join our newsletter to stay up to date on features and releases.
        </p>

        <form action="#" class="footer__form">
          <div class="footer__form-box">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            value="Subscribe"
            class="main-button"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </form>
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
