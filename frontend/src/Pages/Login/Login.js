import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import style from "../Login/Login.module.css";
import InputField from "../../Components/InputField/InputField";
import LoginWrapper from "../Login/LoginWrapper";
import LoginButton from "../../Components/LoginButton/LoginButton";
import Logo from "../../Components/Logo/Logo";
import Image from "../../Components/Logo/Image";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import AuthContext from "../../Context/auth-context";

const Login = (props) => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ email: "", password: "" });
  const [token, setToken] = useState();
  const emailInput = useRef();
  const passwordInput = useRef();
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      let response = await axios.post("http://localhost:8000/api/v1/login", {
        email: "" + emailInput.current.value,
        password: "" + passwordInput.current.value,
      });
      setToken(response.data.token);
      if (token) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("email", emailInput.current.value);
        ctx.onLogin();
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const validateForm = (e) => {
    let email = emailInput.current.value;
    let password = passwordInput.current.value;

    if (!email) {
      setEmailValidation(false);
      setErrorMessage((prevState) => {
        return { ...prevState, email: "Email is empty" };
      });
    }

    if (!password) {
      setPasswordValidation(false);
      setErrorMessage((prevState) => {
        return { ...prevState, password: "Password is empty" };
      });
    }

    if (password && password.length < 8) {
      setPasswordValidation(false);
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          password: "Password has to be min. 8 chars long",
        };
      });
    }

    if (email && !email.includes("@")) {
      setEmailValidation(false);
      setErrorMessage((prevState) => {
        return { ...prevState, email: "Email has to contain @" };
      });
    }

    if (email && email.includes("@")) {
      setEmailValidation(true);
    }

    if (password && password.length >= 8) {
      setPasswordValidation(true);
    }

    if (emailValidation && passwordValidation) {
      console.log("SIGN IN");
      console.log("EMAIL", email);
      console.log("PASSWORD", password);
      signIn();
    }
    e.preventDefault();
  };

  return (
    <div className={style.wrapper}>
      
      <form onSubmit={validateForm}>
        <LoginWrapper>
        <Logo logo="Feelings Diary" />
        <Image />
          <InputField
            inputType="text"
            inputName="login"
            inputPlaceholder="Email"
            inputRef={emailInput}
            value={emailInput}
          />
          <ErrorMessage
            isValid={emailValidation}
            message={errorMessage.email}
          />
          <InputField
            inputType="password"
            inputName="password"
            inputPlaceholder="Password"
            inputRef={passwordInput}
            value={passwordInput}
          />
          <ErrorMessage
            isValid={passwordValidation}
            message={errorMessage.password}
          />
          <p className={style.signUp} onClick={() => {navigate('/rejestracja')}}>Sign Up!</p>
          <LoginButton buttonTitle="Sing In" />
        </LoginWrapper>
      </form>
    </div>
  );
};

export default Login;
