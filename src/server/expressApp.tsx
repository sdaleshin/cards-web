import express from 'express'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom/server'
import { App } from '../app/app'
import { initializeStore } from '../app/redux/store'
import { Provider } from 'react-redux'
import { renderPage } from './renderPage'
import cookieParser from 'cookie-parser'
import { setJwtTokenAndRefreshToken } from '../app/redux/auth/auth.slice'
import {
    AUTH_TOKEN_COOKIE_NAME,
    REFRESH_TOKEN_COOKIE_NAME,
} from '../app/utils/constants'

const app = express()
app.use(cookieParser())

app.use(express.static('./build/client'))

app.get('*', (req, res) => {
    const store = initializeStore()
    if (req.cookies[AUTH_TOKEN_COOKIE_NAME]) {
        store.dispatch(
            setJwtTokenAndRefreshToken({
                token: req.cookies[AUTH_TOKEN_COOKIE_NAME],
                refreshToken: req.cookies[REFRESH_TOKEN_COOKIE_NAME],
            }),
        )
    }
    const sheet = new ServerStyleSheet()
    const appString = renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url}>
                <Provider store={store}>
                    <App />
                </Provider>
            </StaticRouter>,
        ),
    )
    const styleTags = sheet.getStyleTags()
    const markup = renderPage(
        appString,
        styleTags,
        JSON.stringify(store.getState()),
    )
    res.write('<!DOCTYPE html>')
    res.write(markup)
    res.end()
})

export default app
