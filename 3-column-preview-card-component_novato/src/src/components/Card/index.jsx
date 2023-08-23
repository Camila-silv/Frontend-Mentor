import PropTypes from "prop-types";

export default function Card({ title, paragraphy, icon, bg, color }) {
  return (
    <div className="card" style={{ backgroundColor: bg }}>
      <div className="card_plan-car">
        <img src={icon} alt="Icone do plano" className="plan-car__icon" />
        <h2 className="plan-car__title">{title}</h2>
        <p className="plan-car__paragraphy">{paragraphy}</p>
      </div>

      <button className="card__button default-button" style={{ color: color }}>
        Learn more
      </button>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  paragraphy: PropTypes.string,
  icon: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};
