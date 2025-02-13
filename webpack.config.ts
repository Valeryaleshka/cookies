import path from 'path';
import webpack from 'webpack';
import htmlWebpackPlugin from 'html-webpack-plugin';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

export interface IEnvirement {
  mode: 'production' | 'development';
}

export default (env: IEnvirement) => {
      const config: webpack.Configuration = {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
          path: path.resolve(__dirname, 'build'),
          filename: '[name].[fullhash].js',
           clean: true,
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          extensions: [ '.tsx', '.ts', '.js' ],
        },  
        devtool: env.mode === 'development' ? 'inline-source-map' : undefined,
        plugins: [
          new htmlWebpackPlugin(
            {
              template: path.resolve(__dirname, 'public', 'index.html'),
              title: env.mode,
            }
          ),
        ],
      }
      return config;
  }