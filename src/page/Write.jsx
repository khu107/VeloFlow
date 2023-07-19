import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
// import axios from 'axios';
import api from '../axios/api';
import Img from '../assets/image/img.png';

export default function Write() {
  const [img, setImg] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.post;
  });

  const formData = new FormData();
  formData.append('image', img);
  let obj = {
    username: user,
    title: data.state[0].title,
    content: data.state[0].value,
  };
  formData.append(
    'post',
    new Blob([JSON.stringify(obj)], { type: 'application/json' })
  );
  const clickHandler = (e) => {
    e.preventDefault();
    try {
      api
        .post('http://3.35.0.151/api/post', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
    navigate('/');
  };
  return (
    <WriteWrap>
      <ImgContainer>
        <img src={Img} alt="rasm" style={{ width: '200px', height: '200px' }} />
        <label htmlFor="file">
          <WriteInput>썸네일 업로드</WriteInput>
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </ImgContainer>
      <User>
        <UserInput
          value={user}
          type="text"
          placeholder="이름을 입력하세요"
          onChange={(e) => setUser(e.target.value)}
        />
        <Button onClick={clickHandler}>출련하기</Button>
      </User>
    </WriteWrap>
  );
}
const WriteWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  width: 500px;
  height: 300px;
`;
const WriteInput = styled.div`
  padding: 0.25rem 2rem;
  background: white;
  border-radius: 5px;
  color: #20c997;
`;
const User = styled.div`
  margin-top: 20px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const UserInput = styled.input`
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 0.5px solid black;
  font-size: 16px;
  outline: none;
`;
