import '../styles/globals.css';

const RootLayout = ({children}) => (
    <html lang="en">
    <head>
        <link rel="preconnect" href="https://stijndv.com"/>
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css"/>
        <meta name="author" content="Nabeel Sarhan"/>
        <meta name="description" content="Nabeel's website and blog for web development and sharing knowledge"/>
        <meta name="keywords"
              content="personal website, Nabeel, Nabeel Sarhan, web development, sharing knowledge, excel, templates, free templates"/>
        <meta httpEquiv="X-UA-Compatible" content="IE-edge"/>
        <meta name="robots" content="index, follow"/>
        <meta charSet="UTF-8"/>
    </head>
    <body>{children}</body>
    </html>
);
export default RootLayout;