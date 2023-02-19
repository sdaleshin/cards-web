import express from 'express'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from '../app/app'

const app = express()

app.use(express.static('./build/client'))

app.get('*', (req, res) => {
    const sheet = new ServerStyleSheet()
    const appString = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()
    let markup = renderToStaticMarkup(
        <html>
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
                <link href="STYLED_COMPONENTS_TAG" />
            </head>
            <body>
                <div
                    id="root"
                    dangerouslySetInnerHTML={{ __html: appString }}
                />
                <script src="/cards-client.js" />
                <script src="https://accounts.google.com/gsi/client"></script>
            </body>
        </html>,
    )

    markup = markup.replace(`<link href="STYLED_COMPONENTS_TAG"/>`, styleTags)

    res.write('<!DOCTYPE html>')
    res.write(markup)
    res.end()
})

export default app
