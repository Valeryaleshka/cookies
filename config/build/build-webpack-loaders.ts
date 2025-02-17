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
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            [
              '@babel/preset-react',
              {
                'runtime': 'automatic',
              },
            ],
          ],
        },
      },
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
