import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GoThreeBars } from "react-icons/go"

import Button from "../Button/Button"

const navbarBeforeLoginContent = [{
    title: "Market",
    content: [{
        title: "Market News",
        url: "#",
        icon: "/images/icons/trading-news-navbar-icon.png"
    }, {
        title: "Market Trend",
        url: "#",
        icon: "/images/icons/trading-news-navbar-icon.png"
    }, {
        title: "Trading News",
        url: "#",
        icon: "/images/icons/trading-news-navbar-icon.png"
    }, {
        title: "Trend Chart",
        url: "#",
        icon: "/images/icons/trading-news-navbar-icon.png"
    }, {
        title: "Stocks Screener",
        url: "#",
        icon: "/images/icons/trading-news-navbar-icon.png"
    }]
}, {
    title: "Insight",
    content: [{
        title: "Views",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Insider's Insight",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Forum: Edge Community",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Featured Portfolio",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Smart Charts",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Report",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Product Listing",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Reviews",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }]
}, {
    title: "Invest 101",
    content: [{
        title: "Guides",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Quiz",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }, {
        title: "Investment Types",
        url: "#",
        icon: "/images/icons/views-navbar-icon.png"
    }]
},
]

export default function Navbar() {
    const [popupStatus, setPopupStatus] = useState(false)
    const router = useRouter()

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
                            <div className="flex flex-shrink-0 cursor-pointer" onClick={() => router.push("/")}>
                                <img className="flex lg:hidden h-6 w-auto" src="/edge-invest-logo.png" alt="" />
                                <img className="hidden lg:flex h-8 w-auto" src="/edge-invest-logo.png" alt="" />
                            </div>
                            <div className="flex lg:hidden h-8 w-auto justify-between">
                                <img className="mx-2 cursor-pointer" src="/profile-placeholder.png" alt="" />
                                <button onClick={handleDropdownClick} className="flex cursor-pointer bg-yellow-100 rounded-xl p-1 items-center focus:outline-none">
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
                        <div className="absolute top-12 w-full z-50 md:w-60 md:left-0">
                            <div className={`${popupStatus ? "visible" : "hidden"} origin-top-right mt-5 rounded-md shadow-lg p-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                {navbarBeforeLoginContent.map((item) => {
                                    return (
                                        <>
                                            <div>
                                                <div className="text-sm text-gray-700">{item.title}</div>
                                            </div>
                                            <div className="flex flex-wrap justify-start">
                                                {item.content.map((itemContent, index) => {
                                                    return (
                                                        <div key={index} className="flex p-3 w-1/2">
                                                            <a href={itemContent.url} className="flex justify-center h-6">
                                                                <img src={itemContent.icon} />
                                                                <div>{itemContent.title}</div>
                                                            </a>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                        </>
                                    )
                                })}
                                <div className="flex justify-center bg-turqoise-100 py-2 rounded-lg my-2">
                                    <Button
                                        handleClick={() => { router.push("/login") }}
                                        text="Login"
                                        withIcon
                                        iconRight={<AiOutlineArrowRight color="white" />}
                                        buttonClassName="w-1/3 bg-turqoise-110"
                                        textClassName="flex justify-center space-x-2 font-bold text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}