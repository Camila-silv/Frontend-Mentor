import PropTypes from "prop-types";

export default function Panel({
  children,
  title,
  classContainer,
  classTitle,
}) {
  return (
    <div className={classContainer}>
      <h2 className={classTitle}>{title}</h2>
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  classContainer: PropTypes.string,
  classTitle: PropTypes.string,
};
