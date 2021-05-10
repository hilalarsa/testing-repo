import React, { useState, useEffect, useRef } from "react";

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

import styles from './ChartMain.module.css'

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
const ChartMain = ({ data, chartType = "" }) => {
    
    const chartMain = useRef() //create chart reference
    const [indicatorMA, setIndicatorMA] = useState(false);
    const [isGuiEnabled, setGuiEnabled] = useState(false);
    let options = {
        chart: {
            type: chartType,
            height: 400
        },
        title: {
            text: 'AAPL Line Chart'
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
            }
        },
        series: [
            {
                marker: {
                    enabled: false,
                },
                id: "aapl",
                name: "aapl",
                data,
                color: {
                    linearGradient: [1200, 0, 0, 0],
                    stops: [
                        [0, "#00b072"],
                        [1, "#fcc203"]
                    ]
                },
            },

        ],
        stockTools: {
            gui: {
                buttons: ['indicators', 'simpleShapes', 'lines', 'crookedLines', 'measure', 'advanced', 'toggleAnnotations', 'verticalLabels', 'flags', 'fullScreen'],
                enabled: isGuiEnabled,
                toolbarClassName: styles.toolsContainer
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

    useEffect(() => {
        if (indicatorMA) {
            chartMain.current.chart.addSeries({
                type: 'sma',
                linkedTo: 'aapl',
                color: 'red',
                marker: {
                    enabled: false
                }
            })
        }
    })

    return (
        <div>
            <h3>Main Chart</h3>
            <HighchartsReact
                ref={chartMain}
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            <div className="flex justify-end">
                <Checkbox
                    title="Toggle MA Indicators"
                    handleClick={(v) => setIndicatorMA(v)}
                    checked={indicatorMA}
                    titleClassName={"ml-2"}
                />
                <Checkbox
                    title="Toggle GUI"
                    handleClick={(v) => setGuiEnabled(v)}
                    checked={isGuiEnabled}
                    titleClassName={"ml-2"}
                />
            </div>
        </div>
    )
}

export default ChartMain