import React, { useState, useEffect, useRef } from "react";

import StockLabel from "../StockLabel/StockLabel"
import { AiOutlinePlus } from 'react-icons/ai'

const TrendingStockList = ({ stockList, withAddStock = false }) => {

    return (
        <div className="flex flex-row overflow-auto py-5">
            {stockList.map((item, index) =>
                <div key={index} className="flex">
                    <StockLabel
                        key={index}
                        className="flex-col w-40 md:w-60 mx-2"
                        withIcon iconText={item.id}
                        iconBgColor={item.color}
                        text={item.name}
                    />
                </div>
            )}
            {withAddStock &&
                <div className={`flex w-30 md:w-60 p-3 justify-left items-start outline-gray cursor-pointer rounded-xl  mx-2`}>
                    <div><AiOutlinePlus color="#51B7AE" /></div>
                    {/* <div className={`text-sm px-2 rounded-full bg-green-500 text-white font-bold`}></div> */}
                    <div className={`text-green-500 font-medium`}>{"Add Stocks"}</div>
                </div>
            }
        </div>
    )
}

export default TrendingStockList