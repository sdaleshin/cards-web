import http from 'http'
import app from './expressApp'

const server = http.createServer(app)
let currentApp = app
server.listen(3000)

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./expressApp', () => {
        const app = require('./expressApp').default
        server.removeListener('request', currentApp)
        server.on('request', app)
        currentApp = app
    })
}
