import { useState } from 'react';
import classes from './App.module.less';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.redder} onClick={increment}>
        Click it
      </button>
      <div className={classes.linkwrapper}>
        <Link to={'/about'}>About2</Link>
        <Link to={'/shop'}>Shop</Link>
      </div>
      <Outlet />
    </div>
  );
};