import React, { useState, useEffect } from "react";

import Head from "../../components/elements/Head/Head"
import Navbar from "../../components/elements/Navbar/Navbar"
import Footer from "../../components/elements/Footer/Footer"
import EmailInput from "../../components/elements/Input/EmailInput"
import PasswordInput from "../../components/elements/Input/PasswordInput"
import Button from "../../components/elements/Button/Button"

const Login = () => {
    return (
        <>
            <Head />
            <Navbar />
            <div className="">
                <div className="shadow-lg rounded-lg p-4 my-10 mx-4">
                    <div className="text-2xl text-blue-100 font-semibold my-4">Login to Your Account</div>
                    <div className="flex flex-col">
                        <EmailInput
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                            label="Email"
                            labelClassName="w-full text-blue-110"
                            inputClassName="w-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <PasswordInput
                            handleForgotPassword={console.log("Forgot Password!")}
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            label="Password"
                            labelClassName="text-blue-110"
                            inputClassName=""
                        />
                    </div>
                    <div className="my-4">
                        <Button
                            handleClick={console.log("login")}
                            text="Login"
                            buttonClassName="w-full bg-turqoise-110 h-12"
                            textClassName="flex justify-center space-x-2 font-bold text-white"
                        />
                    </div>
                    <div className="flex flex-col text-center my-4">
                        <div>Don't have account?</div>
                        <div className="text-turqoise-110 font-semibold cursor-pointer">Subscribe to Premium Content</div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto bg-black-100">
                <Footer />
            </div>
        </>
    )
}

export default Login