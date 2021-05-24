import React, { useState, useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import Checkbox from "../../elements/Checkbox/Checkbox"

import styles from './ChartMain.module.css'

const ChartMain = ({ data }) => {

    const chartRef = useRef() //create chart reference
    const [indicatorMA, setIndicatorMA] = useState(false);
    const [isGuiEnabled, setGuiEnabled] = useState(false);
    let options = {
        chart: {
            type: "spline",
            height: 400,
        },
        title: {
            text: 'AAPL Line Chart'
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

    useEffect(() => {
        if (indicatorMA) {
            chartRef.current.chart.addSeries({
                type: 'sma',
                linkedTo: 'aapl',
                color: 'red',
                marker: {
                    enabled: false
                }
            })
        }
    }, [indicatorMA])

    return (
        <div>
            <HighchartsReact
                ref={chartRef}
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            <div className="flex justify-start space-x-2 md:justify-end">
                <Checkbox
                    title="MA Indicators"
                    handleClick={(e) => setIndicatorMA(e.target.checked)}
                    checked={indicatorMA}
                    titleClassName={"ml-2"}
                />
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

export default ChartMain