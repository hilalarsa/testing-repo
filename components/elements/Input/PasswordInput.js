import { React, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const PasswordInput = ({ handleClick, handleChange, handleForgotPassword, label = "", labelClassName = "", inputClassname = "", inputName = "", placeholder = "", initialValue = "", disabled = false }) => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <>
            <div className="flex w-full justify-between">
                <label className={labelClassName}>{label}</label>
                <label onClick={e => {
                    if (handleForgotPassword !== undefined) handleForgotPassword(e);
                }}
                    className={"text-turqoise-110 cursor-pointer"}>Forgot your password ?
                </label>
            </div>
            {/* <AiOutlineEyeInvisible /> */}
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
                type={passwordVisible ? "text" : "password"}
            >
            </input>
        </>
    )
}
export default PasswordInput