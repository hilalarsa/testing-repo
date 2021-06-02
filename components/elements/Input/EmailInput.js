import { AiFillInfoCircle } from "react-icons/ai"

const EmailInput = ({ handleClick, handleChange, label = "", labelClassName = "", inputClassname = "", inputName = "", placeholder = "", initialValue = "", disabled = false }) => (
    <>
        <label className={labelClassName}>{label}</label>
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
            className={"flex-grow border border-gray-200 rounded-lg p-2 my-2 " + inputClassname}
            type="text"
        />
        {/* <label className="flex mb-2 items-center text-red-500"><AiFillInfoCircle color="red" />Please enter correct email format.</label> */}
    </>
);
export default EmailInput