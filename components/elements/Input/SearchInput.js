const SearchInput = ({ handleClick, handleChange, inputClassname = "", inputName = "", placeholder = "", initialValue = "", disabled = false, icon = ""}) => (
    <>
    <input
        onClick={e => {
            if (handleClick !== undefined) handleClick(e);
        }}
        onChange={e => {
            if (handleChange !== undefined) handleChange(e);
        }}
        name={inputName}
        disabled={disabled}
        value={initialValue}
        placeholder={placeholder}
        className={"flex-grow border border-gray-500 rounded-lg p-2 " + inputClassname}
        type="text"
    />
    <button className="border bg-turqoise-110 border-turqoise-110 rounded-br-lg rounded-tr-lg -ml-8 p-2">{icon}</button>
    </>
);
export default SearchInput