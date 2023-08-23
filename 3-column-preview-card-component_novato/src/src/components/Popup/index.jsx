import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

export default function Popup({ setModal }) {
  return (
    <div className="popup">
      <div className="popup__alert-box">
        <button className="alert-box__button" onClick={() => setModal(false)}>
          <AiFillCloseCircle className="button__icon" />
        </button>
        <span className="alert-box__label">
          Opa, bora saber mais sobre esse veículo!
        </span>
      </div>
    </div>
  );
}

Popup.propTypes = {
  setModal: PropTypes.bool,
};
