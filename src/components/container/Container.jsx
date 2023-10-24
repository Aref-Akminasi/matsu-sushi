import classes from './Container.module.css';

const Container = (props) => {
  const classList = `${classes.container} ${props.className}`;
  return <div className={classList}>{props.children}</div>;
};

export default Container;
