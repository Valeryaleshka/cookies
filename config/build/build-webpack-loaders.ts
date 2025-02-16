import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/webpack-types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ReactRefreshTypeScript from 'react-refresh-typescript';

export default function buildWebpackLoaders(
  options: BuildOptions,
): ModuleOptions['rules'] {
  const isDevMode = options.mode === 'development';

  return [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({
              before: [isDevMode && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDevMode,
          },
        },
      ],
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
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ];
}
