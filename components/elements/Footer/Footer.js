import React, { useState, useEffect, useRef } from "react";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube, AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai"

const Footer = () => {

    return (
        <div className="flex flex-col p-6">
            <div className="flex">
                <img className="flex lg:hidden h-6 w-auto" src="/edge-invest-logo-light.png" alt="" />
                <img className="hidden lg:flex h-8 w-auto" src="/edge-invest-logo-light.png" alt="" />
            </div>
            <div className="flex flex-wrap justify-start my-4">
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Markets</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Careers</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Insight</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Help</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Invest 101</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">Privacy Policy</a>
                <a href="#" className="my-2 w-1/2 no-underline text-gray-300">My Watchlist</a>
            </div>
            <hr className="divide-solid divide-white" />
            <div className="flex my-4">
                <div className="rounded-full bg-black opacity-90 p-1 mr-4">
                    <AiOutlineInstagram className="" color="white" width={24} height={24} />
                </div>
                <div className="rounded-full bg-black opacity-90 p-1 mr-4">
                    <AiOutlineTwitter color="white" width={24} height={24} />
                </div>
                <div className="rounded-full  bg-black opacity-90 p-1 mr-4">
                    <AiFillYoutube color="white" width={24} height={24} />
                </div>
                <div className="rounded-full  bg-black opacity-90 p-1 mr-4">
                    <AiOutlineLinkedin color="white" width={24} height={24} />
                </div>
                <div className="rounded-full  bg-black opacity-90 p-1 mr-4">
                    <AiOutlineFacebook color="white" width={24} height={24} />
                </div>
            </div>
            <div className="text-gray-300">© {new Date().getFullYear()} EdgeInvest All rights reserved</div>
        </div>
    )
}

export default Footer