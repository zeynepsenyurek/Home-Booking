import { ChevronRight, ChevronLeft } from "../../assets/ico";
import "../Details/details.scss";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? <ChevronRight /> : <ChevronLeft />}
    </button>
  );
};

export default BtnSlider;
