import React, { useState } from 'react'
import { AiOutlineUp, AiOutlineDown, } from 'react-icons/ai'
import PropTypes from "prop-types";

const Accordion = ({ headerText, viewMore = false, children}) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <>
            <div onClick={() => setExpanded(!expanded)} className="container mx-auto px-4 pt-4 pb-2 sm:px-6 md:px-10 flex bg-gray-50 w-full m-0 h-16items-center justify-between cursor-pointer">
                <button className="flex justify-start items-center space-x-2" onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineUp /> : <AiOutlineDown />}
                    <div className="text-blue-100 font-bold">{headerText}</div>
                </button>
                {viewMore && <div className="text-sm font-semibold text-turqoise-110">View More</div>}
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-10 my-2">
                {expanded && children}
            </div>
        </>
    )
}

Accordion.propTypes = {
    /** header text on clickable section of accordion */
    headerText: PropTypes.string.isRequired,
    /** component rendered inside accordion*/
    children: PropTypes.children,
};

Accordion.defaultProps = {
    headerText: "",
    children: "",
};


export default Accordion