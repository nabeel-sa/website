import '../styles/globals.css';
import React from 'react';
const RootLayout = ({children}) => (
    <html lang="en">
    <head>
        <meta name="author" content="Nabeel Sarhan"/>
        <meta name="description" content="Nabeel's website and blog for web development and sharing knowledge"/>
        <meta name="keywords" content="personal website, Nabeel, Nabeel Sarhan, web development, excel, templates"/>
        <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
        <meta name="robots" content="index, follow"/>
        <link rel="stylesheet" type="text/css" href="{/globals.css}"/>
        <title>Nabeel's Website</title>
        <link rel="icon" href="/favicon.ico"/>
    </head>
    <body>{children}</body>
    </html>);
export default RootLayout;
