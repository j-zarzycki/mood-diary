import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Register.module.css";
import Logo from "../../Components/Logo/Logo";
import Image from "../../Components/Logo/Image";
import RegisterWrapper from "./RegisterWrapper";
import InputField from "../../Components/InputField/InputField";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import LoginButton from "../../Components/LoginButton/LoginButton";

const Register = (props) => {
  const navigate = useNavigate();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [inputValidation, setInputValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const signUp = () => {
    let firstName = firstNameInput.current.value;
    let lastName = lastNameInput.current.value;
    let email = emailInput.current.value;
    let password = passwordInput.current.value;

    axios.post("http://localhost:8000/api/v1/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    navigate('/logowanie');
  };

  const registerHandler = (e) => {
    e.preventDefault();
    let firstName = firstNameInput.current.value;
    let lastName = lastNameInput.current.value;
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    // console.log("FIRSTNAME = ", firstName);
    // console.log("LASTNAME = ", lastName);
    // console.log("EMAIL = ", email);
    // console.log("PASSWORD = ", password);

    if (!firstName || firstName.length <= 5) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          firstName:
            "First name cannot be empty and and have to be at least 5 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, firstName: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, firstName: true };
      });
    }

    if (!lastName || lastName.length <= 5) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          lastName:
            "Last name cannot be empty and and have to be at least 5 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, lastName: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, lastName: true };
      });
    }

    if (!email.includes("@")) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          email: "Email has to contain @ and .",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, email: false };
      });
    }

    if (!email || email.length <= 5) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          email:
            "Email cannot be empty and and have to be at least 5 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, email: false };
      });
    }

    if (!password || password.length <= 5) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          password:
            "Password cannot be empty and and have to be at least 5 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, password: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, password: true };
      });
    }

    if (email && email.includes("@") && email.includes(".")) {
      setInputValidation((prevState) => {
        return { ...prevState, email: true };
      });
    }

    if (
      inputValidation.firstName &&
      inputValidation.lastName &&
      inputValidation.email &&
      inputValidation.password
    ) {
      signUp();
    }
  };

  return (
    <div className={style.container}>
      <RegisterWrapper>
        <Logo logo="Feelings Diary" />
        <Image />
        <form onSubmit={registerHandler}>
          <InputField
            inputType="text"
            inputPlaceholder="Enter first name"
            inputRef={firstNameInput}
          />
          <ErrorMessage
            isValid={inputValidation.firstName}
            message={errorMessage.firstName}
          />
          <InputField
            inputType="text"
            inputPlaceholder="Enter last name"
            inputRef={lastNameInput}
          />
          <ErrorMessage
            isValid={inputValidation.lastName}
            message={errorMessage.lastName}
          />
          <InputField
            inputType="text"
            inputPlaceholder="Enter email"
            inputRef={emailInput}
          />
          <ErrorMessage
            isValid={inputValidation.email}
            message={errorMessage.email}
          />
          <InputField
            inputType="password"
            inputPlaceholder="Enter password"
            inputRef={passwordInput}
          />
          <ErrorMessage
            isValid={inputValidation.password}
            message={errorMessage.password}
          />
          <LoginButton />
        </form>
      </RegisterWrapper>
    </div>
  );
};

export default Register;
