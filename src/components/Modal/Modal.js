import "./modal.scss";
import { IconError } from "../../assets/icon";
import { useState } from "react";
import { useAuth } from "../Firebase/Firebase";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const currentUser = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // form validation
  const sendForm = async (e) => {
    setErrorMsg("");

    if (!firstName || !email || !lastName) {
      setErrorMsg("Please fill all the input fields");
      return;
    }
    if (!email.includes("@")) {
      setErrorMsg("Invalid email adress");
      return;
    }

    setSuccessMsg("Succesfully subscribed!");
    setTimeout(() => {
      closeModal(false);
    }, 2000);
  };

  const onEnter = (key) => {
    if (key === "Enter") {
      sendForm();
    }
  };
  
  // if user hasn't been logged in or registered yet, 
  // redirect user to login / signup page
  // then redirect user to the previous page again
  const onClickHome = () => {
    navigate("/", { state: { previousPath: pathname } });
  };

  return (
    <div className="modal">
      {currentUser?.email ? (
        <div className="modal__container">
          <button className="modal__btn" onClick={() => closeModal(false)}>
            X
          </button>
          <h3>Please fill the form below</h3>
          <p>
            Send your contact details to property owner and check your email for
            further information!
          </p>
          {errorMsg && (
            <div className="error-msg">
              <IconError /> {errorMsg}
            </div>
          )}
          {successMsg && <p className="successMsg">{successMsg}</p>}
          <div className="modal__input-container">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="first-name"
              type="text"
              placeholder="First Name"
              onKeyDown={(e) => onEnter(e.key)}
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="last-name"
              type="text"
              placeholder="Last Name"
              onKeyDown={(e) => onEnter(e.key)}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="text"
              placeholder="Email"
              onKeyDown={(e) => onEnter(e.key)}
            />
            <button className="main-button md" onClick={sendForm}>
              Send it
            </button>
          </div>
        </div>
      ) : (
        <p>
          <button className="modal__btn" onClick={() => closeModal(false)}>
            X
          </button>
          Please
          <NavLink
            to="/login"
            className="modal__link"
            state={{ previousPath: pathname }}
            onClick={onClickHome}
          >
            Log in
          </NavLink>
          or
          <NavLink
            to="/signup"
            className="modal__link"
            state={{ previousPath: pathname }}
            onClick={onClickHome}
          >
            Sign up
          </NavLink>
          before you continue 🐰
        </p>
      )}
    </div>
  );
};

export default Modal;
