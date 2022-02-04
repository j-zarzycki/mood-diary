import style from "./Home.module.css";
import MoodCard from "../../Components/MoodCard/MoodCard";
import Header from "../../Components/Header/Header";
import InputField from "../../Components/InputField/InputField";
import Image from "../../Components/Logo/Image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {useNavigate} from 'react-router-dom'

const Home = (props) => {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  const [posts, setPosts] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const getAllPosts = () => {
    axios
      .get("http://localhost:8000/api/v1/post/email/" + userEmail, {
        headers: { "x-access-token": "" + token },
      })
      .then((data) => {
        setPosts(data.data.posts);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={style.searchBar}>
        <InputField inputPlaceholder="Search" onChangeEvent={inputHandler} />
        <button className={style.createButton} onClick={() => navigate('/home/stworz')}>Create</button>
      </div>
      <div className={style.homeContainer}>
        <div className={style.cardContainer}>
          {posts
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.mood.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <MoodCard
                  title={val.title}
                  mood={val.mood}
                  postDate={val.postDate}
                  postId={val._id}
                />
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
