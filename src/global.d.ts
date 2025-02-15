declare module '*.module.less' {
  interface IClassNames {
    [className: string]: string;
  }

  const className: IClassNames;
  export = className;
}