import express from 'express'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from '../app/app'

const app = express()

app.use(express.static('./build/client'))

app.get('*', (req, res) => {
    const appString = renderToString(<App />)

    res.write('<!DOCTYPE html>')
    res.write(
        renderToStaticMarkup(
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
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/cards-style.css"
                    />
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
        ),
    )
    res.end()
})

export default app
