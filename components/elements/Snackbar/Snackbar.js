import React, { useEffect, useState } from "react";

const Snackbar = ({ open, message = "" }) => {


    return (
        <>
            <div className={`snackbar ${open ? 'animate-fadein up' : 'animate-fadeout down'}`}>{message}</div>
            <style jsx>{`
            .up{
                top: 30px;
            }
            .down{
                top: -300px;
            }
            .snackbar {
                position: fixed;
                z-index: 9999;
                min-width: 250px;
                font-weight: 500;
                background-color: #EEF8EF;
                color: #49A456;
                text-align: left;
                border-radius: 8px;
                padding: 12px;
                left: 20%;
            }
      `}</style>
        </>
    );
}
export default Snackbar