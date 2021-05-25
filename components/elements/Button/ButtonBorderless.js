import PropTypes from "prop-types";

const ButtonBorderless = ({ text, type, bgColor, textColor }) => (
  <button
    className={`"cursor-pointer w-full rounded mb-2 py-2 font-medium text-xs text-center ${textColor} ${bgColor} "`}
    type={{ type }}
  >
    {text}
  </button>
);

ButtonBorderless.propTypes = {
  /** set text inside button */
  text: PropTypes.string.isRequired,
  /** set button type such as button, submit, reset */
  type: PropTypes.string,
  /** set button background color, fill by using tailwind background color class */
  bgColor: PropTypes.string,
  /** set button text color, fill by using tailwind text color class */
  textColor: PropTypes.string,
};

ButtonBorderless.defaultProps = {
  text: "",
  type: "button",
  bgColor: "bg-turqoise-100",
  textColor: "text-turqoise",
};

export default ButtonBorderless;
