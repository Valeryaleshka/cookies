import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import htmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import { EnvirementMode } from '../../webpack.config'
import { Configuration } from 'webpack'

export default function buildWebpackPlugins(
  isProd: boolean,
  mode: EnvirementMode,
  dirName: string
): Configuration['plugins'] {
  return [
    isProd && new MiniCssExtractPlugin(),
    isProd &&
      new htmlWebpackPlugin({
        template: path.resolve(dirName, 'public', 'index.html'),
        title: mode,
      }),
  ]
}
