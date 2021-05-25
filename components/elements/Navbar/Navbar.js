import React, { useState } from 'react'
import { GoThreeBars } from "react-icons/go"
export default function Header() {
    const [popupStatus, setPopupStatus] = useState(false)

    const handleDropdownClick = () => {
        setPopupStatus(!popupStatus)
    }

    return (
        <>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <nav className="bg-gray-50">
                <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-between ml-2 lg:justify-start">
                            <div className="flex-shrink-0 flex">
                                <img className="flex lg:hidden h-6 w-auto" src="/edge-invest-logo.png" alt="" />
                                <img className="hidden lg:flex h-8 w-auto" src="/edge-invest-logo.png" alt="" />
                            </div>
                            <div className="flex lg:hidden h-8 w-auto justify-between">
                                <img className="mx-2 cursor-pointer" src="/profile-placeholder.png" alt="" />
                                <button onClick={handleDropdownClick} className="flex cursor-pointer bg-yellow-100 rounded-xl p-1 items-center">
                                    <GoThreeBars className="mx-2" size={32} color="#363435" />
                                </button>
                            </div>
                            <div className="hidden lg:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-bold " aria-current="page">Markets</a>

                                    <a href="#" className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-bold">Insight</a>

                                    <a href="#" className="text-black hover:bg-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-bold">Invest 101</a>

                                    <a href="#" className="bg-turqoise text-white px-3 py-2 rounded-md text-sm font-bold">Login</a>
                                    {/* <img className="flex xl:hidden h-8 w-auto" src="/profile-placeholder.png" alt="" /> add this if login logic is finished */}
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-12 w-full md:w-60 md:left-0">
                            <div className={`${popupStatus ? "visible" : "hidden"} origin-top-right mt-5 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                <div className="flex justify-between">
                                    <div className="text-sm text-gray-700">Market</div>
                                    <div>X</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-sm text-gray-700">Market</div>
                                    <div>X</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. -->
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                    </div>
                </div> */}
            </nav>
        </>
    )
}