import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Detail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setDetail(res.data.products);
        console.log(detail);
      })
      .then((err) => console.log(err));
  }, []);

  const list = detail?.find((item) => String(item.id) === id);
  console.log(list);
  return (
    <>
      <DetailWrap>
        <DetailHeader>
          <h1>{list?.title}</h1>
          <Detailinfo>
            <p>userName</p>
            <p>dataTime</p>
          </Detailinfo>
        </DetailHeader>
        <Detailimg src={list?.thumbnail} alt="rasm" />
      </DetailWrap>
      <ContentWrap>
        <ContentBody>{list?.description}</ContentBody>
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
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
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
