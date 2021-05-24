import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Checkbox from "../../elements/Checkbox/Checkbox"

import styles from '../ChartMain/ChartMain.module.css'

const ChartCandlestick = ({ data }) => {

    const [isGuiEnabled, setGuiEnabled] = useState(false);
    const options = {
        chart: {
            type: 'candlestick',
            height: 400
        },
        title: {
            text: 'AAPL Candle Stick'
        },
        mapNavigation: {
            enableMouseWheelZoom: true
        },
        xAxis: {
            gridLineWidth: 0,
        },
        yAxis: {
            gridLineWidth: 0,
            crosshair: {
                label: {
                    enabled: true,
                    padding: 8
                }
            },
            dataLabels: {
                enabled: true
            }
        },
        series: [
            {
                data: data,
            }
        ],
        stockTools: {
            gui: {
                buttons: ['indicators', 'simpleShapes', 'lines', 'crookedLines', 'measure', 'advanced', 'toggleAnnotations', 'verticalLabels', 'flags', 'fullScreen'],
                enabled: isGuiEnabled,
                toolbarClassName: styles.toolsContainer
            }
        },
        plotOptions: {
            candlestick: {
                color: "#C32A5D",
                lineColor: "C32A5D",
                upColor: "#14B162",
                upLineColor: "#14B162"
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
            selected: 3,
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

    return (
        <div>
            <h3>Stock Chart</h3>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            <div className="flex justify-endflex justify-start md:justify-end">
                <Checkbox
                    title="GUI"
                    handleClick={(e) => setGuiEnabled(e.target.checked)}
                    checked={isGuiEnabled}
                    titleClassName={"ml-2"}
                />
            </div>
        </div>
    )
}

export default ChartCandlestick