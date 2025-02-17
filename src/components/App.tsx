import { useState } from 'react';
import classes from './App.module.less';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.redder} onClick={increment}>
        Click
      </button>
    </div>
  );
};