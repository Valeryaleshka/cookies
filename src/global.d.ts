declare module '*.module.less' {
  interface IClassNames {
    [className: string]: string;
  }

  const className: IClassNames;
  export = className;
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';