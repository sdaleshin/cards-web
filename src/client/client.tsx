import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../app/app'
import { BrowserRouter } from 'react-router-dom'
import { getStore } from '../app/redux/store'
import { Provider } from 'react-redux'

ReactDOM.hydrate(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={getStore(window.__PRELOADED_STATE__)}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
)
