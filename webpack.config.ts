import 'webpack-dev-server';
import buildWebpackConfig from './config/build/build-webpack';
import { BuildOptions, EnvirementMode } from './config/build/types/webpack-types';
import path from 'path';

export interface IEnvirement {
  mode: EnvirementMode;
}

export default (env: IEnvirement) => {
  const options: BuildOptions = {
    mode: env.mode,
    alias: path.resolve(__dirname, 'src'),
    port: 3001,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    },
  };

  return buildWebpackConfig(options);
}
