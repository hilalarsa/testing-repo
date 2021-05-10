
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { AiOutlineArrowDown } from 'react-icons/ai';

const ChartMini = ({ data }) => {

    const optionsMiniChart = {
        chart: {
            type: 'spline',
            plotBorderWidth: null,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            plotShadow: false,
            borderWidth: 0,
            plotBorderWidth: 0,
            marginRight: 0,
            width: 70,
            height: 40,
            backgroundColor: 'transparent',
        },
        xAxis: {
            enabled: false,
            showEmpty: false,
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            showEmpty: false,
            enabled: false
        },
        series: [{
            marker: {
                enabled: false
            },
            color: {
                linearGradient: [0, 0, 0, 100],
                stops: [
                    [0, "#fcc203"],
                    [1, "#00b072"]
                ]
            },
            animation: false,
            name: '',
            allowPointSelect: true,
            data: [Math.random() * 10, Math.random() * 10, Math.random() * 10]
        }],
        stockTools: {
            gui: {
                enabled: false,
            }
        },
        tooltip: {
            enabled: false
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            line: {
                lineWidth: 1.5,
            },
            showInLegend: false,
            tooltip: {}
        },
    }
    return (
        <div>
            <h3>Mini Chart</h3>
            <div className="m-2 p-1 w-50 hover:bg-yellow-100">
                <div className="my-3">
                    <div className="flex justify-between">
                        <div className="font-bold text-yellow-500">D05</div>
                        <div >SGD</div>
                    </div>
                    <div className="flex justify-between">
                        <div>DBS GROUP HOLDINGS</div>
                        <div className="font-bold">25.180</div>
                    </div>
                </div>
                <div className="my-3 flex justify-between">
                    <div className="flex">
                        <div className="flex text-red-500 text-xl mr-2">
                            <AiOutlineArrowDown color="red" className="m-2" />
                            3.8 %
                        </div>
                        <div className="flex ml-2">0.990</div>
                    </div>
                    <div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={optionsMiniChart}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ChartMini