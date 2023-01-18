import * as webpack from 'webpack'
import * as path from 'path'
import { getBaseConfig } from './getBaseConfig'
import * as nodeExternals from 'webpack-node-externals'
import { ModeType } from './types'
import { getTsRule } from './rules/getTsRule'
import { getCssRule } from './rules/getCssRule'

export const getServerConfig = (
    configDirName: string,
    mode: ModeType,
): webpack.Configuration => {
    const baseConfig = getBaseConfig(mode)
    return {
        ...baseConfig,
        entry: ['webpack/hot/poll?1000', './src/server/server.tsx'],
        output: {
            filename: 'cards-server.js',
            path: path.resolve(configDirName, 'build', 'server'),
        },
        module: {
            rules: [getCssRule('server'), getTsRule()],
        },
        target: 'node',
        externalsPresets: {
            node: true,
        },
        externals: [nodeExternals({ allowlist: ['webpack/hot/poll?1000'] })],
        plugins: [new webpack.HotModuleReplacementPlugin()],
    }
}
