import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Checkbox from "../../elements/Checkbox/Checkbox"

import StockList from "../StockList/ScrollStockList"
import dataLine2 from "../../../pages/api/data/line2"


const COMPARE_LIMIT_MIN = 2
const COMPARE_LIMIT_MAX = 5
const ChartCompare = ({ data }) => {

    const chartRef = useRef() //create chart reference
    const [seriesOptions, setSeriesOptions] = useState([
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
        }
    ])

    const options = {
        chart: {
            type: 'spline',
            height: 400,
        },
        title: {
            text: 'Compare Line Chart'
        },
        mapNavigation: {
            enableMouseWheelZoom: true
        },
        xAxis: {
            gridLineWidth: 0
        },
        yAxis: {
            gridLineWidth: 0,
            crosshair: {
                label: {
                    enabled: true,
                    padding: 8
                }
            },
        },
        series: seriesOptions,
        // series: [
        //     {
        //         marker: {
        //             enabled: false,
        //         },
        //         name: "aapl",
        //         data: dataLine2,
        //         color: {
        //             linearGradient: [1200, 0, 0, 0],
        //             stops: [
        //                 [0, "#00b072"],
        //                 [1, "#fcc203"]
        //             ]
        //         },
        //     },

        // ],
        stockTools: {
            gui: {
                buttons: ['indicators', 'simpleShapes', 'lines', 'crookedLines', 'measure', 'advanced', 'toggleAnnotations', 'verticalLabels', 'flags', 'fullScreen'],
                enabled: false,
                // toolbarClassName: styles.toolsContainer
            }
        },
        plotOptions: {
            series: {
                compare: 'percent'
            }
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        rangeSelector: {
            allButtonsEnabled: true,
            verticalAlign: 'top',
            buttonPosition: {
                align: 'right'
            },
            inputPosition: {
                align: 'left'
            },
            enabled: true,
            buttonTheme: { // styles for the buttons
                padding: 3,
                style: {
                    color: '#5C5C5C',
                    fill: "#ACDB45"
                },
                states: {
                    select: {
                        fill: "#EBF7F7",
                        color: '#15A9A9',
                        style: {
                            color: '#15A9A9',
                            fontWeight: 400
                        }
                    }
                }
            },
            buttons: [{
                type: 'day',
                count: 20,
                text: '1D',
                dataGrouping: {
                    forced: true,
                    units: [['day', [1]]]
                }
            }, {
                type: 'week',
                count: 20,
                text: '1W',
                dataGrouping: {
                    forced: true,
                    units: [['week', [1]]]
                }
            }, {
                type: 'month',
                count: 20,
                text: '1M',
                dataGrouping: {
                    forced: true,
                    units: [['month', [1]]]
                }
            }, {
                type: 'month',
                count: 20,
                text: '6M',
                dataGrouping: {
                    forced: true,
                    units: [['month', [6]]]
                }
            }, {
                type: 'year',
                count: 10,
                text: '1Y',
                dataGrouping: {
                    forced: true,
                    units: [['year', [1]]]
                }
            }],
            selected: 3
        },
        responsive: {
            rules: [{
                condition: {
                    minWidth: 768 //for md above
                },
                chartOptions: {
                    chart: {
                        height: 600
                    },
                    rangeSelector: {
                        inputEnabled: false
                    },
                }
            }]
        }
    };

    const defaultStockList = [
        {
            id: "C6L",
            name: "Singapore Tech",
            color: "blue"
        },
        {
            id: "D89",
            name: "Singapore Tele",
            color: "purple"
        },
        {
            id: "S65",
            name: "Singapore Transport",
            color: "pink"
        },
        {
            id: "Z74",
            name: "Wilmar Ltd.",
            color: "blue"
        },
        {
            id: "M45",
            name: "Singapore Company Ltd.",
            color: "green"
        },
        {
            id: "M45",
            name: "Singapore Company Ltd.",
            color: "green"
        },
        {
            id: "M45",
            name: "Singapore Company Ltd.",
            color: "green"
        },
    ]

    const [stockList, setStockList] = useState(defaultStockList)

    useEffect(() => {
        console.log("series: ", seriesOptions);
    }, [seriesOptions]);

    const handleAddSeries = () => {
        let updatedValue = {
            id: "C12"+parseInt(Math.random() * 10),
            color: "red",
            name: "AAPL"+parseInt(Math.random() * 10),
            data: [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10],
        }
        if (seriesOptions.length < COMPARE_LIMIT_MAX) {
            setSeriesOptions(prevState => {
                return [...prevState, updatedValue]
            })
        }
    }

    const handleRemoveSeries = () => {
        if (seriesOptions.length > COMPARE_LIMIT_MIN) {
            setSeriesOptions(prevState => {
                return prevState.slice(0, -1)
            })
        }
    }

    return (
        <div>
            <h3>Compare Chart</h3>
            <div>
                <HighchartsReact
                    ref={chartRef}
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            </div>
            <div className="my-2">
                <StockList
                    stockList={seriesOptions}
                    withAddStock
                    // setStockList={setStockList}
                />
            </div>
            <button className={`p-2 bg-green-500 text-white outline-gray`} onClick={handleAddSeries}>Add Series</button>
            <button className={`p-2 bg-red-500 text-white outline-gray`} onClick={handleRemoveSeries}>Remove Latest Series</button>
        </div>
    )
}

export default ChartCompare