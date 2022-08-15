import "../Details/details.scss";
import { IconStar } from "../../assets/icon";
import BtnSlider from "./BtnSlider";
import Modal from "../Modal/Modal";
import { useContext, useState } from "react";
import { Context } from "../../Contexts/Context";

const PropertyDetails = () => {
  // details state equals to current home which is clicked
  const { details } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);
  // slideIndex refers to home object's image array
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    // if your current img's index is smaller than the length of the array,
    // then add 1, if it's equal to the length of the array then turn back to first pic
    if (slideIndex !== details?.images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === details?.images.length) {
      setSlideIndex(1);
    }
  };

  // same function with reversed logic
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(details?.images.length);
    }
  };

  return (
    <div className="details">
      <section className="container-slider">
        {details?.images.map((obj, index) => {
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
        <h2>{details.listingName}</h2>
        <div className="text__wrapper">
          <div className="details__container--left">
            <div className="features">
              <IconStar />
              Location: {details.publicAddress}
            </div>
            <div className="features">
              <IconStar />
              Price: {details.price}
            </div>
            <div className="features">
              <IconStar /> Bathroom: {details.listingBathroomLabel}
            </div>
            <div className="features">
              <IconStar /> Bedroom: {details.listingBedLabel}
            </div>
          </div>
          <div className="details__container--right">
            <div className="features">
              <IconStar />
              Rating: {details.avgRating}
            </div>
            <div className="features">
              <IconStar /> Guests: {details.listingGuestLabel}
            </div>
            <div className="features">
              <IconStar /> Details:
            </div>
            <div className="details__amenities">
              {details.listingPreviewAmenityNames.length > 0 ? (
                details.listingPreviewAmenityNames.map((el) => (
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
