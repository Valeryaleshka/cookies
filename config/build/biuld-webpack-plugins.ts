import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BuildOptions } from './types/webpack-types';

export default function buildWebpackPlugins(
  options: BuildOptions,
): Configuration['plugins'] {
  const isProd = options.mode === 'production';

  return [
    isProd && new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      },
    ),
    new HtmlWebpackPlugin({
      template: options.paths.html,
      title: options.mode,
    }),
  ];
}
