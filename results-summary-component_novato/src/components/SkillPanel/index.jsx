import PropTypes from "prop-types";

export default function SkillPanel({identificationTag, percentage}) {
  return (
    <li className="result-skills__skill-panel">
      <div className="skill-panel__skill-identification">
        <span className="skill-identification__icon"></span>

        <span className="skill-identification__lbl">{identificationTag}</span>
      </div>

      <div className="skill-panel__container-percentage">
        <span className="container-percentage__lbl">{percentage} <span className="container-percentage__lbl--color">/ 100</span></span>
      </div>
    </li>
  );
}

SkillPanel.propTypes = {
    identificationTag: PropTypes.string,
    percentage: PropTypes.number
}
