import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/webpack-types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildWebpackLoaders(
  options: BuildOptions,
): ModuleOptions['rules'] {
  console.log(options);
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
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
        'sass-loader',
      ],
    },
  ];
}
