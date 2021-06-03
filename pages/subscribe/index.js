import React, { useState, useEffect } from "react";

import Head from "../../components/elements/Head/Head"
import Navbar from "../../components/elements/Navbar/Navbar"
import Footer from "../../components/elements/Footer/Footer"
import EmailInput from "../../components/elements/Input/EmailInput"
import PasswordInput from "../../components/elements/Input/PasswordInput"
import Button from "../../components/elements/Button/Button"

const subscribeData = [
    {
        title: "The Edge Digital 1 Year",
        price: "S$ 99.90/Year",
        image: "./digital-sub.png",
        perks: [
            "Unlimited access to online articles",
            "3 Simultaneous logins across all devices",
            "Bonus unlimited accesss to online articles and virtual newspaper on The Edge Malaysia (single login)",
            "Bonus redemption of a personalized Bynd Artisan Notebook*"
        ],
        type: "Subscribe to Digital"
    },
    {
        title: "The Edge Print and Digital 1 Year",
        price: "S$ 169.90/Year",
        image: "./digital-print-sub.png",
        perks: [
            "Weekly print edition delivered to your mailbox",
            "Unlimited access to online articles",
            "3 Simultaneous logins across all devices",
            "Bonus unlimited accesss to online articles and virtual newspaper on The Edge Malaysia (single login)",
            "Bonus redemption of a personalized Bynd Artisan Notebook*"
        ],
        type: "Subscribe to Print & Digital"
    },
    {
        title: "The Edge Digital 1 Year",
        price: "S$ 139.90/Year",
        image: "./print-sub.png",
        perks: [
            "Weekly print edition delivered to your mailbox",
            "Bonus redemption of a personalized Bynd Artisan Notebook"
        ],
        type: "Subscribe to Print"
    },
]

const Subscribe = () => {
    return (
        <>
            <Head />
            <Navbar />
            <div className="">
                <div className="shadow-lg rounded-t-lg bg-turqoise-110 p-2 mx-4">
                    <div className="flex justify-between">
                        <div className="text-xl text-white font-semibold">Select a Subscription Plan</div>
                        <div className="text-xl text-white font-semibold">X</div>
                    </div>
                </div>
                <div className="shadow-lg rounded-b-lg p-4 mb-10 mx-4">
                    {subscribeData.map((item, index) => {
                        return (
                            <>
                                <div key={index} className="flex flex-col justify-center items-center my-4">
                                    <img src={item.image} className="w-2/3" />
                                    <div className="text-xl text-blue-100 font-semibold">{item.title}</div>
                                    <div className="text-xl  text-blue-100">{item.price}</div>
                                    <ul className="my-2 mx-4 text-left">
                                        {item.perks.map((perks, key) => {
                                            return (
                                                <><li className="my-2 text-blue-100" key={key}>&#8226; {perks}</li></>
                                            )
                                        })}
                                    </ul>
                                    <hr className="my-2 divide-dashed" />
                                    <Button
                                        text={item.type}
                                        buttonClassName="border border-turqoise-110"
                                        textClassName="text-turqoise-110"
                                    />
                                </div>
                            </>
                        )
                    })}
                    <div className="text-blue-100">
                        For bulk or corporate subscriptions, please submit your enquiry <a href="#" className="text-turqoise font-bold">here</a>
                    </div>
                    <div className="mt-4 text-blue-100">
                        <b>*Note:</b> Gift redemption is only applicable for new subscription purchased during promotion period from April 2021 to June 2021, while stocks last.
                    </div>
                    <hr className="my-2 divide-gray-600 divide-dashed" />
                    <div className="mt-4 text-blue-100">
                        Have an account? <a href="/login"className="text-turqoise font-bold">Login</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto bg-black-100">
                <Footer />
            </div>
        </>
    )
}

export default Subscribe