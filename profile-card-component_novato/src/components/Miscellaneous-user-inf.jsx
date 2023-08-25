import PropTypes from "prop-types";

export default function MiscellaneousUserInf({numberLabel, label}) {
    return (
        <div className="miscellaneous-user-inf__container-miscellaneous-user-inf">
        <span className="container-miscellaneous-user-inf__number-label">{numberLabel}</span>
        <span className="container-miscellaneous-user-inf__label">{label}</span>
      </div>
    )
}

MiscellaneousUserInf.propTypes = {
    numberLabel: PropTypes.string,
    label: PropTypes.string
}