import React, { useState, useEffect } from "react";
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

import Checkbox from "../../elements/Checkbox"

import styles from '../ChartMain/ChartMain.module.css'

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
const ChartCandlestick = ({ data }) => {
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
        yAxis: {
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
                enabled: true,
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
                },
                states: {
                    select: {
                        color: '#15A9A9',
                        style: {
                            color: '#15A9A9',
                            fontWeight: 400
                        }
                    }
                }
            },
            buttons: [{
                type: 'week',
                count: 1,
                text: '1W'
            }, {
                type: 'month',
                count: 1,
                text: '1M'
            }, {
                type: 'month',
                count: 6,
                text: '6M'
            }, {
                type: 'year',
                count: 1,
                text: '1Y'
            }, {
                type: 'year',
                count: 3,
                text: '3Y'
            }, {
                type: 'year',
                count: 5,
                text: '5Y'
            }, {
                type: 'all',
                text: 'All'
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

    return (
        <div>
            <h3>Stock Chart</h3>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            <hr />
        </div>
    )
}

export default ChartCandlestick