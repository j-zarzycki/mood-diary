import style from '../LoginButton/LoginButton.module.css';

const LoginButton = (props) => {
  return (
    <button className={style.loginButton}>
      <div className={style.buttonContext}>
        {props.buttonTitle}
        <span class="material-icons md-18">navigate_next</span>
      </div>
    </button>
  );
};

export default LoginButton;
