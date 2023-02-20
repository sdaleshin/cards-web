export const renderPage = (
    appString: string,
    styleTags: string,
    initialState: string,
) => {
    return `<html>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                ${styleTags}
            </head>
            <body>
                <div id="root">${appString}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${initialState};
                </script>
                <script src="/cards-client.js"></script>
                <script src="https://accounts.google.com/gsi/client"></script>
            </body>
        </html>
    `
}
