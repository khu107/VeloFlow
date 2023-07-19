// import axios from 'axios';
import api from '../axios/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Detail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res);
        setDetail(res.data);
      })
      .then((err) => console.log(err));
  }, []);

  const list = detail?.find((item) => String(item.id) === id);

  return (
    <>
      <DetailWrap>
        <DetailHeader>
          <h1>{list?.title}</h1>
          <Detailinfo>
            <p>{list?.username}</p>
            <p>{list?.createdAt.substr(0, 10)}</p>
          </Detailinfo>
        </DetailHeader>
        <Detailimg src={list?.imageUrl} alt="rasm" />
      </DetailWrap>
      <ContentWrap>
        <ContentBody dangerouslySetInnerHTML={{ __html: list?.content }} />
      </ContentWrap>
    </>
  );
}

const DetailWrap = styled.div`
  margin-top: 5.5rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;
const DetailHeader = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    margin-top: 0px;
    font-weight: 800;
    color: black;
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in 0s;
  }
`;
const Detailinfo = styled.div`
  align-items: center;
  font-size: 1rem;
  color: black;
  display: flex;
  gap: 20px;
`;
const Detailimg = styled.img`
  width: auto;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
  width: 100%;
`;
const ContentWrap = styled.div`
  width: 768px;
  margin: 4rem auto 0px;
`;
const ContentBody = styled.div`
  font-size: 1.125rem;
  color: black;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
