import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/webpack-types';

export default function buildWebpackLoaders(
  options: BuildOptions
): ModuleOptions['rules'] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.less$/i,
      use: [
        {
          loader:
            options.mode === 'development'
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader', // Translates CSS into CommonJS
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
  ];
}
