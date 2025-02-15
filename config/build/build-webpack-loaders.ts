import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/webpack-types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildWebpackLoaders(
  options: BuildOptions,
): ModuleOptions['rules'] {
  const isDevMode = options.mode === 'development';
  console.log(options);
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
            isDevMode
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader', // Translates CSS into CommonJS
          options: {
            sourceMap: true,
            modules: {
              auto: true, // Enable CSS modules for files matching `/\.module\.\w+$/i`
              localIdentName: '[path][name]_class_[local]',
            },
          },
        },
        'less-loader',
      ],
    },
  ];
}
