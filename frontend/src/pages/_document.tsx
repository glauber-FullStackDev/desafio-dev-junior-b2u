import React from 'react'

import Document, {Html, Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin/>
                  <link rel="shortcut icon" href="logoMin.png" />
                  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&display=swap" rel="stylesheet"/>
                  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"></link>
                  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin/>
                  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600&family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}