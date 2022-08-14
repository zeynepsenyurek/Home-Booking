import BtnSlider from "./BtnSlider";
import Profile from "../Profile/Profile";
import "../Details/details.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { CityContext } from "../../Contexts/CityContext";
import { IconHome, IconPrice, IconRating, IconStar } from "../../assets/icon";
import Modal from "../Modal/Modal";
import Header from "../Header/Header";

const PropertyDetails = () => {
  const { details } = useContext(CityContext);
  const [openModal, setOpenModal] = useState(false);

  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== details[0]?.images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === details[0]?.images.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(details[0]?.images.length);
    }
  };

  console.log(details);

  return (
    <div className="details">
      {/* <div className="header">
        <div>LOGO</div>
        <NavLink to="/home" className="header__link">
          Back to home
        </NavLink>
        <Profile />
      </div> */}

      <section className="container-slider">
        {details[0]?.images.map((obj, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={obj}></img>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </section>
      <div className="details__container">
        <h2>{details[0].listingName}</h2>
        <div className="text__wrapper">
          <div className="details__container--left">
            <div className="features">
              <IconStar />
              Location: {details[0].publicAddress}
            </div>
            <div className="features">
              <IconStar />
              Price: {details[0].price}
            </div>
            <div className="features">
              {" "}
              <IconStar /> Bathroom: {details[0].listingBathroomLabel}
            </div>
            <div className="features">
              {" "}
              <IconStar /> Bedroom: {details[0].listingBedLabel}
            </div>
          </div>
          <div className="details__container--right">
            <div className="features">
              <IconStar />
              Rating: {details[0].avgRating}
            </div>
            <div className="features">
              {" "}
              <IconStar /> Guests: {details[0].listingGuestLabel}
            </div>
            <div className="features">
              <IconStar /> Details:
            </div>
            <div className="details__amenities">
              {details[0].listingPreviewAmenityNames.length > 0 ? (
                details[0].listingPreviewAmenityNames.map((el) => (
                  <div> -{el} </div>
                ))
              ) : (
                <div className="features">No amenities to show 😿</div>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="card__button btn--active"
        >
          Contact with property owner
        </button>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default PropertyDetails;
