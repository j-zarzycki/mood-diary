import axios from 'axios';
import { useState } from 'react';

import style from '../Login/Login.module.css';
import InputField from '../../Components/InputField/InputField';
import LoginWrapper from '../Login/LoginWrapper';
import LoginButton from '../../Components/LoginButton/LoginButton';
import Logo from '../../Components/Logo/Logo';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';

const config = {
  headers: {
    'x-access-token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjFmNjg2MDViMWQwODhhODUwM2ZjMmUxIiwiZW1haWwiOiJicnVja2kxMjNAZ21haWwuY29tIiwiaWF0IjoxNjQzNTY0MTY0LCJleHAiOjE2NDM1NzEzNjR9.OUSeWor1OZv_X4PBQF-CB60WV1QvoGif816uR63Cjhk',
  },
};

const Login = (props) => {
  const [post, setPost] = useState();
  const getPosts = () => {
    
    let resp = axios
      .get('http://localhost:3000/api/v1/post', config)
      .then(data => setPost(data));
    
      console.log(post);
      console.log('----------------------------------------------------');
      console.log(post.data.posts);
    };

  return (
    <div className={style.wrapper}>
      <Logo logo="Feelings Diary." />
      <LoginWrapper>
        <InputField
          inputType="text"
          inputName="login"
          inputPlaceholder="Email"
        />
        <ErrorMessage isvalid={false} message="Please enter email" />
        <InputField
          inputType="password"
          inputName="password"
          inputPlaceholder="Password"
        />
        <ErrorMessage isvalid={true} message="Please enter password" />
        <LoginButton buttonTitle="Sing In" onClick={getPosts} />
        <button onClick={getPosts} />
      </LoginWrapper>
    </div>
  );
};

export default Login;
