import style from "./LoginWrapper.module.css";

const LoginWrapper = (props) => {
  return (
    <div className={style.container}>
      {props.children}
    </div>
  );
};

export default LoginWrapper;
