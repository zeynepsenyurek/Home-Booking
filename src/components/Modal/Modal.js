import "./modal.scss";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__btn" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="modal__title">
          <h3>Please fill the form below</h3>
        </div>
        <div className="modal__body">
          <p>Lorem ipsum, some blind text..</p>
        </div>
        <div className="modal__footer">
          <button onClick={() => closeModal(false)}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
