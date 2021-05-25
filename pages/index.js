import React, { useState, useEffect } from "react";

import Head from "../components/elements/Head/Head.js"
import Accordion from "../components/elements/Accordion/Accordion.js"
import Button from "../components/elements/Button/Button.js"
import Snackbar from "../components/elements/Snackbar/Snackbar.js"
import SearchInput from "../components/elements/Input/SearchInput.js"
import Navbar from "../components/elements/Navbar/Navbar.js"
import ChartMain from "../components/modules/ChartMain/ChartMain.js"
import ChartVerticalBar from "../components/modules/ChartVerticalBar/ChartVerticalBar.js"
import ChartMini from "../components/modules/ChartMini/ChartMini.js"
import ChartCandlestick from "../components/modules/ChartCandlestick/ChartCandlestick.js"
import ChartCompare from "../components/modules/ChartCompare/ChartCompare.js"
import ScrollStockList from "../components/modules/StockList/ScrollStockList.js"
import TrendingStockList from "../components/modules/StockList/TrendingStockList.js"

import dataLine from "./api/data/line"
import dataCandle from "./api/data/candle"

import { AiOutlineUnorderedList, AiOutlineSearch } from "react-icons/ai"
import { FiFilter } from "react-icons/fi"

//START HIGHCHART INIT
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartMaps from "highcharts/modules/map";
import HighchartStockTools from "highcharts/modules/stock-tools";
import HighchartAnnotations from 'highcharts/modules/annotations-advanced';
import HighchartFullscreen from 'highcharts/modules/full-screen';
import HighchartPriceIndicators from 'highcharts/modules/price-indicator';
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartDragPanes from "highcharts/modules/drag-panes.js";

//indicators
import HighchartIndicators from 'highcharts/indicators/indicators';
import HighchartIndicatorsAll from 'highcharts/indicators/indicators-all';
import IndicatorEma from 'highcharts/indicators/ema';
import IndicatorBollinger from 'highcharts/indicators/bollinger-bands';

if (typeof Highcharts === "object") {
  HighchartMaps(Highcharts);
  HighchartStockTools(Highcharts);
  HighchartAnnotations(Highcharts);
  HighchartFullscreen(Highcharts);
  HighchartPriceIndicators(Highcharts);
  HighchartsExportData(Highcharts);
  HighchartDragPanes(Highcharts);
  HighchartIndicators(Highcharts);
  HighchartIndicatorsAll(Highcharts);
  IndicatorEma(Highcharts)
  IndicatorBollinger(Highcharts)
}
// END HIGHCHART INIT

// export default function Home({ dataLine, dataCandle}) { // disabled for dummy data
const seriesOptions = [
  {
    id: "C6L",
    name: "Singapore Tech",
    color: "blue",
    data: [Math.random() * 10, Math.random() * 5, Math.random() * 10, Math.random() * 2, Math.random() * 10],
  },
  {
    id: "D89",
    name: "Singapore Tele",
    color: "purple",
    data: [Math.random() * 10, Math.random() * 10, Math.random() * 2, Math.random() * 10, Math.random() * 10],
  },
  {
    id: "A12",
    name: "Singapore Tele",
    color: "red",
    data: [Math.random() * 10, Math.random() * 10, Math.random() * 2, Math.random() * 10, Math.random() * 10],
  },
  {
    id: "B23",
    name: "Singapore Tele",
    color: "yellow",
    data: [Math.random() * 10, Math.random() * 10, Math.random() * 2, Math.random() * 10, Math.random() * 10],
  },
  {
    id: "C34",
    name: "Singapore Tele",
    color: "pink",
    data: [Math.random() * 10, Math.random() * 10, Math.random() * 2, Math.random() * 10, Math.random() * 10],
  },
]
export default function Home() {

  const [snackbarStatus, setSnackbarStatus] = useState(false)
  const handleClickSnackbar = () => {
    setSnackbarStatus(!snackbarStatus)
    setTimeout(() => {
      setSnackbarStatus(snackbarStatus)
    }, 3000);
  }

  return (
    <div>
      <Head />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10">

        <div className="my-2">
          <ScrollStockList
            stockList={seriesOptions}
          // setStockList={setStockList}
          />
        </div>

        <div className="flex flex-grow md:space-x-10">
          <div className="w-full md:w-2/3"> {/* left section desktop */}
            <div className="flex flex-col space-y-2 max-w-full">

              <div className="flex justify-between md:justify-start space-x-2">
                <div className="hidden md:flex md:flex-grow w-full md:w-1/2"> {/**  hidden on mobile */}
                  <SearchInput
                    text={"Stocks Screener"}
                    icon={<AiOutlineSearch />}
                  />
                </div>
                <div className="flex-grow w-full md:w-1/4">
                  <Button
                    buttonClassname={"w-full"}
                    text={"My Watchlist"}
                    icon={<AiOutlineUnorderedList />}>
                  </Button>
                </div>
                <div className="flex-grow w-full md:w-1/4">
                  <Button
                    buttonClassname={"w-full"}
                    text={"Stocks Screener"}
                    icon={<FiFilter />}
                  />
                </div>
              </div>
              <div className="flex md:hidden justify-start"> {/**  hidden on desktop */}
                <SearchInput
                  text={"Stocks Screener"}
                  icon={<AiOutlineSearch />}
                />
              </div>
              <div className="flex">

              </div>
            </div>

          </div>

          {/* right section desktop */}
          <div className="md:w-1/3">
            {/* Add to wishlist banner */}
            {/* Stock Ranking */}
          </div>
        </div>

      </div>

      <Accordion headerText="Trending">
        <TrendingStockList
          stockList={seriesOptions}
        // setStockList={setStockList}
        />
      </Accordion>

      <div className="container mx-auto px-4 sm:px-6 flex md:hidden bg-gray-50 w-full m-0 justify-between items-center h-16">
        <div className="">Ranking</div>
        <div className="">View More</div>
      </div>
      {/* <div className="my-2">
          <ChartMain data={dataLine} />
        </div> */}

      {/* <div className="my-2">
          <ChartCandlestick data={dataCandle} />
        </div> */}

      {/* <div className="my-2">
          <ChartMini data={dataLine} />
        </div>

        <div className="my-2">
          <ChartCompare data={dataLine} />
        </div> */}

      {/* <ChartVerticalBar data={[1, -2, 3, -4, 5, -6]} category={"A", "B", "C", "D", "E", "F"} /> temp removed */}

      <Button
        text={"Toggle Snackbar"}
        handleClick={handleClickSnackbar}
      />
      <div className="container mx-auto flex justify-center items-center">
        <Snackbar
          state={snackbarStatus}
          message={"Toggle Snackbar"}
          anchorVertical={"top"}
        />
      </div>
    </div >
  );
}

// Home.getInitialProps = async (ctx) => {
//   let apiUrl = "http://taufan-api.invest.theedgesingapore.com"
//   let res = await fetch(apiUrl + '/stockPrice/line?stock_code=0001')
//   let json = await res.json()

//   let res2 = await fetch(apiUrl + '/stockPrice/candleStick?stock_code=0001 ')
//   let json2 = await res2.json()
//   // return { dataSingleLine: json.data, dataVerticalBar: json2.data.data, categoryVerticalBar: json2.data.categories }
//   let dataLine = json.data.map(item=>{
//     return [new Date(item.stock_date).getTime(), parseFloat(item.stock_close)]
//   })

//   let dataCandle = json2.data.map(item=>{
//     return [new Date(item.stock_date).getTime(), parseFloat(item.stock_open), parseFloat(item.stock_high), parseFloat(item.stock_low), parseFloat(item.stock_close)]
//   })
//   return {dataLine, dataCandle}
// }