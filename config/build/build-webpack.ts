import webpack from 'webpack';
import 'webpack-dev-server';
import buildWebpackPlugins from './biuld-webpack-plugins';
import buildWebpackDevServer from './build-webpack-dev-server';
import buildWebpackLoaders from './build-webpack-loaders';
import { BuildOptions } from './types/webpack-types';

export default function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {

  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      path: options.paths.output,
      clean: true,
    },
    devServer: buildWebpackDevServer(options),
    optimization: {
      runtimeChunk: 'single',
    },
    plugins: buildWebpackPlugins(options),
    module: {
      rules: buildWebpackLoaders(options),
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': options.alias,
      },
    },
  };
}
