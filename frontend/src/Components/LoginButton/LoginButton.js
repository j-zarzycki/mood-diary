import style from "../LoginButton/LoginButton.module.css";

const LoginButton = (props) => {
  return (
    <div>
      <input
        value={props.buttonTitle}
        className={style.loginButton}
        onClick={props.onClick}
        type="submit"
      />
    </div>
  );
};

export default LoginButton;
