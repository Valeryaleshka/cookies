import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/webpack-types';

export default function buildWebpackDevServer(
  options: BuildOptions,
): Configuration | undefined {
  return options.mode === 'development'
    ? {
      port: options.port ?? 3000,
      static: './build',
      historyApiFallback: true,
      hot: true,
    }
    : undefined;
}
