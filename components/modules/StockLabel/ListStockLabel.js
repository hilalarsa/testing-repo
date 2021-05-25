import { AiOutlineClose, AiOutlineArrowUp, AiOutlineEye } from 'react-icons/ai'

const ListStockLabel = ({ handleAddWishlist, withIcon = false, iconText = "", iconBgColor = "white", text = "", textColor = "black" }) => (
    <>
        <div className="flex flex-grow justify-between">
            <div className={`flex flex-col p-3 items-start`}>
                {withIcon && <div className={`text-sm px-2 rounded-full bg-${iconBgColor}-500 text-white font-bold`}>{iconText}</div>}
                <div className={`rounded-full text-${textColor}-500 font-medium`}>{text}</div>
                {handleAddWishlist !== undefined && <div onClick={() => { if (handleAddWishlist !== undefined) handleAddWishlist() }}><AiOutlineClose /></div>}
            </div>
            <div className={`flex flex-col p-3 items-start`}>
                <div className={`text-sm px-2 text-black font-bold`}>S$ 3.98</div>
                <div className={`flex items-center text-${textColor}-500 font-medium`}><AiOutlineArrowUp /> 2.9%</div>
            </div>
        </div>
        <div className={`flex flex-col p-1`}>
            <div className={`flex`}><AiOutlineEye size={30} color="#AAAAAA"/></div>
        </div>
    </>
);
export default ListStockLabel