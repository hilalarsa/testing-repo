import React, { useState, useEffect } from "react";

import Head from "../components/elements/Head/Head"
import Accordion from "../components/elements/Accordion/Accordion"
import Button from "../components/elements/Button/Button"
import Snackbar from "../components/elements/Snackbar/Snackbar"
import SearchInput from "../components/elements/Input/SearchInput"
import Navbar from "../components/elements/Navbar/Navbar"
import Footer from "../components/elements/Footer/Footer"

import ChartMain from "../components/modules/ChartMain/ChartMain"
import ChartVerticalBar from "../components/modules/ChartVerticalBar/ChartVerticalBar"
import ChartMini from "../components/modules/ChartMini/ChartMini"
import ChartCandlestick from "../components/modules/ChartCandlestick/ChartCandlestick"
import ChartCompare from "../components/modules/ChartCompare/ChartCompare"
import ScrollStockList from "../components/modules/StockList/ScrollStockList"
import TrendingStockList from "../components/modules/StockList/TrendingStockList"
import RankingStockList from "../components/modules/StockList/RankingStockList.js"

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
import HighchartDragPanes from "highcharts/modules/drag-panes";

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

  const [snackbarStatus, setSnackbarStatus] = useState("")
  const handleClickSnackbar = () => {
    console.log("click snackbar")
    setSnackbarStatus(true)
    setTimeout(() => {
      setSnackbarStatus(false)
    }, 3000);
  }

  return (
    <div>
      <Head />
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 bg-gray-50">

        <div className="my-2">
          <ScrollStockList
            stockList={seriesOptions}
          // setStockList={setStockList}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10">

        <div className="flex flex-grow md:space-x-10">
          <div className="w-full md:w-2/3"> {/* left section desktop */}
            <div className="flex flex-col space-y-2 max-w-full">

              <div className="flex justify-between md:justify-start">
                <div className="hidden md:flex md:flex-grow w-full md:w-1/2"> {/**  hidden on mobile */}
                  <SearchInput
                    text={"Stocks Screener"}
                    placeholder={"Search symbol or stock name"}
                    icon={<AiOutlineSearch color="white" />}
                  />
                </div>
                <div className="w-full md:w-1/4">
                  <Button
                    buttonClassName={"w-full border border-turqoise-110"}
                    textClassName="flex flex-grow justify-center text-turqoise-110"
                    text={"My Watchlist"}
                    withIcon
                    iconLeft={<AiOutlineUnorderedList />}>
                  </Button>
                </div>
                <div className="mx-2"></div>
                <div className="w-full md:w-1/4">
                  <Button
                    buttonClassName={"w-full border border-gray-500"}
                    textClassName="flex flex-grow justify-center"
                    text={"Stocks Screener"}
                    withIcon
                    iconLeft={<FiFilter />}
                  />
                </div>
              </div>
              <div className="flex md:hidden justify-start"> {/**  hidden on desktop */}
                <SearchInput
                  text={"Stocks Screener"}
                  placeholder={"Search symbol or stock name"}
                  icon={<AiOutlineSearch color="white" />}
                />
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

      <Accordion headerText="Ranking">
        <RankingStockList
          stockList={seriesOptions}
        // setStockList={setStockList}
        />
      </Accordion>

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

      {/* <Button
        text={"Toggle Snackbar"}
        handleClick={handleClickSnackbar}
      />
      <div className="container mx-auto flex justify-center items-center">
        <Snackbar
          state={snackbarStatus}
          message={"Toggle Snackbar"}
        />
      </div> */}
      <div className="container mx-auto bg-black-100">
        <Footer />
      </div>
    </div>
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