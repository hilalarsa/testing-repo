import Head from 'next/head'

export default function Header() {
    return (
        <Head>
            <title>Edge Invest</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/stocktools/gui.css" />
            <link rel="stylesheet" type="text/css" href="https://code.highcharts.com/css/annotations/popup.css" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        </Head>
    )
}