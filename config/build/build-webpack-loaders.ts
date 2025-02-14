import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'

export default function buildWebpackLoaders(
  isDev: boolean
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
          loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        },
        {
          loader: 'css-loader',
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
  ]
}
