import style from './CardWrapper.module.css';

const CardWrapper = (props) => {
  return <div className={style.wrapper}>{props.children}</div>;
};

export default CardWrapper;
