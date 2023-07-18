import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/button/Button';
import arrow from '../assets/image/arrow.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddValue } from '../redux/module/post';

export default function Create() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClikHandler = (e) => {
    e.preventDefault();

    const saveObj = {
      title,
      value,
    };
    dispatch(AddValue(saveObj));
    setTitle('');
    setValue('');
    navigate('/write');
  };
  return (
    <CreateWrap>
      <Grid>
        <Left>
          <LeftTop>
            <DetailInput
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </LeftTop>
          <LeftMid>
            <ReactQuill
              placeholder="당신의 이야기를 적어보세요..."
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </LeftMid>
          <LeftBotom>
            <LeftBotomLeft onClick={() => navigate(-1)}>
              <img src={arrow} alt="rasm" />
              <span>나가기</span>
            </LeftBotomLeft>
            <div>
              <Button onClick={onClikHandler}>출간하기</Button>
            </div>
          </LeftBotom>
        </Left>
        <Right dangerouslySetInnerHTML={{ __html: value }} />
      </Grid>
    </CreateWrap>
  );
}
const CreateWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Right = styled.div`
  background: #d6d6d6;
`;
const Left = styled.div`
  display: grid;
  grid-template-rows: 10% 82% 8%;
`;
const LeftTop = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
`;
const LeftMid = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
`;
const LeftBotom = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  span {
    font-size: 1.125rem;
  }
`;
const LeftBotomLeft = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const DetailInput = styled.input`
  width: '100%';
  outline: none;
  border: none;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
`;
