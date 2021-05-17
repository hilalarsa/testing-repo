const Checkbox = ({ handleClick, handleChange, title = "", titleClassName = "", checked = false }) => (
    <label>
        <input
            onClick={e => {
                if (handleClick !== undefined) handleClick(e);
            }}
            onChange={e => {
                if (handleChange !== undefined) handleChange(e);
            }}
            name={title}
            type="checkbox"
            checked={checked}
        />
        <span className={titleClassName}>{title}</span>
    </label>
);
export default Checkbox