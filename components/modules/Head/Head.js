import Head from 'next/head'

export default function Header() {
    return (
        <Head>
            <title>Edge Invest</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/stocktools/gui.css" />
            <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/annotations/popup.css" />
        </Head>
    )
}