import { getClientConfig, getServerConfig } from './src/webpack'

export default (env: any) => {
    return [getServerConfig, getClientConfig].map((getConfig) =>
        getConfig(__dirname, env.mode),
    )
}
