import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'
import { IEnvirement } from '../../webpack.config'
import buildWebpackPlugins from './biuld-webpack-plugins'
import buildWebpackDevServer from './build-webpack-dev-server'
import buildWebpackLoaders from './build-webpack-loaders'

export default function buildWebpackConfig(
  env: IEnvirement,
  dirName: string
): webpack.Configuration {
  const isDev = env.mode === 'development'
  const isProd = env.mode === 'production'

  return {
    mode: env.mode,
    entry: path.resolve(dirName, 'src', 'index.tsx'),
    output: {
      path: path.resolve(dirName, 'build'),
      filename: '[name].[fullhash].js',
      chunkFilename: 'chunk.[fullhash].js',
      clean: true,
    },
    devServer: buildWebpackDevServer(isDev),
    optimization: {
      runtimeChunk: 'single',
    },
    plugins: buildWebpackPlugins(isProd, env.mode, dirName),
    module: {
      rules: buildWebpackLoaders(isDev),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev && 'inline-source-map',
  }
}
