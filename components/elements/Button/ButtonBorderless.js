import PropTypes from "prop-types";

const ButtonBorderless = ({
  text,
  type = "button",
  bgColor = "bg-turqoise-100",
  textColor = "text-turqoise",
}) => (
  <button
    className={`"cursor-pointer w-full rounded mb-2 py-2 font-medium text-xs text-center ${textColor} ${bgColor}"`}
    type={{ type }}
  >
    {text}
  </button>
);

ButtonBorderless.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ButtonBorderless;
