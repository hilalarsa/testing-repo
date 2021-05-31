import React, { useState, useEffect, useRef } from "react";

import ListStockLabel from "../StockLabel/ListStockLabel"

const TrendingStockList = ({ stockList }) => {

    return (
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
    )
}

export default TrendingStockList