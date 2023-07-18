import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Img from '../assets/image/img.png';
import Button from '../components/button/Button';
import { useState } from 'react';
export default function Write() {
  const [img, setImg] = useState('');
  const [user, setUser] = useState('');
  const data = useSelector((state) => {
    return state.post;
  });
  console.log(data.state[0].title);
  const clickHandler = (e) => {
    e.preventDefault();
    const obj = {
      image: img,
      username: user,
      title: data.state[0].title,
      content: data.state[0].value,
    };
    console.log(JSON.stringify(obj));
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
          value={img}
          name="file"
          onChange={(e) => setImg(e.target.value)}
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
