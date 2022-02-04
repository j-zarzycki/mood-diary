import style from "./Create.module.css";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header/Header";
import CreateWrapper from "./CreateWrapper";
import InputField from "../../Components/InputField/InputField";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import LoginButton from "../../Components/LoginButton/LoginButton";
import SelectMood from "../../Components/SelectMood/SelectMood";

const Create = (props) => {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const moodInput = useRef();
  const postDateInput = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  const [errorMessage, setErrorMessage] = useState({
    title: "",
    description: "",
    mood: "",
    postDate: "",
  });
  const [inputValidation, setInputValidation] = useState({
    title: false,
    description: false,
    mood: false,
    postDate: false,
  });

  const createPost = () => {
    let title = titleInput.current.value;
    let description = descriptionInput.current.value;
    let mood = moodInput.current.value;
    let postDate = postDateInput.current.value;
    let userEmail = localStorage.getItem("email");
    console.log("CREATE POST!");
    const newDate = new Date(postDate);
    axios.post(
      "http://localhost:8000/api/v1/post",
      {
        title: title,
        description: description,
        mood: mood,
        createdBy: userEmail,
        postDate: newDate.toJSON(),
      },
      { headers: { "x-access-token": "" + token } }
    );

    navigate("/home");
  };

  const createPostHandler = (e) => {
    e.preventDefault();
    let title = titleInput.current.value;
    let description = descriptionInput.current.value;
    let mood = moodInput.current.value;
    console.log("MOOD = ", mood);
    let postDate = postDateInput.current.value;

    if (!title || title.length <= 5) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          title:
            "Title name cannot be empty and and have to be at least 5 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, title: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, title: true };
      });
    }

    if (!description || description.length <= 10) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          description:
            "Description cannot be empty and and have to be at least 10 characters long",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, description: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, description: true };
      });
    }

    if (!postDate) {
      setErrorMessage((prevState) => {
        return {
          ...prevState,
          postDate: "Post date cannot be empty",
        };
      });

      setInputValidation((prevState) => {
        return { ...prevState, postDate: false };
      });
    } else {
      setInputValidation((prevState) => {
        return { ...prevState, postDate: true };
      });
    }

    if (
      inputValidation.title &&
      inputValidation.description &&
      inputValidation.postDate
    ) {
      createPost();
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className={style.createContainer}>
        <CreateWrapper>
          <p className={style.titleMessage}>Create a new post!</p>
          <form onSubmit={createPostHandler}>
            <InputField
              inputType="text"
              inputPlaceholder="Enter title"
              inputRef={titleInput}
            />
            <br />
            <ErrorMessage
              isValid={inputValidation.title}
              message={errorMessage.title}
            />
            <br />
            <InputField
              inputType="text"
              inputPlaceholder="Enter description"
              inputRef={descriptionInput}
            />
            <br />
            <ErrorMessage
              isValid={inputValidation.description}
              message={errorMessage.description}
            />
            <br />
            <SelectMood selectName="mood" selectRef={moodInput} />
            <br />
            <InputField
              inputType="date"
              inputPlaceholder="Enter post date"
              inputRef={postDateInput}
            />
            <br />
            <ErrorMessage
              isValid={inputValidation.postDate}
              message={errorMessage.postDate}
            />
            <div className={style.buttonArea}>
              <LoginButton
                buttonTitle="Go back"
                onClick={() => navigate("/home")}
              />
              <LoginButton buttonTitle="Send" />
            </div>
          </form>
        </CreateWrapper>
      </div>
    </React.Fragment>
  );
};

export default Create;
