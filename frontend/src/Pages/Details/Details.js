import style from "./Details.module.css";
import MoodCard from "../../Components/MoodCard/MoodCard";
import Header from "../../Components/Header/Header";
import InputField from "../../Components/InputField/InputField";
import DetailsWrapper from "./DetailsWrapper";
import DetailsOptions from "./DetailsOptions";
import LoginButton from "../../Components/LoginButton/LoginButton";
import SelectMood from '../../Components/SelectMood/SelectMood';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Details = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [date, setDate] = useState();
  const [post, setPost] = useState([{}]);
  const token = localStorage.getItem("jwt");
  const params = useParams();
  const navigate = useNavigate();
  let newDate;
  const isDisabledHandler = () => {
    setIsDisabled(!isDisabled);
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const updateDate = () => {
    newDate = post.postDate;
    console.log(newDate.split("T"));
    setDate(formatDate(newDate[0]));
  };

  const getPost = () => {
    axios
      .get("http://localhost:8000/api/v1/post/" + params.id, {
        headers: { "x-access-token": "" + token },
      })
      .then((data) => {
        setPost(data.data.post);
      });
  };

  const updatePost = () => {
    axios.patch(
      "http://localhost:8000/api/v1/post/" + params.id,
      {
        title: post.title,
        description: post.description,
        mood: post.mood,
        createdBy: post.createdBy,
        postDate: new Date("2022-02-04").toJSON(),
      },
      {
        headers: { "x-access-token": "" + token },
      }
    );

    navigate("/home");
  };

  const deletePost = () => {
    axios.delete("http://localhost:8000/api/v1/post/" + params.id, {
      headers: { "x-access-token": "" + token },
    });

    navigate("/home");
  };

  const stateHandler = (event) => {
    if (event.target.name == "title") {
      setPost((prevState) => {
        return { ...prevState, title: event.target.value };
      });
    }
    if (event.target.name == "description") {
      setPost((prevState) => {
        return { ...prevState, description: event.target.value };
      });
    }
    if (event.target.name == "mood") {
      setPost((prevState) => {
        return { ...prevState, mood: event.target.value };
      });
    }
    if (event.target.name == "postDate") {
      setDate(formatDate(event.target.value));
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={style.detailsContainer}>
        <DetailsWrapper>
          <DetailsOptions
            editHandler={isDisabledHandler}
            deleteHandler={deletePost}
          />
          <h7>Title</h7><InputField
            inputPlaceholder="Title"
            isDisabled={isDisabled}
            inputValue={post.title}
            inputName="title"
            onChangeEvent={stateHandler}
          />
          <h7>Day description</h7><InputField
            inputPlaceholder="Description"
            isDisabled={isDisabled}
            inputValue={post.description}
            inputName="description"
            onChangeEvent={stateHandler}
          />
          <h7>Mood</h7><SelectMood 
          selectValue="terrible" 
          isDisabled={isDisabled}
          selectValue={post.mood} 
          selectName="mood"
          onChangeEvent={stateHandler}/>
          <h7>Date</h7><InputField
            inputPlaceholder="Post date"
            inputType="date"
            isDisabled={isDisabled}
            inputValue="2022-02-04"
            inputName="postDate"
            onChangeEvent={stateHandler}
          />
          {!isDisabled && (
            <LoginButton buttonTitle="Update" onClick={updatePost} />
          )}
        </DetailsWrapper>
      </div>
    </React.Fragment>
  );
};

export default Details;
