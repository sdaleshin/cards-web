import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../app/app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from './getClientStore'

ReactDOM.hydrate(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={getClientStore(window.__PRELOADED_STATE__)}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
