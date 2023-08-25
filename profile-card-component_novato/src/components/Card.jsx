import { MiscellaneousUserInf } from "./index";
import PropTypes from "prop-types";

export default function Card({ name, age, city }) {
  const miscellaneousInf = [
    {
      numberLabel: "80K",
      label: "Followers",
    },
    {
      numberLabel: "803K",
      label: "Likes",
    },
    {
      numberLabel: "1.4K",
      label: "Photos",
    },
  ];

  return (
    <div className="card">
      <div className="card__card-header"></div>
      <div className="card__card-body">
        <img src="public/image-victor.jpg" alt="/" className="card-body__img" />
        <div className="card-body__user-inf">
          <h1 className="user-inf__name">{name}</h1>
          <span className="user-inf__age">{age}</span>
        </div>
        <h2 className="card-body__city">{city}</h2>
        <div className="card-body__miscellaneous-user-inf">
          {miscellaneousInf.map((item) => {
            return (
              <MiscellaneousUserInf
                numberLabel={item.numberLabel}
                label={item.label}
                key={item.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  city: PropTypes.string,
};
