import { AiOutlineClose } from 'react-icons/ai'

const StockLabel = ({ handleDelete, withIcon = false, iconText = "", iconBgColor = "white", text = "", textColor = "black", className = "" }) => (
    <div className={`flex p-3 justify-left items-start outline-gray rounded-xl cursor-pointer ${className}`}>
        {withIcon && <div className={`text-sm px-2 rounded-full bg-${iconBgColor}-500 text-white font-bold`}>{iconText}</div>}
        <div className={`rounded-full text-${textColor}-500 font-medium`}>{text}</div>
        {handleDelete !== undefined && <div onClick={() => { if (handleDelete !== undefined) handleDelete() }}><AiOutlineClose /></div>}
    </div>
);
export default StockLabel