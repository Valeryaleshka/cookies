import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/webpack-types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildWebpackLoaders(
  options: BuildOptions,
): ModuleOptions['rules'] {
  const isDevMode = options.mode === 'development';

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
          loader: isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: isDevMode ? '[path][name]_class_[local]' : '[hash:base64:8]',
            },
          },
        },
        'less-loader',
      ],
    },
  ];
}
