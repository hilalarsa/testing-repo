const Button = ({ handleClick, handleChange, buttonClassname = "", buttonName = "", text = "", initialValue = "", disabled = false, icon = "", children}) => (
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
        className={"border border-gray-500 rounded-lg p-2 " + buttonClassname}
        type="button"
    >
        <div className="flex items-center justify-start space-x-2">
            <div>{icon}</div>
            <div>{text}</div>
        </div>
        {children}
    </button>
);
export default Button