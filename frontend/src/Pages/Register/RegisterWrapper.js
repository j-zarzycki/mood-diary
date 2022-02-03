import style from './RegisterWrapper.module.css';

const RegisterWrapper = (props) => {
  return <div className={style.registerWrapper}>{props.children}</div>;
};

export default RegisterWrapper;
