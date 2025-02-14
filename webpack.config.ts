import 'webpack-dev-server'
import buildWebpackConfig from './config/build/build-webpack'

export type EnvirementMode = 'production' | 'development'

export interface IEnvirement {
  mode: EnvirementMode
}

export default (env: IEnvirement) => {
  return buildWebpackConfig(env, __dirname)
}
