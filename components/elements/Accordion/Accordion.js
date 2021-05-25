import React, { useState } from 'react'
import { AiOutlineUp, AiOutlineDown, } from 'react-icons/ai'

const Accordion = ({ headerText, children }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <div onClick={() => setExpanded(!expanded)} className="container mx-auto px-4 sm:px-6 md:px-10 flex bg-gray-50 w-full m-0 h-16items-center justify-between cursor-pointer">
                <button className="flex justify-start items-center space-x-2" onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineUp /> : <AiOutlineDown />}
                    <div>{headerText}</div>
                </button>
                <div>View More</div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-10 my-2">
                {expanded && children}
            </div>
        </>
    )
}
export default Accordion