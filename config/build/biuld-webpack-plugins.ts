import htmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';
import { BuildOptions } from './types/webpack-types';

export default function buildWebpackPlugins(
  options: BuildOptions
): Configuration['plugins'] {
  const isProd = options.mode === 'production';

  return [
    isProd && new MiniCssExtractPlugin(),
    isProd &&
      new htmlWebpackPlugin({
        template: options.paths.html,
        title: options.mode,
      }),
  ];
}
