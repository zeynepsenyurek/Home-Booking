import { useLocation } from "react-router-dom";
import "./footer.scss";
import logo from "../../assets/img/Monix.png";
import { useState } from "react";

const Footer = () => {
  // const submitButton = (e) => {
  //   e.preventDefault();
  //   return <p>kkdkf</p>;
  // };
  const [inputField, setInputField] = useState(false);
  const inputEmailPlaceholder = () => {
    setInputField(true);
  };
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/login" || pathname === "/signup")
    return null;

  return (
    <div className="footer">
      <div class="footer__first">
        <img src={logo} className="footer__logo" />
        <div class="footer__pages">
          <span class="footer__heading"> Pages </span>
          <ul>
            <li class="footer__list-item">Home</li>
            <li class="footer__list-item">Products</li>
          </ul>
        </div>

        <div class="footer__contact">
          <span class="footer__heading"> Contact Us </span>
          <ul>
            <li class="footer__list-item">Careers</li>
            <li class="footer__list-item">Contact Us</li>
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
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              class="dd"
              onClick={inputEmailPlaceholder}
            />
          </div>
          <input type="submit" value="Subscribe" class="main-button" />
        </form>
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
