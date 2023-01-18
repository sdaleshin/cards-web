import webpack from 'webpack'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { TargetType } from '../types'

export const getCssRule = (target: TargetType): webpack.RuleSetRule => {
    const loaders: webpack.RuleSetRule[] = []

    if (target === 'client') {
        loaders.push({
            loader: MiniCssExtractPlugin.loader,
        })
    }

    return {
        test: /\.(sa|sc|c)ss$/i,
        use: loaders.concat([
            { loader: 'css-modules-typescript-loader' },
            {
                loader: 'css-loader',
                options: {
                    modules:
                        target === 'client'
                            ? true
                            : {
                                  exportOnlyLocals: true,
                              },
                    importLoaders: 1,
                },
            },
            { loader: 'sass-loader' },
        ]),
    }
}
