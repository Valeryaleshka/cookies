export type EnvirementMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  favicon: string;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: EnvirementMode;
  port?: number;
  alias: string;
}
