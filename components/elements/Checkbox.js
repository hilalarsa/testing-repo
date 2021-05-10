const Checkbox = ({ handleClick, handleChange, title = "", titleClassName = "", checked = false }) => (
    <label>
        <input
            onClick={e => {
                if (handleClick !== undefined) handleClick(e.target.checked);
            }}
            onChange={e => {
                if (handleChange !== undefined) handleChange(e.target.checked);
            }}
            type="checkbox"
            checked={checked}
        />
        <span className={titleClassName}>{title}</span>
    </label>
);
export default Checkbox