import PropTypes from "prop-types";
const Button = ({ handleClick, handleChange, buttonClassName = "", textClassName = "", buttonName = "", text = "text-black", initialValue = "", disabled = false, withIcon = false, iconLeft = "", iconRight = "", children }) => (
    <button
        onClick={e => {
            if (handleClick !== undefined) handleClick(e);
        }}
        onChange={e => {
            if (handleChange !== undefined) handleChange(e);
        }}
        name={buttonName}
        disabled={disabled}
        value={initialValue}
        className={`p-2 rounded-lg items-center ${buttonClassName}`}
        type="button"
    >
        <div className={`items-center ${textClassName}`}>
            {withIcon && iconLeft != "" && <div>{iconLeft}</div>}
            <div>{text}</div>
            {withIcon && iconRight != "" && <div>{iconRight}</div>}
        </div>
        {children}
    </button>
);

Button.propTypes = {
    borderColor: PropTypes.string, // color for button border
    bordered: PropTypes.bool, // button disabled status
    className: PropTypes.string, // custom classname for button
    buttonName: PropTypes.string, // button input name
    children: PropTypes.any, // element to render between button
    disabled: PropTypes.bool, // button disabled status
    handleChange: PropTypes.func,
    handleClick: PropTypes.func,
    icon: PropTypes.string,
    iconLeft: PropTypes.string, // icon for button on left side
    iconRight: PropTypes.string, // icon for button on left side
    initialValue: PropTypes.string, // button click initial value
    text: PropTypes.string, // text inside button
    textColor: PropTypes.string,
    withIcon: PropTypes.bool
}
export default Button