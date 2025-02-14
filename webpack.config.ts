import path from 'path'
import webpack from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import 'webpack-dev-server'

export interface IEnvirement {
    mode: 'production' | 'development'
}

export default (env: IEnvirement) => {
    const isDev = env.mode === 'development'
    const config: webpack.Configuration = {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[fullhash].js',
            clean: true,
        },
        devServer: isDev
            ? {
                  port: 3001,
                  static: './build',
              }
            : undefined,
        optimization: {
            runtimeChunk: 'single',
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new htmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                title: env.mode,
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.less$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    strictMath: true,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
    }
    return config
}
