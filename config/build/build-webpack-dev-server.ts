import { Configuration } from 'webpack-dev-server'

export default function buildWebpackDevServer(
  isDev: boolean
): Configuration | undefined {
  return isDev
    ? {
        port: 3001,
        static: './build',
      }
    : undefined
}
