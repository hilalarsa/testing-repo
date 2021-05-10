import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";

import Head from "../components/modules/Head/Head.js"

import ChartMain from "../components/modules/ChartMain/ChartMain.js"
import ChartVerticalBar from "../components/modules/ChartVerticalBar/ChartVerticalBar.js"
import ChartMini from "../components/modules/ChartMini/ChartMini.js"
import ChartCandlestick from "../components/modules/ChartCandlestick/ChartCandlestick.js"

import dataLine from "./api/data/line"
import dataCandle from "./api/data/candle"

// export default function Home({ dataLine, dataCandle}) { // disabled for dummy data
export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head />

      {/* <main className={styles.main}> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">

            <ChartMain data={dataLine} />

            <ChartCandlestick data={dataCandle} />

            <ChartMini data={dataLine} /> 

            <ChartVerticalBar data={[1, -2, 3, -4, 5, -6]} category={"A", "B", "C", "D", "E", "F"} />

            {/* <CompareChart /> */}

          </div>
        </div>
      </div>
      {/* </main> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
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