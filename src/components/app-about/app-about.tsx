import classes from './app-about.module.less';
import jpg from '@/assets/images/jpeg.jpg';

const TODO = (a: number) => {
  return a.toString();
};

const AppAbout = () => {


  return (
    <div className={classes.aboutheader}>
      lorem ipsum dolor sit amet4545asdas
      <img src={jpg} alt="svg" />
    </div>
  );
};

export default AppAbout;