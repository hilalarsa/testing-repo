import React, { useState, useEffect, useRef } from "react";

import ListStockLabel from "../StockLabel/ListStockLabel"

const RankingStockList = ({ stockList }) => {

    const Tab = ["Most Active", "Top Gainer", "Top Loser"]
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    return (
        <>
            <div className="flex flex-grow w-full">
            {Tab.map((item,key) => {
                return(
                    <div onClick={()=>setCurrentTabIndex(key)} className={`flex justify-center w-1/3 cursor-pointer px-1 py-2 ${key == currentTabIndex ? "border-b-4 border-turqoise" : ""}`}>{item}</div>
                )
            })}
            </div>
            <div className="flex flex-col w-full">
                {stockList.map((item, index) =>
                    <div key={index} className="flex justify-between items-center cursor-pointer ">
                        <ListStockLabel
                            key={index}
                            handleAddWishlist={console.log("Add to wishlist")}
                            withIcon iconText={item.id}
                            iconBgColor={item.color}
                            text={item.name}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default RankingStockList